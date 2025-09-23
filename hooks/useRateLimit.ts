"use client";
import { useState, useEffect, useCallback } from 'react';

interface RateLimitData {
  messageCount: number;
  lastResetTime: number;
  isBlocked: boolean;
  blockUntil?: number;
}

const RATE_LIMIT_KEY = 'messageRateLimit';
const MAX_MESSAGES = 3;
const BLOCK_DURATION_HOURS = 6; // 2 hours block
const RESET_WINDOW_HOURS = 24; // 24 hours window

export const useRateLimit = () => {
  const [rateLimitData, setRateLimitData] = useState<RateLimitData>({
    messageCount: 0,
    lastResetTime: Date.now(),
    isBlocked: false,
  });

  // Load rate limit data from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      if (stored) {
        try {
          const data: RateLimitData = JSON.parse(stored);
          const now = Date.now();
          
          // Check if we need to reset the window (24 hours passed)
          const hoursSinceReset = (now - data.lastResetTime) / (1000 * 60 * 60);
          
          if (hoursSinceReset >= RESET_WINDOW_HOURS) {
            // Reset the window
            const newData: RateLimitData = {
              messageCount: 0,
              lastResetTime: now,
              isBlocked: false,
            };
            setRateLimitData(newData);
            localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
          } else {
            // Check if block period has expired
            if (data.isBlocked && data.blockUntil && now >= data.blockUntil) {
              const newData: RateLimitData = {
                messageCount: 0,
                lastResetTime: now,
                isBlocked: false,
              };
              setRateLimitData(newData);
              localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
            } else {
              setRateLimitData(data);
            }
          }
        } catch (error) {
          console.error('Error parsing rate limit data:', error);
          // Reset to default if parsing fails
          const defaultData: RateLimitData = {
            messageCount: 0,
            lastResetTime: Date.now(),
            isBlocked: false,
          };
          setRateLimitData(defaultData);
          localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(defaultData));
        }
      }
    }
  }, []);

  const canSendMessage = useCallback(() => {
    const now = Date.now();
    
    // Check if currently blocked
    if (rateLimitData.isBlocked && rateLimitData.blockUntil) {
      if (now < rateLimitData.blockUntil) {
        return false;
      } else {
        // Block period expired, reset
        const newData: RateLimitData = {
          messageCount: 0,
          lastResetTime: now,
          isBlocked: false,
        };
        setRateLimitData(newData);
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
        return true;
      }
    }

    // Check if within message limit
    return rateLimitData.messageCount < MAX_MESSAGES;
  }, [rateLimitData]);

  const getFriendlyStatus = useCallback(() => {
    const remaining = getRemainingMessages();
    const now = Date.now();
    
    if (rateLimitData.isBlocked && rateLimitData.blockUntil && now < rateLimitData.blockUntil) {
      return {
        type: 'blocked',
        message: 'Gracias por tu interés. Para mantener la calidad del servicio, puedes enviar tu siguiente mensaje en:',
        timeRemaining: getTimeUntilUnblock(),
      };
    }
    
    if (remaining === 0) {
      return {
        type: 'limit_reached',
        message: '¡Gracias por contactarnos! Has utilizado tus 3 mensajes de hoy.',
        timeRemaining: 0,
      };
    }
    
    if (remaining === 1) {
      return {
        type: 'warning',
        message: 'Te queda 1 mensaje más para hoy. ¡Úsalo sabiamente!',
        timeRemaining: 0,
      };
    }
    
    if (remaining === 2) {
      return {
        type: 'info',
        message: `Te quedan ${remaining} mensajes para hoy.`,
        timeRemaining: 0,
      };
    }
    
    return {
      type: 'normal',
      message: '',
      timeRemaining: 0,
    };
  }, [rateLimitData]);

  const recordMessage = useCallback(() => {
    const now = Date.now();
    const newCount = rateLimitData.messageCount + 1;
    
    let newData: RateLimitData;
    
    if (newCount >= MAX_MESSAGES) {
      // Block the user
      newData = {
        messageCount: newCount,
        lastResetTime: rateLimitData.lastResetTime,
        isBlocked: true,
        blockUntil: now + (BLOCK_DURATION_HOURS * 60 * 60 * 1000),
      };
    } else {
      newData = {
        messageCount: newCount,
        lastResetTime: rateLimitData.lastResetTime,
        isBlocked: false,
      };
    }
    
    setRateLimitData(newData);
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
  }, [rateLimitData]);

  const getTimeUntilUnblock = useCallback(() => {
    if (!rateLimitData.isBlocked || !rateLimitData.blockUntil) {
      return 0;
    }
    
    const now = Date.now();
    const timeLeft = rateLimitData.blockUntil - now;
    return Math.max(0, timeLeft);
  }, [rateLimitData]);

  const getRemainingMessages = useCallback(() => {
    return Math.max(0, MAX_MESSAGES - rateLimitData.messageCount);
  }, [rateLimitData]);

  return {
    canSendMessage: canSendMessage(),
    recordMessage,
    getTimeUntilUnblock,
    getRemainingMessages,
    getFriendlyStatus,
    isBlocked: rateLimitData.isBlocked,
    messageCount: rateLimitData.messageCount,
  };
};

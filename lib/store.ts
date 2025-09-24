import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Part {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
}

interface QuotePart {
  part: Part;
  quantity: number;
}

interface QuoteState {
  shoppingCart: QuotePart[];
  addPart: (part: Part, quantity?: number) => void;
  removePart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearParts: () => void;
}

const useQuoteStore = create<QuoteState>()(
  persist(
    (set) => ({
      shoppingCart: [],

      addPart: (part, quantity = 1) =>
        set((state) => {
          const existing = state.shoppingCart.find(
            (item) => item.part.id === part.id
          );
          if (existing) {
            return {
              shoppingCart: state.shoppingCart.map((item) =>
                item.part.id === part.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return {
            shoppingCart: [...state.shoppingCart, { part, quantity }],
          };
        }),

      removePart: (id) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.filter(
            (item) => item.part.id !== id
          ),
        })),

      updateQuantity: (id, quantity) =>
        set((state) => ({
          shoppingCart: state.shoppingCart.map((item) =>
            item.part.id === id ? { ...item, quantity } : item
          ),
        })),

      clearParts: () => set({ shoppingCart: [] }),
    }),
    {
      name: "quote-storage", // clave en localStorage
    }
  )
);

export default useQuoteStore;

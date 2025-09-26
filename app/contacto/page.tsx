"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useRateLimit } from "@/hooks/useRateLimit";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LoaderCircle } from "lucide-react";

export default function Contacto() {
  const {
    canSendMessage,
    recordMessage,
    getTimeUntilUnblock,
    getRemainingMessages,
    getFriendlyStatus,
    isBlocked
  } = useRateLimit();

  const [isLoading, setIsLoading] = useState(false);
  const [timeUntilUnblock, setTimeUntilUnblock] = useState(0);
  const [friendlyStatus, setFriendlyStatus] = useState(getFriendlyStatus());

  // Update countdown timer and friendly status
  useEffect(() => {
    const updateStatus = () => {
      const timeLeft = getTimeUntilUnblock();
      setTimeUntilUnblock(timeLeft);
      setFriendlyStatus(getFriendlyStatus());
    };

    updateStatus(); // Initial update

    // Update every second when blocked, or every 30 seconds when not blocked
    const interval = setInterval(updateStatus, isBlocked ? 1000 : 30000);

    return () => clearInterval(interval);
  }, [isBlocked, getTimeUntilUnblock, getFriendlyStatus]);

  const [error, setError] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });

  const handleSubmit = () => {
    // Check rate limit first
    if (!canSendMessage) {
      const status = getFriendlyStatus();
      setError({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: status.message,
        subject: "",
      });
      return;
    }

    setIsLoading(true);
    const newError = {
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      subject: "",
    };

    if (formData.name.trim() === "") {
      newError.name = "El nombre es requerido";
    }
    if (formData.company.trim() === "") {
      newError.company = "La empresa es requerida";
    }
    if (formData.email.trim() === "") {
      newError.email = "El email es requerido";
    } else if (!formData.email.includes("@")) {
      newError.email = "El email no es válido, debe contener un @";
    }
    if (formData.phone.trim() === "") {
      newError.phone = "El teléfono es requerido";
    }
    if (formData.message.trim() === "") {
      newError.message = "El mensaje es requerido";
    }
    if (formData.subject.trim() === "") {
      newError.subject = "El tipo de consulta es requerido";
    }
    if (Object.values(newError).some((value) => value !== "")) {
      setIsLoading(false);
      setError(newError);
      console.log(newError);
      return;
    }

    // Record the message in rate limit
    recordMessage();

    setInterval(() => {
      setIsLoading(false);
    }, 3000);
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setError({ ...error, [e.target.id]: "" });
  };

  const errorFieldStyle = "text-destructive border-destructive";
  const errorLabelStyle = "text-destructive";

  // Helper function to format time remaining
  const formatTimeRemaining = (milliseconds: number) => {
    const hours = Math.floor(milliseconds / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  return (
    <main className="flex flex-col gap-4 max-w-xl mx-auto p-4 py-28">
      <h3 className="text-2xl font-bold">Estamos listos para asesorarlo</h3>
      <p className="text-muted-foreground">Comparta con nosotros su necesidad y reciba una respuesta rápida de nuestro equipo especializado.</p>

      {/* Friendly rate limit status */}
      {friendlyStatus.message && (
        <div className={`rounded-lg p-4 border ${friendlyStatus.type === 'blocked'
          ? 'bg-amber-50 border-amber-200'
          : friendlyStatus.type === 'limit_reached'
            ? 'bg-green-50 border-green-200'
            : friendlyStatus.type === 'warning'
              ? 'bg-yellow-50 border-yellow-200'
              : 'bg-blue-50 border-blue-200'
          }`}>
          <p className="text-sm font-medium text-amber-700">{friendlyStatus.message}</p>
          {friendlyStatus.timeRemaining > 0 && (
            <p className={`text-sm font-medium mt-1 ${friendlyStatus.type === 'blocked' ? 'text-amber-700' : 'text-blue-700'
              }`}>
              {formatTimeRemaining(friendlyStatus.timeRemaining)}
            </p>
          )}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className={`${error.name ? errorLabelStyle : ""} after:-translate-x-1.5 after:text-destructive after:content-['*']`}>Nombre</Label>
          <Input value={formData.name} onChange={handleChange} className={error.name ? errorFieldStyle : "bg-background"} type="text" id="name" placeholder="Nombre" />
          {
            error.name && <p className="text-destructive text-xs">{error.name}</p>
          }
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company" className={`${error.company ? errorLabelStyle : ""} after:-translate-x-1.5 after:text-destructive after:content-['*']`}>Empresa</Label>
          <Input value={formData.company} onChange={handleChange} className={error.company ? errorFieldStyle : "bg-background"} type="text" id="company" placeholder="Empresa" />
          {
            error.company && <p className="text-destructive text-xs">{error.company}</p>
          }
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className={`${error.email ? errorLabelStyle : ""} after:-translate-x-1.5 after:text-destructive after:content-['*']`}>Email</Label>
          <Input value={formData.email} onChange={handleChange} className={error.email ? errorFieldStyle : "bg-background"} type="email" id="email" placeholder="Email" />
          {
            error.email && <p className="text-destructive text-xs">{error.email}</p>
          }
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone" className={`${error.phone ? errorLabelStyle : ""} after:-translate-x-1.5 after:text-destructive after:content-['*']`}>Teléfono</Label>
          <Input value={formData.phone} onChange={handleChange} className={error.phone ? errorFieldStyle : "bg-background"} type="tel" id="phone" placeholder="Teléfono" />
          {
            error.phone && <p className="text-destructive text-xs">{error.phone}</p>
          }
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="subject" className={`${error.subject ? errorLabelStyle : ""} after:-translate-x-1.5 after:text-destructive after:content-['*']`}>Tipo de consulta</Label>
        <Select value={formData.subject} onValueChange={(value) => { setFormData({ ...formData, subject: value }); setError({ ...error, subject: "" }) }
        }>
          <SelectTrigger className={`${error.subject ? errorFieldStyle : ""} w-full`}>
            <SelectValue placeholder="Seleccione un tipo de consulta" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="consulta_general">Consulta general</SelectItem>
            <SelectItem value="solicitud_cotizacion">Solicitud de cotización</SelectItem>
            <SelectItem value="servicio_tecnico">Servicio técnico</SelectItem>
            <SelectItem value="informacion_comercial">Información comercial</SelectItem>
            <SelectItem value="otro">Otro</SelectItem>
          </SelectContent>
        </Select>
        {
          error.subject && <p className="text-destructive text-xs">{error.subject}</p>
        }
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className={`${error.message ? errorLabelStyle : ""} after:-translate-x-1.5 after:text-destructive after:content-['*']`}>Mensaje</Label>
        <Textarea value={formData.message} onChange={handleChange} className={error.message ? errorFieldStyle : "h-full resize-none max-h-80 bg-background"} id="message" placeholder="Escribe tu mensaje aquí." />
        {
          error.message && <p className="text-destructive text-xs">{error.message}</p>
        }
      </div>
      <Button
        className={`${!canSendMessage
          ? "bg-muted text-muted-foreground cursor-not-allowed"
          : "bg-primary hover:bg-primary/90"
          } transition-all`}
        onClick={handleSubmit}
        disabled={isLoading || !canSendMessage}
      >
        {isLoading
          ? <LoaderCircle className="size-4 animate-spin" />
          : !canSendMessage
            ? "Intenta luego"
            : "Enviar mensaje"
        }
      </Button>
    </main >
  );
}

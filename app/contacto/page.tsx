import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contacto() {
  return (
    <main className="flex flex-col gap-4 max-w-3xl mx-auto p-4 py-28">
      <h3 className="text-2xl font-bold">Estamos listos para asesorarlo</h3>
      <p className="text-muted-foreground">Comparta con nosotros su necesidad y reciba una respuesta rápida de nuestro equipo especializado.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input className="bg-background" type="text" id="name" placeholder="Nombre" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="company">Empresa</Label>
          <Input className="bg-background" type="text" id="company" placeholder="Empresa" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input className="bg-background" type="email" id="email" placeholder="Email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Teléfono</Label>
          <Input className="bg-background" type="tel" id="phone" placeholder="Teléfono" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea className="h-full resize-none max-h-80 bg-background" id="message" placeholder="Escribe tu mensaje aquí." />
      </div>
      <Button className="bg-primary">Enviar</Button>
    </main >
  );
}

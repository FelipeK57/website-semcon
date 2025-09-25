"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import useQuoteStore from "@/lib/store";
import { ShoppingCart, Trash2, Plus, Minus, Package, DollarSign, Send, Check } from "lucide-react";
import Link from "next/link";

export default function Cotizacion() {
    const {
        shoppingCart,
        removePart,
        updateQuantity,
        clearParts
    } = useQuoteStore();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        mensaje: "",
        urgencia: "normal"
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectChange = (value: string) => {
        setFormData(prev => ({
            ...prev,
            urgencia: value
        }));
    };

    const handleQuantityChange = (partId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removePart(partId);
        } else {
            updateQuantity(partId, newQuantity);
        }
    };

    const calculateTotal = () => {
        return shoppingCart.reduce((total, item) => {
            const price = item.part.price || 0;
            return total + (price * item.quantity);
        }, 0);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aquí se enviaría la cotización
        console.log("Cotización enviada:", { formData, shoppingCart });
        clearParts();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <main className="flex flex-col py-28 px-4 max-w-6xl gap-2 w-full mx-auto">
                <h2 className="text-2xl font-bold">Solicitud de cotización</h2>
                <p className="text-muted-foreground">Gestione sus solicitudes de cotización de forma sencilla y eficiente.</p>
                <section className="flex flex-col items-center justify-center py-28 gap-4">
                    <Check className="size-24 text-green-600" />
                    <h2 className="text-2xl font-bold">Solicitud de cotización enviada</h2>
                    <p className="text-muted-foreground">
                        Nos pondremos en contacto contigo lo antes posible.
                    </p>
                    <Link href="/productos">
                        <Button>Ver catálogo</Button>
                    </Link>
                </section>
            </main>
        );
    }

    if (shoppingCart.length === 0) {
        return (
            <main className="flex flex-col py-28 px-4 max-w-6xl gap-2 w-full mx-auto">
                <h2 className="text-2xl font-bold">Solicitud de cotización</h2>
                <p className="text-muted-foreground">Gestione sus solicitudes de cotización de forma sencilla y eficiente.</p>
                <section className="flex flex-col items-center justify-center py-28 gap-4">
                    <ShoppingCart className="size-24 text-muted-foreground" />
                    <h3 className="text-lg font-semibold text-center">Su cotización está vacía</h3>
                    <p className="text-muted-foreground max-w-lg text-center">
                        Agregue productos desde nuestro catálogo para solicitar una cotización personalizada.
                    </p>
                    <Link href="/productos">
                        <Button>Ver catálogo</Button>
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="flex flex-col py-28 px-4 max-w-6xl gap-8 w-full mx-auto">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Solicitud de cotización</h2>
                <p className="text-muted-foreground">
                    Revise los productos seleccionados y complete sus datos para recibir una cotización personalizada.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Carrito de productos - Lado izquierdo */}
                <section className="lg:w-2/3 w-full space-y-6">
                    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-between lg:items-center">
                        <h3 className="text-xl font-semibold">Productos seleccionados ({shoppingCart.length})</h3>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={clearParts}
                            className="text-red-600 hover:text-red-700 w-fit ml-auto lg:ml-0"
                        >
                            <Trash2 className="h-4 w-4 mr-2" />
                            Limpiar todo
                        </Button>
                    </div>

                    <div className="space-y-4">
                        {shoppingCart.map((item) => (
                            <Card key={item.part.id} className="flex flex-col">
                                <CardHeader className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <Badge variant="outline">{item.part.category}</Badge>
                                            <CardTitle className="text-lg">{item.part.name}</CardTitle>
                                            <CardDescription>
                                                {item.part.brand} • {item.part.category}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>

                                <CardContent className="flex flex-col gap-4">
                                    <div className="flex-1">
                                        <p className="text-sm text-muted-foreground mb-2 max-w-lg">{item.part.description}</p>
                                    </div>
                                    <div className="flex items-center gap-4 justify-end">
                                        {/* Controles de cantidad */}
                                        <div className="flex items-center gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleQuantityChange(item.part.id, item.quantity - 1)}
                                                disabled={item.quantity <= 1}
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <span className="w-12 text-center font-medium">
                                                {item.quantity}
                                            </span>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => handleQuantityChange(item.part.id, item.quantity + 1)}
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>

                                        {/* Botón eliminar */}
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => removePart(item.part.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Formulario de contacto - Lado derecho */}
                <section className="lg:w-1/3 w-full h-fit lg:sticky lg:top-20">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Send className="h-5 w-5" />
                                Solicitar cotización
                            </CardTitle>
                            <CardDescription>
                                Complete sus datos para recibir una cotización personalizada
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="nombre">Nombre completo *</Label>
                                    <Input
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        placeholder="Su nombre completo"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="empresa">Empresa</Label>
                                    <Input
                                        id="empresa"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleInputChange}
                                        placeholder="Nombre de su empresa"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Correo electrónico *</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="su@email.com"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="telefono">Teléfono</Label>
                                    <Input
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleInputChange}
                                        placeholder="+1 (555) 123-4567"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="mensaje">Mensaje adicional</Label>
                                    <Textarea
                                        id="mensaje"
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleInputChange}
                                        placeholder="Especifique requisitos especiales, fechas de entrega, condiciones de pago, etc."
                                        rows={4}
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg">
                                    <Send className="h-4 w-4 mr-2" />
                                    Enviar cotización
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
}

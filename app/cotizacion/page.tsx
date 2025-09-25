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
import { ShoppingCart, Trash2, Plus, Minus, Package, DollarSign, Send, Check, LoaderCircle } from "lucide-react";
import Link from "next/link";

export default function Cotizacion() {
    const {
        shoppingCart,
        removePart,
        updateQuantity,
        clearParts
    } = useQuoteStore();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
    });

    const errorFieldStyle = "text-destructive border-destructive";
    const errorLabelStyle = "text-destructive";

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError({ ...error, [name]: "" });
    }

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
        setIsLoading(true);
        const newError = {
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
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
        if (Object.values(newError).some((value) => value !== "")) {
            setIsLoading(false);
            setError(newError);
            console.log(newError);
            return;
        }
        // Aquí se enviaría la cotización
        console.log("Cotización enviada:", { formData, shoppingCart });
        clearParts();
        setIsSubmitted(true);
        setIsLoading(false);
    };

    if (isSubmitted) {
        return (
            <main className="flex flex-col py-28 px-4 max-w-6xl gap-2 w-full mx-auto">
                <h2 className="text-2xl font-bold">Solicitud de cotización</h2>
                <p className="text-muted-foreground">Gestione sus solicitudes de cotización de forma sencilla y eficiente.</p>
                <section className="flex flex-col items-center justify-center py-28 gap-4">
                    <Check className="size-24 text-green-600" />
                    <h2 className="text-2xl font-bold text-center">Solicitud de cotización enviada</h2>
                    <p className="text-muted-foreground text-center">
                        Nos pondremos en contacto contigo lo antes posible.
                    </p>
                    <Link href="/productos">
                        <Button>Volver al catálogo</Button>
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
                            <div key={item.part.id} className="flex flex-row gap-4 border rounded-lg p-4">
                                <div className="w-24 aspect-square bg-accent rounded-lg border hidden md:block"></div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <Badge variant="outline">{item.part.category}</Badge>
                                            <CardTitle className="text-base lg:text-lg">{item.part.name}</CardTitle>
                                            <CardDescription className="text-sm lg:text-base">
                                                {item.part.brand} • {item.part.category}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col items-end justify-between gap-4">
                                    {/* Botón eliminar */}
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => removePart(item.part.id)}
                                        className="text-red-600 hover:text-red-700 w-fit"
                                    >
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
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
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Formulario de contacto - Lado derecho */}
                <section className="lg:w-1/3 w-full h-fit lg:sticky lg:top-20 lg:max-h-[calc(100vh-8rem)] lg:overflow-auto">
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
                                    <Label htmlFor="name" className={error.name ? errorLabelStyle : ""}>Nombre completo</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Nombre"
                                        className={error.name ? errorFieldStyle : ""}
                                    />
                                    {error.name && (
                                        <p className="text-destructive text-xs">{error.name}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="company" className={error.company ? errorLabelStyle : ""}>Empresa</Label>
                                    <Input
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        placeholder="Empresa"
                                        className={error.company ? errorFieldStyle : ""}
                                    />
                                    {error.company && (
                                        <p className="text-destructive text-xs">{error.company}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className={error.email ? errorLabelStyle : ""}>Correo electrónico</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Correo electrónico"
                                        className={error.email ? errorFieldStyle : ""}
                                    />
                                    {error.email && (
                                        <p className="text-destructive text-xs">{error.email}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone" className={error.phone ? errorLabelStyle : ""}>Teléfono</Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Teléfono"
                                        className={error.phone ? errorFieldStyle : ""}
                                    />
                                    {error.phone && (
                                        <p className="text-destructive text-xs">{error.phone}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message" className={error.message ? errorLabelStyle : ""}>Mensaje adicional</Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Escribe tu mensaje aquí."
                                        rows={4}
                                        className={error.message ? errorFieldStyle : ""}
                                    />
                                    {error.message && (
                                        <p className="text-destructive text-xs">{error.message}</p>
                                    )}
                                </div>

                                <Button type="submit" className={`${isLoading ? "bg-muted text-muted-foreground cursor-not-allowed" : "bg-primary hover:bg-primary/90"} transition-all w-full cursor-pointer`} size="lg" disabled={isLoading}>
                                    {isLoading
                                        ? <LoaderCircle className="size-4 animate-spin" />
                                        : <>
                                            <Send className="h-4 w-4 mr-2" />
                                            Enviar cotización
                                        </>
                                    }
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
}

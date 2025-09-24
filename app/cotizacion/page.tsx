"use client";
import { Button } from "@/components/ui/button";
import useQuoteStore from "@/lib/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
export default function Cotizacion() {
    const { shoppingCart } = useQuoteStore();

    if (shoppingCart.length === 0) {
        return <main className="flex flex-col py-28 px-4 max-w-6xl w-full mx-auto">
            <h2 className="text-2xl font-bold">Solicitud de cotización</h2>
            <p className="text-muted-foreground">Gestione sus solicitudes de cotización de forma sencilla y eficiente.</p>
            <section className="flex flex-col items-center justify-center py-28 gap-4">
                <ShoppingCart className="size-24 text-muted-foreground" />
                <h3 className="text-lg font-semibold text-center">Su cotización está vacía
                </h3>
                <p className="text-muted-foreground max-w-lg text-center">Agregue productos desde nuestro catálogo para solicitar una cotización personalizada.</p>
                <Link href="/productos">
                    <Button>Ver catálogo</Button>
                </Link>
            </section>
        </main>
    }

    return (
        <main className="flex flex-col py-28 px-4 max-w-6xl w-full mx-auto">
            <h2 className="text-2xl font-bold">Solicitud de cotización</h2>
            <p className="text-muted-foreground">Gestione sus solicitudes de cotización de forma sencilla y eficiente.</p>
        </main>
    )
}
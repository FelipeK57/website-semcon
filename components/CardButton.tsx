"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import useQuoteStore from "@/lib/store";
import Link from "next/link";

export default function CardButton() {
    const { shoppingCart } = useQuoteStore();

    if (shoppingCart.length === 0) return null;

    return <div className="fixed right-4 bottom-4 z-10 lg:hidden">
        <Link href="/cotizacion">
            <Button size="lg">
                <ShoppingCart />
                Cotización
            </Button>
        </Link>
        <span className="absolute grid place-content-center -top-1 -right-1 bg-destructive text-primary-foreground rounded-full size-5 text-xs z-10">{shoppingCart.length}</span>
        <span className="absolute grid place-content-center -top-1 -right-1 bg-destructive text-primary-foreground rounded-full size-5 text-xs animate-ping"></span>
    </div>
}
"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import useQuoteStore, { Part } from "@/lib/store"

interface ProductoClientProps {
    product: Part
}

export default function ProductoClient({ product }: ProductoClientProps) {
    const { addPart, shoppingCart } = useQuoteStore()

    const isPartInCart = (partId: string) => {
        return shoppingCart.some(item => item.part.id === partId);
    };

    const handleAddToCart = () => {
        if (product) {
            addPart(product, 1)
        }
    }

    return (
        <div className="flex flex-col mx-auto max-w-6xl gap-6 px-4 py-18">
            <Link href="/productos">
                <Button variant="link" className="w-fit mt-4">
                    <ArrowLeft className="size-4" />
                    Volver
                </Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Imagen del producto */}
                <div className="aspect-square bg-muted rounded-lg border"></div>

                {/* Información del producto */}
                <div className="flex flex-col space-y-4">
                    <Badge variant="outline" className="bg-background">
                        {product.category}
                    </Badge>
                    {product.brand && (
                        <p className="text-muted-foreground">
                            Marca: <span className="font-semibold text-foreground">{product.brand}</span>
                        </p>
                    )}
                    <h1 className="text-xl font-bold">{product.name}</h1>
                    <p className="text-base text-muted-foreground">{product.description}</p>
                    <Button
                        onClick={handleAddToCart}
                        disabled={isPartInCart(product.id)}
                        className="w-fit cursor-pointer"
                        size="lg"
                        variant={isPartInCart(product.id) ? "secondary" : "default"}
                    >
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        {isPartInCart(product.id) ? 'En cotización' : 'Cotizar'}
                    </Button>
                </div>
            </div>
        </div>
    )
}

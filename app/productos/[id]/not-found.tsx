import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center mx-auto px-4 py-28">
            <h1 className="text-2xl font-bold text-center">Producto no encontrado</h1>
            <p className="text-center text-muted-foreground mt-4">
                El producto que buscas no existe o ha sido eliminado.
            </p>
            <Link href="/productos">
                <Button className="w-fit mt-4">Volver a la página de productos</Button>
            </Link>
        </div>
    )
}

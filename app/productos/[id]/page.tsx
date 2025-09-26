import { Part } from "@/lib/store"
import { notFound } from "next/navigation"
import { getPartById } from "@/lib/server-utils"
import ProductoClient from "./ProductoClient"

export default async function ProductoPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params
    const product: Part | undefined = getPartById(id)

    if (!product) {
        notFound()
    }

    return <ProductoClient product={product} />
}
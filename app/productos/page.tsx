"use client";

import { useState, useMemo } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Package, DollarSign, Zap } from "lucide-react";
import useQuoteStore from "@/lib/store";

interface Part {
    id: string;
    name: string;
    description: string;
    category: string;
    image: string;
    brand?: string;
    price?: number;
    stock?: number;
    specifications?: Record<string, any>;
}

export default function Productos() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

    const {
        getAllParts,
        getAllCategories,
        getAllBrands,
        getPartsByCategory,
        getPartsByBrand,
        searchParts,
        addPart,
        shoppingCart
    } = useQuoteStore();

    const allParts = getAllParts();
    const categories = getAllCategories();
    const brands = getAllBrands();

    // Filtrar productos basado en búsqueda, categoría y marca
    const filteredParts = useMemo(() => {
        let parts = allParts;

        if (searchQuery) {
            parts = searchParts(searchQuery);
        }

        if (selectedCategory) {
            parts = parts.filter(part => part.category === selectedCategory);
        }

        if (selectedBrand) {
            parts = parts.filter(part => part.brand === selectedBrand);
        }

        return parts;
    }, [allParts, searchQuery, selectedCategory, selectedBrand, searchParts]);

    const handleAddToCart = (part: Part) => {
        addPart(part, 1);
    };

    // Función para verificar si una parte ya está en el carrito
    const isPartInCart = (partId: string) => {
        return shoppingCart.some(item => item.part.id === partId);
    };

    const handleCategoryClick = (categoryName: string) => {
        setSelectedCategory(selectedCategory === categoryName ? null : categoryName);
        // setSelectedBrand(null); // Reset brand when category changes
    };

    const handleBrandClick = (brandName: string) => {
        setSelectedBrand(selectedBrand === brandName ? null : brandName);
    };

    const clearFilters = () => {
        setSelectedCategory(null);
        setSelectedBrand(null);
        setSearchQuery("");
    };

    return (
        <main className="flex flex-col py-28 px-4 max-w-6xl gap-8 w-full mx-auto">
            <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Catálogo de productos</h2>
                <p className="text-muted-foreground max-w-lg">
                    Explora nuestra amplia gama de productos para encontrar la solución perfecta para tu negocio.
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Filtros laterales */}
                <section className="md:max-w-xs w-full h-fit space-y-6 md:sticky md:top-20 md:max-h-[calc(100vh-8rem)] md:overflow-auto">
                    {/* Búsqueda */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Buscar</h3>
                        <Input
                            placeholder="Buscar producto..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Filtros activos */}
                    {(selectedCategory || selectedBrand || searchQuery) && (
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Filtros activos</h3>
                            <div className="flex flex-wrap gap-2">
                                {selectedCategory && (
                                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedCategory(null)}>
                                        {selectedCategory} ×
                                    </Badge>
                                )}
                                {selectedBrand && (
                                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSelectedBrand(null)}>
                                        {selectedBrand} ×
                                    </Badge>
                                )}
                                {searchQuery && (
                                    <Badge variant="secondary" className="cursor-pointer" onClick={() => setSearchQuery("")}>
                                        "{searchQuery}" ×
                                    </Badge>
                                )}
                            </div>
                            <Button variant="outline" className="cursor-pointer" size="sm" onClick={clearFilters}>
                                Limpiar filtros
                            </Button>
                        </div>
                    )}

                    {/* Categorías */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Categorías</h3>
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={selectedCategory === category.name ? "default" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    {category.name}
                                    <Badge variant="secondary" className="ml-auto">
                                        {getPartsByCategory(category.name).length}
                                    </Badge>
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Marcas */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">Marcas</h3>
                        <div className="space-y-1">
                            {brands.map((brand) => (
                                <Button
                                    key={brand.id}
                                    variant={selectedBrand === brand.name ? "default" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => handleBrandClick(brand.name)}
                                >
                                    {brand.name}
                                    <Badge variant="secondary" className="ml-auto">
                                        {getPartsByBrand(brand.name).length}
                                    </Badge>
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Lista de productos */}
                <section className="flex-1">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-semibold">
                            Productos ({filteredParts.length})
                        </h3>
                    </div>

                    {filteredParts.length === 0 ? (
                        <div className="text-center py-12">
                            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
                            <h3 className="mt-2 text-sm font-semibold text-gray-900">No se encontraron productos</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Intenta ajustar los filtros o términos de búsqueda.
                            </p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredParts.map((part) => (
                                <Card key={part.id} className="flex flex-col py-3 gap-2">
                                    <CardHeader className="flex-1 px-3">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-2 w-full">
                                                <div className="relative">
                                                    <Badge variant="outline" className="absolute top-2 left-2 bg-background">{part.category}</Badge>
                                                    <div className="w-full aspect-square border rounded-lg bg-accent"></div>
                                                </div>
                                                <CardTitle className="text-base ml-1">{part.name}</CardTitle>
                                                <CardDescription className="text-xs ml-1">
                                                    {part.brand}
                                                </CardDescription>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardFooter className="flex flex-col space-y-2 px-3">
                                        <Button
                                            className="w-full cursor-pointer"
                                            onClick={() => handleAddToCart(part)}
                                            disabled={part.stock === 0 || isPartInCart(part.id)}
                                            variant={isPartInCart(part.id) ? "secondary" : "default"}
                                        >
                                            <ShoppingCart className="h-4 w-4 mr-2" />
                                            {part.stock === 0
                                                ? "Sin stock"
                                                : isPartInCart(part.id)
                                                    ? "En cotización"
                                                    : "Cotizar"
                                            }
                                        </Button>
                                        <Button variant="outline" className="w-full cursor-pointer">
                                            Ver detalles
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
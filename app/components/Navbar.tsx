"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const routes = [
        {
            label: "Inicio",
            href: "/"
        },
        {
            label: "Nosotros",
            href: "/nosotros"
        },
        {
            label: "Servicios",
            href: "/servicios"
        },
        {
            label: "Productos",
            href: "/productos"
        },
        {
            label: "Partners",
            href: "/partners"
        },
        {
            label: "Clientes",
            href: "/clientes"
        },
        {
            label: "Contacto",
            href: "/contacto"
        }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-30 bg-background border-b">
            <div className="flex justify-between items-center p-4 max-w-6xl w-full mx-auto">
                {/* <h1 className="text-xl italic text-primary font-extrabold">SEMCON</h1> */}
                <Image src="/Logo.png" alt="SEMCON" width={100} height={20} />
                <div className="hidden lg:flex items-center gap-8 text-sm">
                    {routes.map((route) => (
                        <Link key={route.href} href={route.href} className="hover:text-primary transition-colors">{route.label}</Link>
                    ))}
                    <Button size="lg" className="relative">
                        <ShoppingCart />
                        Cotización
                        <span className="absolute grid place-content-center -top-1 -right-1 bg-amber-400 text-primary-foreground rounded-full size-4 text-xs z-10 animate-ping"></span>
                        <span className="absolute grid place-content-center -top-1 -right-1 bg-amber-200 text-primary-foreground rounded-full size-4 text-xs z-10"></span>
                    </Button>
                </div>
                <div className="lg:hidden">
                    <Button className="grid place-content-center size-6" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="size-6" />
                    </Button>
                </div>
                <AnimatePresence>
                    {isOpen && (
                        <>
                            <div
                                className="absolute top-0 right-0 h-svh w-full bg-accent/50 backdrop-blur-xs border-b z-40"
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ duration: 0.2 }}
                                className="absolute flex flex-col gap-8 p-6 top-0 right-0 bg-background h-svh z-50 w-4/5 sm:w-3/5 md:w-2/5"
                            >
                                <div className="flex justify-between items-center">
                                    <Image src="/Logo.png" alt="SEMCON" width={100} height={20} />
                                    <Button variant="ghost" className="grid place-content-center size-6" onClick={() => setIsOpen(false)}>
                                        <X className="size-6 text-muted-foreground" />
                                    </Button>
                                </div>
                                {routes.map((route) => (
                                    <Link onClick={() => setIsOpen(false)} key={route.href} href={route.href} className="text-lg hover:text-primary transition-colors">{route.label}</Link>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
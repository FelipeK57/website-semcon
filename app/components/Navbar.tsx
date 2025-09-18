import Link from "next/link";

export default function Navbar() {

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
            label: "Representadas",
            href: "/representadas"
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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-accent border-b">
            <div className="flex justify-between items-center p-4 max-w-6xl w-full mx-auto">
                <h1 className="text-xl italic text-primary font-extrabold">SEMCON</h1>
                <div className="hidden lg:flex gap-8 text-sm">
                    {routes.map((route) => (
                        <Link key={route.href} href={route.href} className="hover:text-primary transition-colors">{route.label}</Link>
                    ))}
                </div>
                <div className="lg:hidden">
                    Menu
                </div>
            </div>
        </nav>
    );
}
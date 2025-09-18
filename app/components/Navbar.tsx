import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="flex justify-between items-center p-4 max-w-6xl w-full mx-auto">
        <h1 className="text-xl italic text-primary font-extrabold">SEMCON</h1>
        <div className="hidden md:flex gap-8">
            <Link href="/">Inicio</Link>
            <Link href="/">Servicios</Link>
            <Link href="/">Productos</Link>
            <Link href="/">Contacto</Link>
        </div>
        <div className="md:hidden">
            Menu
        </div>
      </div>
    </nav>
  );
}
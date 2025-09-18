export default function Footer() {
    return (
        <footer className="flex flex-col gap-6 p-8 bg-primary">
            <div className="flex flex-col md:flex-row justify-between gap-8 max-w-6xl w-full mx-auto p-4 text-primary-foreground">
                <div className="flex flex-col gap-2">
                    <h2 className="text-xl italic text-primary-foreground font-extrabold">SEMCON</h2>
                    <p className="text-sm">Servicios especializados de medición y control</p>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                    <p>Teléfono: 3178564920</p>
                    <p>Email: info@semcon.com</p>
                    <p>WhatsApp: 3178564920</p>
                    <p>Dirección: Carrera 123 # 45-67</p>
                </div>
            </div>
            <div className="w-full max-w-6xl mx-auto border-b-1 pb-1 border-b-primary-foreground" />
            <div className="text-center text-sm text-primary-foreground">
                <p>&copy; 2025 SEMCON. Servicios especializados de medición y control.</p>
            </div>
        </footer>
    )
}
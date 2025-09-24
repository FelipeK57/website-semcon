import { Button } from "@/components/ui/button";

export default function Clientes() {
    return (
        <main className="flex flex-col min-h-svh gap-6">
            <section className="flex flex-col gap-6 max-w-6xl mx-auto w-full py-28 px-4">
                <h1 className="text-2xl font-bold">Nuestros clientes</h1>
                <p className="max-w-lg text-muted-foreground">
                    Más de 20 años construyendo relaciones sólidas con las principales empresas de la industria papelera.
                </p>
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                    <div className="bg-accent rounded-lg w-full border h-24"></div>
                </section>
            </section>
            <section className="flex flex-col gap-4 px-8 py-24 items-center justify-center bg-accent">
                <h2 className="text-2xl font-bold text-accent-foreground text-center">Únase a Nuestros Clientes Satisfechos</h2>
                <p className="text-center text-base max-w-3xl text-accent-foreground">Descubra cómo podemos ayudar a optimizar los procesos de su empresa con soluciones probadas y confiables.</p>
                <Button size="lg">Solicitar consulta</Button>
            </section>
        </main>
    )
}
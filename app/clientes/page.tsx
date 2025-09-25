import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Clientes() {
    return (
        <main className="flex flex-col min-h-svh gap-6">
            <section className="flex flex-col gap-6 max-w-6xl mx-auto w-full py-28 px-4">
                <h1 className="text-2xl font-bold">Nuestros clientes</h1>
                <p className="max-w-lg text-muted-foreground">
                    Más de 20 años construyendo relaciones sólidas con las principales empresas de la industria papelera.
                </p>
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://assets.www.essity.com/essity/1.129.0-release.1/img/logo-essity.svg" alt="Essity" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-green-900 p-6">
                        <img src="https://grandbaygroup.com/wp-content/uploads/2022/04/LOGO-GRANDBAY-WHITE.svg" alt="Grandbay" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-background p-6">
                        <img src="https://www.cartonesamerica.com/themes/cametheme/img/logo.png" alt="Cartones America" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-sky-700 p-6">
                        <img src="https://papeleranacional.com/wp-content/uploads/2024/04/papelera-2.png" alt="Papelera Nacional" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://corrugandodigital.acccsa.org/hubfs/SW_LOGO_2COL.png" alt="Smurfit Westrock" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-sky-900 p-6">
                        <img src="https://www.carvajal.com/wp-content/uploads/2021/01/Logo_blanco1.png" alt="Carvajal" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://www.trupal.com.pe/images/trupal-newlogo.png" alt="Trupal" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://www.unibol.com.co/images/unibol-sas.png" alt="Unibol" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Sonoco.svg/1148px-Sonoco.svg.png" alt="Sonoco" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://www.kcprofessional.com/es-co/-/media/global/content-hub/images/204298347_svg.svg" alt="KC Professional" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://www.empicolsa.com/wp-content/uploads/2020/09/cropped-logo-empaques-industriales-header-01.png" alt="Empaques Industriales" className="w-full h-full object-contain" />
                    </div>
                    <div className="rounded-lg w-full border aspect-square bg-accent p-6">
                        <img src="https://indugevi.co/wp-content/uploads/2024/06/Logo-con-area-protegida-1024x333.png" alt="Indugevi" className="w-full h-full object-contain" />
                    </div>
                </section>
            </section>
            <section className="flex flex-col gap-4 px-8 py-24 items-center justify-center bg-accent">
                <h2 className="text-2xl font-bold text-accent-foreground text-center">Únase a Nuestros Clientes Satisfechos</h2>
                <p className="text-center text-base max-w-3xl text-accent-foreground">Descubra cómo podemos ayudar a optimizar los procesos de su empresa con soluciones probadas y confiables.</p>
                <Link href="/contacto"><Button size="lg" className="cursor-pointer">Solicitar consulta</Button></Link>
            </section>
        </main>
    )
}
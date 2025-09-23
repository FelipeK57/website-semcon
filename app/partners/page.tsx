import Image from "next/image"
export default function Representadas() {
    return (
        <main className="flex flex-col gap-10 max-w-6xl mx-auto p-4 py-28">
            <h3 className="text-2xl font-bold">Representante exclusivo de:</h3>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <article className="flex flex-col gap-6">
                    <img src="/voith.svg" alt="Voith" className="h-8 md:h-6 w-fit" />
                    <p> Ofrecemos soluciones completas de automatización para máquinas papeleras y procesos relacionados, incluyendo:</p>
                    <ul className="list-disc list-inside ml-4 text-muted-foreground">
                        <li>QCS, DCS, Actuadores, CD Controles</li>
                        <li>Sistemas de Información</li>
                        <li>Instrumentación y otros equipos especializados</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Nuestro rol:</span> Representante exclusivo de ventas y servicio en Colombia, Ecuador, Perú y Venezuela, brindando soporte local, instalación, capacitación y mantenimiento certificado.</p>
                </article>
                <article className="flex flex-col gap-6">
                    <img src="/ametek.svg" alt="Ametek" className="h-8 md:h-6 w-fit -translate-x-6 md:translate-x-0" />
                    <p>Proveemos soluciones escalables de inspección y monitoreo de procesos papelero:</p>
                    <ul className="list-disc list-inside ml-4 text-muted-foreground">
                        <li>SmartView: Web inspection Systems</li>
                        <li>SmartAdvisor: Web Monitoring Systems</li>
                        <li>Inspección de superficies para mejorar la calidad y eficiencia del proceso papelero</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Nuestro rol:</span> Representante de Ventas y Servicios para Colombia y Ecuador, brindando soporte local, instalación, capacitación y mantenimiento certificado.</p>
                </article>
            </section>
            <h3 className="text-2xl font-bold">Distribuidor autorizado de:</h3>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <article className="flex flex-col gap-6 md:col-span-2">
                    <img src="/abb-logo.svg" alt="ABB" className="h-8 md:h-6 w-fit" />
                    <p className="max-w-lg">Como distribuidor oficial de equipos, partes y soporte técnico para Colombia, Ecuador y Venezuela, ponemos a disposición de la industria papelera soluciones de clase mundial del grupo ABB. Nuestro compromiso es ofrecer productos originales, servicio local y asesoría técnica especializada, respaldados por años de experiencia.</p>
                </article>
                <article className="flex flex-col gap-6">
                    <p>Linea de productos KPM:</p>
                    <ul className="list-disc list-inside ml-4 text-muted-foreground">
                        <li>Transmisores de consistencia: tipo paleta (KC/3), rotativo (KC/5), microondas (KC/7) y óptico (KC/9).</li>
                        <li>Detectores de rotura: modelo KB2, reconocido por su alta confiabilidad en máquinas de papel.</li>
                        <li>Muestreadores de pulpa: para todas las aplicaciones de proceso (KS/2, KS/4, KS/6).</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Cobertura:</span> Distribuidor autorizado para Colombia y Ecuador.</p>
                </article>
                <article className="flex flex-col gap-6">
                    <p>Linea de productos Lorentzen & Wettre:</p>
                    <ul className="list-disc list-inside ml-4 text-muted-foreground">
                        <li>Equipos para laboratorio de papel.</li>
                        <li>Equipos para laboratorio de pulpa.</li>
                        <li>Equipos para muestreo automatizado de papel de impresión y empaque.</li>
                        <li>Equipos para medir permeabilidad y humedad de fieltros.</li>
                        <li>Soluciones en línea para medir freeness y características de fibra.</li>
                    </ul>
                    <p className="text-sm"><span className="font-semibold">Cobertura:</span> Distribuidor autorizado para Colombia, Ecuador y Venezuela.</p>
                </article>
            </section>
            <p></p>
        </main>
    )
}
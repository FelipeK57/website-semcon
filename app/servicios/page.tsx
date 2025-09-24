import { Button } from "@/components/ui/button";
import { Award, Clock, Phone, Settings, ShieldCheck, Users2, Wrench, Zap } from "lucide-react";

export default function Servicios() {
    return (
        <main className="flex flex-col gap-6">
            <section className="flex flex-col gap-6 max-w-6xl mx-auto py-28 px-4">
                <h1 className="text-2xl font-bold text-center">Nuestros Servicios</h1>
                <p className="text-muted-foreground max-w-lg mx-auto text-center">
                    Ofrecemos servicios integrales de mantenimiento, instalación, capacitación y soporte técnico para maximizar el rendimiento de sus equipos industriales.
                </p>
                <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <article className="flex flex-col gap-4 border shadow rounded-lg p-8">
                        <Wrench className="size-10 text-primary" />
                        <h2 className="text-xl font-semibold">Mantenimiento especializado</h2>
                        <p className="text-sm">Mantenimiento preventivo y correctivo de equipos de automatización y medición con técnicos especializados.</p>
                        <p className="text-sm">Incluye:</p>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground text-sm">
                            <li>Mantenimiento preventivo programado</li>
                            <li>Reparaciones correctivas de emergencia</li>
                            <li>Calibración de instrumentos</li>
                            <li>Actualización de software y firmware</li>
                        </ul>
                    </article>
                    <article className="flex flex-col gap-4 border shadow rounded-lg p-8">
                        <Settings className="size-10 text-primary" />
                        <h2 className="text-xl font-semibold">Instalación y Puesta en Marcha</h2>
                        <p className="text-sm">Instalación profesional y soporte completo durante el arranque de nuevos equipos y sistemas.</p>
                        <p className="text-sm">Incluye:</p>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground text-sm">
                            <li>Planificación e ingeniería de instalación</li>
                            <li>Montaje y conexionado de equipos</li>
                            <li>Configuración y parametrización</li>
                            <li>Pruebas de funcionamiento y optimización</li>
                        </ul>
                    </article>
                    <article className="flex flex-col gap-4 border shadow rounded-lg p-8">
                        <Users2 className="size-10 text-primary" />
                        <h2 className="text-xl font-semibold">Capacitación de Personal</h2>
                        <p className="text-sm">Programas de capacitación técnica para optimizar el uso y mantenimiento de los equipos.</p>
                        <p className="text-sm">Incluye:</p>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground text-sm">
                            <li>Capacitación en operación de equipos</li>
                            <li>Entrenamiento en mantenimiento básico</li>
                            <li>Cursos de seguridad industrial</li>
                            <li>Certificación de competencias</li>
                        </ul>
                    </article>
                    <article className="flex flex-col gap-4 border shadow rounded-lg p-8">
                        <ShieldCheck className="size-10 text-primary" />
                        <h2 className="text-xl font-semibold">Garantía y Respaldo</h2>
                        <p className="text-sm">Garantía completa en todos nuestros servicios con respaldo técnico continuo y repuestos originales.</p>
                        <p className="text-sm">Incluye:</p>
                        <ul className="list-disc list-inside ml-4 text-muted-foreground text-sm">
                            <li>Garantía extendida en equipos y servicios</li>
                            <li>Repuestos originales</li>
                            <li>Soporte técnico remoto</li>
                            <li>Contratos de mantenimiento personalizados</li>
                        </ul>
                    </article>
                </section>
            </section>
            <section className="py-28 px-4 bg-accent">
                <section className="max-w-6xl mx-auto w-full flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-center">¿Por qué elegirnos?</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto text-center">Ventajas que nos distinguen como el socio técnico preferido de la industria papelera.</p>
                    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <article className="flex justify-center gap-6">
                            <Clock className="size-10 bg-primary text-primary-foreground rounded-lg p-2" />
                            <div className="flex flex-col w-2/3 gap-2">
                                <h2 className="text-xl font-semibold">Respuesta rápida</h2>
                                <p className="text-muted-foreground">Servicio de emergencia 24/7 con tiempos de respuesta garantizados para minimizar paradas de producción.</p>
                            </div>
                        </article>
                        <article className="flex justify-center gap-6">
                            <Award className="size-10 bg-primary text-primary-foreground rounded-lg p-2" />
                            <div className="flex flex-col w-2/3 gap-2">
                                <h2 className="text-xl font-semibold">Personal certificado</h2>
                                <p className="text-muted-foreground">Personal técnico certificado por los principales fabricantes con capacitación continua en nuevas tecnologías.</p>
                            </div>
                        </article>
                        <article className="flex justify-center gap-6">
                            <Zap className="size-10 bg-primary text-primary-foreground rounded-lg p-2" />
                            <div className="flex flex-col w-2/3 gap-2">
                                <h2 className="text-xl font-semibold">Tecnología Avanzada</h2>
                                <p className="text-muted-foreground">Herramientas de diagnóstico avanzadas y tecnología de mantenimiento predictivo para optimizar rendimiento.</p>
                            </div>
                        </article>
                        <article className="flex justify-center gap-6">
                            <Phone className="size-10 bg-primary text-primary-foreground rounded-lg p-2" />
                            <div className="flex flex-col w-2/3 gap-2">
                                <h2 className="text-xl font-semibold">Soporte Integral</h2>
                                <p className="text-muted-foreground">Soporte técnico completo desde la consulta inicial hasta el mantenimiento a largo plazo de los equipos.
                                </p>
                            </div>
                        </article>
                    </section>
                </section>
            </section>
            <section className="max-w-6xl mx-auto w-full flex flex-col gap-6 py-28 px-4">
                <h2 className="text-2xl font-bold text-center">Nuestro proceso</h2>
                <p className="text-muted-foreground max-w-lg mx-auto text-center">Un proceso estructurado que garantiza la calidad y eficiencia en cada proyecto.</p>
                <section className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <article className="flex flex-col items-center gap-4">
                        <div className="grid place-content-center size-14 text-lg font-bold bg-primary text-primary-foreground rounded-full p-2">
                            1
                        </div>
                        <h2 className="text-xl font-semibold text-center">Evaluación inicial</h2>
                        <p className="text-sm text-center text-muted-foreground">Análisis detallado de sus necesidades y evaluación técnica de los equipos existentes.</p>
                    </article>
                    <article className="flex flex-col items-center gap-4">
                        <div className="grid place-content-center size-14 text-lg font-bold bg-primary text-primary-foreground rounded-full p-2">
                            2
                        </div>
                        <h2 className="text-xl font-semibold text-center">Propuesta Técnica</h2>
                        <p className="text-sm text-center text-muted-foreground">Desarrollo de una propuesta técnica personalizada con cronograma y presupuesto detallado.</p>
                    </article>
                    <article className="flex flex-col items-center gap-4">
                        <div className="grid place-content-center size-14 text-lg font-bold bg-primary text-primary-foreground rounded-full p-2">
                            3
                        </div>
                        <h2 className="text-xl font-semibold text-center">Ejecución</h2>
                        <p className="text-sm text-center text-muted-foreground">Implementación del proyecto con seguimiento continuo y comunicación constante con el cliente.</p>
                    </article>
                    <article className="flex flex-col items-center gap-4">
                        <div className="grid place-content-center size-14 text-lg font-bold bg-primary text-primary-foreground rounded-full p-2">
                            4
                        </div>
                        <h2 className="text-xl font-semibold text-center">Seguimiento</h2>
                        <p className="text-sm text-center text-muted-foreground">Soporte post-implementación y mantenimiento continuo para asegurar el óptimo funcionamiento.</p>
                    </article>
                </section>
            </section>
            <section className="flex flex-col gap-4 px-8 py-24 items-center justify-center bg-accent">
                <h2 className="text-2xl font-bold text-accent-foreground text-center">¿Necesita Servicios Especializados?</h2>
                <p className="text-center text-base max-w-3xl text-accent-foreground">Contacte con nuestros especialistas para una evaluación gratuita de sus necesidades de mantenimiento y servicios técnicos.</p>
                <Button size="lg">Contactar especialista</Button>
            </section>
        </main>
    )
}
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-svh">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-16 md:gap-24 p-8 min-h-svh">
        <article className="flex flex-col h-fit w-fit m-auto gap-6">
          <h1 className="text-4xl font-bold max-w-lg">Automatización y medición para la <span className="text-primary">industria papelera</span></h1>
          <p className="text-sm lg:text-base max-w-lg text-muted-foreground">En SEMCON integramos ingeniería, servicios técnicos especializados y venta de equipos con respaldo internacional. Más de dos décadas acompañando a las principales empresas papeleras de Colombia en su camino hacia la eficiencia, confiabilidad y sostenibilidad.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button size="lg">Solicitar servicios</Button>
            <Button size="lg" variant="outline">Cotizar equipos</Button>
          </div>
        </article>
        <div className="bg-accent rounded-lg w-full xl:w-4/5 border aspect-square m-auto">
        </div>
      </section>
      <section className="flex flex-col gap-4 px-8 py-24 items-center justify-center bg-primary">
        <h2 className="text-2xl font-bold text-primary-foreground">Sobre nosotros</h2>
        <p className="text-center text-base font-semibold max-w-4xl text-primary-foreground">Somos una empresa colombiana con más de 23 años de experiencia en soluciones de automatización y medición. Contamos con un equipo multidisciplinario de ingenieros que entiende los retos de la industria papelera y ofrece acompañamiento integral, desde la consultoría técnica hasta el suministro de equipos especializados.</p>
      </section>
      <section className="flex flex-col relative items-center gap-4 p-8">
        <h2 className="text-2xl font-semibold">Servicios</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-24">
          <article className="flex flex-col justify-center gap-4">
            <h3 className="text-2xl font-semibold">Mantenimiento especializado</h3>
            <p className="text-sm lg:text-base max-w-lg text-muted-foreground">
              Mantenemos tus equipos en óptimas condiciones para garantizar la eficiencia y confiabilidad de tu proceso productivo.
            </p>
          </article>
          <div className="bg-accent rounded-lg w-full border aspect-square">
          </div>
        </div>
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-4 md:gap-24">
          <div className="bg-accent rounded-lg w-full border aspect-square">
          </div>
          <article className="flex flex-col justify-center gap-4">
            <h3 className="text-2xl font-semibold">Instalación y soporte técnico</h3>
            <p className="text-sm lg:text-base max-w-lg text-muted-foreground">
              Instalamos y mantenemos tus equipos para garantizar su funcionamiento óptimo y prolongar su vida útil.
            </p>
          </article>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-24">
          <article className="flex flex-col justify-center gap-4">
            <h3 className="text-2xl font-semibold">Capacitación de personal</h3>
            <p className="text-sm lg:text-base max-w-lg text-muted-foreground">
              Capacitamos a tu equipo para que pueda operar y mantener tus equipos de manera eficiente.
            </p>
          </article>
          <div className="bg-accent rounded-lg w-full border aspect-square"></div>
        </div>
        <div className="absolute bottom-10 left-0 w-full h-96 bg-gradient-to-t from-70% from-background to-transparent"></div>
        <Button variant="outline" className="z-10 -translate-y-36" size="lg">Ver más</Button>
      </section>
    </main>
  );
}

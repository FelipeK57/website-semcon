import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Home() {
  return (
    <main className="flex flex-col min-h-svh">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 pt-20 sm:gap-16 md:gap-24 min-h-svh max-w-6xl mx-auto">
        <article className="flex flex-col h-fit w-fit m-auto gap-6">
          <h1 className="text-4xl font-bold max-w-lg">Soluciones de <span className="text-primary">automatización</span> y <span className="text-primary">control</span> para la industria papelera</h1>
          <p className="text-sm lg:text-base max-w-lg text-muted-foreground">En SEMCON integramos ingeniería, servicios técnicos especializados y venta de equipos con respaldo internacional. Más de dos décadas acompañando a las principales empresas papeleras de Colombia en su camino hacia la eficiencia, confiabilidad y sostenibilidad.</p>
          <div className="flex flex-col md:flex-row gap-4">
            <Button size="lg">Solicitar servicios</Button>
            <Button size="lg" variant="outline">Cotizar equipos</Button>
          </div>
        </article>
        <div className="bg-accent rounded-lg w-full border aspect-square m-auto">
        </div>
      </section>
      <section className="flex flex-col gap-4 px-8 py-24 items-center justify-center bg-primary">
        <h2 className="text-2xl font-bold text-primary-foreground">Sobre nosotros</h2>
        <p className="text-center text-base font-semibold max-w-4xl text-primary-foreground">Somos una empresa colombiana con más de 23 años de experiencia en soluciones de automatización y medición. Contamos con un equipo multidisciplinario de ingenieros que entiende los retos de la industria papelera y ofrece acompañamiento integral, desde la consultoría técnica hasta el suministro de equipos especializados.</p>
      </section>
      <section className="flex flex-col items-center gap-6 p-8">
        <h2 className="text-2xl font-semibold">Servicios</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-24 max-w-6xl mx-auto">
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
        {/* <div className="absolute bottom-20 left-0 w-full h-80 bg-gradient-to-t from-70% from-background to-transparent"></div> */}
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="link" size="lg">Ver más</Button>
          <Button size="lg">Solicitar servicios</Button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 p-8">
        <h2 className="text-2xl font-semibold">Equipos y repuestos</h2>
        <p>Especiales en medición</p>
        <Carousel className="max-w-5xl mx-auto w-4/5 xl:w-full">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/5">
                <div className="border bg-accent rounded-lg p-4 aspect-square">
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p>Especiales en automatización</p>
        <Carousel className="max-w-5xl mx-auto w-4/5 xl:w-full">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/5">
                <div className="border bg-accent rounded-lg p-4 aspect-square">
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <p>Especiales en control</p>
        <Carousel className="max-w-5xl mx-auto w-4/5 xl:w-full">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="sm:basis-1/3 lg:basis-1/5">
                <div className="border bg-accent rounded-lg p-4 aspect-square">
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="link" size="lg">Ver más</Button>
          <Button size="lg">Cotizar equipos</Button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 p-8 bg-accent">
        <h2 className="text-2xl font-semibold text-center">Testimonios de nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-6xl w-full mx-auto">
          <article className="flex flex-col gap-2 border bg-background rounded-lg p-5">
            <p className="text-base font-medium">Semcon nos ayudo a mejorar la eficiencia de nuestro proceso productivo, además de ofrecer un servicio de calidad y un equipo de profesionales que nos han acompañado en nuestro crecimiento.	</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm">Juan Pérez</p>
                <p className="text-xs text-muted-foreground">CEO de la empresa</p>
              </div>
              <div className="size-8 rounded-full bg-accent border">
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-2 border bg-background rounded-lg p-5">
            <p className="text-base font-medium">Semcon nos ayudo a mejorar la eficiencia de nuestro proceso productivo, además de ofrecer un servicio de calidad y un equipo de profesionales que nos han acompañado en nuestro crecimiento.	</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm">Juan Pérez</p>
                <p className="text-xs text-muted-foreground">CEO de la empresa</p>
              </div>
              <div className="size-8 rounded-full bg-accent border">
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-2 border bg-background rounded-lg p-5">
            <p className="text-base font-medium">Semcon nos ayudo a mejorar la eficiencia de nuestro proceso productivo, además de ofrecer un servicio de calidad y un equipo de profesionales que nos han acompañado en nuestro crecimiento.	</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm">Juan Pérez</p>
                <p className="text-xs text-muted-foreground">CEO de la empresa</p>
              </div>
              <div className="size-8 rounded-full bg-accent border">
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-2 border bg-background rounded-lg p-5">
            <p className="text-base font-medium">Semcon nos ayudo a mejorar la eficiencia de nuestro proceso productivo, además de ofrecer un servicio de calidad y un equipo de profesionales que nos han acompañado en nuestro crecimiento.	</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm">Juan Pérez</p>
                <p className="text-xs text-muted-foreground">CEO de la empresa</p>
              </div>
              <div className="size-8 rounded-full bg-accent border">
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-2 border bg-background rounded-lg p-5">
            <p className="text-base font-medium">Semcon nos ayudo a mejorar la eficiencia de nuestro proceso productivo, además de ofrecer un servicio de calidad y un equipo de profesionales que nos han acompañado en nuestro crecimiento.	</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm">Juan Pérez</p>
                <p className="text-xs text-muted-foreground">CEO de la empresa</p>
              </div>
              <div className="size-8 rounded-full bg-accent border">
              </div>
            </div>
          </article>
          <article className="flex flex-col gap-2 border bg-background rounded-lg p-5">
            <p className="text-base font-medium">Semcon nos ayudo a mejorar la eficiencia de nuestro proceso productivo, además de ofrecer un servicio de calidad y un equipo de profesionales que nos han acompañado en nuestro crecimiento.	</p>
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm">Juan Pérez</p>
                <p className="text-xs text-muted-foreground">CEO de la empresa</p>
              </div>
              <div className="size-8 rounded-full bg-accent border">
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="flex flex-col items-center gap-6 p-8 bg-background">
        <h2 className="text-2xl font-semibold">Preguntas frecuentes</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto p-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>¿Qué servicios ofrecen?</AccordionTrigger>
            <AccordionContent>
              Ofrecemos una amplia gama de servicios, desde la instalación y mantenimiento de equipos hasta la capacitación de personal.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>¿Cuáles son los horarios de atención?</AccordionTrigger>
            <AccordionContent>
              Los horarios de atención son de lunes a viernes de 8:00 a 18:00.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>¿Qué tipo de equipos ofrecen?</AccordionTrigger>
            <AccordionContent>
              Ofrecemos una amplia gama de equipos, desde medidores de flujo hasta controladores de proceso.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>¿Qué tipo de ventas manejan?</AccordionTrigger>
            <AccordionContent>
              Manejamos ventas de equipos y repuestos para la industria papelera, desde importación hasta venta directa.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>¿Cual es la capacitación de nuestros profesionales?</AccordionTrigger>
            <AccordionContent>
              Nuestros profesionales tienen una amplia experiencia en la industria papelera y son capacitados para ofrecer un servicio de calidad.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="flex flex-col gap-4 px-8 py-24 items-center justify-center bg-accent">
        <h2 className="text-2xl font-bold text-accent-foreground text-center">¿Listo para optimizar tu proceso?</h2>
        <p className="text-center text-base max-w-3xl text-accent-foreground">Contáctanos hoy mismo y descubre cómo nuestras soluciones de automatización y control pueden transformar tu industria papelera. Nuestro equipo de expertos está listo para acompañarte.</p>
        <Button size="lg">Contactar</Button>
      </section>
    </main>
  );
}

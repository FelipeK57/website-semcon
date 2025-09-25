export default function Nosotros() {
  return (
    <main className="flex flex-col gap-8 max-w-3xl mx-auto p-4 py-28">
      <h3 className="text-2xl font-bold">Sobre nosotros</h3>
      <div className="w-full h-64 sm:h-96 bg-accent border rounded-lg"></div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Nuestra historia</p>
        <p className="text-muted-foreground">Fundada en 2001, inicialmente en Yumbo, Colombia (zona industrial Cali) cerca de las Papeleras más importantes. Desde enero 2022 operamos desde Centro Empresa en Cali.</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Representaciones y alianzas</p>
        <p className="text-muted-foreground">Representantes de Ventas y Servicios Técnico para VOITH AUTOMATION desde 2004. KPM (hoy ABB/Oy) desde 2004, L&W (hoy ABB/L&W) desde 2012, Ametek (Antes Cognex) 2013.</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Cobertura territorial</p>
        <p className="text-muted-foreground">Territorio cubierto: Colombia, Ecuador y Perú.</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Nuestro equipo técnico</p>
        <p className="text-muted-foreground">Nuestro grupo técnico tiene un staff multidisciplinario con excelente capacitación, larga experiencia y KNOW HOW en procesos de fabricación de papel y automatización.</p>
        <p className="text-muted-foreground">Actualmente tenemos 9 ingenieros de Servicio en Cali y sus alrededores, 1 en Medellín, pero seguimos creciendo y esperamos contratar nuevos colaboradores para zona Bogotá y posterior Ecuador.</p>
        <p className="text-muted-foreground">Experiencia promedio del personal técnico en Automatización papelera (QCS, CDs, Actuadores, DCS, WIS, transmisores de consistencia, instrumentación y otros) mayor a 20 años.</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Nuestra misión</p>
        <p className="text-muted-foreground">Nuestra misión es ofrecer soluciones de automatización y medición para la industria papelera, garantizando la eficiencia y confiabilidad de los procesos productivos.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Nuestra visión</p>
        <p className="text-muted-foreground">Nuestra visión es ser líderes en soluciones de automatización y medición para la industria papelera, garantizando la eficiencia y confiabilidad de los procesos productivos.</p>
      </div>
      <div className="flex flex-col gap-4 p-6 bg-accent/10 border border-accent/20 rounded-lg">
        <p className="text-xl font-bold text-center text-foreground">Nuestro compromiso</p>
        <p className="text-lg text-center italic text-foreground">"Semcon trata de ofrecer a nuestros clientes soluciones con un sólido fundamento técnico, no soluciones comerciales. Un cliente satisfecho es la llave para nuevas oportunidades."</p>
      </div>
    </main >
  );
}

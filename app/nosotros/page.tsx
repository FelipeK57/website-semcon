export default function Nosotros() {
  return (
    <main className="flex flex-col gap-8 max-w-3xl mx-auto p-4 py-28">
      <h3 className="text-2xl font-bold">Sobre nosotros</h3>
      <div className="w-full h-64 sm:h-96 bg-accent border rounded-lg"></div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Nuestra historia</p>
        <p className="text-muted-foreground">Somos una empresa colombiana con más de 23 años de experiencia en soluciones de automatización y medición. Contamos con un equipo multidisciplinario de ingenieros que entiende los retos de la industria papelera y ofrece acompañamiento integral, desde la consultoría técnica hasta el suministro de equipos especializados.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Nuestra misión</p>
        <p className="text-muted-foreground">Nuestra misión es ofrecer soluciones de automatización y medición para la industria papelera, garantizando la eficiencia y confiabilidad de los procesos productivos.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Nuestra visión</p>
        <p className="text-muted-foreground">Nuestra visión es ser líderes en soluciones de automatización y medición para la industria papelera, garantizando la eficiencia y confiabilidad de los procesos productivos.</p>
      </div>
    </main >
  );
}

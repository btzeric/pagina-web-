import { Reveal } from "@/components/reveal"

const STEPS = [
  {
    number: "01",
    title: "Consulta y medición",
    body: "Visitamos el hotel, relevamos habitaciones tipo y entendemos los requisitos operativos.",
  },
  {
    number: "02",
    title: "Diseño y muestras",
    body: "Proponemos sistema, tejido y acabado; enviamos muestras físicas para aprobación.",
  },
  {
    number: "03",
    title: "Fabricación",
    body: "Producción a medida bajo control de calidad, con plazos definidos por volumen de habitaciones.",
  },
  {
    number: "04",
    title: "Instalación y entrega",
    body: "Montaje coordinado con el equipo de mantenimiento del hotel y acta de entrega final.",
  },
]

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-[#FAFAF9]">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center uppercase tracking-[0.16em] text-[0.78rem] font-semibold text-[#A16207] mb-4">
          Proceso
        </p>
        <h2 className="text-center text-[#0C0A09] font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3vw,2.3rem)] mb-16">
          De la primera visita a la habitación terminada
        </h2>

        <ol className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-10">
          {STEPS.map((s, i) => (
            <Reveal key={s.number} index={i} as="li" className="pt-4 border-t-2 border-[#D6D3D1]">
              <span className="block font-[family-name:var(--font-display)] text-[2rem] font-semibold text-[#A16207] mb-1">
                {s.number}
              </span>
              <h3 className="text-[#0C0A09] text-[1.05rem] font-[family-name:var(--font-display)] font-semibold mb-1">{s.title}</h3>
              <p className="text-[0.9rem] text-[#57534E]">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

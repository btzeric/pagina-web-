import { Reveal } from "@/components/reveal"
import { ShieldIcon, RulerIcon, GearIcon, HeadsetIcon } from "@/components/icons"

const FEATURES = [
  {
    icon: ShieldIcon,
    title: "Materiales certificados",
    body: "Telas y componentes con certificación ignífuga para cumplir la normativa hotelera vigente.",
  },
  {
    icon: RulerIcon,
    title: "Diseño a medida",
    body: "Levantamiento en sitio y fabricación por habitación tipo, sin soluciones genéricas de catálogo.",
  },
  {
    icon: GearIcon,
    title: "Instalación profesional",
    body: "Equipos propios de instalación, con cronogramas compatibles con la ocupación del hotel.",
  },
  {
    icon: HeadsetIcon,
    title: "Soporte post-venta",
    body: "Garantía extendida y mantenimiento preventivo para maximizar la vida útil del sistema.",
  },
]

export function WhyUs() {
  return (
    <section id="nosotros" className="py-24 bg-[#1C1917] text-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center uppercase tracking-[0.16em] text-[0.78rem] font-semibold text-[#E0B563] mb-4">
          Por qué nosotros
        </p>
        <h2 className="text-center font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3vw,2.3rem)] mb-16">
          Pensado para hoteles que no pueden darse el lujo de fallar
        </h2>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-10">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} index={i}>
              <div>
                <span className="inline-flex items-center justify-center w-[52px] h-[52px] rounded-full bg-white/8 text-[#E0B563] mb-4">
                  <f.icon width={24} height={24} />
                </span>
                <h3 className="text-[1.1rem] font-[family-name:var(--font-display)] font-semibold mb-2">{f.title}</h3>
                <p className="text-[0.92rem] text-white/75">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

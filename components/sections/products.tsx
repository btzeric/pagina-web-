import { Reveal } from "@/components/reveal"
import { MotorIcon, TrackIcon, DropIcon, WaveIcon } from "@/components/icons"

const PRODUCTS = [
  {
    icon: MotorIcon,
    title: "Rieles motorizados",
    body: "Automatización silenciosa integrable con los sistemas de control de habitación (BMS / KNX) del hotel.",
  },
  {
    icon: TrackIcon,
    title: "Rieles manuales silenciosos",
    body: "Sistemas de deslizamiento de bajo mantenimiento, con carros de nylon reforzado para uso intensivo.",
  },
  {
    icon: DropIcon,
    title: "Blackout técnico",
    body: "Oscurecimiento total certificado, ideal para huéspedes con cambios de horario y turismo de descanso.",
  },
  {
    icon: WaveIcon,
    title: "Cortina decorativa",
    body: "Visillos y telas decorativas a medida, alineadas con el concept de interiorismo de cada propiedad.",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-24 bg-[#FAFAF9]">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center uppercase tracking-[0.16em] text-[0.78rem] font-semibold text-[#A16207] mb-4">
          Soluciones
        </p>
        <h2 className="text-center font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3vw,2.3rem)] mb-4">
          Un sistema de cortinaje para cada tipo de habitación
        </h2>
        <p className="text-center text-[#57534E] max-w-[640px] mx-auto mb-16">
          Cuatro líneas de producto pensadas para el ritmo de operación de un hotel: instalación rápida,
          mantenimiento mínimo y un movimiento silencioso que no interrumpe el descanso del huésped.
        </p>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-10">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} index={i}>
              <article className="h-full bg-white border border-[#D6D3D1] rounded-lg p-10 px-6 transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(28,25,23,0.08)] hover:border-[#A16207]">
                <span className="inline-flex items-center justify-center w-[52px] h-[52px] rounded-full bg-[#F1ECE3] text-[#A16207] mb-4">
                  <p.icon width={26} height={26} />
                </span>
                <h3 className="text-[1.15rem] font-[family-name:var(--font-display)] font-semibold mb-2">{p.title}</h3>
                <p className="text-[0.92rem] text-[#57534E]">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

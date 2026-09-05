import { Reveal } from "@/components/reveal"

const ITEMS = [
  { caption: "Hotel boutique", gradient: "from-[#2c2624] to-[#1C1917]" },
  { caption: "Resort de playa", gradient: "from-[#4a3a22] to-[#1C1917]" },
  { caption: "Hotel de negocios", gradient: "from-[#33302d] to-[#0C0A09]" },
  { caption: "Suite premium", gradient: "from-[#5c451f] to-[#201a12]" },
]

export function Gallery() {
  return (
    <section id="proyectos" className="py-24 bg-[#FAFAF9]">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center uppercase tracking-[0.16em] text-[0.78rem] font-semibold text-[#A16207] mb-4">
          Proyectos
        </p>
        <h2 className="text-center font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3vw,2.3rem)] mb-4">
          Pensado para distintos formatos de propiedad
        </h2>
        <p className="text-center text-[#57534E] max-w-[640px] mx-auto mb-16">
          Espacio reservado para fotografía real de proyectos entregados. Reemplace cada panel por una foto del
          hotel/habitación correspondiente cuando esté disponible.
        </p>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-[480px]:grid-cols-1 gap-10">
          {/* Reemplazar cada figure por <img src="ruta-real.jpg" alt="descripción del proyecto" /> */}
          {ITEMS.map((item, i) => (
            <Reveal key={item.caption} index={i} as="figure" className={`aspect-3/4 rounded-lg relative overflow-hidden flex items-end bg-linear-to-br ${item.gradient}`}>
              <div
                aria-hidden="true"
                className="absolute inset-0 [background-image:repeating-linear-gradient(100deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_26px)]"
              />
              <figcaption className="relative z-10 text-white text-[0.85rem] font-semibold tracking-[0.03em] p-4">
                {item.caption}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

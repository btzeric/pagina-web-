import { Reveal } from "@/components/reveal"

const TESTIMONIALS = [
  {
    quote:
      "El sistema motorizado redujo notablemente las quejas por ruido durante la noche y se integró sin problemas con nuestro control de habitación.",
    cite: "Gerencia de Operaciones — hotel boutique (cita de muestra)",
  },
  {
    quote:
      "El acabado y la caída de la tela estuvieron a la altura del reposicionamiento de marca que buscábamos en la renovación.",
    cite: "Dirección de Diseño — cadena hotelera (cita de muestra)",
  },
  {
    quote: "La instalación se coordinó por bloques de piso sin afectar la ocupación del hotel durante la obra.",
    cite: "Jefatura de Mantenimiento — resort (cita de muestra)",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-[#F1ECE3]">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center uppercase tracking-[0.16em] text-[0.78rem] font-semibold text-[#A16207] mb-4">
          Testimonios
        </p>
        <h2 className="text-center text-[#0C0A09] font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3vw,2.3rem)] mb-4">
          Ejemplo de cómo presentar la voz de sus clientes
        </h2>
        <p className="text-center text-[#57534E] max-w-[640px] mx-auto mb-16">
          Textos de muestra — sustituir por citas reales de clientes antes de publicar el sitio.
        </p>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-10">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.cite} index={i} as="blockquote" className="bg-white rounded-lg p-10 px-6 border border-[#D6D3D1]">
              <p className="font-[family-name:var(--font-display)] text-[1.15rem] italic text-[#0C0A09] mb-4">
                “{t.quote}”
              </p>
              <cite className="not-italic text-[0.8rem] text-[#57534E]">{t.cite}</cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

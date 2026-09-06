import { ArrowIcon } from "@/components/icons"

export function Hero() {
  return (
    <section id="inicio" className="relative bg-[#1C1917] text-white overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <svg viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice" className="absolute right-0 top-0 w-[55%] h-full max-md:w-full max-md:opacity-35">
          <defs>
            <linearGradient id="pleatGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#1C1917" />
              <stop offset="100%" stopColor="#3a332e" />
            </linearGradient>
          </defs>
          <g>
            {/* pliegues de cortina generados como curvas, no una foto */}
            <path d="M0,0 C20,300 -10,300 10,600 L60,600 C40,300 70,300 50,0 Z" fill="url(#pleatGrad)" opacity="0.9" />
            <path d="M60,0 C80,300 50,300 70,600 L120,600 C100,300 130,300 110,0 Z" fill="url(#pleatGrad)" opacity="0.75" />
            <path d="M120,0 C140,300 110,300 130,600 L180,600 C160,300 190,300 170,0 Z" fill="url(#pleatGrad)" opacity="0.6" />
            <path d="M180,0 C200,300 170,300 190,600 L240,600 C220,300 250,300 230,0 Z" fill="url(#pleatGrad)" opacity="0.45" />
            <path d="M240,0 C260,300 230,300 250,600 L300,600 C280,300 310,300 290,0 Z" fill="url(#pleatGrad)" opacity="0.3" />
            <path d="M300,0 C320,300 290,300 310,600 L360,600 C340,300 370,300 350,0 Z" fill="url(#pleatGrad)" opacity="0.18" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-[140px] pb-24 max-md:pt-24 max-md:pb-16">
        <div className="max-w-[680px]">
          <p className="uppercase tracking-[0.16em] text-[0.78rem] font-semibold text-[#A16207] mb-4">
            Fabricación técnica de cortineros para hotelería
          </p>
          <h1 className="text-white font-[family-name:var(--font-display)] font-semibold text-[clamp(2.1rem,4.4vw,3.4rem)] leading-[1.15] mb-6">
            Cortineros que visten cada habitación con la precisión de un hotel de gama alta.
          </h1>
          <p className="text-[1.05rem] text-white/80 max-w-[560px] mb-10">
            Diseñamos, fabricamos e instalamos sistemas de rieles y cortinaje —motorizados, manuales y técnicos— a la
            medida de cada proyecto hotelero. Materiales certificados, silencio operativo y un acabado que sostiene la
            experiencia que su marca promete.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 min-h-12 px-7 rounded-lg font-semibold text-[0.95rem] bg-[#A16207] hover:bg-[#7C4A05] transition-colors cursor-pointer"
            >
              Solicitar cotización <ArrowIcon width={18} height={18} />
            </a>
            <a
              href="#productos"
              className="inline-flex items-center gap-2 min-h-12 px-7 rounded-lg font-semibold text-[0.95rem] border-[1.5px] border-white/50 hover:border-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              Ver soluciones
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

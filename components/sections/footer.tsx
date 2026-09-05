const LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Por qué nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  return (
    <footer className="bg-[#1C1917] text-white/70 pt-24">
      <div className="mx-auto max-w-[1200px] px-6 flex justify-between gap-10 flex-wrap pb-16 border-b border-white/12">
        <div className="font-[family-name:var(--font-display)] text-[1.2rem] text-white max-w-[320px]">
          CORTINEX <span className="font-[family-name:var(--font-body)] text-[0.7rem] font-medium tracking-[0.12em] uppercase text-white/55">Hospitality</span>
          <p className="font-[family-name:var(--font-body)] text-[0.85rem] text-white/55 mt-1.5">
            Cortineros técnicos y decorativos para hotelería de gama media y alta.
          </p>
        </div>
        <nav aria-label="Navegación de pie de página">
          <ul className="flex gap-6 flex-wrap">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[0.88rem] hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 py-6 text-[0.78rem] text-center">
        <p>© {new Date().getFullYear()} CORTINEX Hospitality. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

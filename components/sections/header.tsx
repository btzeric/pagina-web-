"use client"

import { useState } from "react"
import { MenuIcon, CloseIcon } from "@/components/icons"

const NAV_LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#nosotros", label: "Por qué nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "/experiencia", label: "Experiencia interactiva" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-[100] bg-[#FAFAF9] border-b border-[#D6D3D1]">
      <div className="mx-auto max-w-[1200px] px-6 flex items-center justify-between min-h-[76px]">
        <a
          href="#inicio"
          aria-label="CORTINEX Hospitality, inicio"
          className="flex items-center gap-2 font-[family-name:var(--font-display)] text-[1.35rem] font-semibold tracking-[0.02em] cursor-pointer"
        >
          <span aria-hidden="true" className="inline-block w-3.5 h-[26px] rounded-sm bg-linear-to-b from-[#A16207] to-[#1C1917]" />
          CORTINEX{" "}
          <span className="font-[family-name:var(--font-body)] text-[0.7rem] font-medium tracking-[0.12em] uppercase text-[#57534E] ml-0.5">
            Hospitality
          </span>
        </a>

        <nav
          id="main-nav"
          aria-label="Navegación principal"
          className={`
            max-md:fixed max-md:inset-x-0 max-md:top-[76px] max-md:bottom-0 max-md:bg-[#FAFAF9]
            max-md:px-6 max-md:py-10 max-md:overflow-y-auto max-md:transition-all max-md:duration-200
            ${open ? "max-md:opacity-100 max-md:translate-y-0 max-md:pointer-events-auto" : "max-md:opacity-0 max-md:-translate-y-2 max-md:pointer-events-none"}
          `}
        >
          <ul className="flex items-center gap-10 max-md:flex-col max-md:items-stretch max-md:gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-[0.92rem] font-medium text-[#44403C] hover:text-[#1C1917] transition-colors cursor-pointer max-md:block max-md:text-lg max-md:py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="inline-block bg-[#1C1917] text-white px-5 py-2.5 rounded-lg hover:bg-[#A16207] transition-colors cursor-pointer max-md:text-center max-md:w-full"
              >
                Solicitar cotización
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="hidden max-md:inline-flex items-center justify-center min-w-11 min-h-11 text-[#1C1917] cursor-pointer"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon width={24} height={24} /> : <MenuIcon width={24} height={24} />}
        </button>
      </div>
    </header>
  )
}

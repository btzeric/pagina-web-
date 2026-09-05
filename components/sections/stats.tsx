"use client"

import { useEffect, useRef, useState } from "react"

const STATS = [
  { count: 12, suffix: "+", label: "años de experiencia" },
  { count: 180, suffix: "+", label: "habitaciones equipadas" },
  { count: 5, suffix: "", label: "años de garantía" },
  { count: 98, suffix: "%", label: "entregas a tiempo" },
]

function StatItem({ count, suffix, label }: { count: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (prefersReducedMotion) {
          setValue(count)
          return
        }
        const duration = 1200
        let start: number | null = null
        function step(timestamp: number) {
          if (start === null) start = timestamp
          const progress = Math.min((timestamp - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(count * eased))
          if (progress < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [count])

  return (
    <div ref={ref} className="text-center">
      <span className="block font-[family-name:var(--font-display)] text-[2.4rem] font-semibold text-[#E0B563]">
        {value}
        {suffix}
      </span>
      <span className="block text-[0.85rem] text-white/75 mt-1">{label}</span>
    </div>
  )
}

export function Stats() {
  return (
    <section aria-label="Cifras de la empresa" className="bg-[#44403C] text-white pt-16 pb-6">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-4 max-md:grid-cols-2 gap-6">
        {STATS.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
      <p className="text-center text-[0.72rem] text-white/45 mt-6 max-w-[640px] mx-auto px-6">
        * Cifras de referencia — reemplazar por los datos reales de la empresa antes de publicar.
      </p>
    </section>
  )
}

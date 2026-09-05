"use client"

import { useRef, useState, type FormEvent } from "react"
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons"

type FieldId = "f-name" | "f-hotel" | "f-email" | "f-phone" | "f-rooms" | "f-message"

const RULES: Record<FieldId, { required: boolean; email?: boolean; label: string }> = {
  "f-name": { required: true, label: "Nombre completo" },
  "f-hotel": { required: true, label: "Hotel / Empresa" },
  "f-email": { required: true, email: true, label: "Correo electrónico" },
  "f-phone": { required: false, label: "Teléfono" },
  "f-rooms": { required: false, label: "Número aproximado de habitaciones" },
  "f-message": { required: true, label: "Mensaje" },
}

const fieldClass =
  "w-full min-h-12 px-3.5 py-3 border-[1.5px] border-[#D6D3D1] rounded-sm text-[0.95rem] bg-white text-[#0C0A09] focus:border-[#A16207] focus:outline-none transition-colors"
const labelClass = "block text-[0.85rem] font-semibold mb-1.5 text-[#44403C]"
const errorClass = "text-[#DC2626] text-[0.8rem] mt-1.5 min-h-[1em]"

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const summaryRef = useRef<HTMLDivElement>(null)
  const [errors, setErrors] = useState<Partial<Record<FieldId, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function validateField(id: FieldId): string {
    const input = formRef.current?.elements.namedItem(id.replace("f-", "")) as
      | HTMLInputElement
      | HTMLTextAreaElement
      | null
    const rule = RULES[id]
    const value = input?.value.trim() ?? ""
    if (rule.required && !value) return `${rule.label} es obligatorio.`
    if (rule.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Ingrese un correo electrónico válido."
    }
    return ""
  }

  function handleBlur(id: FieldId) {
    const message = validateField(id)
    setErrors((prev) => ({ ...prev, [id]: message }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSuccess(false)

    const nextErrors: Partial<Record<FieldId, string>> = {}
    ;(Object.keys(RULES) as FieldId[]).forEach((id) => {
      const message = validateField(id)
      if (message) nextErrors[id] = message
    })
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    setSubmitting(true)
    // Simulación de envío: reemplazar por la llamada real al backend/servicio de correo.
    window.setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      formRef.current?.reset()
    }, 900)
  }

  const errorEntries = (Object.keys(errors) as FieldId[]).filter((id) => errors[id])

  return (
    <section id="contacto" className="py-24 bg-[#FAFAF9]">
      <div className="mx-auto max-w-[1200px] px-6 grid grid-cols-2 max-md:grid-cols-1 gap-24 max-md:gap-16 items-start">
        <div>
          <p className="uppercase tracking-[0.16em] text-[0.78rem] font-semibold text-[#A16207] mb-4">
            Hablemos de su proyecto
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-[clamp(1.6rem,3vw,2.3rem)] mb-4">
            Cuéntenos cuántas habitaciones tiene su hotel
          </h2>
          <p className="text-[#57534E] max-w-[640px]">
            Respondemos en menos de 48 horas hábiles con una propuesta preliminar de sistema y tiempos de fabricación.
          </p>

          <ul className="mt-10 flex flex-col gap-4">
            <li className="flex items-center gap-2.5 text-[#44403C] text-[0.95rem]">
              <MailIcon width={18} height={18} className="text-[#A16207]" /> contacto@cortinex.example
            </li>
            <li className="flex items-center gap-2.5 text-[#44403C] text-[0.95rem]">
              <PhoneIcon width={18} height={18} className="text-[#A16207]" /> +52 55 0000 0000
            </li>
            <li className="flex items-center gap-2.5 text-[#44403C] text-[0.95rem]">
              <PinIcon width={18} height={18} className="text-[#A16207]" /> Ciudad de México, México
            </li>
          </ul>
        </div>

        <form ref={formRef} noValidate onSubmit={handleSubmit} className="bg-white border border-[#D6D3D1] rounded-lg p-10">
          {errorEntries.length > 0 && (
            <div
              ref={summaryRef}
              role="alert"
              tabIndex={-1}
              className="bg-[#FEF2F2] border border-[#DC2626] rounded-sm px-4 py-3.5 mb-6"
            >
              <h3 className="text-[0.95rem] font-semibold text-[#DC2626] mb-1.5">Revise los siguientes campos</h3>
              <ul className="list-disc pl-5">
                {errorEntries.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="text-[#DC2626] text-[0.88rem] underline"
                      onClick={(e) => {
                        e.preventDefault()
                        document.getElementById(id)?.focus()
                      }}
                    >
                      {errors[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="f-name" className={labelClass}>
              Nombre completo
            </label>
            <input
              type="text"
              id="f-name"
              name="name"
              required
              autoComplete="name"
              aria-describedby="f-name-error"
              onBlur={() => handleBlur("f-name")}
              className={fieldClass}
              style={errors["f-name"] ? { borderColor: "#DC2626" } : undefined}
            />
            <p id="f-name-error" className={errorClass}>
              {errors["f-name"]}
            </p>
          </div>

          <div className="mb-6">
            <label htmlFor="f-hotel" className={labelClass}>
              Hotel / Empresa
            </label>
            <input
              type="text"
              id="f-hotel"
              name="hotel"
              required
              autoComplete="organization"
              aria-describedby="f-hotel-error"
              onBlur={() => handleBlur("f-hotel")}
              className={fieldClass}
              style={errors["f-hotel"] ? { borderColor: "#DC2626" } : undefined}
            />
            <p id="f-hotel-error" className={errorClass}>
              {errors["f-hotel"]}
            </p>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 mb-6">
            <div>
              <label htmlFor="f-email" className={labelClass}>
                Correo electrónico
              </label>
              <input
                type="email"
                id="f-email"
                name="email"
                required
                autoComplete="email"
                aria-describedby="f-email-error"
                onBlur={() => handleBlur("f-email")}
                className={fieldClass}
                style={errors["f-email"] ? { borderColor: "#DC2626" } : undefined}
              />
              <p id="f-email-error" className={errorClass}>
                {errors["f-email"]}
              </p>
            </div>
            <div>
              <label htmlFor="f-phone" className={labelClass}>
                Teléfono
              </label>
              <input
                type="tel"
                id="f-phone"
                name="phone"
                autoComplete="tel"
                aria-describedby="f-phone-error"
                onBlur={() => handleBlur("f-phone")}
                className={fieldClass}
              />
              <p id="f-phone-error" className={errorClass} />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="f-rooms" className={labelClass}>
              Número aproximado de habitaciones
            </label>
            <input
              type="number"
              id="f-rooms"
              name="rooms"
              min={1}
              inputMode="numeric"
              aria-describedby="f-rooms-error"
              onBlur={() => handleBlur("f-rooms")}
              className={fieldClass}
            />
            <p id="f-rooms-error" className={errorClass} />
          </div>

          <div className="mb-6">
            <label htmlFor="f-message" className={labelClass}>
              Mensaje
            </label>
            <textarea
              id="f-message"
              name="message"
              rows={4}
              required
              aria-describedby="f-message-error"
              onBlur={() => handleBlur("f-message")}
              className={`${fieldClass} min-h-[110px] resize-y`}
              style={errors["f-message"] ? { borderColor: "#DC2626" } : undefined}
            />
            <p id="f-message-error" className={errorClass}>
              {errors["f-message"]}
            </p>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full min-h-12 rounded-lg font-semibold text-[0.95rem] bg-[#A16207] text-white hover:bg-[#7C4A05] transition-colors cursor-pointer disabled:opacity-80 disabled:cursor-wait flex items-center justify-center gap-2"
          >
            {submitting && (
              <span
                aria-hidden="true"
                className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin"
              />
            )}
            Enviar solicitud
          </button>

          {success && (
            <p role="status" className="mt-4 bg-[#F0FDF4] border border-[#16A34A] text-[#15803D] rounded-sm p-3.5 text-[0.9rem]">
              Gracias — recibimos su solicitud y le responderemos a la brevedad.
            </p>
          )}

          <p className="text-[0.75rem] text-[#57534E] mt-4">
            Este formulario aún no está conectado a un backend/servicio de correo. Antes de publicar, intégrelo con
            su proveedor de envío (por ejemplo, un endpoint propio o un servicio como Formspree).
          </p>
        </form>
      </div>
    </section>
  )
}

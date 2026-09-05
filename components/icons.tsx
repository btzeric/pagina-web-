import type { SVGProps } from "react"

type IconProps = SVGProps<SVGSVGElement>

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
export function ShieldIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export function RulerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <path d="M3 15l6-6 12 12-6 6-12-12z" strokeLinejoin="round" />
      <path d="M8 12l1.5 1.5M11 9l1.5 1.5M14 6l1.5 1.5" strokeLinecap="round" />
    </svg>
  )
}
export function GearIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path
        strokeLinecap="round"
        d="M12 3v2.2M12 18.8V21M21 12h-2.2M5.2 12H3M18.4 5.6l-1.55 1.55M7.15 16.85L5.6 18.4M18.4 18.4l-1.55-1.55M7.15 7.15L5.6 5.6"
      />
    </svg>
  )
}
export function HeadsetIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <path d="M4 13v-1a8 8 0 0116 0v1" strokeLinecap="round" />
      <rect x="3" y="13" width="4" height="6" rx="1.4" />
      <rect x="17" y="13" width="4" height="6" rx="1.4" />
      <path d="M19 19v.5a3 3 0 01-3 3h-2.5" strokeLinecap="round" />
    </svg>
  )
}
export function TrackIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M3 6h18" strokeWidth={1.6} strokeLinecap="round" />
      <path d="M6 6v3.5M10 6v5.5M14 6v3.5M18 6v5.5" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  )
}
export function DropIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <path d="M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" strokeLinejoin="round" />
    </svg>
  )
}
export function WaveIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" {...props}>
      <path d="M3 9c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
      <path d="M3 15c2 0 2 2 4 2s2-2 4-2 2 2 4 2 2-2 4-2 2 2 4 2" />
    </svg>
  )
}
export function MotorIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <rect x="3" y="9" width="12" height="6" rx="1.4" />
      <path d="M15 11h2.5L21 8v8l-3.5-3H15" strokeLinejoin="round" />
    </svg>
  )
}
export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.6" />
      <path d="M4 6.5l8 6.2 8-6.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <path d="M6.6 3.5l3 1.3-1.3 3.1c1 2.3 2.7 4 5 5l3.1-1.3 1.3 3-2.8 2c-4.6-.3-9-4.7-9.3-9.3l2-2.8z" strokeLinejoin="round" />
    </svg>
  )
}
export function PinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} {...props}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 105 9.5C5 14.8 12 21 12 21z" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="2.2" />
    </svg>
  )
}
export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}
export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

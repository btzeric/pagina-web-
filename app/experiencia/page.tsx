import type { Metadata } from "next"
import MusicHero from "@/components/ui/scroll-locked-video-hero"

export const metadata: Metadata = {
  title: "Experiencia interactiva — CORTINEX Hospitality",
}

// This component renders itself full-viewport (its "fullscreen" card
// state uses position: fixed by default), matching how it's designed
// to be used per its own demo.tsx: as the entire page, not one section
// among others. Mounting it inline on the marketing homepage made it
// float over every other section regardless of scroll position, so it
// gets its own route instead — linked from the main nav.
export default function ExperienciaPage() {
  return <MusicHero />
}

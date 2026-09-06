import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant, Montserrat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CORTINEX Hospitality — Cortineros para hoteles",
  description:
    "Diseñamos y fabricamos cortineros técnicos y decorativos para hoteles de gama media y alta: rieles motorizados, sistemas manuales silenciosos, blackout técnico y cortinas decorativas a medida.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${montserrat.variable}`}>
      {/*
        Deliberately not bg-background/text-foreground here: those shadcn
        tokens are set to a DARK palette (see globals.css) so the pasted
        scroll-locked-video-hero component reads a correct dark host theme
        via hsl(var(--background, ...)) on its own /experiencia page. This
        marketing site is predominantly light, so its base text/background
        are the brand's own light-mode colors instead — letting the body
        default to the dark foreground caused headings with no explicit
        color (inheriting text-foreground) to render near-invisible on
        light section backgrounds.
      */}
      <body className="min-h-screen bg-[#FAFAF9] text-[#0C0A09] font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}

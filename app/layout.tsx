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
      <body className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}

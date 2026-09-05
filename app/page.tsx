import { Header } from "@/components/sections/header"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Products } from "@/components/sections/products"
import { WhyUs } from "@/components/sections/why-us"
import { Process } from "@/components/sections/process"
import { Gallery } from "@/components/sections/gallery"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactForm } from "@/components/sections/contact-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:bg-[#A16207] focus:text-white focus:px-4 focus:py-2 focus:rounded-sm"
      >
        Saltar al contenido
      </a>

      <Header />

      <main id="contenido">
        <Hero />
        <Stats />
        <Products />
        <WhyUs />
        <Process />
        <Gallery />
        <Testimonials />
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}

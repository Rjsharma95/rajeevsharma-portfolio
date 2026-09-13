import { Navbar } from "@/layout/Navbar"
import { Footer } from "@/layout/Footer"

import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Skills } from "@/sections/Skills"
import { Thesis } from "@/sections/Thesis"
import { Experience } from "@/sections/Experience"
import { Projects } from "@/sections/Projects"
import { Testimonials } from "@/sections/Testimonials"
import { Contact } from "@/sections/Contact"


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Thesis />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

    </div>
  )
}


export default App
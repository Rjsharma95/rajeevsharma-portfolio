import {
  Code2,
  Workflow,
  MessagesSquare,
  BrainCircuit,
} from "lucide-react"


const highlights = [
  {
    icon: Code2,
    title: "Software & Systems",
    description:
      "Hands-on experience with Python, Java, Linux-based systems, data processing, and embedded environments.",
  },
  {
    icon: Workflow,
    title: "End-to-End Ownership",
    description:
      "Comfortable taking technical work from raw data and initial ideas through implementation, debugging, evaluation, and refinement.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Collaboration",
    description:
      "Used to communicating technical work through documentation, diagrams, reports, presentations, and interdisciplinary teamwork.",
  },
  {
    icon: BrainCircuit,
    title: "Learning & Adaptability",
    description:
      "I enjoy learning new technologies when a problem demands it and applying them practically rather than only studying them in isolation.",
  },
]


export const About = () => {
  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-highlight/5 rounded-full blur-3xl pointer-events-none" />


      <div className="container mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            {/* Section Label */}
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>


            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">

              Engineering software with a{" "}

              <span className="font-serif italic font-normal text-white">
                practical mindset.
              </span>

            </h2>


            {/* About Text */}
            <div className="space-y-5 text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">

              <p>
                I'm Rajeev Sharma, a Computational Engineering Science graduate 
                from Technische Universität Berlin with nearly two years of R&D experience
                across software development(Java & Python), Linux-based systems, 
                hardware/software interfaces, data processing, and machine learning.
              </p>

              <p>
                At SectorCon, I worked primarily with Java, Linux, Raspberry Pi,
                UART and SPI interfaces, publish/subscribe functionality, byte-level
                data conversion, JUnit testing, and remote JVM debugging and execution.
              </p>

              <p>
                For my bachelor thesis, I independently built an end-to-end workflow
                for analysing medical pulse-wave signals — from data acquisition and
                signal processing in Python and MATLAB to CNN training with
                TensorFlow/Keras and evaluation in the BrainChip Akida runtime.
              </p>
                
              <p>
                I'm currently strengthening my computer-science foundations through
                Harvard CS50x and continuing to build practical software projects
                across backend, full-stack, data, and AI.
              </p>

            </div>


            {/* Personal Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">

              <p className="text-lg font-medium italic text-foreground leading-relaxed">

                "I like turning technical problems into practical software —
                and learning whatever I need along the way to build it well."

              </p>

            </div>

          </div>


          {/* Right Column — Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, index) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="glass p-6 rounded-2xl border border-border hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 animate-fade-in"
                  style={{
                    animationDelay: `${(index + 1) * 100}ms`,
                  }}
                >

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group">

                    <Icon className="w-6 h-6 text-primary" />

                  </div>


                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2">
                    {item.title}
                  </h3>


                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>

      </div>

    </section>
  )
}
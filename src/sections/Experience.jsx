const experiences = [
  {
    period: "11/2024 - 09/2026",
    role: "Working Student - Research & Development",
    company: "SectorCon Ingenieurgesellschaft mbH",
    location: "Berlin, Germany",
    description:
      "Worked across software, data, AI, and embedded systems in an R&D environment, developing technical solutions from data processing and interface software to machine-learning workflows.",
    highlights: [
      "Developed Python pipelines for preprocessing, segmentation, feature extraction, analysis, and validation of real medical sensor data.",
      "Built Java applications for configuring and controlling SPI interfaces and improved data-conversion workflows.",
      "Worked with Raspberry Pi and Linux systems for remote execution, debugging, troubleshooting, and systematic error analysis.",
      "Built and evaluated a TensorFlow/Keras CNN for biomedical signal-quality classification and adapted the model for the BrainChip Akida environment.",
    ],
    technologies: [
      "Python",
      "Java",
      "TensorFlow / Keras",
      "Linux",
      "Raspberry Pi",
      "Git / GitLab",
      "Signal Processing",
      "SPI",
    ],
    current: false,
  },

  {
    period: "05/2026 - Present",
    role: "Retail Assistant",
    company: "Primark Mode Ltd. & Co. KG",
    location: "Berlin, Germany",
    description:
      "Currently working in retail alongside my transition into a full-time software engineering role, with daily responsibility for customer service, teamwork, and reliable execution in a fast-paced environment.",
    highlights: [
      "Work effectively with colleagues in a high-volume customer-facing environment.",
      "Handle daily responsibilities reliably while continuing my software engineering projects and job search.",
    ],
    technologies: [
      "Customer Service",
      "Teamwork",
      "Communication",
      "Reliability",
    ],
    current: true,
  },
]

export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Experience built through{" "}

            <span className="font-serif italic font-normal text-white">
              hands-on work.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            From technical R&D in software, data, and AI to working in
            fast-paced team environments.
          </p>

        </div>


        {/* Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
              absolute
              left-0
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-primary/70
              via-primary/30
              to-transparent
              md:-translate-x-1/2
              timeline-glow
            "
          />


          {/* Experience Items */}
          <div className="space-y-16">

            {experiences.map((exp, idx) => (

              <div
                key={`${exp.company}-${exp.role}`}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-0
                    md:left-1/2
                    top-1
                    w-4
                    h-4
                    bg-primary
                    rounded-full
                    -translate-x-1/2
                    ring-4
                    ring-background
                    z-10
                  "
                >
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>


                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >

                  <div className="glass p-6 md:p-8 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">

                    {/* Period */}
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>


                    {/* Role */}
                    <h3 className="text-xl md:text-2xl font-semibold mt-2">
                      {exp.role}
                    </h3>


                    {/* Company */}
                    <p className="text-foreground/90 mt-1">
                      {exp.company}
                    </p>


                    {/* Location */}
                    <p className="text-sm text-muted-foreground mt-1">
                      {exp.location}
                    </p>


                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
                      {exp.description}
                    </p>


                    {/* Highlights */}
                    <ul
                      className={`mt-5 space-y-3 text-sm text-muted-foreground ${
                        idx % 2 === 0
                          ? "md:text-right"
                          : "text-left"
                      }`}
                    >
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className={`flex gap-3 ${
                            idx % 2 === 0
                              ? "md:flex-row-reverse"
                              : ""
                          }`}
                        >
                          <span className="text-primary mt-1">
                            •
                          </span>

                          <span className="leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>


                    {/* Technology / Skill Tags */}
                    <div
                      className={`flex flex-wrap gap-2 mt-6 ${
                        idx % 2 === 0
                          ? "md:justify-end"
                          : ""
                      }`}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="
                            px-3
                            py-1
                            bg-surface
                            border
                            border-border
                            text-xs
                            rounded-full
                            text-muted-foreground
                            hover:text-primary
                            hover:border-primary/30
                            transition-colors
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  )
}
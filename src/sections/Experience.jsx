const experiences = [
  {
    period: "05/2026 - Present",
    role: "Retail Assistant",
    company: "Primark",
    location: "Berlin, Germany",
    description:
      "Part-time retail role alongside applications for software engineering positions.",
    highlights: [],
    technologies: [],
    current: true,
  },

  {
    period: "12/2025 - 04/2026",
    role: "Career Break",
    company: "Extended stay in Nepal",
    location: "Nepal",
    description:
      "Extended stay in Nepal before returning to Germany and continuing my transition into software engineering.",
    highlights: [],
    technologies: [],
    current: false,
  },

  {
    period: "11/2023 - 10/2025",
    role: "Working Student - Research & Development",
    company: "SectorCon Ingenieurgesellschaft mbH",
    location: "Berlin, Germany",

    description:
      "Worked on Java software, Linux-based systems, hardware/software interfaces, testing, debugging, and technical integration in an engineering R&D environment.",

    highlights: [
      "Re-implemented the company's internal publish/subscribe functionality in Java.",
      "Co-developed a Java component that reconstructed byte-level SPI data and converted it into structured JSON.",
      "Developed Java functionality to retrieve and evaluate modem and Wi-Fi status using Linux system commands.",
      "Wrote and executed JUnit tests and configured remote JVM debugging and remote execution under Linux.",
      "Researched UART/SPI communication and Java libraries including jSerialComm and Pi4J under Linux and on Raspberry Pi.",
      "Analysed requirements from technical interface specifications (UART/SPI) and coordinated technical solutions with internal stakeholders.",
      "Worked with Git/GitLab, terminal-based workflows, and technical documentation within the engineering team.",
    ],

    technologies: [
      "Java",
      "Linux",
      "Raspberry Pi",
      "UART",
      "SPI",
      "jSerialComm",
      "Pi4J",
      "JUnit",
      "Git / GitLab",
      "JSON",
    ],

    thesisNote:
      "Completed my bachelor thesis at SectorCon in cooperation with Technische Universität Berlin.",

    current: false,
  },
]


export const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden"
    >

      {/* =====================================================
          BACKGROUND GLOW
          ===================================================== */}

      <div
        className="
          absolute
          top-1/2
          left-1/4
          w-96
          h-96
          bg-primary/5
          rounded-full
          blur-3xl
          -translate-y-1/2
          pointer-events-none
        "
      />


      <div className="container mx-auto px-6 relative z-10">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <div className="max-w-3xl mb-16">

          <span
            className="
              text-secondary-foreground
              text-sm
              font-medium
              tracking-wider
              uppercase
              animate-fade-in
            "
          >
            Career Journey
          </span>


          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              mb-6
              animate-fade-in
              animation-delay-100
              text-secondary-foreground
            "
          >
            Experience built through{" "}

            <span className="font-serif italic font-normal text-white">
              hands-on work.
            </span>
          </h2>


          <p
            className="
              text-muted-foreground
              animate-fade-in
              animation-delay-200
            "
          >
            Professional R&D experience in software and engineering,
            complemented by academic machine-learning work and continued
            professional development.
          </p>

        </div>


        {/* =====================================================
            TIMELINE
            ===================================================== */}

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


          {/* ===================================================
              EXPERIENCE ITEMS
              =================================================== */}

          <div className="space-y-16">

            {experiences.map((exp, idx) => (

              <div
                key={`${exp.company}-${exp.role}`}
                className="
                  relative
                  grid
                  md:grid-cols-2
                  gap-8
                  animate-fade-in
                "
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >

                {/* =================================================
                    TIMELINE DOT
                    ================================================= */}

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
                    <span
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-primary
                        animate-ping
                        opacity-75
                      "
                    />
                  )}
                </div>


                {/* =================================================
                    CARD POSITION
                    ================================================= */}

                <div
                  className={`
                    pl-8
                    md:pl-0

                    ${
                      idx % 2 === 0
                        ? "md:pr-16"
                        : "md:col-start-2 md:pl-16"
                    }
                  `}
                >

                  {/* =================================================
                      EXPERIENCE CARD
                      ================================================= */}

                  <div
                    className={`
                      glass
                      p-6
                      rounded-2xl
                      border
                      transition-all
                      duration-500
                      text-left

                      ${
                        exp.highlights.length > 0
                          ? "md:p-8 border-primary/30 hover:border-primary/50"
                          : "border-border hover:border-primary/30"
                      }
                    `}
                  >

                    {/* Period */}
                    <span
                      className="
                        text-sm
                        text-primary
                        font-medium
                      "
                    >
                      {exp.period}
                    </span>


                    {/* Role */}
                    <h3
                      className="
                        text-xl
                        md:text-2xl
                        font-semibold
                        mt-2
                      "
                    >
                      {exp.role}
                    </h3>


                    {/* Company */}
                    <p
                      className="
                        text-foreground/90
                        mt-1
                      "
                    >
                      {exp.company}
                    </p>


                    {/* Location */}
                    {exp.location && (
                      <p
                        className="
                          text-sm
                          text-muted-foreground
                          mt-1
                        "
                      >
                        {exp.location}
                      </p>
                    )}


                    {/* Description */}
                    <p
                      className="
                        text-sm
                        text-muted-foreground
                        mt-5
                        leading-relaxed
                      "
                    >
                      {exp.description}
                    </p>


                    {/* =================================================
                        PROFESSIONAL HIGHLIGHTS
                        ================================================= */}

                    {exp.highlights.length > 0 && (

                      <ul
                        className="
                          mt-5
                          space-y-3
                          text-sm
                          text-muted-foreground
                          text-left
                        "
                      >

                        {exp.highlights.map((highlight) => (

                          <li
                            key={highlight}
                            className="
                              flex
                              items-start
                              gap-3
                            "
                          >

                            <span
                              className="
                                text-primary
                                mt-1
                                flex-shrink-0
                              "
                            >
                              •
                            </span>


                            <span className="leading-relaxed">
                              {highlight}
                            </span>

                          </li>

                        ))}

                      </ul>

                    )}


                    {/* =================================================
                        PROFESSIONAL TECHNOLOGY TAGS
                        ================================================= */}

                    {exp.technologies.length > 0 && (

                      <div
                        className="
                          flex
                          flex-wrap
                          justify-start
                          gap-2
                          mt-6
                        "
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

                    )}


                    {/* =================================================
                        BACHELOR THESIS REFERENCE
                        ================================================= */}

                    {exp.thesisNote && (

                      <div
                        className="
                          mt-7
                          p-5
                          rounded-xl
                          bg-primary/5
                          border
                          border-primary/25
                        "
                      >

                        <span
                          className="
                            text-xs
                            uppercase
                            tracking-[0.15em]
                            text-primary
                            font-medium
                          "
                        >
                          Bachelor Thesis
                        </span>


                        <p
                          className="
                            text-sm
                            text-muted-foreground
                            leading-relaxed
                            mt-2
                          "
                        >
                          {exp.thesisNote}
                        </p>


                        <a
                          href="#thesis"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            mt-3
                            text-sm
                            font-medium
                            text-primary
                            hover:text-primary/80
                            transition-colors
                          "
                        >
                          View Thesis
                          <span aria-hidden="true">→</span>
                        </a>

                      </div>

                    )}

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
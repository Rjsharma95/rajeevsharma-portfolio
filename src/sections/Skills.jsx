import { useState } from "react"

import {
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Server,
  Terminal,
} from "lucide-react"


const skillGroups = [
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    description:
      "Programming languages and software-development fundamentals.",
    skills: [
      { name: "Python" },
      { name: "Java" },
      { name: "SQL" },
      { name: "JavaScript" },
      { name: "C" },
      { name: "Bash" },
      { name: "MATLAB" },
      { name: "R" },
      { name: "Object-Oriented Programming" },
    ],
  },

  {
    id: "backend",
    title: "Backend & Web",
    icon: Server,
    description:
      "Technologies I've used while building software and web applications.",
    skills: [
      { name: "Flask" },
      { name: "REST API Concepts" },
      { name: "React" },
      { name: "HTML / CSS" },
      { name: "Tailwind CSS" },
      { name: "Vite" },
      { name: "Node.js", note: "Basics" },
      { name: "Django", note: "Basics" },
    ],
  },

  {
    id: "data-ai",
    title: "Data & AI",
    icon: BrainCircuit,
    description:
      "Machine learning, scientific computing, and signal-processing tools.",
    skills: [
      { name: "NumPy" },
      { name: "pandas" },
      { name: "SciPy" },
      { name: "PyWavelets" },
      { name: "TensorFlow / Keras" },
      { name: "CNNs" },
      { name: "Data Preprocessing" },
      { name: "Feature Engineering" },
      { name: "Signal Processing" },
      { name: "Model Evaluation" },
    ],
  },

  {
    id: "systems",
    title: "Systems & Tools",
    icon: Terminal,
    description:
      "Development environments, embedded systems, and engineering tools.",
    skills: [
      { name: "Linux / Unix" },
      { name: "Docker" },
      { name: "Raspberry Pi" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "Remote Execution" },
      { name: "Debugging & Troubleshooting" },
    ],
  },

  {
    id: "cloud",
    title: "Databases & Cloud",
    icon: Cloud,
    description:
      "Database and cloud technologies currently within my engineering stack.",
    skills: [
      { name: "SQL" },
      { name: "Oracle", note: "Basics" },
      { name: "AWS EC2", note: "Basics" },
      { name: "Microsoft Azure", note: "Basics" },
    ],
  },
]


const filters = [
  { id: "all", label: "All", icon: Database },
  ...skillGroups.map((group) => ({
    id: group.id,
    label: group.title,
    icon: group.icon,
  })),
]


export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all")


  const visibleGroups =
    activeFilter === "all"
      ? skillGroups
      : skillGroups.filter(
          (group) => group.id === activeFilter
        )


  return (
    <section
      id="skills"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="
            absolute
            top-1/4
            right-0
            w-96
            h-96
            bg-primary/5
            rounded-full
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-1/4
            -left-24
            w-80
            h-80
            bg-highlight/5
            rounded-full
            blur-3xl
          "
        />

      </div>


      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">

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
            Technical Skills
          </span>


          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              mb-6
              text-secondary-foreground
              animate-fade-in
              animation-delay-100
            "
          >
            Tools I use to turn ideas into{" "}

            <span
              className="
                font-serif
                italic
                font-normal
                text-white
              "
            >
              working systems.
            </span>
          </h2>


          <p
            className="
              text-muted-foreground
              leading-relaxed
              animate-fade-in
              animation-delay-200
            "
          >
            My technical background spans software development,
            data processing, machine learning, signal processing,
            Linux-based systems, and embedded environments.
          </p>

        </div>


        {/* Featured Stack */}
        <div
          className="
            max-w-5xl
            mx-auto
            glass
            rounded-2xl
            border
            border-primary/20
            p-5
            mb-12
            animate-fade-in
            animation-delay-300
          "
        >

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-center
              gap-5
            "
          >

            <div className="flex-shrink-0">

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-primary
                "
              >
                Featured Stack
              </span>

            </div>


            <div className="flex flex-wrap gap-2">

              {[
                "Python",
                "Java",
                "TensorFlow / Keras",
                "Linux",
                "Git",
                "React",
              ].map((skill) => (

                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-primary/10
                    border
                    border-primary/20
                    text-sm
                    text-foreground
                    hover:border-primary/50
                    hover:text-primary
                    hover:-translate-y-0.5
                    transition-all
                    duration-300
                  "
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>


        {/* Filters */}
        <div
          className="
            flex
            items-center
            gap-3
            overflow-x-auto
            pb-3
            mb-12
            max-w-6xl
            mx-auto
            animate-fade-in
            animation-delay-300
          "
        >

          {filters.map((filter) => {
            const Icon = filter.icon
            const isActive =
              activeFilter === filter.id


            return (
              <button
                key={filter.id}
                type="button"
                onClick={() =>
                  setActiveFilter(filter.id)
                }
                aria-pressed={isActive}
                className={`
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2.5
                  rounded-full
                  text-sm
                  font-medium
                  whitespace-nowrap
                  border
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "glass border-border text-muted-foreground hover:text-primary hover:border-primary/30"
                  }
                `}
              >

                <Icon className="w-4 h-4" />

                {filter.label}

              </button>
            )
          })}

        </div>


        {/* Skill Groups */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            max-w-6xl
            mx-auto
          "
        >

          {visibleGroups.map((group, index) => {
            const Icon = group.icon


            return (
              <article
                key={group.id}
                className="
                  group
                  glass
                  rounded-2xl
                  p-6
                  md:p-7
                  border
                  border-border
                  hover:border-primary/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  animate-fade-in
                "
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >

                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:bg-primary/20
                    group-hover:scale-105
                    transition-all
                    duration-300
                  "
                >
                  <Icon className="w-6 h-6 text-primary" />
                </div>


                {/* Group Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {group.title}
                </h3>


                {/* Description */}
                <p
                  className="
                    text-sm
                    text-muted-foreground
                    leading-relaxed
                    mb-6
                    min-h-[42px]
                  "
                >
                  {group.description}
                </p>


                {/* Skills */}
                <div className="flex flex-wrap gap-2">

                  {group.skills.map((skill) => (

                    <div
                      key={skill.name}
                      className="
                        group/skill
                        relative
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-2
                        rounded-lg
                        bg-surface
                        border
                        border-border/70
                        hover:border-primary/40
                        hover:bg-primary/5
                        transition-all
                        duration-300
                      "
                    >

                      <span
                        className="
                          text-xs
                          md:text-sm
                          text-muted-foreground
                          group-hover/skill:text-foreground
                          transition-colors
                        "
                      >
                        {skill.name}
                      </span>


                      {skill.note && (
                        <span
                          className="
                            px-1.5
                            py-0.5
                            rounded
                            bg-muted
                            text-[10px]
                            uppercase
                            tracking-wide
                            text-muted-foreground
                          "
                        >
                          {skill.note}
                        </span>
                      )}

                    </div>

                  ))}

                </div>

              </article>
            )
          })}

        </div>


        {/* Bottom Note */}
        <div
          className="
            max-w-3xl
            mx-auto
            mt-12
            text-center
            animate-fade-in
            animation-delay-500
          "
        >

          <p
            className="
              text-sm
              text-muted-foreground
              leading-relaxed
            "
          >
            I focus on understanding the underlying problem first,
            then choosing the tools that make sense for solving it.
            My stack continues to grow as I take on new projects
            and engineering challenges.
          </p>

        </div>

      </div>
    </section>
  )
}
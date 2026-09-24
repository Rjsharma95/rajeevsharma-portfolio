import {
  ArrowUpRight,
  Bot,
  ChartNoAxesCombined,
  FileText,
  MonitorSmartphone,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"


const projects = [
  {
    title: "Personal Portfolio Website",

    description:
      "Designed and built this responsive portfolio using reusable React components, custom styling, responsive layouts, interactive UI elements, and a working contact flow.",

    icon: MonitorSmartphone,

    tags: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Git",
      "GitHub",
      "Vercel",
    ],

    link: "https://rajeev-dev.vercel.app",

    github:
      "https://github.com/Rjsharma95/rajeevsharma-portfolio",

    documentation: null,

    featured: true,
  },


  {
    title: "Data Analytics with R",

    description:
      "University case study analysing manufacturing and damage-case data for an automatic gearshift system. Worked with multiple datasets, data cleaning, joins, transformation, structured analysis, and visualisation in R.",

    icon: ChartNoAxesCombined,

    tags: [
      "R",
      "R Markdown",
      "dplyr",
      "tidyr",
      "Data Cleaning",
      "Data Analysis",
      "Visualisation",
      "Manufacturing Data",
    ],

    link: null,

    github:
      "https://github.com/Rjsharma95/IDA-Project",

    documentation: null,

    featured: false,
  },


  {
    title: "Autonomous Mobile Cleaning Robot",

    description:
      "Developed an interdisciplinary engineering concept for an autonomous cleaning robot, covering route planning, LiDAR sensing, Raspberry Pi control, drive selection, system interfaces, safety requirements, and engineering calculations.",

    icon: Bot,

    tags: [
      "Raspberry Pi",
      "LiDAR",
      "Route Planning",
      "Embedded Systems",
      "System Design",
      "Robotics",
    ],

    link: null,

    github: null,

    documentation:
      "/projects/autonomous-cleaning-robot-documentation.pdf",

    featured: false,
  },
]


export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >

      {/* Background Effects */}
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
          pointer-events-none
        "
      />


      <div
        className="
          absolute
          bottom-1/4
          left-0
          w-64
          h-64
          bg-highlight/5
          rounded-full
          blur-3xl
          pointer-events-none
        "
      />


      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">

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
            Featured Work
          </span>


          <h2
            className="
              text-secondary-foreground
              text-4xl
              md:text-5xl
              font-bold
              mt-4
              mb-6
              animate-fade-in
              animation-delay-100
            "
          >
            Projects where ideas become{" "}

            <span className="font-serif italic font-normal text-white">
              practical solutions.
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
            A selection of software, data, and engineering projects
            from my academic work and independent development.
          </p>

        </div>


        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => {
            const Icon = project.icon

            const hasProjectLinks =
              project.link ||
              project.github ||
              project.documentation


            return (
              <article
                key={project.title}
                className={`
                  group
                  glass
                  rounded-2xl
                  overflow-hidden
                  border
                  border-border
                  hover:border-primary/40
                  transition-all
                  duration-500
                  animate-fade-in

                  ${
                    project.featured
                      ? "md:col-span-2"
                      : ""
                  }
                `}
                style={{
                  animationDelay: `${(index + 1) * 100}ms`,
                }}
              >

                {/* Project Visual */}
                <div
                  className="
                    relative
                    overflow-hidden
                    aspect-video
                    bg-surface
                  "
                >

                  {/* Gradient Background */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-primary/15
                      via-surface
                      to-background
                    "
                  />


                  {/* Decorative Glow */}
                  <div
                    className="
                      absolute
                      top-1/4
                      left-1/4
                      w-48
                      h-48
                      bg-primary/10
                      rounded-full
                      blur-3xl
                      group-hover:bg-primary/20
                      transition-colors
                      duration-700
                    "
                  />


                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">

                    <div
                      className="
                        w-24
                        h-24
                        rounded-3xl
                        glass
                        glow-border
                        flex
                        items-center
                        justify-center
                        group-hover:scale-110
                        transition-transform
                        duration-500
                      "
                    >
                      <Icon className="w-11 h-11 text-primary" />
                    </div>

                  </div>


                  {/* Bottom Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-card
                      via-transparent
                      to-transparent
                      opacity-70
                    "
                  />


                  {/* Hover Links */}
                  {hasProjectLinks && (

                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        items-center
                        justify-center
                        gap-4
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-300
                      "
                    >

                      {/* Live Project */}
                      {project.link && (

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.title}`}
                          title="View live project"
                          className="
                            p-3
                            rounded-full
                            glass
                            hover:bg-primary
                            hover:text-primary-foreground
                            transition-all
                          "
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>

                      )}


                      {/* GitHub */}
                      {project.github && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          title="View source code"
                          className="
                            p-3
                            rounded-full
                            glass
                            hover:bg-primary
                            hover:text-primary-foreground
                            transition-all
                          "
                        >
                          <FaGithub className="w-5 h-5" />
                        </a>

                      )}


                      {/* Documentation */}
                      {project.documentation && (

                        <a
                          href={project.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} technical documentation`}
                          title="View technical documentation"
                          className="
                            p-3
                            rounded-full
                            glass
                            hover:bg-primary
                            hover:text-primary-foreground
                            transition-all
                          "
                        >
                          <FileText className="w-5 h-5" />
                        </a>

                      )}

                    </div>

                  )}

                </div>


                {/* Project Content */}
                <div className="p-6 md:p-8 space-y-5">

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      {project.featured && (

                        <span
                          className="
                            inline-block
                            text-xs
                            uppercase
                            tracking-wider
                            text-primary
                            mb-2
                          "
                        >
                          Featured Project
                        </span>

                      )}


                      <h3
                        className="
                          text-xl
                          md:text-2xl
                          font-semibold
                          group-hover:text-primary
                          transition-colors
                        "
                      >
                        {project.title}
                      </h3>

                    </div>


                    {hasProjectLinks && (

                      <ArrowUpRight
                        className="
                          w-5
                          h-5
                          flex-shrink-0
                          text-muted-foreground
                          group-hover:text-primary
                          group-hover:translate-x-1
                          group-hover:-translate-y-1
                          transition-all
                        "
                      />

                    )}

                  </div>


                  {/* Description */}
                  <p
                    className="
                      text-muted-foreground
                      text-sm
                      md:text-base
                      leading-relaxed
                    "
                  >
                    {project.description}
                  </p>


                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <span
                        key={tag}
                        className="
                          px-3
                          py-1
                          rounded-full
                          bg-surface
                          text-xs
                          font-medium
                          border
                          border-border/50
                          text-muted-foreground
                          hover:border-primary/50
                          hover:text-primary
                          transition-all
                          duration-300
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>


                  {/* Project Links */}
                  {hasProjectLinks && (

                    <div className="flex flex-wrap gap-5 pt-2">

                      {/* Live Project */}
                      {project.link && (

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            text-primary
                            hover:text-primary/80
                            transition-colors
                          "
                        >
                          Live Project

                          <ArrowUpRight className="w-4 h-4" />
                        </a>

                      )}


                      {/* Source Code */}
                      {project.github && (

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            text-muted-foreground
                            hover:text-primary
                            transition-colors
                          "
                        >
                          Source Code

                          <FaGithub className="w-4 h-4" />
                        </a>

                      )}


                      {/* Technical Documentation */}
                      {project.documentation && (

                        <a
                          href={project.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            text-muted-foreground
                            hover:text-primary
                            transition-colors
                          "
                        >
                          Technical Documentation

                          <FileText className="w-4 h-4" />
                        </a>

                      )}

                    </div>

                  )}

                </div>

              </article>
            )
          })}

        </div>


        {/* GitHub CTA */}
        <div
          className="
            text-center
            mt-12
            animate-fade-in
            animation-delay-500
          "
        >

          <AnimatedBorderButton
            href="https://github.com/Rjsharma95"
            target="_blank"
            rel="noopener noreferrer"
          >

            View More on GitHub

            <FaGithub className="w-5 h-5" />

          </AnimatedBorderButton>

        </div>

      </div>

    </section>
  )
}
import { Button } from "@/components/Button"
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton"

import { FaGithub, FaLinkedin } from "react-icons/fa"

import {
  ArrowRight,
  ChevronDown,
  Download,
  GraduationCap,
} from "lucide-react"


const academicFocus = [
  "Programming",
  "Computer Engineering",
  "Artificial Intelligence & ML",
  "Data Analysis",
  "Automation Engineering",
]


/*
  Small pulse signals positioned around the Hero background.

  Different durations and delays make them appear at different
  times instead of all pulsing together.
*/
const pulseSignals = [
  {
    left: "5%",
    top: "20%",
    width: "110px",
    duration: "8s",
    delay: "0s",
  },
  {
    left: "17%",
    top: "72%",
    width: "90px",
    duration: "10s",
    delay: "2s",
  },
  {
    left: "36%",
    top: "13%",
    width: "100px",
    duration: "9s",
    delay: "5s",
  },
  {
    left: "55%",
    top: "78%",
    width: "115px",
    duration: "11s",
    delay: "1s",
  },
  {
    left: "71%",
    top: "22%",
    width: "105px",
    duration: "9s",
    delay: "6s",
  },
  {
    left: "84%",
    top: "68%",
    width: "95px",
    duration: "10s",
    delay: "3s",
  },
]


/*
  Shared waveform path.

  Keeping the path in one constant prevents the three SVG
  layers from accidentally becoming different.
*/
const pulsePath = `
  M 0 20
  L 18 20
  L 25 19
  L 30 20
  L 36 20
  L 42 8
  L 48 32
  L 54 14
  L 60 20
  L 72 20
  L 78 18
  L 84 20
  L 120 20
`


export const Hero = () => {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      })
  }


  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >

      {/* =====================================================
          ORIGINAL HERO BACKGROUND
          ===================================================== */}

      <div className="absolute inset-0">

        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="
            w-full
            h-full
            object-cover
            opacity-40
          "
        />


        {/* Dark fade keeps text readable */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-background/20
            via-background/80
            to-background
          "
        />

      </div>



      {/* =====================================================
          ANIMATED PULSE SIGNALS
          ===================================================== */}

      <div
        className="
          absolute
          inset-0
          overflow-hidden
          pointer-events-none
          z-[1]
        "
        aria-hidden="true"
      >

        {pulseSignals.map((pulse, index) => (

          <svg
            key={index}
            viewBox="0 0 120 40"
            fill="none"
            className="absolute hero-pulse"
            style={{
              left: pulse.left,
              top: pulse.top,
              width: pulse.width,

              "--pulse-duration": pulse.duration,
              "--pulse-delay": pulse.delay,
            }}
          >

            {/* -----------------------------------------
                Muted pulse underneath
                Always forms the faint base waveform
                ----------------------------------------- */}

            <path
              d={pulsePath}
              pathLength="180"
              fill="none"
              stroke="var(--color-muted-foreground)"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.22"
            />


            {/* -----------------------------------------
                Soft glow following moving signal
                ----------------------------------------- */}

            <path
              d={pulsePath}
              pathLength="180"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-pulse-glow"
            />


            {/* -----------------------------------------
                Bright travelling signal
                ----------------------------------------- */}

            <path
              d={pulsePath}
              pathLength="180"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-pulse-signal"
            />

          </svg>

        ))}

      </div>



      {/* =====================================================
          MAIN HERO CONTENT
          ===================================================== */}

      <div
        className="
          container
          mx-auto
          px-6
          pt-32
          pb-28
          relative
          z-10
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          {/* =================================================
              LEFT COLUMN
              ================================================= */}

          <div className="space-y-8">

            {/* Availability Badge */}
            <div className="animate-fade-in">

              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  glass
                  text-sm
                  text-primary
                "
              >

                <span
                  className="
                    w-2
                    h-2
                    bg-primary
                    rounded-full
                    animate-pulse
                  "
                />

                Open to Software & AI/ML Opportunities

              </span>

            </div>



            {/* Headline */}
            <div className="space-y-5">

              <p
                className="
                  text-sm
                  md:text-base
                  uppercase
                  tracking-[0.2em]
                  text-muted-foreground
                  animate-fade-in
                  animation-delay-100
                "
              >
                Software Engineer · Python · Java · Data & AI
              </p>


              <h1
                className="
                  text-5xl
                  md:text-6xl
                  lg:text-7xl
                  font-bold
                  leading-[1.08]
                  animate-fade-in
                  animation-delay-200
                "
              >

                Building software,

                <br />

                data pipelines &{" "}

                <span className="text-primary glow-text">
                  intelligent
                </span>

                <br />

                <span
                  className="
                    font-serif
                    italic
                    font-normal
                    text-white
                  "
                >
                  engineering systems.
                </span>

              </h1>


              <p
                className="
                  text-lg
                  text-muted-foreground
                  max-w-xl
                  leading-relaxed
                  animate-fade-in
                  animation-delay-300
                "
              >

                Hi, I'm Rajeev Sharma — a Computational Engineering
                graduate with hands-on R&D experience across Python,
                Java, machine learning, Linux-based systems, data
                processing, and embedded environments.

              </p>

            </div>



            {/* =================================================
                CTA BUTTONS
                ================================================= */}

            <div
              className="
                flex
                flex-wrap
                gap-4
                animate-fade-in
                animation-delay-400
              "
            >

              <Button
                size="lg"
                onClick={scrollToProjects}
              >

                View Projects

                <ArrowRight className="w-5 h-5" />

              </Button>


              <AnimatedBorderButton
                href="/Rajeev_Sharma_CV.pdf"
                download
              >

                <Download className="w-5 h-5" />

                Download CV

              </AnimatedBorderButton>

            </div>



            {/* =================================================
                SOCIAL LINKS
                ================================================= */}

            <div
              className="
                flex
                items-center
                gap-4
                animate-fade-in
                animation-delay-500
              "
            >

              <span className="text-sm text-muted-foreground">
                Connect:
              </span>


              {/* GitHub */}
              <a
                href="https://github.com/Rjsharma95"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                title="GitHub"
                className="
                  p-2
                  rounded-full
                  glass
                  hover:bg-primary/20
                  hover:text-primary
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={20} />
              </a>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rjsharma/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                title="LinkedIn"
                className="
                  p-2
                  rounded-full
                  glass
                  hover:bg-primary/20
                  hover:text-primary
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={20} />
              </a>

            </div>

          </div>



          {/* =================================================
              RIGHT COLUMN — PROFILE
              ================================================= */}

          <div
            className="
              relative
              animate-fade-in
              animation-delay-300
            "
          >

            <div className="relative max-w-md mx-auto">

              {/* Profile Glow */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-3xl
                  bg-gradient-to-br
                  from-primary/30
                  via-transparent
                  to-primary/10
                  blur-2xl
                  animate-pulse
                "
              />


              {/* Profile Card */}
              <div
                className="
                  relative
                  glass
                  rounded-3xl
                  p-2
                  glow-border
                "
              >

                <img
                  src="/profile-image.jpg"
                  alt="Rajeev Sharma"
                  className="
                    w-full
                    aspect-[4/5]
                    object-cover
                    rounded-2xl
                  "
                />


                {/* Availability Badge */}
                <div
                  className="
                    absolute
                    -bottom-4
                    -right-2
                    md:-right-4
                    glass
                    rounded-xl
                    px-4
                    py-3
                    animate-float
                  "
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        w-3
                        h-3
                        bg-green-500
                        rounded-full
                        animate-pulse
                      "
                    />

                    <span className="text-sm font-medium">
                      Open to Opportunities
                    </span>

                  </div>

                </div>


                {/* R&D Badge */}
                <div
                  className="
                    absolute
                    -top-4
                    -left-2
                    md:-left-4
                    glass
                    rounded-xl
                    px-4
                    py-3
                    animate-float
                    animation-delay-500
                  "
                >

                  <div
                    className="
                      text-lg
                      md:text-xl
                      font-bold
                      text-primary
                    "
                  >
                    R&D Experience
                  </div>


                  <div className="text-xs text-muted-foreground">
                    Software · Data · AI · Embedded
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* =====================================================
            ACADEMIC FOCUS
            ===================================================== */}

        <div
          className="
            mt-20
            animate-fade-in
            animation-delay-600
          "
        >

          {/* Label */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-2
              mb-6
            "
          >

            <GraduationCap className="w-5 h-5 text-primary" />


            <p
              className="
                text-sm
                text-muted-foreground
                uppercase
                tracking-wider
              "
            >
              Academic Focus
            </p>

          </div>


          {/* Focus Areas */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >

            {academicFocus.map((focus) => (

              <span
                key={focus}
                className="
                  px-4
                  py-2
                  rounded-full
                  glass
                  border
                  border-border
                  text-sm
                  text-muted-foreground
                  hover:text-primary
                  hover:border-primary/40
                  hover:bg-primary/5
                  hover:-translate-y-0.5
                  transition-all
                  duration-300
                "
              >
                {focus}
              </span>

            ))}

          </div>

        </div>

      </div>



      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <div
        className="
          absolute
          bottom-6
          left-1/2
          -translate-x-1/2
          hidden
          md:block
          z-10
          animate-fade-in
          animation-delay-800
        "
      >

        <a
          href="#about"
          aria-label="Scroll to About section"
          className="
            flex
            flex-col
            items-center
            gap-2
            text-muted-foreground
            hover:text-primary
            transition-colors
          "
        >

          <span className="text-xs uppercase tracking-wider">
            Scroll
          </span>


          <ChevronDown className="w-6 h-6 animate-bounce" />

        </a>

      </div>

    </section>
  )
}
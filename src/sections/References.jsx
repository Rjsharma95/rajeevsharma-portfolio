import {
  ChevronLeft,
  ChevronRight,
  Languages,
  Quote,
  UserRound,
} from "lucide-react"

import { useState } from "react"


const references = [
  {
    quote:
      "Während seiner Bachelorarbeit hat Rajeev bewiesen, dass er komplexe wissenschaftlich-technische Probleme äußerst kompetent lösen kann. Er hat bei der Entwicklung von Lösungen eine hohe Selbstständigkeit und ein hohes Engagement gezeigt. Die Zusammenarbeit mit Rajeev war sehr angenehm und professionell.",

    translation:
      "During his bachelor's thesis, Rajeev demonstrated that he is highly capable of solving complex scientific and technical problems. He showed a high degree of independence and commitment in developing solutions. Working with Rajeev was very pleasant and professional.",

    originalLanguage: "de",

    author: "David Löwen",

    context: {
      de: "Bachelorarbeit · Betreuung",
      en: "Bachelor's Thesis · Supervision",
    },

    details: {
      de: [
        "Betreuer meiner Bachelorarbeit",
        "Wissenschaftlicher Mitarbeiter",
        "Technische Universität Berlin",
        "Fakultät V - Verkehrs- und Maschinensysteme",
        "Institut für Werkzeugmaschinen und Fabrikbetrieb",
        "Fachgebiet Mikro- und Feingeräte (PTZ 7)",
      ],

      en: [
        "Bachelor's Thesis Supervisor",
        "Research Assistant",
        "Mechanical Engineering and Transport Systems",
        "Institute for Machine Tools and Factory Management IWF",
        "Micro- and Precision Devices",
      ],
    },
  },
]


export const References = () => {
  const [activeIdx, setActiveIdx] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)

  const activeReference = references[activeIdx]

  const activeDetails = showTranslation
    ? activeReference.details.en
    : activeReference.details.de

  const activeContext = showTranslation
    ? activeReference.context.en
    : activeReference.context.de


  const selectReference = (index) => {
    setActiveIdx(index)
    setShowTranslation(false)
  }


  const next = () => {
    if (references.length <= 1) return

    const nextIndex =
      (activeIdx + 1) % references.length

    selectReference(nextIndex)
  }


  const previous = () => {
    if (references.length <= 1) return

    const previousIndex =
      (activeIdx - 1 + references.length) %
      references.length

    selectReference(previousIndex)
  }


  return (
    <section
      id="references"
      className="py-32 relative overflow-hidden"
    >

      {/* =====================================================
          BACKGROUND GLOW
          ===================================================== */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          w-[800px]
          h-[800px]
          bg-primary/5
          rounded-full
          blur-3xl
          -translate-x-1/2
          -translate-y-1/2
          pointer-events-none
        "
      />


      <div className="container mx-auto px-6 relative z-10">

        {/* =====================================================
            SECTION HEADER
            ===================================================== */}

        <div className="text-center max-w-3xl mx-auto mb-16">

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
            Professional References
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
            References from people I've{" "}

            <span
              className="
                font-serif
                italic
                font-normal
                text-white
              "
            >
              worked with.
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
            Professional references from supervisors and colleagues
            across my academic and professional work.
          </p>

        </div>


        {/* =====================================================
            REFERENCES
            ===================================================== */}

        <div className="max-w-4xl mx-auto">

          <div className="relative">

            {/* =================================================
                REFERENCE CARD
                ================================================= */}

            <div
              className="
                relative
                glass
                p-8
                md:p-12
                rounded-3xl
                glow-border
                animate-fade-in
                animation-delay-200
              "
            >

              {/* Quote Icon */}
              <div
                className="
                  absolute
                  -top-5
                  left-8
                  w-12
                  h-12
                  rounded-full
                  bg-primary
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-primary/20
                "
              >
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>


              {/* =================================================
                  CONTEXT + LANGUAGE BUTTON
                  ================================================= */}

              <div
                className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-4
                  mb-6
                  mt-2
                "
              >

                {/* Context */}
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-primary
                  "
                >
                  {activeContext}
                </span>


                {/* Translation Button */}
                {activeReference.translation && (

                  <button
                    type="button"
                    onClick={() =>
                      setShowTranslation((prev) => !prev)
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      self-start
                      sm:self-auto
                      px-3
                      py-2
                      rounded-full
                      border
                      border-border
                      text-xs
                      text-muted-foreground

                      hover:text-primary
                      hover:border-primary/40
                      hover:bg-primary/5

                      transition-all
                      duration-300
                    "
                    aria-label={
                      showTranslation
                        ? "Show original German reference"
                        : "Translate reference to English"
                    }
                  >
                    <Languages className="w-4 h-4" />

                    {showTranslation
                      ? "Original auf Deutsch"
                      : "Translate to English"}
                  </button>

                )}

              </div>


              {/* =================================================
                  QUOTE
                  ================================================= */}

              <blockquote
                lang={
                  showTranslation
                    ? "en"
                    : activeReference.originalLanguage
                }
                className="
                  text-xl
                  md:text-2xl
                  font-medium
                  leading-relaxed
                  mb-5
                "
              >
                “
                {showTranslation
                  ? activeReference.translation
                  : activeReference.quote}
                ”
              </blockquote>


              {/* =================================================
                  TRANSLATION NOTICE
                  ================================================= */}

              {showTranslation ? (

                <p
                  className="
                    text-xs
                    text-muted-foreground/70
                    mb-10
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Languages className="w-3.5 h-3.5" />

                  English translation of the original German reference
                </p>

              ) : (

                <div className="mb-10" />

              )}


              {/* =================================================
                  AUTHOR
                  ================================================= */}

              <div className="flex items-start gap-4">

                {/* Vector Avatar */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-full
                    bg-primary/10
                    border
                    border-primary/20

                    flex
                    items-center
                    justify-center

                    flex-shrink-0
                  "
                >
                  <UserRound className="w-7 h-7 text-primary" />
                </div>


                {/* =================================================
                    AUTHOR DETAILS
                    ================================================= */}

                <div className="min-w-0">

                  {/* Name */}
                  <div
                    className="
                      text-lg
                      font-semibold
                      text-foreground
                    "
                  >
                    {activeReference.author}
                  </div>


                  {/* Position / University Information */}
                  <div className="mt-2">

                    {activeDetails.map((detail, index) => (

                      <div
                        key={`${activeReference.author}-${detail}`}
                        className={
                          index === 0
                            ? `
                                text-sm
                                font-medium
                                text-primary
                                leading-relaxed
                              `
                            : `
                                text-sm
                                text-muted-foreground
                                leading-relaxed
                                mt-0.5
                              `
                        }
                      >
                        {detail}
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                CAROUSEL NAVIGATION
                ================================================= */}

            {references.length > 1 && (

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-5
                  mt-8
                "
              >

                {/* Previous */}
                <button
                  type="button"
                  onClick={previous}
                  aria-label="Previous reference"
                  className="
                    p-3
                    rounded-full
                    glass
                    text-muted-foreground

                    hover:bg-primary/20
                    hover:text-primary

                    transition-all
                    duration-300
                  "
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>


                {/* Indicators */}
                <div className="flex items-center gap-2">

                  {references.map((reference, idx) => (

                    <button
                      key={`${reference.author}-${idx}`}
                      type="button"
                      onClick={() =>
                        selectReference(idx)
                      }
                      aria-label={`View reference ${idx + 1}`}
                      aria-current={
                        idx === activeIdx
                          ? "true"
                          : undefined
                      }
                      className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          idx === activeIdx
                            ? "w-8 bg-primary"
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        }
                      `}
                    />

                  ))}

                </div>


                {/* Next */}
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next reference"
                  className="
                    p-3
                    rounded-full
                    glass
                    text-muted-foreground

                    hover:bg-primary/20
                    hover:text-primary

                    transition-all
                    duration-300
                  "
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  )
}
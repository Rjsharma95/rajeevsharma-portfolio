import {
  ChevronLeft,
  ChevronRight,
  Quote,
  UserRound,
} from "lucide-react"

import { useState } from "react"


/*
  Add the testimonials here once you receive permission.

  Suggested order:

  1. Thesis Supervisor
  2. Former Employer / R&D Supervisor
  3. Former Employer / Colleague
  4. Current Employer

  Example:

  {
    quote:
      "Actual approved testimonial goes here.",
    author: "Full Name",
    role: "Thesis Supervisor",
    company: "Technische Universität Berlin",
    context: "Bachelor Thesis",
    avatar: "/testimonials/name.jpg",
  }

  If you do not have permission to use their photo:

  avatar: null
*/

const testimonials = []


export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const hasTestimonials = testimonials.length > 0
  const activeTestimonial = testimonials[activeIdx]


  const next = () => {
    if (testimonials.length <= 1) return

    setActiveIdx(
      (prev) => (prev + 1) % testimonials.length
    )
  }


  const previous = () => {
    if (testimonials.length <= 1) return

    setActiveIdx(
      (prev) =>
        (prev - 1 + testimonials.length) %
        testimonials.length
    )
  }


  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
    >

      {/* Background Glow */}
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

        {/* Section Header */}
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
            Testimonials
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
            Words from people I've{" "}

            <span className="font-serif italic font-normal text-white">
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
            Professional feedback from supervisors, colleagues,
            and people I've worked with throughout my academic
            and professional journey.
          </p>

        </div>


        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">

          {hasTestimonials ? (

            <div className="relative">

              {/* Main Testimonial Card */}
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


                {/* Reference Context */}
                {activeTestimonial.context && (
                  <span
                    className="
                      inline-block
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-primary
                      mb-5
                      mt-2
                    "
                  >
                    {activeTestimonial.context}
                  </span>
                )}


                {/* Testimonial Quote */}
                <blockquote
                  className="
                    text-xl
                    md:text-2xl
                    font-medium
                    leading-relaxed
                    mb-10
                  "
                >
                  “{activeTestimonial.quote}”
                </blockquote>


                {/* Author */}
                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  {activeTestimonial.avatar ? (

                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.author}
                      className="
                        w-14
                        h-14
                        rounded-full
                        object-cover
                        ring-2
                        ring-primary/20
                      "
                    />

                  ) : (

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
                      <UserRound className="w-6 h-6 text-primary" />
                    </div>

                  )}


                  {/* Author Details */}
                  <div>

                    <div className="font-semibold text-foreground">
                      {activeTestimonial.author}
                    </div>


                    <div className="text-sm text-muted-foreground mt-1">

                      {activeTestimonial.role}

                      {activeTestimonial.company && (
                        <>
                          {" · "}
                          {activeTestimonial.company}
                        </>
                      )}

                    </div>

                  </div>

                </div>

              </div>


              {/* Carousel Navigation */}
              {testimonials.length > 1 && (

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-5
                    mt-8
                  "
                >

                  {/* Previous Button */}
                  <button
                    type="button"
                    onClick={previous}
                    aria-label="Previous testimonial"
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

                    {testimonials.map((testimonial, idx) => (

                      <button
                        key={`${testimonial.author}-${idx}`}
                        type="button"
                        onClick={() => setActiveIdx(idx)}
                        aria-label={`View testimonial ${idx + 1}`}
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


                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={next}
                    aria-label="Next testimonial"
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

          ) : (

            /* Temporary State Until References Are Approved */
            <div
              className="
                relative
                glass
                rounded-3xl
                p-8
                md:p-12
                text-center
                border
                border-border
                animate-fade-in
                animation-delay-200
              "
            >

              {/* Icon */}
              <div
                className="
                  w-16
                  h-16
                  mx-auto
                  mb-6
                  rounded-2xl
                  bg-primary/10
                  border
                  border-primary/20
                  flex
                  items-center
                  justify-center
                "
              >
                <Quote className="w-8 h-8 text-primary" />
              </div>


              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-semibold
                  mb-4
                "
              >
                Professional References
              </h3>


              <p
                className="
                  text-muted-foreground
                  max-w-xl
                  mx-auto
                  leading-relaxed
                "
              >
                I'm currently collecting approved testimonials
                from supervisors and people I've worked with.
                References will be added here with their permission.
              </p>

            </div>

          )}

        </div>

      </div>
    </section>
  )
}
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
  BriefcaseBusiness,
} from "lucide-react"

import { Button } from "@/components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"


const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "rjsharma.ing@gmail.com",
    href: "mailto:rjsharma.ing@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+49 176 61204130",
    href: "tel:+4917661204130",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Berlin, Germany",
    href: null,
  },
]


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  })


  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }


  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)

    setSubmitStatus({
      type: null,
      message: "",
    })

    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID

      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY


      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        )
      }


      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          time: new Date().toLocaleString(),
        },
        {
          publicKey,
        }
      )


      setSubmitStatus({
        type: "success",
        message:
          "Message sent successfully! I'll get back to you soon.",
      })


      setFormData({
        name: "",
        email: "",
        message: "",
      })

    } catch (err) {
      console.error("EmailJS error:", err)

      setSubmitStatus({
        type: "error",
        message:
          err?.text ||
          err?.message ||
          "Failed to send the message. You can also contact me directly by email.",
      })

    } finally {
      setIsLoading(false)
    }
  }


  return (
    <section
      id="contact"
      className="py-32 relative overflow-hidden"
    >

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      </div>


      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>


          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">

            Let's{" "}

            <span className="font-serif italic font-normal text-white">
              connect.
            </span>

          </h2>


          <p className="text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">

            Whether you're hiring for a software engineering,
            Python, Java, data, or AI-focused role — or simply want
            to discuss an interesting technical opportunity — I'd
            be happy to hear from you.

          </p>

        </div>


        {/* Contact Grid */}
        <div
          className="
            grid
            lg:grid-cols-[1.15fr_0.85fr]
            gap-10
            max-w-6xl
            mx-auto
            items-stretch
          "
        >

          {/* LEFT — Contact Form */}
          <div
            className="
              glass
              p-8
              md:p-10
              rounded-3xl
              border
              border-primary/30
              animate-fade-in
              animation-delay-300
              h-full
            "
          >

            {/* Form Header */}
            <div className="mb-8">

              <h3 className="text-2xl font-semibold mb-2">
                Send Me a Message
              </h3>


              <p className="text-sm text-muted-foreground">
                Have a role, opportunity, or technical topic you'd
                like to discuss? Feel free to reach out.
              </p>

            </div>


            <form
              className="space-y-6"
              onSubmit={handleSubmit}
            >

              {/* Name */}
              <div>

                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>


                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  maxLength={80}
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3.5
                    bg-surface
                    rounded-xl
                    border
                    border-border
                    focus:border-primary
                    focus:ring-1
                    focus:ring-primary
                    outline-none
                    transition-all
                  "
                />

              </div>


              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>


                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  maxLength={120}
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3.5
                    bg-surface
                    rounded-xl
                    border
                    border-border
                    focus:border-primary
                    focus:ring-1
                    focus:ring-primary
                    outline-none
                    transition-all
                  "
                />

              </div>


              {/* Message */}
              <div>

                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>


                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about the role, opportunity, or what you'd like to discuss..."
                  required
                  rows={8}
                  maxLength={2000}
                  value={formData.message}
                  onChange={handleChange}
                  className="
                    w-full
                    min-h-[220px]
                    px-4
                    py-4
                    bg-surface
                    rounded-xl
                    border
                    border-border
                    focus:border-primary
                    focus:ring-1
                    focus:ring-primary
                    outline-none
                    transition-all
                    resize-y
                  "
                />

              </div>


              {/* Submit Button */}
              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >

                {isLoading ? (
                  <>

                    <span
                      className="
                        w-5
                        h-5
                        rounded-full
                        border-2
                        border-primary-foreground/30
                        border-t-primary-foreground
                        animate-spin
                      "
                    />

                    Sending...

                  </>
                ) : (
                  <>

                    Send Message

                    <Send className="w-5 h-5" />

                  </>
                )}

              </Button>


              {/* Success / Error Message */}
              {submitStatus.type && (

                <div
                  role="status"
                  aria-live="polite"
                  className={`
                    flex
                    items-start
                    gap-3
                    p-4
                    rounded-xl

                    ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }
                  `}
                >

                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  )}


                  <p className="text-sm leading-relaxed">
                    {submitStatus.message}
                  </p>

                </div>

              )}

            </form>

          </div>


          {/* RIGHT SIDE */}
          <div
            className="
              h-full
              flex
              flex-col
              gap-6
              animate-fade-in
              animation-delay-400
            "
          >

            {/* Open to Opportunities */}
            <div
              className="
                glass
                rounded-3xl
                p-8
                border
                border-primary/30
                glow-border
              "
            >

              <div className="flex items-start gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-primary/10
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <BriefcaseBusiness className="w-5 h-5 text-primary" />
                </div>


                <div>

                  <div className="flex items-center gap-3 mb-3">

                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />

                    <span className="font-semibold text-lg">
                      Open to Opportunities
                    </span>

                  </div>


                  <p className="text-muted-foreground text-sm leading-relaxed">

                    I'm currently looking for software engineering
                    opportunities across Germany, with a particular
                    interest in Python, Java, backend development,
                    data, and AI/ML-related roles.

                  </p>


                  <p className="text-muted-foreground text-sm leading-relaxed mt-3">

                    I'm open to on-site, hybrid, and remote
                    opportunities and happy to discuss roles where
                    my engineering and R&D background can add value.

                  </p>

                </div>

              </div>

            </div>


            {/* Contact Information */}
            <div
              className="
                glass
                border
                border-primary/30
                rounded-3xl
                p-8
                flex-1
              "
            >

              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>


              <p className="text-sm text-muted-foreground mb-6">

                Prefer contacting me directly? You can reach me
                using any of the details below.

              </p>


              <div className="space-y-3">

                {contactInfo.map((item) => {
                  const Icon = item.icon


                  const content = (
                    <>
                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-primary/10
                          flex
                          items-center
                          justify-center
                          group-hover:bg-primary/20
                          transition-colors
                          flex-shrink-0
                        "
                      >
                        <Icon className="w-5 h-5 text-primary" />
                      </div>


                      <div className="min-w-0">

                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>


                        <div className="font-medium break-words">
                          {item.value}
                        </div>

                      </div>
                    </>
                  )


                  return item.href ? (

                    <a
                      key={item.label}
                      href={item.href}
                      className="
                        flex
                        items-center
                        gap-4
                        p-4
                        rounded-xl
                        hover:bg-surface
                        transition-colors
                        group
                      "
                    >
                      {content}
                    </a>

                  ) : (

                    <div
                      key={item.label}
                      className="
                        flex
                        items-center
                        gap-4
                        p-4
                        rounded-xl
                        group
                      "
                    >
                      {content}
                    </div>

                  )
                })}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
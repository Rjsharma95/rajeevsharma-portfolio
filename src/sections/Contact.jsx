import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
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

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    setSubmitStatus({
      type: null,
      message: "",
    })

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        )
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        {
          publicKey,
        }
      )

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
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
          "Failed to send message. Please try again later.",
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
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project or opportunity in mind? Send me a message and I'll
            get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
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
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
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
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
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
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
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
                  <span>Sending...</span>
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
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}

                  <p className="text-sm">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">

            {/* Contact Information Card */}
            <div className="glass border border-primary/30 rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon

                  const content = (
                    <>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>

                      <div>
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>

                        <div className="font-medium">
                          {item.value}
                        </div>
                      </div>
                    </>
                  )

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-xl group"
                    >
                      {content}
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />

                <span className="font-medium">
                  Open to Opportunities
                </span>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm currently open to software engineering and AI/ML
                opportunities, as well as interesting technical collaborations.
                Feel free to get in touch if you think my background could be a
                good fit for your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
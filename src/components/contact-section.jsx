import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"

export default function ContactSection() {
  const contactLinks = [
    {
      id: 1,
      name: "Email",
      icon: Mail,
      href: "mailto:therawan.jason@gmail.com",
      label: "therawan.jason@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/JasonTherawan",
      label: "linkedin.com/in/JasonTherawan",
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 3,
      name: "GitHub",
      icon: Github,
      href: "https://github.com/JasonTherawan",
      label: "github.com/JasonTherawan",
      color: "from-gray-700 to-gray-900",
    },
  ]

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ready to collaborate or discuss opportunities? Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <a
                key={contact.id}
                href={contact.href}
                target={contact.name !== "Email" ? "_blank" : undefined}
                rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10 text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${contact.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {contact.name}
                  </h3>

                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 break-all">
                    {contact.label}
                  </p>

                  {/* External Link Icon */}
                  {contact.name !== "Email" && (
                    <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors duration-300 mt-2 mx-auto opacity-0 group-hover:opacity-100" />
                  )}
                </div>
              </a>
            )
          })}
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Jason Therawan. Built with passion and precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
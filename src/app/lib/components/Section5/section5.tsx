"use client"

import { Mail, MapPin, Linkedin, Github } from "lucide-react"

const Section5 = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#18181b" }}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: "#fafafa" }}>
            Let's Work Together
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#fafafa", opacity: 0.8 }}>
            I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas
            to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="group border shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 0 0 transparent", // Initial shadow
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-6" style={{ color: "#fafafa" }}>
                Get In Touch
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" style={{ color: "#fafafa" }} />
                  <div>
                    <p className="font-medium" style={{ color: "#fafafa" }}>
                      Email
                    </p>
                    <a
                      href="mailto:shalini@ascodelabs.com"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: "#fafafa", opacity: 0.8 }}
                    >
                      shalini@ascodelabs.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3" style={{ color: "#fafafa" }} />
                  <div>
                    <p className="font-medium" style={{ color: "#fafafa" }}>
                      Location
                    </p>
                    <p style={{ color: "#fafafa", opacity: 0.8 }}>Chennai</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 mr-3" style={{ color: "#fafafa" }} />
                  <div>
                    <p className="font-medium" style={{ color: "#fafafa" }}>
                      LinkedIn
                    </p>
                    <a
                      href="#"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: "#fafafa", opacity: 0.8 }}
                    >
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Github className="h-5 w-5 mr-3" style={{ color: "#fafafa" }} />
                  <div>
                    <p className="font-medium" style={{ color: "#fafafa" }}>
                      GitHub
                    </p>
                    <a
                      href="#"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: "#fafafa", opacity: 0.8 }}
                    >
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="group border shadow-lg"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 0 0 0 transparent", // Initial shadow
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
          >
            <div className="p-6">
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: '#fafafa' }}
              >
                Quick Message
              </h3>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#fafafa", opacity: 0.8 }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "#fafafa",
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#fafafa", opacity: 0.8 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "#fafafa",
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                    style={{ color: "#fafafa", opacity: 0.8 }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      color: "#fafafa",
                    }}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="shadow-lg hover:opacity-90 transition-opacity cursor-pointer px-4 py-2 rounded-md"
                  style={{ backgroundColor: "#fafafa", color: "#18181b" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
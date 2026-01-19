"use client"

import { Mail, MapPin, Linkedin, Github } from "lucide-react"

const Section5 = () => {
  return (
    <section
      id="contact"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--accent-color)' }}
          >
            Let&apos;s Work Together
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#fafafa', opacity: 0.8 }}
          >
            I&apos;m always interested in new opportunities and exciting
            projects. Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="group border shadow-lg rounded-2xl transition-all duration-300 hover:scale-[1.01] w-full max-w-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow:
                '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 95, 21, 0.1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            <div className="p-6">
              <h3
                className="text-xl font-semibold mb-6"
                style={{ color: '#fafafa' }}
              >
                Get In Touch
              </h3>

              <div className="space-y-8">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" style={{ color: '#fafafa' }} />
                  <div>
                    <p className="font-medium" style={{ color: '#fafafa' }}>
                      Email
                    </p>
                    <a
                      href="mailto:shalini.munusami03@gmail.com"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: '#fafafa', opacity: 0.8 }}
                    >
                      shalini.munusami03@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin
                    className="h-5 w-5 mr-3"
                    style={{ color: '#fafafa' }}
                  />
                  <div>
                    <p className="font-medium" style={{ color: '#fafafa' }}>
                      Location
                    </p>
                    <p style={{ color: '#fafafa', opacity: 0.8 }}>Chennai, Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Linkedin
                    className="h-5 w-5 mr-3"
                    style={{ color: '#fafafa' }}
                  />
                  <div>
                    <p className="font-medium" style={{ color: '#fafafa' }}>
                      LinkedIn
                    </p>
                    <a
                      href="https://www.linkedin.com/in/shalini-munusami/"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: '#fafafa', opacity: 0.8 }}
                    >
                      https://www.linkedin.com/in/shalini-munusami/
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <Github
                    className="h-5 w-5 mr-3"
                    style={{ color: '#fafafa' }}
                  />
                  <div>
                    <p className="font-medium" style={{ color: '#fafafa' }}>
                      GitHub
                    </p>
                    <a
                      href="https://github.com/shalini-2305"
                      className="transition-opacity hover:opacity-80"
                      style={{ color: '#fafafa', opacity: 0.8 }}
                    >
                      https://github.com/shalini-2305
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className="group border shadow-lg rounded-2xl transition-all duration-300 hover:scale-[1.01]"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)',
              boxShadow:
                '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                '0 12px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 95, 21, 0.1)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
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
                    style={{ color: '#fafafa', opacity: 0.8 }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#fafafa',
                    }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                    style={{ color: '#fafafa', opacity: 0.8 }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#fafafa',
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                    style={{ color: '#fafafa', opacity: 0.8 }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{
                      borderColor: 'rgba(255, 255, 255, 0.2)',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: '#fafafa',
                    }}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="shadow-lg hover:opacity-90 transition-opacity cursor-pointer px-4 py-2 rounded-md"
                  style={{
                    border: '2px solid var(--accent-color)',
                    backgroundColor: 'transparent',
                    color: 'var(--accent-color)',
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Section5;

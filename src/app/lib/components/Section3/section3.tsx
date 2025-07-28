'use client';

import { ExternalLink, Globe, Code } from 'lucide-react';

const Section3 = () => {
  const projects = [
    {
      title: 'Ascodelabs Main Website',
      description:
        'Complete development and deployment of the main company website.',
      url: 'https://ascodelabs.com',
      category: 'Corporate Website',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript'],
      status: 'Developed & Deployed',
      summary:
        'Designed and developed the entire frontend with Next.js for SSR, React for UI, and Tailwind CSS for responsive design. The project improved brand visibility and client engagement, enhancing overall user experience.',
    },
    {
      title: 'Stamp Management System',
      description:
        'Comprehensive digital stamp management platform with auth and inventory tracking.',
      url: 'https://stamp.ascodelabs.com',
      category: 'Web Application',
      technologies: [
        'React',
        'Node.js',
        'SQL',
        'API',
        'AI',
        'E-commerce',
        'Stripe',
        'Supabase',
      ],
      status: 'Developed & Deployed',
      summary:
        'Built a full-stack solution with React for UI, Node.js/SQL backend, Supabase for authentication, and integrated Stripe payments with AI features. Automated inventory management and sales processes, reducing errors while expanding market reach and enhancing user insights.',
    },
    {
      title: 'Realty Sample Website',
      description:
        'Professional real estate showcase demonstrating property listings and search.',
      url: 'https://ascodelabs.com/sample/realty',
      category: 'Sample Website',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Framework'],
      status: 'Developed & Deployed',
      summary:
        'Created a responsive, visually appealing demo site using pure HTML5, CSS3, and vanilla JavaScript with a mobile-first approach. Served as a strong demonstration of web development capabilities for potential clients with clean code and intuitive navigation.',
    },
    {
      title: 'Billsheet Management',
      description:
        'Advanced billing and invoice management system with automation and reporting.',
      url: 'https://billsheet.ascodelabs.com',
      category: 'Business Application',
      technologies: [
        'Python',
        'Database Management',
        'PDF Generation',
        'Automation',
      ],
      status: 'Deployed & Running',
      summary:
        'Implemented core logic for invoice generation, calculations, and data reporting using Python for backend processing and automation. Streamlined billing processes, reduced manual effort by 70%, and significantly improved financial accuracy.',
    },
  ];

  return (
    <section
      id="works"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Globe
              className="h-8 w-8 mr-3"
              style={{ color: 'var(--accent-color)' }}
            />
            <h2
              className="text-3xl sm:text-4xl font-bold"
              style={{ color: 'var(--accent-color)' }}
            >
              My Works
            </h2>
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#fafafa' }}>
            Explore the websites and applications I&apos;ve developed and
            deployed. Each project represents a unique solution crafted with
            attention to detail and modern web standards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded-2xl"
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
                  '0 12px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 95, 21, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <Code className="h-6 w-6 mr-2 text-[#fafafa]" />
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-2"
                      style={{ color: '#fafafa' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium shadow-sm border whitespace-nowrap"
                    style={{
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                      color: '#fafafa',
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="mb-3">
                  <span
                    className="px-2 py-1 rounded text-sm font-medium"
                    style={{
                      backgroundColor: 'rgba(250, 250, 250, 0.1)',
                      color: '#fafafa',
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                <p className="mb-4 leading-relaxed text-[#fafafa] opacity-80">
                  {project.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm leading-relaxed text-[#fafafa] opacity-80">
                    {project.summary}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2 text-[#fafafa]">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 rounded text-xs shadow-sm"
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: '#fafafa',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-[rgba(250, 250, 250, 0.1)]">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 rounded-md shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center no-underline"
                    style={{
                      border: '2px solid var(--accent-color)',
                      backgroundColor: 'transparent',
                      color: 'var(--accent-color)',
                    }}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="rounded-lg p-6 shadow-lg bg-[rgba(255, 255, 255, 0.05)] border border-[rgba(255, 255, 255, 0.1)]">
            <h3 className="text-xl font-semibold mb-2 text-[#fafafa]">
              Ready to Build Your Next Project?
            </h3>
            <p className="mb-4 text-[#fafafa] opacity-80">
              Let&apos;s discuss how I can help bring your vision to life with
              modern web technologies.
            </p>
            <button
              className="p-2 rounded-md hover:opacity-80 transition-opacity bg-transparent border"
              style={{
                borderColor: 'var(--accent-color)',
                color: 'var(--accent-color)',
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;

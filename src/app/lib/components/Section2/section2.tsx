'use client';

import { Code, Database, Globe, Cog, Wrench } from 'lucide-react';

const Section2 = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="h-8 w-8" style={{ color: '#fafafa' }} />,
      skills: [
        'JavaScript (ES6+)',
        'React.js',
        'Next.js',
        'HTML5',
        'CSS3',
        'Cross-Browser Compatibility',
        'NextAuth',
        'OAuth',
      ],
      description: 'Building responsive and interactive user interfaces',
    },
    {
      title: 'Backend Development',
      icon: <Code className="h-8 w-8" style={{ color: '#fafafa' }} />,
      skills: ['Node.js', 'RESTful APIs', 'Supabase', 'Drizzle ORM'],
      description: 'Creating robust server-side applications and APIs',
    },
    {
      title: 'Databases',
      icon: <Database className="h-8 w-8" style={{ color: '#fafafa' }} />,
      skills: ['MySQL', 'PostgreSQL'],
      description: 'Designing and managing efficient database systems',
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cog className="h-8 w-8" style={{ color: '#fafafa' }} />,
      skills: [
        'Google Cloud Platform (GCP)',
        'Cloudflare',
        'Coolify',
        'CI/CD Pipelines',
        'UNIX / Linux',
      ],
      description: 'Streamlining development and deployment processes',
    },
    {
      title: 'Tools & Platforms',
      icon: <Wrench className="h-8 w-8" style={{ color: '#fafafa' }} />,
      skills: [
        'Git',
        'GitHub',
        'Postman',
        'Namecheap (Domain & DNS)',
        'OpenAI Platform',
        'n8n',
        'Stripe',
        'Polar',
      ],
      description: 'Essential tools and platforms for development workflow',
    },
  ];

  return (
    <section
      id="skills"
      className="mt-18 pt-20 pb-14 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--accent-color)' }}
          >
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg rounded-2xl ${
                index === skillCategories.length - 1
                  ? 'md:col-span-2 md:max-w-2xl md:mx-auto'
                  : ''
              }`}
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
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3
                    className="text-xl font-semibold ml-3"
                    style={{ color: '#fafafa' }}
                  >
                    {category.title}
                  </h3>
                </div>
                <p className="mb-4 text-[#fafafa] opacity-80">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium border"
                      style={{
                        backgroundColor: 'transparent',
                        color: '#fafafa',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;

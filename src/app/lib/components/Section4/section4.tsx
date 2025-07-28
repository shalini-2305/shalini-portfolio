'use client';

import { Building, Calendar, MapPin } from 'lucide-react';

const Section4 = () => {
  const experiences = [
    {
      title: 'Fullstack Developer',
      company: 'Ascodelabs',
      period: 'Current Position',
      location: 'Chennai',
      responsibilities: [
        'Develop and maintain full-stack web applications using React, Next.js, Python, and Tailwind CSS.',
        'Build optimized backend APIs, database systems, and manage DevOps processes including deployment.',
        'Implement automation workflows using n8n and collaborate on project architecture and code reviews.',
      ],
      achievements: [
        'Successfully deployed multiple production applications.',
        'Improved application performance and user experience.',
        'Streamlined deployment processes through automation.',
      ],
    },
  ];

  const additionalSkills = [
    'Version Control with Git',
    'API Development & Integration',
    'Application Deployment & Hosting',
    'Domain Management & DNS Configuration',
    'Agile Development Methodologies',
    'Workflow Automation with n8n',
    'Proficient in AI',
    'Proficient in Cursor',
  ];

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#0c0000' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: 'var(--accent-color)' }}
          >
            Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-6 border shadow-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3
                        className="text-xl font-semibold mb-1"
                        style={{ color: '#fafafa' }}
                      >
                        {exp.title}
                      </h3>
                      <div
                        className="flex items-center mb-2"
                        style={{ color: '#fafafa' }}
                      >
                        <Building className="h-4 w-4 mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div
                      className="flex flex-col sm:items-end text-sm"
                      style={{ color: '#fafafa', opacity: 0.8 }}
                    >
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4
                      className="font-medium mb-2"
                      style={{ color: '#fafafa' }}
                    >
                      Key Responsibilities:
                    </h4>
                    <ul
                      className="list-disc list-inside space-y-1 text-sm"
                      style={{ color: '#fafafa', opacity: 0.8 }}
                    >
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4
                      className="font-medium mb-2"
                      style={{ color: '#fafafa' }}
                    >
                      Key Achievements:
                    </h4>
                    <ul
                      className="list-disc list-inside space-y-1 text-sm"
                      style={{ color: '#fafafa', opacity: 0.8 }}
                    >
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div
              className="border shadow-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="p-6">
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: '#fafafa' }}
                >
                  Additional Expertise
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {additionalSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 rounded-lg transition-all duration-200 hover:scale-[1.03]"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#fafafa',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-3"
                        style={{ backgroundColor: 'var(--accent-color)' }}
                      ></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

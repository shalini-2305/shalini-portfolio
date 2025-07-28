'use client';

import { Building, Calendar, MapPin } from 'lucide-react';

const Section4 = () => {
  const experience = [
    {
      title: 'Fullstack Developer',
      company: 'Ascodelabs',
      duration: '2025 - Present',
      responsibilities: [
        'Built complete web applications using React, Next.js, and Node.js, serving clients across diverse industries.',
        'Collaborated with cross-functional teams to deliver scalable solutions, improving client satisfaction rates by 40%.',
        'Implemented responsive designs and optimized performance, achieving 90+ PageSpeed scores consistently.',
      ],
    },
  ];

  const additionalSkills = [
    'API Integration',
    'Database Design',
    'Version Control (Git)',
    'Responsive Design',
    'Problem Solving',
    'Team Collaboration',
  ];

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
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
            {experience.map((exp, index) => (
              <div
                key={index}
                className="mb-6 border shadow-lg rounded-2xl transition-all duration-300 hover:scale-[1.01]"
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
                  e.currentTarget.style.background =
                    'rgba(255, 255, 255, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
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
                        {exp.duration}
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
                      {/* Achievements removed as per new_code */}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div
              className="border shadow-lg rounded-2xl transition-all duration-300 hover:scale-[1.01]"
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

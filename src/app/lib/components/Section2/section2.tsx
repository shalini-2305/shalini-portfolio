"use client"

import { Code, Database, Globe, Cog } from "lucide-react";

const Section2 = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-8 w-8" style={{ color: "#fafafa" }} />,
      skills: ["React", "Next.js", "JavaScript", "HTML", "Tailwind CSS"],
      description: "Building responsive and interactive user interfaces",
    },
    {
      title: "Backend Development",
      icon: <Code className="h-8 w-8" style={{ color: "#fafafa" }} />,
      skills: ["Python", "Node.js", "API Development", "Server Architecture"],
      description: "Creating robust server-side applications and APIs",
    },
    {
      title: "Database & Storage",
      icon: <Database className="h-8 w-8" style={{ color: "#fafafa" }} />,
      skills: ["SQL", "Supabase", "Database Design", "Data Management"],
      description: "Designing and managing efficient database systems",
    },
    {
      title: "DevOps & Automation",
      icon: <Cog className="h-8 w-8" style={{ color: "#fafafa" }} />,
      skills: ["n8n Automation", "Domain Management", "Cloudflare", "Deployment", "CI/CD", "Git", "GitHub"],
      description: "Streamlining development and deployment processes",
    },
  ];

  return (
    <section id="skills" className="mt-18 py-14 px-4 sm:px-6 lg:px-8 bg-[#18181b]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#fafafa]">
            Technical Skills
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#fafafa] opacity-80">
            A comprehensive toolkit for building modern web applications from frontend to backend
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 0 0 transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(255, 255, 255, 0.3)")} // Adjusted hover shadow
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-3 text-[#fafafa]">
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
                      className="px-3 py-1 rounded-full text-sm font-medium bg-[#fafafa] text-[#18181b]"
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

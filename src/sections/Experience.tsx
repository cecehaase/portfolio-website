import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
const experiences = [
    {
      period: "2025 — Present",
      role: "Engineer I",
      company: "BlackRock",
      description:
        "Lead migration of legacy HTML content to Adobe Experience Manager. Contribute to new features including global navigation and UI components, and support the rollout of AI-powered platform capabilities.",
      technologies: ["React", "TypeScript", "Next.js", "HTML"],
      current: true,
    },
    {
      period: "Summer 2024",
      role: "Data Engineering Intern",
      company: "BlackRock",
      description:
        "Built and maintained data pipelines for financial analysis workflows. Designed Power BI dashboards to surface key insights and support data-driven business decisions.",
      technologies: ["Python", "SQL", "PowerBI"],
      current: false,
    },
    {
      period: "2021 — 2025",
      role: "Computer Science Major",
      company: "Tulane University",
      description:
        "Studied software engineering, algorithms, data structures, and systems programming. Built a foundation across the full stack with coursework spanning web development, data science, and low-level programming.",
      technologies: ["Python", "Java", "C++", "C"],
      current: false,
    },
    {
      period: "2024-2025",
      role: "Senior Capstone Project",
      company: "Tulane University",
      description:
        "Built a live civic dashboard for the City of New Orleans to track and respond to fallen trees in real time. Included a public reporting forum for citizens to submit concerns directly to emergency response teams.",
      href1: "https://sl-citydata-38498f466268.herokuapp.com/", 
      href2: "https://github.com/zbirnbaum/cmpscapstone",
      technologies: ["React", "SQLite", "Django", "Python"],
      current: false,
    },
  ];
  
  export const Experience = () => {
    return (
      <section id="experience" className="py-32 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/4 w-96
         h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        />
  
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="max-w-3xl mb-16">
            <span
              className="text-secondary-foreground text-sm
             font-medium tracking-wider uppercase animate-fade-in"
            >
              Career Journey
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold
             mt-4 mb-6 animate-fade-in animation-delay-100
              text-secondary-foreground"
            >
              Experience that{" "}
              <span className="font-serif italic font-normal text-white">
                {" "}
                creates impact.
              </span>
            </h2>
          </div>
  
            {/* Experience Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in flex flex-col"
                  style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                >
                  <span className="text-sm text-primary font-medium">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-4 flex-1">
                    {exp.description}
                  </p>
                  <p className="mt-4 flex gap-4">
                    {exp.href1 && <a href={exp.href1}><FaExternalLinkAlt /></a>}
                    {exp.href2 && <a href={exp.href2}><FaGithub /></a>}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Resume */}
          <div className="mt-20 flex flex-col items-center animate-fade-in animation-delay-300">
            <h2
              className="text-4xl md:text-5xl font-bold mb-10 text-secondary-foreground text-center"
            >
              Resume
            </h2>
            <div className="glass rounded-3xl p-4 border border-primary/30 max-w-2xl w-full">
              <img
                src="/resume.jpg"
                alt="Resume"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
      </section>
    );
  };
 
export default Experience;
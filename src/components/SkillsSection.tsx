import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Layers,
  Palette
} from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: "🟨", proficiency: 95 },
        { name: "TypeScript", icon: "🔷", proficiency: 90 },
        { name: "Python", icon: "🐍", proficiency: 85 },
        { name: "Java", icon: "☕", proficiency: 80 },
        { name: "C++", icon: "⚡", proficiency: 75 },
        { name: "Go", icon: "🔵", proficiency: 70 }
      ]
    },
    {
      title: "Frameworks & Libraries", 
      icon: Layers,
      skills: [
        { name: "React", icon: "⚛️", proficiency: 95 },
        { name: "Next.js", icon: "▲", proficiency: 90 },
        { name: "Node.js", icon: "🟢", proficiency: 90 },
        { name: "Express.js", icon: "🚂", proficiency: 85 },
        { name: "Flask", icon: "🌶️", proficiency: 80 },
        { name: "Tailwind CSS", icon: "💨", proficiency: 95 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: [
        { name: "Git", icon: "🔧", proficiency: 95 },
        { name: "Docker", icon: "🐳", proficiency: 85 },
        { name: "PostgreSQL", icon: "🐘", proficiency: 85 },
        { name: "MongoDB", icon: "🍃", proficiency: 80 },
        { name: "Firebase", icon: "🔥", proficiency: 90 },
        { name: "AWS", icon: "☁️", proficiency: 75 }
      ]
    }
  ];

  return (
    <section className="py-20 px-8 bg-secondary/10" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            
            return (
              <div key={categoryIndex} className="glass p-6 rounded-2xl glass-hover">
                <div className="flex items-center mb-6">
                  <CategoryIcon className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <span className="text-lg mr-2">{skill.icon}</span>
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-secondary/50 rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 shadow-glow"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "REST APIs", "GraphQL", "Microservices", "Agile/Scrum", 
              "CI/CD", "Unit Testing", "Responsive Design", "SEO Optimization",
              "Performance Optimization", "Code Review", "Mentoring"
            ].map((skill, index) => (
              <span
                key={index}
                className="glass px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
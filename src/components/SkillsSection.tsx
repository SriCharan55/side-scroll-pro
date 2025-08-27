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
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "Go"]
    },
    {
      title: "Frameworks & Libraries", 
      icon: Layers,
      skills: ["React", "Next.js", "Node.js", "Express.js", "Flask", "Tailwind CSS"]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: ["Git", "Docker", "PostgreSQL", "MongoDB", "Firebase", "AWS"]
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

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="glass px-3 py-2 rounded-lg text-sm text-foreground hover:text-primary transition-colors cursor-default border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
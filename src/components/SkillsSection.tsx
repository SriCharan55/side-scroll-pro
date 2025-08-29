// ...existing code...
import { Code, Database, Layers } from "lucide-react";
import {
  SiJavascript, SiC, SiCplusplus,
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress,
  SiGit, SiPostgresql, SiMongodb
} from "react-icons/si";
import { TbSql } from "react-icons/tb"; // For SQL
import { SiDrizzle } from "react-icons/si"; // Drizzle ORM (not official, so use SiDrizzle if added, else fallback to Db icon)
import { SiSupabase } from "react-icons/si"; // Supabase
import { FaJava } from "react-icons/fa";


export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: SiJavascript },
        { name: "C", icon: SiC },
        { name: "C++", icon: SiCplusplus },
        { name: "Java", icon: FaJava }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: [
        { name: "React", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Express.js", icon: SiExpress }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Database,
      skills: [
        { name: "Git", icon: SiGit },
        { name: "SQL", icon: TbSql },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Drizzle ORM", icon: SiDrizzle },
        { name: "Supabase", icon: SiSupabase },
        { name: "MongoDB", icon: SiMongodb }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/10" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies and tools I work with
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <div
                key={categoryIndex}
                className="glass p-6 rounded-2xl glass-hover flex flex-col"
              >
                <div className="flex items-center mb-5">
                  <CategoryIcon className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* neat 3-column grid inside each card with centered icon badges */}
                <div className="grid grid-cols-3 gap-4 mt-2">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skillIndex}
                        className="flex flex-col items-center text-center"
                      >
                        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(0,0,0,0.12)] shadow-[0_6px_18px_rgba(3,6,10,0.45)] border-0 ring-0 outline-none">
                          <SkillIcon
                            className="w-7 h-7 text-foreground/90"
                            aria-hidden="true"
                          />
                        </div>
                        <span className="mt-2 text-sm text-foreground/90 leading-tight">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
// ...existing
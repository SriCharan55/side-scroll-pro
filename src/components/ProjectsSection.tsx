import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  SiMongodb, SiExpress, SiReact, SiNodedotjs, 
  SiNextdotjs, SiTailwindcss, SiSupabase, SiPostgresql, 
  SiDrizzle
} from "react-icons/si";

export function ProjectsSection() {
  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: { name: string; icon: JSX.Element }[];
    liveUrl: string;
    githubUrl: string;
    featured?: boolean;
  };

  const projects: Project[] = [
    {
      title: "Interview Prep AI",
      description: `
        Lets users create interview prep sessions by choosing role, experience, and topics. 
        Generates role-specific questions with clear answers, provides pinning, and Learn More 
        for detailed AI explanations.
      `,
      image: "/Screenshot 2025-08-27 201617.png", // ✅ from public/
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "Express", icon: <SiExpress className="text-gray-600" /> },
        { name: "React", icon: <SiReact className="text-sky-500" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> }
      ],
      liveUrl: "https://app-mu-cyan-35.vercel.app/",
      githubUrl: "https://github.com/SriCharan55/app",
      featured: true
    },
    {
      title: "AI Course Generator",
      description: `
        Enables users to build customized courses by selecting category, topic, difficulty, and duration. 
        Uses Gemini 2.5 Pro via Google GenAI SDK to generate chapters, with YouTube integration for learning videos.
      `,
      image: "/image.png", // ✅ rename your image in public/ if needed
      technologies: [
        { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
        { name: "React", icon: <SiReact className="text-sky-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
        { name: "Drizzle ORM", icon: <SiDrizzle className="text-blue-600" /> }

      ],
      liveUrl: "https://ai-course-generator-blush.vercel.app/",
      githubUrl: "https://github.com/SriCharan55/AI-Course-Generator"
      // featured: false // optional, can be omitted
    },
    {
      title: "Movie App",
      description: `
        A movie discovery platform to browse trending and popular films. 
        Offers genre-based filtering, streaming links, and trailers with YouTube API integration.
      `,
      image: "/movie.png", // ✅ from public/
      technologies: [
        { name: "React", icon: <SiReact className="text-sky-500" /> },
        { name: "JavaScript", icon: <SiNodedotjs className="text-yellow-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> }
      ],
      liveUrl: "https://flick-find-share-stream-nine.vercel.app/",
      githubUrl: "https://github.com/SriCharan55/flick-find-share-stream"
      // featured: false // optional, can be omitted
    }
  ];

  return (
    <section className="py-20 px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Some of my recent work and personal projects
        </p>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`glass rounded-2xl overflow-hidden glass-hover group ${
                project.featured ? "lg:col-span-2 xl:col-span-1" : ""
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 lg:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center gap-2 glass px-3 py-1 rounded-full text-xs text-muted-foreground border border-border/30"
                    >
                      {tech.icon}
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-hover border-primary/30 hover:border-primary/60"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  
                  <Button
                    variant="outline" 
                    size="sm"
                    className="flex-1 glass-hover border-border/50 hover:border-border"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

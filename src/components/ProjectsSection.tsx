import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

export function ProjectsSection() {
  const projects = [
    {
      title: "Analytics Dashboard",
      description: "A comprehensive web analytics platform built with React and Node.js. Features real-time data visualization, custom reports, and team collaboration tools.",
      image: project1Image,
      technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "Tailwind CSS"],
      liveUrl: "https://analytics-demo.vercel.app",
      githubUrl: "https://github.com/yourprofile/analytics-dashboard",
      featured: true
    },
    {
      title: "E-Commerce Mobile App",
      description: "React Native e-commerce app with seamless shopping experience. Includes product search, cart management, secure payments, and order tracking.",
      image: project2Image,
      technologies: ["React Native", "Express.js", "MongoDB", "Stripe API", "Redux"],
      liveUrl: "https://shop-app-demo.netlify.app",
      githubUrl: "https://github.com/yourprofile/ecommerce-app",
      featured: true
    },
    {
      title: "Real-time Chat Platform",
      description: "Modern chat application with real-time messaging, file sharing, and video calls. Built with Socket.io for instant communication.",
      image: project3Image,
      technologies: ["React", "Socket.io", "Node.js", "WebRTC", "Firebase"],
      liveUrl: "https://chat-platform-demo.com",
      githubUrl: "https://github.com/yourprofile/chat-platform",
      featured: false
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
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="glass px-3 py-1 rounded-full text-xs text-muted-foreground border border-border/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass-hover border-primary/30 hover:border-primary/60"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  
                  <Button
                    variant="outline" 
                    size="sm"
                    className="flex-1 glass-hover border-border/50 hover:border-border"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            size="lg"
            className="glass-hover bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 shadow-glow border border-primary/30"
            onClick={() => window.open("https://github.com/yourprofile", '_blank')}
          >
            <Github className="mr-3 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
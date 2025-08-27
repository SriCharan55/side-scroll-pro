import { useState, useEffect } from "react";
import { User, Code, Briefcase, Github, Linkedin, Mail, ExternalLink, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navigationItems = [
  { id: "about", label: "About Me", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "coding-profiles", label: "Coding Profiles", icon: Code },
];


export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [hoveredEmail, setHoveredEmail] = useState(false);

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 glass border-r border-border/30 z-50 overflow-y-auto flex flex-col">
      <div className="p-8 flex-1">
        {/* Name/Brand */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-muted-foreground text-sm mt-2">Full Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="mb-8">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-left px-4 py-3 h-auto transition-all duration-300 ${
                      isActive 
                        ? "bg-primary/20 text-primary border border-primary/30 shadow-glow" 
                        : "hover:bg-secondary/50 text-muted-foreground hover:text-foreground"
                    }`}
                    onClick={() => onNavigate(item.id)}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.label}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-border/30 mb-8"></div>
      </div>

      {/* Social Links - Bottom Section */}
      <div className="p-8 pt-0">
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-hover p-3 rounded-lg flex flex-col items-center text-center group"
          >
            <Linkedin className="h-5 w-5 mb-2 text-blue-400" />
            <span className="text-xs text-muted-foreground">LinkedIn</span>
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-muted-foreground" />
          </a>

          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-hover p-3 rounded-lg flex flex-col items-center text-center group"
          >
            <Github className="h-5 w-5 mb-2 text-gray-300" />
            <span className="text-xs text-muted-foreground">GitHub</span>
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-muted-foreground" />
          </a>

          <div className="relative">
            <div
              className="glass-hover p-3 rounded-lg cursor-pointer group flex flex-col items-center text-center"
              onMouseEnter={() => setHoveredEmail(true)}
              onMouseLeave={() => setHoveredEmail(false)}
              onClick={() => window.open("mailto:your.email@gmail.com", '_blank')}
            >
              <Mail className="h-5 w-5 mb-2 text-purple-400" />
              <span className="text-xs text-muted-foreground">Email</span>
            </div>
            
            {hoveredEmail && (
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass px-3 py-2 rounded-lg text-xs whitespace-nowrap border border-border/30 z-10">
                your.email@gmail.com
              </div>
            )}
          </div>

          <a
            href="https://leetcode.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-hover p-3 rounded-lg flex flex-col items-center text-center group"
          >
            <span className="text-lg mb-2">💻</span>
            <span className="text-xs text-muted-foreground">LeetCode</span>
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-muted-foreground" />
          </a>
        </div>
      </div>
    </aside>
  );
}
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
];

interface CodingProfile {
  name: string;
  url: string;
  icon: LucideIcon | string;
  color: string;
  isEmail?: boolean;
}

const codingProfiles: CodingProfile[] = [
  { 
    name: "LeetCode", 
    url: "https://leetcode.com/yourprofile", 
    icon: "💻",
    color: "text-orange-400"
  },
  { 
    name: "Coding Ninjas", 
    url: "https://www.codingninjas.com/studio/profile/yourprofile", 
    icon: "🥷",
    color: "text-red-400"
  },
  { 
    name: "GeeksforGeeks", 
    url: "https://auth.geeksforgeeks.org/user/yourprofile", 
    icon: "💚",
    color: "text-green-400"
  },
  { 
    name: "LinkedIn", 
    url: "https://linkedin.com/in/yourprofile", 
    icon: Linkedin,
    color: "text-blue-400"
  },
  { 
    name: "GitHub", 
    url: "https://github.com/yourprofile", 
    icon: Github,
    color: "text-gray-300"
  },
  { 
    name: "Email", 
    url: "mailto:your.email@gmail.com", 
    icon: Mail,
    color: "text-purple-400",
    isEmail: true
  },
];

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [hoveredEmail, setHoveredEmail] = useState(false);

  const renderIcon = (profile: CodingProfile) => {
    if (typeof profile.icon === 'string') {
      return <span className="text-2xl mb-2">{profile.icon}</span>;
    } else {
      const IconComponent = profile.icon;
      return <IconComponent className={`h-6 w-6 mb-2 ${profile.color}`} />;
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-80 glass border-r border-border/30 z-50 overflow-y-auto">
      <div className="p-8">
        {/* Name/Brand */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-muted-foreground text-sm mt-2">Full Stack Developer</p>
        </div>

        {/* Navigation */}
        <nav className="mb-12">
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

        {/* Coding Profiles */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-foreground">Coding Profiles</h3>
          <div className="grid grid-cols-2 gap-3">
            {codingProfiles.map((profile, index) => {
              return (
                <div key={index} className="relative">
                  {profile.isEmail ? (
                    <div
                      className="glass-hover p-4 rounded-lg cursor-pointer group"
                      onMouseEnter={() => setHoveredEmail(true)}
                      onMouseLeave={() => setHoveredEmail(false)}
                      onClick={() => window.open(profile.url, '_blank')}
                    >
                      <div className="flex flex-col items-center text-center">
                        {renderIcon(profile)}
                        <span className="text-xs text-muted-foreground">Email</span>
                      </div>
                      
                      {hoveredEmail && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass px-3 py-2 rounded-lg text-xs whitespace-nowrap border border-border/30 z-10">
                          your.email@gmail.com
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-hover p-4 rounded-lg block group"
                    >
                      <div className="flex flex-col items-center text-center">
                        {renderIcon(profile)}
                        <span className="text-xs text-muted-foreground">{profile.name}</span>
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity mt-1 text-muted-foreground" />
                      </div>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
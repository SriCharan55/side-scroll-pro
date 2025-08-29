import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { SkillsSection } from "./SkillsSection";
import { ProjectsSection } from "./ProjectsSection";
import { CodingProfilesSection } from "./CodingProfilesSection";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop - 20, // Small offset for better UX
        behavior: "smooth",
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  // Handle navigation from sidebar
  const handleNavigation = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  // Detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "coding-profiles"];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Mobile Menu Button */}
      <Button
        variant="outline"
        size="sm"
        className="fixed top-6 left-6 z-50 lg:hidden glass border-primary/30 hover:border-primary/60"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar activeSection={activeSection} onNavigate={handleNavigation} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="lg:hidden">
            <Sidebar activeSection={activeSection} onNavigate={handleNavigation} />
          </div>
        </>
      )}
      
      {/* Main Content Area */}
      <main className="lg:ml-80 relative">
        <div className="max-w-full">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CodingProfilesSection />
          
          {/* Footer */}
          <footer className="py-12 px-8 border-t border-border/30">
            <div className="max-w-4xl mx-auto text-center">
              {/* <p className="text-muted-foreground mb-4">
                © 2024 John Doe. Built with React, TypeScript & Tailwind CSS.
              </p> */}
              <p className="text-sm text-muted-foreground/60">
                Let's connect and build something amazing together!
              </p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
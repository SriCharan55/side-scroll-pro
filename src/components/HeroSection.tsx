import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function HeroSection() {
  const handleResumeClick = () => {
    // Replace with your actual resume URL or path
    window.open("/resume.pdf", "_blank");
  };

  const handleGithubClick = () => {
    // Replace with your actual GitHub URL
    window.open("https://github.com/yourprofile", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20" id="hero">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Image */}
        <div className="mb-8 relative">
          <div className="relative inline-block">
            <img
              src={heroImage}
              alt="Developer Workspace"
              className="w-full max-w-2xl rounded-2xl shadow-glow border border-border/30"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full Stack Developer & Problem Solver
          </p>

          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and beautiful user experiences. 
            Specialized in modern web technologies and competitive programming.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              size="lg"
              className="glass-hover bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-6 md:px-8 py-4 md:py-6 text-base md:text-lg shadow-glow border border-primary/30 w-full sm:w-auto"
              onClick={handleResumeClick}
            >
              <FileText className="mr-3 h-5 w-5" />
              View Resume
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="glass-hover border-border/50 hover:border-primary/50 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold w-full sm:w-auto"
              onClick={handleGithubClick}
            >
              <Github className="mr-3 h-5 w-5" />
              GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
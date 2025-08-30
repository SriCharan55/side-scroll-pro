import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";

export function AboutSection() {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1Zro8Ntmyzb3piBftdDGEl8wLTvR2DgXC/view?usp=drive_link", "_blank"); // your resume link
  };

  const handleGithubClick = () => {
    window.open("https://github.com/SriCharan55", "_blank");
  };

  return (
    <section className="py-20 px-8" id="about">
      <div className="max-w-3xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>

        {/* Name + Short Intro */}
        <h3 className="text-2xl font-semibold text-foreground mb-2">
          Hi, I’m Sri Charan 👋
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Welcome to my world of coding and problem solving!
        </p>
        <p className="text-lg text-muted-foreground mb-2">
          I love building modern and responsive web applications using the latest technologies.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          I enjoy solving complex coding challenges and exploring efficient algorithms.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="glass-hover bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-glow border border-primary/30 px-6 py-4"
            onClick={handleResumeClick}
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="glass-hover border-border/50 hover:border-primary/50 px-6 py-4 font-semibold"
            onClick={handleGithubClick}
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="py-20 px-8" id="about">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="glass p-8 rounded-2xl">
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
            <p className="text-lg mb-6">
              I'm a passionate Full Stack Developer with over 3 years of experience in building 
              modern web applications and solving complex problems. My journey in tech started with 
              competitive programming, which gave me a strong foundation in algorithms and 
              problem-solving.
            </p>
            
            <p className="text-lg mb-6">
              I specialize in JavaScript/TypeScript ecosystems, with expertise in React, Node.js, 
              and modern databases. I'm passionate about writing clean, efficient code and 
              creating intuitive user experiences that make a difference.
            </p>

            <p className="text-lg mb-6">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or tackling challenging problems on competitive programming 
              platforms. I believe in continuous learning and staying up-to-date with the 
              latest industry trends.
            </p>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="glass-hover p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">Education</h4>
                <p className="text-muted-foreground">
                  Bachelor's in Computer Science<br />
                  <span className="text-sm">XYZ University • 2020-2024</span>
                </p>
              </div>
              
              <div className="glass-hover p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-primary mb-3">Experience</h4>
                <p className="text-muted-foreground">
                  Full Stack Developer<br />
                  <span className="text-sm">Tech Company • 2022-Present</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { ExternalLink } from "lucide-react";

export function CodingProfilesSection() {
  const codingProfiles = [
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
    }
  ];

  return (
    <section className="py-20 px-8 bg-secondary/5" id="coding-profiles">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Coding Profiles
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Check out my coding journey and achievements
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {codingProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 rounded-2xl glass-hover group text-center transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-4">{profile.icon}</span>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {profile.name}
                </h3>
                
                <div className="flex items-center text-muted-foreground group-hover:text-primary transition-colors">
                  <span className="text-sm mr-2">View Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
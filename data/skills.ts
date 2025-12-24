import { Code2, Terminal, Globe } from "lucide-react";

export const skillCategories = [
  {
    title: "Core Concepts",
    icon: Code2,
    iconColor: "text-amber-500",
    skills: [
      "SDLC", 
      "REST APIs", 
      "Microservices", 
      "CI/CD", 
      "DB Design",
      "Testing", 
      "Clean Arch"
    ]
  },
  {
    title: "Languages & Frameworks",
    icon: Terminal,
    iconColor: "text-indigo-500",
    skills: [
      "C# .NET", "Node.js", "TypeScript", "JavaScript", "Express",
      "React", "Vue", "Next.js", "SQL", "HTML/CSS", "Kotlin"
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Globe,
    iconColor: "text-emerald-500",
    skills: [
      "Git & GitHub", "Docker", "Postman", "MongoDB", 
      "PostgreSQL", "Figma", "VS Code", "Vercel"
    ]
  }
];
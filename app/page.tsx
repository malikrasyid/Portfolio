import React from "react";
import BentoItem from "../components/BentoItem";
import ProjectCard from "../components/ProjectCard";
import { Github, Linkedin, Mail, Code2, Database } from "lucide-react";

export default function Home() {
  
  // Removed "as const" to prevent TypeScript conflicts
  const projects = [
    {
      title: "JobTracker Web",
      description: "The frontend dashboard for managing job applications. Built with React and tailored for desktop users.",
      tags: ["React", "TypeScript", "Tailwind"],
      status: "Live",
      color: "bg-blue-50 dark:bg-blue-900/20",
      href: "https://github.com/malikrasyid/JobTracker" 
    },
    {
      title: "JobTracker API (.NET)",
      description: "Robust backend API built with C# and .NET Core. Handles authentication and SQL database operations.",
      tags: [".NET Core", "C#", "SQL Server", "EF Core"],
      status: "Live",
      color: "bg-purple-50 dark:bg-purple-900/20",
      href: "https://github.com/malikrasyid/JobTracker.Api"
    },
    {
      title: "JobTracker API (Node)",
      description: "Experimental rewrite of the backend using Node.js/Express to enable lightweight deployment on Vercel.",
      tags: ["Node.js", "Express", "TypeScript"],
      status: "In Progress",
      color: "bg-green-50 dark:bg-green-900/20",
      href: "#"
    },
    {
      title: "Task Sphere",
      description: "Project management frontend (Trello clone). Features drag-and-drop task management.",
      tags: ["Vue", "Tailwind", "Pinia"],
      status: "In Progress",
      color: "bg-emerald-50 dark:bg-emerald-900/20",
      href: "#"
    },
    {
      title: "Task Sphere API",
      description: "Dedicated backend for Task Sphere handling real-time updates and task synchronization.",
      tags: ["Node.js", "MongoDB", "Socket.io"],
      status: "In Progress",
      color: "bg-teal-50 dark:bg-teal-900/20",
      href: "#"
    },
    {
      title: "SubsTracker",
      description: "Cross-platform mobile application to track monthly subscriptions and expenses.",
      tags: [".NET MAUI", "C#", "XAML", "Mobile"],
      status: "Beta",
      color: "bg-indigo-50 dark:bg-indigo-900/20",
      href: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-zinc-900 dark:to-black p-4 md:p-8 flex justify-center">      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 grid-rows-auto gap-6">
        
        {/* PROFILE CARD */}
<BentoItem className="md:col-span-2 md:row-span-2 min-h-[320px] relative overflow-hidden group">
  
  {/* 1. Subtle Background Glow (Optional aesthetics) */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

  <div className="flex flex-col h-full justify-between relative z-10">
    
    {/* TOP SECTION: Image + Status Badge */}
    <div className="flex justify-between items-start">
      {/* Image: Changed to Rounded Square for a sharper look */}
      <div className="w-20 h-20 bg-slate-800 rounded-2xl overflow-hidden shadow-inner">
        <img 
          src="/images/me.jpg" 
          alt="Malik" 
          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Status Badge */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-wider">
          Open to Work
        </span>
      </div>
    </div>

    {/* BOTTOM SECTION: Text */}
    <div>
      <h1 className="text-3xl font-semibold text-slate-100 tracking-tight">
        Malik Al Rasyidi
      </h1>
      <p className="text-indigo-400 font-medium text-sm mt-1 mb-4">
        Fullstack Developer
      </p>
      
      <p className="text-slate-400 text-sm leading-relaxed max-w-md">
        I build accessible, pixel-perfect user interfaces and scalable backends. 
        Currently rewriting <span className="text-slate-200 font-medium">JobTracker</span> in Node.js.
      </p>
    </div>

  </div>
</BentoItem>

        {/* SOCIAL LINKS */}
        <BentoItem className="md:col-span-2 flex-row items-center justify-center gap-6">
          <a href="https://github.com/malikrasyid" target="_blank" className="hover:text-blue-500 transition"><Github size={28} /></a>
          <a href="#" className="hover:text-blue-500 transition"><Linkedin size={28} /></a>
          <a href="mailto:your-email@example.com" className="hover:text-blue-500 transition"><Mail size={28} /></a>
        </BentoItem>

        {/* TECH STACK */}
        <BentoItem className="md:col-span-2">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Code2 size={20} /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[".NET", "Node.js", "React", "Vue", "Next.js", "SQL", "MongoDB", "Kotlin"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </BentoItem>

        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            status={project.status as any}
            color="bg-white dark:bg-zinc-900"
            href={project.href}
          />
        ))}

      </div>
    </main>
  );
}
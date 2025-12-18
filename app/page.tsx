import React from "react";
import BentoItem from "../components/BentoItem";
import ProjectCard from "../components/ProjectCard";
import ProjectShowcase from "../components/ProjectShowcase";
import { Github, Linkedin, Mail, Code2, MapPin, Database } from "lucide-react";

export default function Home() {
  
  // === 1. FEATURED APPS ===
  const frontendProjects = [
    {
      title: "JobTracker Web",
      description: "A comprehensive dashboard for managing job applications. Features a kanban-style board, analytics visualization, and drag-and-drop status updates.",
      tags: ["React", "TypeScript", "Tailwind", "Recharts"],
      status: "Live",
      href: "https://github.com/malikrasyid/JobTracker",
      images: [
        "/images/jobtracker/1.png", 
        "/images/jobtracker/2.png",
        "/images/jobtracker/3.png",
        "/images/jobtracker/4.png",
        "/images/jobtracker/5.png"
      ],
      orientation: "landscape" // 16:9 for Web
    },
    {
      title: "Task Sphere",
      description: "A collaborative project management tool inspired by Trello. Supports real-time updates, team workspaces, and task assignment.",
      tags: ["Vue", "Pinia", "Tailwind", "Socket.io"],
      status: "In Progress",
      href: "#",
      images: [
        "/images/tasksphere/1.png",
        "/images/tasksphere/2.png",
        "/images/tasksphere/3.png",
        "/images/tasksphere/4.png",
        "/images/tasksphere/5.png",
        "/images/tasksphere/6.png",
        "/images/tasksphere/7.png",
        "/images/tasksphere/8.png",
        "/images/tasksphere/9.png",
      ], 
      orientation: "landscape" // 16:9 for Web
    },
    {
      title: "SubsTracker",
      description: "Mobile application for tracking monthly subscriptions. Features notification reminders and spending analysis charts.",
      tags: [".NET MAUI", "C#", "XAML", "Mobile"],
      status: "Beta",
      href: "#",
      images: ["/images/substracker.png"],
      orientation: "portrait" // Portrait for Mobile
    }
  ];

  // === 2. BACKEND & TOOLS ===
  const backendProjects = [
    {
      title: "JobTracker API (.NET)",
      description: "Robust backend API built with C# and .NET Core. Handles authentication and SQL operations.",
      tags: [".NET Core", "SQL Server", "EF Core"],
      status: "Live",
      href: "https://github.com/malikrasyid/JobTracker.Api"
    },
    {
      title: "JobTracker API (Node)",
      description: "Experimental rewrite of the backend using Node.js/Express for lightweight deployment.",
      tags: ["Node.js", "Express", "TypeScript"],
      status: "In Progress",
      href: "#"
    },
    {
      title: "Task Sphere API",
      description: "Dedicated backend for Task Sphere handling real-time updates via WebSockets.",
      tags: ["Node.js", "MongoDB", "Socket.io"],
      status: "In Progress",
      href: "#"
    }
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-4 md:p-8 flex justify-center text-zinc-900 dark:text-zinc-100">      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-6 md:gap-6">
        
        {/* === HEADER SECTION (4 Cols Wide) === */}
        {/* 1. PROFILE (Left Side - 2x2 Block) */}
        <BentoItem className="md:col-span-2 md:row-span-2 min-h-[340px] relative">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/0 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex justify-between items-start relative z-10">
            <div className="relative">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 shadow-lg">
                 <img src="/images/me.jpg" alt="Malik" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-zinc-800 p-1.5 rounded-full border border-zinc-100 dark:border-zinc-700 shadow-sm">
                <div className="bg-emerald-500 rounded-full w-3 h-3 animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col items-end">
               <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-500/20">
                 Open to Work
               </span>
               <div className="flex items-center gap-1 mt-2 text-zinc-400 text-xs font-medium">
                 <MapPin size={12} />
                 <span>Indonesia</span>
               </div>
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Malik Al Rasyidi</h1>
            <p className="text-lg text-indigo-500 dark:text-indigo-400 font-medium mb-4">Fullstack Developer</p>
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm">
              I build accessible, pixel-perfect user interfaces and scalable backends.
            </p>
          </div>
        </BentoItem>

        {/* 2. SOCIALS ROW (Right Top - 3 Columns inside 2-Col Span) */}
        <div className="md:col-span-2 grid grid-cols-3 gap-6">
          
          {/* GitHub */}
          <a href="https://github.com/malikrasyid" target="_blank" className="contents">
            <BentoItem className="bg-zinc-900 dark:bg-white text-white dark:text-black flex flex-col items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors py-6">
              <Github size={32} />
              <span className="font-semibold text-xs">GitHub</span>
            </BentoItem>
          </a>

          {/* LinkedIn */}
          <a href="#" className="contents">
            <BentoItem className="bg-blue-600 text-white flex flex-col items-center justify-center gap-2 hover:bg-blue-700 transition-colors border-none py-6">
              <Linkedin size={32} />
              <span className="font-semibold text-xs">LinkedIn</span>
            </BentoItem>
          </a>

          {/* Email / Contact */}
          <a href="mailto:your-email@example.com" className="contents">
            <BentoItem className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex flex-col items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-all py-6 group">
              <Mail size={32} className="group-hover:scale-110 transition-transform"/>
              <span className="font-semibold text-xs">Email</span>
            </BentoItem>
          </a>

        </div>

        {/* 3. TECH STACK (Right Bottom - 2 Col Span) */}
        <BentoItem className="md:col-span-2 flex flex-col justify-center">
          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
            <Code2 size={16} /> Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {[".NET", "Node.js", "React", "Next.js", "SQL", "MongoDB", "Tailwind", "Docker"].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-700/50">
                {tech}
              </span>
            ))}
          </div>
        </BentoItem>


        {/* === SECTION: FEATURED PROJECTS === */}
        {/* <div className="md:col-span-4 mt-8 mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                Featured Projects
            </h2>
        </div> */}

        {frontendProjects.map((project, index) => (
          <ProjectShowcase
            key={index}
            {...project}
            status={project.status as any}
            orientation={project.orientation as any}
          />
        ))}


        {/* === SECTION: BACKEND (3 Column Grid) === */}
        {/* <div className="md:col-span-4 mt-8 mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                <Database className="text-zinc-400" /> Backend & APIs
            </h2>
        </div> */}

        {/* Nested Grid Container for 3-Column Layout */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {backendProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              status={project.status as any}
              color="bg-white dark:bg-zinc-900"
            />
          ))}
        </div>

      </div>
    </main>
  );
}
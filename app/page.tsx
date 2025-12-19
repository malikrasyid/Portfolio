import React from "react";
import BentoItem from "../components/BentoItem";
import ProjectCard from "../components/ProjectCard";
import ProjectShowcase from "../components/ProjectShowcase";
import { Github, Linkedin, Mail, Code2, MapPin, Database, Terminal, Cpu, Globe } from "lucide-react";
import { skillCategories } from "../data/skills";
import { frontendProjects, backendProjects } from "../data/projects";

export default function Home() {
  
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-4 md:p-8 flex justify-center text-zinc-900 dark:text-zinc-100">      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-6 md:gap-6">
        
        {/* === HEADER SECTION (4 Cols Wide) === */}
        {/* 1. PROFILE (Left - Spans 3 Cols) */}
        <BentoItem className="md:col-span-3 min-h-[280px] relative overflow-visible">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/0 blur-3xl rounded-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row justify-between items-start relative z-10 h-full gap-6">
            
            {/* Avatar & Status */}
            <div className="flex flex-col justify-between h-full">
               <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-white dark:border-zinc-800 shadow-lg">
                   <img src="/images/me.jpg" alt="Malik" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-white dark:bg-zinc-800 p-1.5 rounded-full border border-zinc-100 dark:border-zinc-700 shadow-sm">
                  <div className="bg-emerald-500 rounded-full w-3 h-3 animate-pulse" />
                </div>
              </div>
              
              <div className="mt-6 md:mt-0">
                 <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-500/20">
                   Open to Work
                 </span>
                 <div className="flex items-center gap-1 mt-2 text-zinc-400 text-xs font-medium pl-1">
                   <MapPin size={12} />
                   <span>Indonesia</span>
                 </div>
              </div>
            </div>

            {/* Name & Bio */}
            <div className="flex flex-col justify-end h-full items-start md:items-end text-left md:text-right flex-1">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">Malik Al Rasyidi</h1>
              <p className="text-lg text-indigo-500 dark:text-indigo-400 font-medium mb-4">Fullstack Developer</p>
              <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed text-sm max-w-md">
                I build accessible, pixel-perfect user interfaces and scalable backends. passionate about crafting software that solves real-world problems.
              </p>
            </div>

          </div>
        </BentoItem>

        {/* 2. SOCIALS (Right - Spans 1 Col, Vertical Stack) */}
        <div className="md:col-span-1 grid grid-cols-3 md:grid-cols-1 gap-4"> 
          {/* GitHub */}
          <a href="https://github.com/malikrasyid" target="_blank" className="contents">
            <BentoItem className="bg-zinc-900 dark:bg-white text-white dark:text-black flex flex-col items-center justify-center gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors py-4">
              <Github size={24} />
              <span className="font-semibold text-xs">GitHub</span>
            </BentoItem>
          </a>

          {/* LinkedIn */}
          <a href="#" className="contents">
            <BentoItem className="bg-blue-600 text-white flex flex-col items-center justify-center gap-2 hover:bg-blue-700 transition-colors border-none py-4">
              <Linkedin size={24} />
              <span className="font-semibold text-xs">LinkedIn</span>
            </BentoItem>
          </a>

          {/* Email */}
          <a href="mailto:your-email@example.com" className="contents">
            <BentoItem className="bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex flex-col items-center justify-center gap-2 hover:bg-indigo-500 hover:text-white transition-all py-4 group">
              <Mail size={24} className="group-hover:scale-110 transition-transform"/>
              <span className="font-semibold text-xs">Email</span>
            </BentoItem>
          </a>
        </div>

        {/* === SECTION: FEATURED PROJECTS === */}
        <div className="md:col-span-4 mt-4 mb-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                Featured Projects
            </h2>
        </div>

        {frontendProjects.map((project, index) => (
          <ProjectShowcase
            key={index}
            {...project}
            status={project.status as any}
            orientation={project.orientation as any}
          />
        ))}


        {/* === SECTION: BACKEND (3 Column Grid) === */}
        <div className="md:col-span-4 mt-4 mb-2">
            <h2 className="text-2xl font-bold flex items-center gap-2">
                <Database className="text-zinc-400" /> Backend & APIs
            </h2>
        </div>

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

        {/* === SKILLS SECTION (Moved to Bottom) === */}
        <div className="md:col-span-4 mt-8">
           <BentoItem className="flex flex-col justify-center bg-white/50 dark:bg-zinc-900/30">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-8 flex items-center gap-2">
              <Cpu size={16} /> Skills & Proficiency
            </h3>

            {/* Grid for Skill Categories: Stacks vertically on mobile, 3 columns on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {skillCategories.map((category, index) => (
                <div key={index} className="flex flex-col gap-4">
                  <div className={`flex items-center gap-2 text-sm font-bold ${category.iconColor} uppercase tracking-wide border-b border-zinc-200 dark:border-zinc-800 pb-2`}>
                    <category.icon size={16} /> {category.title}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-white dark:bg-black/40 rounded-md text-xs font-medium border border-zinc-200 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BentoItem>
        </div>
      </div>
    </main>
  );
}
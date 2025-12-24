import React from "react";
import ProfileShowcase from "../components/ProfileShowcase";
import ProjectCard from "../components/ProjectCard";
import SkillShowcase from "../components/SkillShowcase";
import ProjectShowcase from "../components/ProjectShowcase";
import { Github, Linkedin, Mail, Code2, MapPin, Database, Terminal, Cpu, Globe } from "lucide-react";
import { frontendProjects, backendProjects } from "../data/projects";

export default function Home() {
  
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black relative flex justify-center p-4 md:p-8 text-zinc-900 dark:text-zinc-100 overflow-x-hidden selection:bg-indigo-500/30">      
      <div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
        {/* 1. Top Left Blob (CYAN) - Replaced Indigo for a fresher look */}
        <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[100px]" />
          
          {/* 2. Top Right Blob (EMERALD) */}
          <div className="absolute -top-[10%] -right-[10%] w-[60vw] h-[60vw] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[100px]" />
          
          {/* 3. Bottom Left Blob (BLUE) */}
          <div className="absolute -bottom-[10%] -left-[10%] w-[60vw] h-[60vw] bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-[100px]" />

          {/* 4. Bottom Right Blob (PURPLE) */}
          <div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] bg-purple-500/10 dark:bg-purple-500/10 rounded-full blur-[100px]" />
          
          {/* 5. Center Light (White) */}
          <div className="absolute top-[25%] left-[25%] w-[60vw] h-[60vw] bg-white/40 dark:bg-zinc-800/10 rounded-full blur-[120px]" />               
      </div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-6 md:gap-6">        
        {/* === HEADER / PROFILE SECTION (Centered & Merged) === */}
        <ProfileShowcase/>

        {/* === SECTION: FEATURED PROJECTS === */}
        <div className="md:col-span-4 mt-4 mb-2">
            <h2 className="text-2xl font-bold flex text-zinc-900 items-center gap-2">
              <Globe/> Featured Projects
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
            <h2 className="text-2xl font-bold flex text-zinc-900 items-center gap-2">
                <Database/> Backend & APIs
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

        {/* === SKILLS SECTION === */}
        <div className="md:col-span-4 mt-4 mb-2">
          <h2 className="text-2xl font-bold flex text-zinc-900 items-center gap-2">
              <Cpu/> Skills & Proficiency
          </h2>
        </div>
        <SkillShowcase/>

      </div>
    </main>
  );
}
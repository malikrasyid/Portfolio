import React from "react";
import BentoItem from "../components/BentoItem";
import ProfileShowcase from "../components/ProfileShowcase";
import ProjectCard from "../components/ProjectCard";
import SkillShowcase from "../components/SkillShowcase";
import ProjectShowcase from "../components/ProjectShowcase";
import { Github, Linkedin, Mail, Code2, MapPin, Database, Terminal, Cpu, Globe } from "lucide-react";
import { skillCategories } from "../data/skills";
import { frontendProjects, backendProjects } from "../data/projects";

export default function Home() {
  
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black p-4 md:p-8 flex justify-center text-zinc-900 dark:text-zinc-100">      
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-4 auto-rows-auto gap-6 md:gap-6">
        
        {/* === HEADER / PROFILE SECTION (Centered & Merged) === */}
        <ProfileShowcase/>

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

        {/* === SKILLS SECTION === */}
        <div className="md:col-span-4 mt-4 mb-2">
          <h2 className="text-2xl font-bold flex items-center gap-2">
              <Cpu className="text-zinc-400" /> Skills & Proficiency
          </h2>
        </div>
        <SkillShowcase/>

      </div>
    </main>
  );
}
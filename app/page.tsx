"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ProfileShowcase from "../components/ProfileShowcase";
import ProjectCard from "../components/ProjectCard";
import SkillShowcase from "../components/SkillShowcase";
import ProjectShowcase from "../components/ProjectShowcase";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { frontendProjects, backendProjects } from "../data/projects";
import { cn } from "../lib/utils";

export default function Home() {
  const [feIdx, setFeIdx] = useState(0);
  const [beIdx, setBeIdx] = useState(0);
  const projectsPerPage = 3;
  const maxBeIdx = Math.max(0, backendProjects.length - projectsPerPage);

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      
      {/* SECTION PROFILE */}
      <section className="max-w-6xl mx-auto px-6">
        <ProfileShowcase />
      </section>

      {/* SECTION FRONTEND */}
      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-end pb-10 border-b border-zinc-100">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Featured Projects</h2>
            <p className="text-sm text-zinc-400 font-medium mt-1">Specializing in React, Vue, and Native Android.</p>
          </div>
          <div className="flex gap-1">
            <button 
              onClick={() => setFeIdx(Math.max(0, feIdx - 1))} 
              className="p-2 disabled:opacity-20"
              disabled={feIdx === 0}
            >
              <ChevronLeft size={20}/>
            </button>
            <button 
              onClick={() => setFeIdx(Math.min(frontendProjects.length - 1, feIdx + 1))} 
              className="p-2 disabled:opacity-20"
              disabled={feIdx === frontendProjects.length - 1}
            >
              <ChevronRight size={20}/>
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <motion.div 
            className="flex" 
            animate={{ x: `-${feIdx * 100}%` }} 
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {frontendProjects.map((project, i) => {
              const isPortrait = project.orientation === "portrait";

              return (
                <div key={i} className="min-w-full">
                  <div className={cn(
                    "mx-auto transition-all duration-500",
                    isPortrait ? "max-w-5xl" : "max-w-7xl"
                  )}>
                    <ProjectShowcase 
                      {...project} 
                      status={project.status as any} 
                      orientation={project.orientation as any}
                    />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* SECTION BACKEND */}
      <section className="bg-zinc-50/50 pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-black tracking-tight">Backend & Architectures</h2>
            <div className="flex gap-1">
               <button 
                onClick={() => setBeIdx(Math.max(0, beIdx - 1))} 
                className="p-2 disabled:opacity-20" 
                disabled={beIdx === 0}
               >
                <ChevronLeft size={20}/>
               </button>
               <button 
                onClick={() => setBeIdx(Math.min(maxBeIdx, beIdx + 1))} 
                className="p-2 disabled:opacity-20" 
                disabled={beIdx === maxBeIdx}
               >
                <ChevronRight size={20}/>
               </button>
            </div>
          </div>
          
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-8" 
              animate={{ x: `calc(-${beIdx * (100 / 3)}% - ${beIdx * 32}px)` }} 
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
              {backendProjects.map((project, i) => (
                <div key={i} className="min-w-[calc(100%/1)] md:min-w-[calc((100%-64px)/3)]">
                  <ProjectCard {...project} status={project.status as any} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION SKILLS */}
      <section className="max-w-6xl mx-auto px-16 py-16">
        <h2 className="text-3xl font-black tracking-tight mb-8">Technical Skills</h2>
        <SkillShowcase />
      </section>
    </main>
  );
}
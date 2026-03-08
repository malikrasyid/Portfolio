import React, { forwardRef } from "react";
import { frontendProjects, backendProjects } from "../data/projects";
import { getStatusColor } from "../lib/project-utils"; 
import { Github, ExternalLink, MapPin, Mail, Globe } from "lucide-react"; 

export const PrintableResume = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="p-10 bg-white text-black min-h-screen font-sans">
      
      {/* HEADER BARU: Lebih Clean & Informatif */}
      <div className="mb-8 border-b border-zinc-200 pb-6">
        <h1 className="text-4xl font-black tracking-tight text-zinc-900">Malik Al Rasyidi</h1>
        <p className="text-lg text-zinc-600 font-medium mt-1">Full Stack Software Engineer</p>
        
        {/* Baris Kontak & Tautan */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-sm font-medium text-zinc-600">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-zinc-400" /> Demak, Indonesia
          </span>
          <a href="mailto:malikalrasyidi001@gmail.com" className="flex items-center gap-1.5 hover:text-black transition-colors">
            <Mail size={14} className="text-zinc-400" /> malikalrasyidi001@gmail.com
          </a>
          {/* TAUTAN KE WEB PORTFOLIO VERCEL */}
          <a 
            href="https://malik-dev-porto.vercel.app/" 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-center gap-1.5 text-blue-600 font-bold hover:text-blue-800 transition-colors"
          >
            <Globe size={14} /> Web Portfolio
          </a>
        </div>
      </div>

      {/* FRONTEND & FULLSTACK PROJECTS */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-5 uppercase tracking-wider text-zinc-800">Featured Projects & Architecture</h2>
        <div className="space-y-6">
          {frontendProjects.map((project, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold flex items-center gap-3">
                  {project.title}
                  <span className={`text-[10px] font-black uppercase tracking-widest ${getStatusColor(project.status as any)} px-2 py-0.5 rounded`}>
                    {project.status}
                  </span>
                </h3>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">{project.description}</p>
              
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs font-mono font-bold text-zinc-500">
                  Tech: {project.tags.join(", ")}
                </div>
                <div className="flex gap-4">
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <Github size={14} /> Repository
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BACKEND & API PROJECTS */}
      <div>
        <h2 className="text-xl font-bold mb-5 uppercase tracking-wider text-zinc-800">Backend Services & APIs</h2>
        <div className="space-y-6">
          {backendProjects.map((project, i) => (
            <div key={i} className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-bold flex items-center gap-3">
                  {project.title}
                  <span className={`text-[10px] font-black uppercase tracking-widest ${getStatusColor(project.status as any)} px-2 py-0.5 rounded`}>
                    {project.status}
                  </span>
                </h3>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">{project.description}</p>
              
              <div className="flex items-center justify-between pt-1">
                <div className="text-xs font-mono font-bold text-zinc-500">
                  Tech: {project.tags.join(", ")}
                </div>
                <div className="flex gap-4">
                  {project.href && (
                    <a href={project.href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <Github size={14} /> Repository
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
});

PrintableResume.displayName = "PrintableResume";
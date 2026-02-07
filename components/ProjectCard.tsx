"use client";

import React from "react";
import { ProjectData } from "../data/projects";
import { Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ 
  title, 
  description, 
  tags, 
  status = "In Progress", 
  href = "#"
}: ProjectData) {
  
  const getStatusColor = (s: string) => {
    switch (s) {
      case "Live": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Beta": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "In Progress": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      default: return "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400";
    }
  };

  return (
    <div className="group pt-8 border-t border-zinc-100 hover:border-black transition-colors duration-500 min-h-[280px] flex flex-col justify-between">
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className={`text-[10px] font-black uppercase tracking-widest ${getStatusColor(status)} px-2 py-0.5 rounded`}>
            {status}
          </span>
        </div>
        
        {/* Scaled down title */}
        <h3 className="text-xl font-bold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        
        {/* Refined body text */}
        <p className="text-sm text-zinc-500 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="space-y-6 mt-4">
        {/* Tighter tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono font-bold text-zinc-400 uppercase">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex">
          <a 
            href={href} 
            target="_blank" 
            className="inline-flex items-center gap-2 text-xs font-bold text-black border-b border-black pb-0.5 hover:gap-3 transition-all"
          >
            Repository <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import BentoItem from "./BentoItem";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status?: "Live" | "In Progress" | "Concept" | "Beta";
  href?: string; // Link to GitHub or Live Site
  color?: string; // Optional background color tint
}

export default function ProjectCard({
  title,
  description,
  tags,
  status = "In Progress",
  href = "#",
  color = "bg-blue-50 dark:bg-blue-900/20",
}: ProjectCardProps) {
  
  // Helper to color the status badge
  const getStatusColor = (s: string) => {
    switch (s) {
      case "Live": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Beta": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "In Progress": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      default: return "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400";
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="contents">
      <BentoItem className={`md:col-span-2 md:row-span-2 group relative overflow-hidden ${color}`}>
        
        {/* Hover Arrow (Only shows on hover) */}
        <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="text-zinc-400 dark:text-zinc-500" />
        </div>

        <div className="flex flex-col h-full justify-between z-10">
          {/* Header */}
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wide ${getStatusColor(status)}`}>
                {status}
              </span>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>

          {/* Bottom Section: Visual + Tags */}
          <div className="space-y-4">
            
            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-white/50 dark:bg-black/20 rounded border border-black/5 dark:border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            {/* Visual Placeholder (Mini Code Editor Look) */}
            <div className="w-full h-24 bg-white/40 dark:bg-black/20 rounded-xl border border-black/5 dark:border-white/5 p-3 flex gap-2 items-center justify-center overflow-hidden">
                <Github className="text-zinc-400/50" size={40} />
            </div>
          </div>
        </div>
      </BentoItem>
    </a>
  );
}
import React from "react";
import BentoItem from "./BentoItem";
import { ArrowUpRight, Github } from "lucide-react";
import { cn } from "../lib/utils"; // Assuming you have this, otherwise just use template literals

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  status?: "Live" | "In Progress" | "Concept" | "Beta";
  href?: string;
  color?: string;
  className?: string; // <--- Add this
}

export default function ProjectCard({
  title,
  description,
  tags,
  status = "In Progress",
  href = "#",
  color = "bg-blue-50 dark:bg-blue-900/20",
  className,
}: ProjectCardProps) {
  
  const getStatusColor = (s: string) => {
    switch (s) {
      case "Live": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Beta": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      case "In Progress": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      default: return "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-400";
    }
  };

  return (
    <div>
      {/* Removed fixed row/col spans, added className prop */}
      <BentoItem className="bg-white group relative overflow-hidden flex flex-col h-full">
                
        <div className="flex flex-col h-full justify-between z-10">
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 transition-colors">
                {title}
              </h3>
              <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${getStatusColor(status)}`}>
                {status}
              </span>
            </div>
            
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
              {description}
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 rounded border border-black/5 dark:border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              <a href={href} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
                <Github size={16} /> Source
              </a>
              {/* {liveUrl && (
                <a href={liveUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg text-sm font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                  <ExternalLink size={16} /> Demo
                </a>
              )} */}
            </div>
          </div>
        </div>
      </BentoItem>
    </div>
  );
}
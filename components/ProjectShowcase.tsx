"use client";

import React, { useState } from "react";
import BentoItem from "./BentoItem";
import { Github, ExternalLink, ChevronLeft, ChevronRight, Layers } from "lucide-react";
import { cn } from "../lib/utils"; 

interface ProjectShowcaseProps {
  title: string;
  description: string;
  tags: string[];
  status?: "Live" | "In Progress" | "Concept" | "Beta";
  images: string[];
  href?: string;
  liveUrl?: string;
  orientation?: "landscape" | "portrait";
}

export default function ProjectShowcase({
  title,
  description,
  tags,
  status = "In Progress",
  images,
  href = "#",
  liveUrl,
  orientation = "landscape",
}: ProjectShowcaseProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getStatusColor = (s: string) => {
    switch (s) {
      case "Live": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Beta": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      default: return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    }
  };

  const isLandscape = orientation === "landscape";
  
  return (
    <div className="md:col-span-4">
      <BentoItem className="p-0 overflow-hidden bg-white border-zinc-200 dark:border-white/10">
        
        <div className="p-2 grid grid-cols-1 md:grid-cols-3">
          
          {/* === LEFT COLUMN: IMAGE === */}
          <div className={cn(
            "relative group border-b md:border-b-0 border-zinc-200 dark:border-white/5",
            "h-64", 
            isLandscape 
              ? "md:col-span-2 md:h-[337.5px] bg-zinc-100 dark:bg-black/20 overflow-visible z-20" 
              : "md:col-span-1 md:aspect-[9/20] md:h-[400px] flex flex-col justify-center items-center overflow-visible w-full"
          )}>
            
            {images.length > 0 ? (
              <>
                <img
                  src={images[currentSlide]}
                  alt={`${title} screenshot ${currentSlide + 1}`}
                  className={cn(
                    "transition-transform duration-500 block",
                    isLandscape 
                      // Landscape Image: Fills the box
                      ? "w-full h-full object-cover border-r border-black/5 dark:border-white/10 shadow-2xl shadow-indigo-500/20 dark:shadow-indigo-900/40"  
                      // Portrait Image: Auto width, Margin Auto (Critical for centering), Fits height
                      : "h-full w-auto mx-auto object-contain shadow-2xl shadow-indigo-500/20 dark:shadow-indigo-900/40 rounded-[1.5rem]" 
                  )}
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/60 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 z-10">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/60 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110 z-10">
                      <ChevronRight size={20} />
                    </button>
                    
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {images.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full transition-colors shadow-sm ${idx === currentSlide ? "bg-white" : "bg-white/40"}`} />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-400">
                <Layers size={48} opacity={0.2} />
              </div>
            )}
          </div>

          {/* === RIGHT COLUMN: DETAILS === */}
          <div className={cn(
            "pl-8 md:pl-8 flex flex-col justify-between",
            // Ensure details column matches height or expands properly
            isLandscape ? "md:col-span-1" : "md:col-span-2"
          )}>
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">{title}</h3>
                <span className={`text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider ${getStatusColor(status)}`}>
                  {status}
                </span>
              </div>

              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6 line-clamp-4">
                {description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag) => (
                  <span key={tag} className="text-xs md:text-sm px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-lg font-medium border border-zinc-200 dark:border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <a href={href} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-lg text-sm font-semibold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
                <Github size={16} /> Source
              </a>
              {liveUrl && (
                <a href={liveUrl} target="_blank" className="flex items-center gap-2 px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white rounded-lg text-sm font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </BentoItem>
    </div>
  );
}
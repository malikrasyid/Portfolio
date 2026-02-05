"use client";

import React, { useState } from "react";
import { ProjectData } from "../data/projects";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { cn } from "../lib/utils";

export default function ProjectShowcase({
  title,
  description,
  tags,
  status = "In Progress",
  images,
  href = "#",
  liveUrl,
  orientation = "landscape",
}: ProjectData) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const optimizedUrl = images[currentSlide].replace('/upload/', '/upload/f_auto,q_auto,w_1200/');

  const getStatusColor = (s: string) => {
    switch (s) {
      case "Live": return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "Beta": return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
      default: return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
    }
  };

  const isPortrait = orientation === "portrait";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-10 border-t border-zinc-100 transition-colors duration-500 hover:border-zinc-900/10">
      {/* IMAGE AREA */}
      <div className="lg:col-span-7 relative group flex justify-center">
        <div className={cn(
          "bg-zinc-50 rounded-xl overflow-hidden relative border border-zinc-100",
          isPortrait ? "aspect-[9/16] h-[500px]" : "aspect-video w-full"
        )}>          
        <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={optimizedUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "w-full h-full grayscale-[0.5] hover:grayscale-0 transition-all duration-700",
                isPortrait ? "object-contain p-4" : "object-cover"
              )}
              alt={`${title} view ${currentSlide + 1}`}
            />
          </AnimatePresence>

          {/* Minimalist Image Nav */}
          {images.length > 1 && (
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button onClick={prevSlide} className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button onClick={nextSlide} className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* CONTENT AREA - Mirrored after the Backend style */}
      <div className="lg:col-span-5 flex flex-col justify-between py-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">
                {status}
             </span>
          </div>
          <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-zinc-500 leading-relaxed font-medium max-w-md">
            {description}
          </p>
        </div>

        <div className="space-y-6 mt-8">
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {tags.map((tag) => (
              <span key={tag} className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-tight">#{tag}</span>
            ))}
          </div>

          <div className="flex gap-6">
            <a href={href} target="_blank" className="inline-flex items-center gap-2 text-xs font-bold text-black border-b border-black pb-0.5 hover:gap-3 transition-all">
              <Github size={14} /> Repository
            </a>
            {liveUrl && (
              <a href={liveUrl} target="_blank" className="inline-flex items-center gap-2 text-xs font-bold text-black border-b border-black pb-0.5 hover:gap-3 transition-all">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import React from "react";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function ProfileShowcase() {
  return (
    <div className="w-full pt-10 md:pt-16 pb-8 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start text-center md:text-left">
      <div className="relative group w-40 h-40 md:w-56 md:h-56">
        <div className="absolute inset-0 bg-indigo-500 rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-500" />
        <div className="relative w-full h-full overflow-hidden rounded-xl transition-all duration-700 border border-zinc-200">
          <img 
            src="https://res.cloudinary.com/dxdgpncgq/image/upload/f_auto,q_auto,w_600/v1770281496/me_pm2ov5.jpg" 
            alt="Malik Al Rasyidi" 
            className="w-full h-full object-cover scale-110 grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-100 transition-transform duration-700"
          />
        </div>
      </div>

      {/* Content Element: Bold Typography */}
      <div className="flex-1 space-y-8 text-center md:text-left">
        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2 text-indigo-600 font-black uppercase tracking-wider text-xs md:text-sm">
            <MapPin size={14} /> Demak, Indonesia
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 leading-none">
            MALIK AL <span className="text-zinc-400">RASYIDI.</span>
          </h1>
          <p className="text-base md:text-lg font-medium text-zinc-500 max-w-xl leading-snug pt-2">
            Full Stack Software Engineer crafting robust web and mobile experiences.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-5">
          <a href="https://github.com/malikrasyid" target="_blank" className="flex items-center gap-2 font-bold text-sm hover:text-indigo-600 transition-colors">
            <Github size={24} /> github
          </a>
          <a href="#" className="flex items-center gap-2 font-bold text-sm hover:text-indigo-600 transition-colors">
            <Linkedin size={24} /> linkedin
          </a>
          <a href="mailto:contact@malikrasyid.com" className="flex items-center gap-2 font-bold text-sm hover:text-indigo-600 transition-colors">
            <Mail size={24} /> email
          </a>
        </div>
      </div>
    </div>
  );
}
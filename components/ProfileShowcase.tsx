"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Check } from "lucide-react";

export default function ProfileShowcase() {
  const [copied, setCopied] = useState(false);
  const email = "malikalrasyidi001@gmail.com";

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      // Reset the icon after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

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
            <Github size={18} /> github
          </a>
          <a href="https://www.linkedin.com/in/malikalrasyidi" target="_blank" className="flex items-center gap-2 font-bold text-sm hover:text-indigo-600 transition-colors">
            <Linkedin size={18} /> linkedin
          </a>
          <button 
            onClick={handleCopy}
            className="text-sm font-bold flex items-center gap-1.5 hover:text-indigo-600 transition-colors cursor-pointer outline-none"
            aria-label="Copy email address"
          >
            {copied ? (
              <Check size={18} className="text-green-500" />
            ) : (
              <Mail size={18} />
            )}
            <span className={copied ? "text-green-600" : ""}>
              {copied ? "copied!" : "email"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
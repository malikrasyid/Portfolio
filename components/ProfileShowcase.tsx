import React from "react";
import BentoItem from "./BentoItem";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function ProfileShowcase() {
  return (
    <div className="md:col-span-4">
      <BentoItem className="relative p-8 md:p-10 min-h-[400px] flex flex-col justify-between group overflow-visible">
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/0 blur-3xl rounded-full pointer-events-none" />

        {/* === 1. SOCIALS (Top Right) === */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 flex gap-3 z-20">
           <a href="https://github.com/malikrasyid" target="_blank" className="p-3 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-110 hover:border-zinc-400 transition-all text-zinc-700 dark:text-zinc-300">
             <Github size={20} />
           </a>
           <a href="#" className="p-3 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-110 hover:border-blue-400 hover:text-blue-500 transition-all text-zinc-700 dark:text-zinc-300">
             <Linkedin size={20} />
           </a>
           <a href="mailto:your-email@example.com" className="p-3 bg-white dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm hover:scale-110 hover:border-indigo-400 hover:text-indigo-500 transition-all text-zinc-700 dark:text-zinc-300">
             <Mail size={20} />
           </a>
        </div>

        <div className="absolute top-6 left-6 md:top-8 md:left-8 flex gap-3 z-20">
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-200 dark:border-emerald-500/20 shadow-sm">
                Open to Work
            </span>

            <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-sm font-medium">
                <MapPin size={16} className="text-rose-500" />
                 <span>Indonesia</span>
            </div>             
        </div>

        {/* === 2. CENTER IMAGE GROUP (Avatar + Badges) === */}
        {/* Flex container centered horizontally */}
        <div className="flex flex-row items-center justify-center gap-6 mt-8 mb-8 md:mb-0">
           
           {/* Avatar */}
           <div className="relative shrink-0">
             <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img src="/images/me.jpg" alt="Malik" className="w-full h-full object-cover" />
             </div>
             {/* Online Dot */}
             <div className="absolute bottom-2 right-2 bg-white dark:bg-zinc-800 p-1.5 rounded-full border border-zinc-100 dark:border-zinc-700 shadow-sm">
               <div className="bg-emerald-500 rounded-full w-4 h-4 animate-pulse" />
             </div>
           </div>

        </div>

        {/* === 3. NAME & BIO (Left Aligned, Bottom) === */}
        <div className="w-full z-10 mt-4 text-left">
           <h1 className="text-2xl font-extrabold text-center tracking-tight mb-2 text-zinc-900 dark:text-zinc-100">
             Malik Al Rasyidi
           </h1>
           <p className="text-xl text-indigo-600 text-center dark:text-indigo-400 font-medium mb-4">
             Fullstack Developer
           </p>
           <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg text-pretty">
             I build accessible, pixel-perfect user interfaces and scalable backends. 
             Passionate about crafting software that solves real-world problems with modern architecture.
           </p>
        </div>

      </BentoItem>
    </div>
  );
}
import React from "react";
import BentoItem from "./BentoItem";
import { skillCategories } from "../data/skills";

export default function SkillShowcase() {
  return (
    <div className="md:col-span-4">      

      {/* 3 Columns Grid for the 3 Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          
          /* SEPARATE CARD FOR EACH CATEGORY */
          <BentoItem key={index} className="flex flex-col gap-4 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300">
            
            {/* Category Header */}
            <div className={`flex items-center gap-2.5 text-sm font-bold ${category.iconColor} uppercase tracking-wider pb-2 border-b border-zinc-100 dark:border-zinc-800`}>
              <category.icon size={18} /> 
              {category.title}
            </div>

            {/* Skills List */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700/50 text-zinc-700 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

          </BentoItem>
        ))}
      </div>
    </div>
  );
}
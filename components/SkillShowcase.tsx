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
            <div className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {category.skills.map((tech, i) => (
                <span key={tech} className="inline-block">
                  <span className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-default">
                    {tech}
                  </span>
                  {/* Add a subtle dot separator unless it's the last item */}
                  {i !== category.skills.length - 1 && (
                    <span className="mx-2 text-zinc-300 dark:text-zinc-700 select-none">•</span>
                  )}
                </span>
              ))}
            </div>

          </BentoItem>
        ))}
      </div>
    </div>
  );
}
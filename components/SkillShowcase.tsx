import React from "react";
import { skillCategories } from "../data/skills";

export default function SkillShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 py-12">
      {skillCategories.map((cat, i) => (
        <div key={i} className="space-y-4 ">
          <div className="space-y-2">
            <h3 className="text-xl font-bold tracking-tight text-zinc-900">
              {cat.title}
            </h3>
            <p className="text-sm text-zinc-500 leading-normal">
              {cat.description}
            </p>
          </div>
          
          <ul className="grid grid-cols-1 gap-2gap-2.5 md:gap-2">
            {cat.skills.map(skill => (
              <li key={skill} className="flex items-center gap-2 text-[13px] md:text-sm font-semibold text-zinc-700">
                <div className="w-1 h-1 rounded-full bg-indigo-400" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
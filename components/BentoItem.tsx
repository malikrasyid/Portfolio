import React, { ReactNode } from "react";
import { cn } from "../lib/utils";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
}

export default function BentoItem({ children, className }: BentoItemProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        
        "bg-white/60 dark:bg-zinc-900/50", 
        
        "backdrop-blur-xl", 
        "rounded-3xl",
        "border border-white/50 dark:border-white/10", 
        
        "p-6 md:p-8",
        "flex flex-col justify-between",
        "transition-all duration-300 ease-out",
        "hover:border-zinc-300 dark:hover:border-white/20",
        "hover:shadow-xl hover:shadow-indigo-500/10 dark:hover:shadow-black/50",
        "hover:-translate-y-1",
        
        className
      )}
    >
      {children}
    </div>
  );
}
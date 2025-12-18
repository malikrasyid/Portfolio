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
        // 1. Base Structure & Colors
        "relative overflow-hidden", // Ensures inner glows/blobs don't spill out
        "bg-white dark:bg-zinc-900/50", // Slight transparency in dark mode for texture
        "backdrop-blur-sm", // subtle glass effect if you have a busy page background

        // 2. Shape & Borders (Critical for "Premium" look)
        "rounded-3xl",
        "border border-zinc-200/80 dark:border-white/10", // Crisp edges
        
        // 3. Spacing
        "p-6 md:p-8",
        "flex flex-col justify-between",

        // 4. Interactive State (Lift & Glow)
        "transition-all duration-300 ease-out",
        "hover:border-zinc-300 dark:hover:border-white/20", // Border gets clearer
        "hover:shadow-xl hover:shadow-zinc-200/50 dark:hover:shadow-black/50", // Deep shadow
        "hover:-translate-y-1", // Tactile lift effect
        
        className
      )}
    >
      {children}
    </div>
  );
}
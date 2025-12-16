import React from "react";
import { ReactNode } from "react";
import { cn } from "../lib/utils"; // Importing the helper we just made

interface BentoItemProps {
  children: ReactNode;
  className?: string;
}

export default function BentoItem({ children, className }: BentoItemProps) {
  return (
    <div
      className={cn(
        // 1. Base Styles
        "bg-white dark:bg-zinc-900",
        
        // 2. Shape & Spacing
        "rounded-3xl p-6",
        "flex flex-col justify-between",
        
        // 3. THE NEW STYLE: No border, soft shadow
        "border-none", 
        "shadow-[0_8px_30px_rgb(0,0,0,0.04)]", // Custom soft shadow
        "hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]", // Slightly deeper on hover
        "transition-shadow duration-300",
        
        className
      )}
    >
      {children}
    </div>
  );
}
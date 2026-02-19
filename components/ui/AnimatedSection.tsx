"use client";

import { cn } from "@/util/util";

interface AnimatedSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  animationActive: boolean;
}

export default function AnimatedSection({
  children,
  delay = 0,
  duration = 1000,
  className = "",
  animationActive,
}: AnimatedSectionProps) {
  return (
    <div
      className={cn(
        "transition-all ease-out",
        animationActive
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-10",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

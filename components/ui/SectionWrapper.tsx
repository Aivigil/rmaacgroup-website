"use client";

import { cn } from "@/util/util";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "transparent" | "dark" | "light";
  padding?: "sm" | "md" | "lg" | "xl";
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl" | "full";
}

const backgroundClasses = {
  transparent: "",
  dark: "bg-[#0f1114]",
  light: "bg-white text-black",
};

const paddingClasses = {
  sm: "py-8 md:py-12 px-4 md:px-6 lg:px-8",
  md: "py-12 md:py-16 px-4 md:px-6 lg:px-8",
  lg: "py-16 md:py-20 lg:py-24 px-4 md:px-6 lg:px-8",
  xl: "py-20 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8",
};

const maxWidthClasses = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  "2xl": "max-w-8xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
};

export default function SectionWrapper({
  children,
  className = "",
  containerClassName = "",
  background = "transparent",
  padding = "lg",
  maxWidth = "7xl",
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
    >
      <div
        className={cn("mx-auto", maxWidthClasses[maxWidth], containerClassName)}
      >
        {children}
      </div>
    </section>
  );
}

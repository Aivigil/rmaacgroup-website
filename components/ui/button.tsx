import React from "react";
import Link from "next/link";
import Line from "./line";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  href,
  onClick,
  className = "",
  variant = "default",
  size = "md",
  disabled = false,
}, ref) => {
  const baseClasses =
    "flex flex-col items-center justify-center transition-all duration-200";

  const sizeClasses = {
    sm: "py-2 text-xs sm:text-sm",
    md: "py-3 sm:py-4 text-sm sm:text-base",
    lg: "py-4 sm:py-6text-base sm:text-lg",
  };

  const textClasses = {
    sm: "text-xs sm:text-sm",
    md: "text-sm sm:text-base",
    lg: "text-base sm:text-lg",
  };

  const variantClasses = {
    default: "text-white hover:text-gray-300",
    outline:
      "text-white hover:text-gray-300 border border-gray-600",
  };

  const buttonClasses = `
    ${baseClasses} 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${className}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
  `.trim();

  const content = (
    <div className={buttonClasses} onClick={disabled ? undefined : onClick}>
      <Line
        width="w-full"
        color="bg-gray-500 transition-colors duration-200"
        className="mb-2 sm:mb-3 lg:mb-5"
      />

      <span
        className={`${textClasses[size]} ${className} font-semibold text-center transition-colors duration-200 whitespace-nowrap px-4`}
      >
        {children}
      </span>

      <Line
        width="w-full"
        color="bg-gray-500 transition-colors duration-200"
        className="mt-2 sm:mt-3 lg:mt-5"
      />
    </div>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
});

Button.displayName = "Button";

export default Button;

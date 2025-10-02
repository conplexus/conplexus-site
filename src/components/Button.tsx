// src/components/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
}

/**
 * Reusable button component with consistent styling and accessibility
 */
export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  ariaLabel,
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 font-semibold rounded-md transition focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-conx-blue text-white hover:opacity-90 focus:ring-conx-blue",
    secondary:
      "bg-white text-conx-blue hover:bg-gray-100 focus:ring-conx-blue",
    outline:
      "border border-conx-blue text-conx-blue hover:bg-conx-blue/5 focus:ring-conx-blue",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

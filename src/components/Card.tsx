// src/components/Card.tsx
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "highlight";
}

/**
 * Reusable card component with consistent styling
 */
export default function Card({ 
  children, 
  className = "",
  variant = "default" 
}: CardProps) {
  const baseStyles = "rounded-2xl p-6";
  const variantStyles = {
    default: "bg-card border border-default",
    highlight: "bg-conx-blue/5 dark:bg-conx-blue/10 border border-conx-blue/20",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}

// src/components/ExternalLink.tsx
import { ReactNode } from "react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

/**
 * External link component with proper accessibility and security
 */
export default function ExternalLink({
  href,
  children,
  className = "underline underline-offset-4 hover:opacity-80",
  ariaLabel,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

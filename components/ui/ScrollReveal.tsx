"use client";

import type { CSSProperties, ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold });

  const revealClass = `transition-opacity duration-700 ease-in-out ${
    isVisible ? "opacity-100" : "opacity-0"
  }`;

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`${revealClass}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

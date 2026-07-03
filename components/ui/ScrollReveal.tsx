"use client";

import type { CSSProperties, ReactNode } from "react";
import { scrollRevealClass, useScrollReveal } from "@/hooks/useScrollReveal";

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

  const style: CSSProperties | undefined =
    delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div
      ref={ref}
      className={`${scrollRevealClass(isVisible)}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

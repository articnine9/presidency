"use client";

import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

/**
 * Standard Heading Components for Presidency University
 *
 * Design System for consistent font sizing across all pages
 *
 * H1: Page titles, hero sections (48px mobile, 64px desktop)
 * H2: Section headers (24px mobile, 36px desktop)
 * H3: Subsection headers (20px mobile, 28px desktop)
 * H4: Component titles (16px mobile, 20px desktop)
 */

/**
 * H1 - Page/Hero Title
 * Mobile: text-4xl (36px)
 * Tablet: md:text-5xl (48px)
 * Desktop: lg:text-6xl (60px)
 * Usage: Page titles, hero sections
 */
export function H1({ children, className = "", color }: HeadingProps) {
  const style = color ? { color } : undefined;
  return (
    <h1
      className={`text-4xl md:text-5xl lg:text-6xl leading-tight ${!color ? "text-[#1e3a5f]" : ""} ${className}`}
      style={style}
    >
      {children}
    </h1>
  );
}

/**
 * H2 - Section Header (PRIMARY)
 * Mobile: text-2xl (24px)
 * Tablet: md:text-3xl (30px)
 * Desktop: lg:text-4xl (36px)
 * Usage: Main section headers, page sections
 */
export function H2({ children, className = "", color }: HeadingProps) {
  const textColor = color ? `text-[${color}]` : "text-[#1e3a5f]";
  const style = color ? { color } : undefined;
  return (
    <h2
      className={`text-2xl md:text-3xl lg:text-4xl leading-tight ${!color ? "text-[#1e3a5f]" : ""} ${className}`}
      style={style}
    >
      {children}
    </h2>
  );
}

/**
 * H3 - Subsection Header (SECONDARY)
 * Mobile: text-xl (20px)
 * Tablet: md:text-2xl (24px)
 * Desktop: lg:text-3xl (30px)
 * Usage: Subsection headers, column headers
 */
export function H3({ children, className = "", color }: HeadingProps) {
  const style = color ? { color } : undefined;
  return (
    <h3
      className={`text-xl md:text-2xl lg:text-3xl leading-tight ${!color ? "text-[#1e3a5f]" : ""} ${className}`}
      style={style}
    >
      {children}
    </h3>
  );
}

/**
 * H4 - Component Title
 * Mobile: text-lg (18px)
 * Tablet: md:text-xl (20px)
 * Desktop: lg:text-2xl (24px)
 * Usage: Card titles, feature titles, component headers
 */
export function H4({ children, className = "", color }: HeadingProps) {
  const style = color ? { color } : undefined;
  return (
    <h4
      className={`text-lg md:text-xl lg:text-2xl font-semibold leading-snug ${!color ? "text-[#1e3a5f]" : ""} ${className}`}
      style={style}
    >
      {children}
    </h4>
  );
}

/**
 * H5 - Small Title
 * Mobile: text-base (16px)
 * Tablet: md:text-lg (18px)
 * Desktop: lg:text-xl (20px)
 * Usage: Small headers, labels, badges
 */
export function H5({ children, className = "", color }: HeadingProps) {
  const style = color ? { color } : undefined;
  return (
    <h5
      className={`text-base md:text-lg lg:text-xl font-semibold ${!color ? "text-[#1e3a5f]" : ""} ${className}`}
      style={style}
    >
      {children}
    </h5>
  );
}

/**
 * H6 - Extra Small Title
 * Mobile: text-sm (14px)
 * Tablet: md:text-base (16px)
 * Desktop: lg:text-lg (18px)
 * Usage: Small component headers, tabs, small sections
 */
export function H6({ children, className = "", color }: HeadingProps) {
  const style = color ? { color } : undefined;
  return (
    <h6
      className={`text-sm md:text-base lg:text-lg font-semibold ${!color ? "text-[#1e3a5f]" : ""} ${className}`}
      style={style}
    >
      {children}
    </h6>
  );
}

/**
 * Heading Specification Reference
 *
 * MOBILE  | TABLET      | DESKTOP     | COMPONENT | USE CASE
 * --------|-------------|-------------|-----------|----------------------------
 * text-4xl | md:text-5xl | lg:text-6xl | H1        | Page titles, hero sections
 * text-2xl | md:text-3xl | lg:text-4xl | H2        | Section headers
 * text-xl  | md:text-2xl | lg:text-3xl | H3        | Subsection headers
 * text-lg  | md:text-xl  | lg:text-2xl | H4        | Component/card titles
 * text-base| md:text-lg  | lg:text-xl  | H5        | Small headers, labels
 * text-sm  | md:text-base| lg:text-lg  | H6        | Extra small titles
 */

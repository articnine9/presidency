"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export type CommonButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "teal" | "pill";
  fullWidth?: boolean;
  /** Merge styles onto child (e.g. `next/link` `Link`). */
  asChild?: boolean;
};

/**
 * Shared CTA styles: orange primary, full pill (Check eligibility), teal, outline.
 */
export default function CommonButton({
  variant = "primary",
  fullWidth,
  className,
  children,
  type = "button",
  asChild = false,
  ...props
}: CommonButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      type={asChild ? undefined : type}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition",
        fullWidth && "w-full",
        variant === "primary" &&
          "rounded-xl bg-[#ff8c42] px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#e67a32] md:py-3 md:text-base",
        variant === "pill" &&
          "min-h-12 rounded-full bg-[#ff8c42] px-10 py-3.5 text-sm font-bold text-white shadow-[0_4px_16px_rgba(255,140,66,0.42)] duration-300 hover:bg-[#e7762a] hover:shadow-[0_6px_22px_rgba(255,140,66,0.48)] md:min-h-[52px] md:px-12 md:text-base",
        variant === "teal" &&
          "rounded-xl bg-[#0A8F96] px-6 py-3.5 text-sm font-bold text-white shadow-md duration-300 hover:bg-[#0BB5B5] hover:shadow-lg md:text-base",
        variant === "outline" &&
          "rounded-xl border border-[#1e3a5f]/15 bg-white py-3.5 text-sm font-semibold text-[#1e3a5f] shadow-sm hover:border-[#ff8c42]/40 hover:bg-[#ff8c42]/5",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

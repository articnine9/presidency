"use client";

import { useApplication } from "@/app/providers/ApplicationProvider";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface ApplyButtonProps {
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function ApplyButton({
  children = "APPLY NOW",
  className = "",
  variant = "primary",
  size = "md",
}: ApplyButtonProps) {
  const { openModal } = useApplication();

  const baseStyles =
    "font-semibold rounded-lg transition flex items-center gap-2";

  const variantStyles = {
    primary:
      "bg-[#0A8F96] text-white hover:bg-[#088b91] active:bg-[#076c70]",
    secondary:
      "bg-[#F58A3C] text-white hover:bg-[#eb7a28] active:bg-[#d97023]",
    outline: "border-2 border-[#0A8F96] text-[#0A8F96] hover:bg-[#0A8F96]/10",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      onClick={openModal}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
      {typeof children === "string" && <ArrowRight size={18} />}
    </button>
  );
}

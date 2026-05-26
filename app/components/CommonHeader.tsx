"use client";

import { motion } from "framer-motion";
import { H2 } from "@/app/components/Headings";

type CommonHeaderProps = {
  tag?: string; // ✅ optional
  title: string;
  highlight?: string;
  description?: string;
  primaryColor?: string;
  secondaryColor?: string;
  descriptionColor?: string;
  bgColor?: string;
  align?: "center" | "left";
};

export default function CommonHeader({
  tag,
  title,
  highlight,
  description,
  primaryColor = "#ff8c42",
  secondaryColor,
  descriptionColor,
  bgColor,
  align = "center",
}: CommonHeaderProps) {
  const background = bgColor || `${primaryColor}1A`;
  const isCenter = align === "center";

  return (
    <div
      className={`
        ${isCenter ? "text-center mx-auto" : "text-left"}
        mb-6 md:mb-10
        ${isCenter ? "max-w-2xl" : ""}
      `}
    >

      {/* Tag */}
      {tag && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ backgroundColor: background, color: primaryColor }}
          className="inline-block px-4 py-2 rounded-lg text-sm mb-4"
        >
          {tag}
        </motion.span>
      )}

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <H2 color={secondaryColor || "#1e3a5f"}>
          {title}

          {highlight && (
            <span
              className="inline-block ml-2"
              style={{ color: primaryColor }}
            >
              {highlight}
            </span>
          )}
        </H2>
      </motion.div>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          style={{ color: descriptionColor || "#6b7280" }}
          className={`
            mt-4
            ${isCenter ? "max-w-2xl mx-auto" : "max-w-xl"}
          `}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
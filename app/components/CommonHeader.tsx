"use client";

import { motion } from "framer-motion";

type CommonHeaderProps = {
  tag: string;
  title: string;
  highlight?: string;
  description?: string;
  primaryColor?: string;
  bgColor?: string;
  align?: "center" | "left"; // ✅ NEW
};

export default function CommonHeader({
  tag,
  title,
  highlight,
  description,
  primaryColor = "#ff8c42",
  bgColor,
  align = "center",
}: CommonHeaderProps) {
  const background = bgColor || `${primaryColor}1A`;

  const isCenter = align === "center";

  return (
    <div
      className={`
        ${isCenter ? "text-center mx-auto" : "text-left"}
        mb-16
        ${isCenter ? "max-w-2xl" : ""}
      `}
    >
      {/* Tag */}
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ backgroundColor: background, color: primaryColor }}
        className="inline-block px-4 py-2 rounded-full text-sm mb-4"
      >
        {tag}
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl text-[#1e3a5f] leading-tight"
      >
        {title}
        {highlight && (
          <span
            className={`block ${isCenter ? "" : "mt-1"}`}
            style={{ color: primaryColor }}
          >
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className={`
            text-gray-600 mt-4
            ${isCenter ? "max-w-2xl mx-auto" : "max-w-xl"}
          `}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

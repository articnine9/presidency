"use client";

import { motion } from "framer-motion";

type CommonHeaderProps = {
  tag: string;
  title: string;
  highlight?: string;
  description?: string;
  primaryColor?: string;
  secondaryColor?: string;
  descriptionColor?: string; // ✅ NEW
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
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ backgroundColor: background, color: primaryColor }}
        className="inline-block px-4 py-2 rounded-lg text-sm mb-4"
      >
        {tag}
      </motion.span>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ color: secondaryColor || "#1e3a5f" }} // ✅ full heading color
        className="text-2xl sm:text-3xl md:text-4xl leading-tight"
      >
        {title}
        {highlight && (
          <span
            className="inline-block ml-2"
            style={{ color: primaryColor }} // ✅ highlight color
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
          style={{ color: descriptionColor || "#6b7280" }} // ✅ HERE
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

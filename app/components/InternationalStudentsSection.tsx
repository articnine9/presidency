"use client";

import { motion } from "motion/react";

export function InternationalStudentsSection() {
  return (
    <section className="relative min-h-[280px] h-[320px] sm:h-[400px] md:h-[520px] w-full overflow-hidden group">
      {/* BACKGROUND */}
      <img
        src="img/international-students-bg.jpeg"
        alt="International Students"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 transition duration-500"></div>

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 h-full flex items-center py-8 md:py-0">
        <div className="text-white max-w-xl">
          {/* HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-2 md:mb-4"
          >
            International Students
          </motion.h2>

          {/* ✅ FIXED HOVER CONTENT */}
          <div
          // className="
          //   opacity-0
          //   translate-y-6
          //   group-hover:opacity-100
          //   group-hover:translate-y-0
          //   transition-all duration-500
          // "
          >
            <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-0 md:mb-6 max-w-[95vw] sm:max-w-none">
              Presidency University welcomes students from across the world into
              a diverse academic environment where cultures connect, innovation
              thrives, and global careers begin.
            </p>

            {/* <button className="bg-[#D4A843] text-white px-6 py-3 rounded-md hover:bg-[#b8932e] transition">
              Know More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

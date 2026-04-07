"use client";

import { motion } from "motion/react";

export function InternationalStudentsSection() {
  return (
    <section className="relative min-h-[320px] h-[360px] sm:min-h-[400px] sm:h-[440px] md:h-[520px] w-full overflow-hidden">
      {/* BACKGROUND */}
      <img
        src="img/international-students-bg.jpeg"
        alt="International Students"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Light overlay — keeps photo visible */}
      <div
        className="absolute inset-0 bg-black/25 transition duration-500"
        aria-hidden
      />

      {/* Bottom read zone — stronger gradient so white text stays legible */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[58%] bg-gradient-to-t from-black/85 via-black/45 to-transparent sm:h-[55%] md:h-[50%]"
        aria-hidden
      />

      {/* CONTENT — anchored to bottom */}
      <div className="relative mx-auto flex h-full max-w-[1400px] flex-col justify-end px-4 pb-10 pt-16 sm:px-6 sm:pb-12 sm:pt-20 md:pb-14 md:pt-24">
        <div className="max-w-2xl text-white">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-balance text-2xl font-semibold tracking-tight drop-shadow-md sm:text-3xl md:mb-3 md:text-4xl lg:text-5xl"
          >
            International Students
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 }}
            viewport={{ once: true }}
            className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-white/95 drop-shadow sm:mt-3 sm:text-base md:mt-4 md:max-w-2xl md:text-lg"
          >
            Presidency University welcomes students from across the world into
            a diverse academic environment where cultures connect, innovation
            thrives, and global careers begin.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

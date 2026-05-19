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

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/25 transition duration-500"
        aria-hidden
      />
 <div
          className="
            w-full
            bg-[#1e3a5f]/95
            backdrop-blur-sm
            py-8
            sm:py-10
            md:py-12 absolute bottom-0
          "
        >
      {/* CONTENT */}
      <div className="relative mx-auto flex h-full max-w-[1400px] items-end px-0 sm:px-0">

        {/* Bottom Content Background */}
       
          <div className="max-w-[1400px]  px-4 sm:px-6 md:px-10">

            <div className="text-white">

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="
                  text-2xl
                  sm:text-3xl
                  md:text-4xl
                  lg:text-5xl
                  
                  tracking-tight
                  mb-3
                "
              >
                International Students
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 }}
                viewport={{ once: true }}
                className="
                  text-sm
                  sm:text-base
                  md:text-lg
                  leading-relaxed
                  text-white/90
                 
                "
              >
                Presidency University welcomes students from across the
                world into a diverse academic environment where cultures
                connect, innovation thrives, and global careers begin.
              </motion.p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
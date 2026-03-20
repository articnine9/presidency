"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function CampusVirtualTourSection() {
  return (
    <section className="relative pt-24 pb-32 bg-[#F5F6F8]">
      {/* IMAGE */}
      <div className="relative h-[420px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
          alt="Campus"
          className="w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

        {/* 360 BADGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-5xl font-semibold border-4 border-white rounded-full w-28 h-28 flex items-center justify-center backdrop-blur-sm bg-white/10 shadow-lg">
            360°
          </div>
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="relative max-w-[1000px] mx-auto bg-white shadow-xl rounded-xl px-10 py-14 -mt-24 text-center">
        {/* ✅ COMMON HEADER */}
        <div className="mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-full text-sm mb-4"
          >
            Virtual Experience
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f]"
          >
            Explore Our Campus Through
            <span className="block text-[#ff8c42]">a 360° Virtual Tour</span>
          </motion.h2>
        </div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg max-w-2xl mx-auto"
        >
          Experience the vibrant campus of Presidency University located in
          Bangalore — a thriving academic environment where innovation, global
          learning, and student life come together.
        </motion.p>

        {/* ✅ CTA BUTTON (MATCHED STYLE) */}
        <button className="mt-10 bg-[#ff8c42] hover:bg-[#e67932] text-white px-8 py-3 rounded-full flex items-center gap-3 mx-auto transition shadow-md hover:shadow-lg">
          Virtual Tour 360
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}

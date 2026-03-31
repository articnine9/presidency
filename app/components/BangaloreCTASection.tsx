"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function BangaloreCTASection() {
  return (
    <section className="relative py-28 text-white">
      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Bangalore skyline"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      <div className="relative max-w-[1000px] mx-auto px-6 text-center">
        {/* GLASS CARD */}
        <div className="bg-black/50  rounded-2xl px-10 py-14 border border-white/20 shadow-2xl">
          {/* ✅ TAG */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-white/20 text-white px-4 py-2 rounded-lg text-sm mb-4"
          >
            Life in Bangalore
          </motion.span>

          {/* ✅ HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold mb-4 leading-tight"
          >
            Study in India’s
            <span className="block text-[#ff8c42]">Silicon Valley</span>
          </motion.h2>

          {/* ✅ DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Bangalore is home to leading global companies and offers exceptional
            opportunities for innovation, technology, entrepreneurship, and
            global careers.
          </motion.p>

          {/* COMPANY LOGOS */}
          <div className="flex flex-wrap justify-center gap-8 items-center mb-10 opacity-90 bg-white rounded-2xl p-8">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              className="h-8 hover:scale-110 transition"
              alt="Google"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              className="h-8 hover:scale-110 transition"
              alt="Amazon"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              className="h-8 hover:scale-110 transition"
              alt="Microsoft"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg"
              className="h-8 hover:scale-110 transition"
              alt="Infosys"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Wipro_Primary_Logo_Color_RGB.svg"
              className="h-8 hover:scale-110 transition"
              alt="Wipro"
            />
          </div>

          {/* CTA */}
          <button className="bg-[#ff8c42] hover:bg-[#e6762f] px-8 py-4 rounded-md flex items-center gap-3 mx-auto transition shadow-lg hover:shadow-xl">
            Explore Bangalore Life
          </button>
        </div>
      </div>
    </section>
  );
}

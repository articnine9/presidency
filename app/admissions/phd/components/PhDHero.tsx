"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function PhDHero() {
  return (
    <section className="relative min-h-[520px] md:min-h-[580px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=80"
          alt="Research"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3D]/90 via-[#0F1E3D]/75 to-[#0A8F96]/40" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-16 md:py-24 w-full">
        {/* Breadcrumb */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs text-gray-400 mb-4 tracking-wide"
        >
          Home › Admissions › Ph.D. Programmes
        </motion.p>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="inline-flex items-center gap-2 bg-[#0A8F96]/20 border border-[#0A8F96]/40 text-teal-300 text-xs font-semibold px-4 py-2 rounded-full mb-6"
        >
          <GraduationCap size={13} />
          Doctoral Admissions Open 2025–26
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6 max-w-3xl"
        >
          Begin Your{" "}
          <span className="text-[#0A8F96]">Ph.D. Research</span>{" "}
          Journey
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="text-white/80 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
        >
          Pursue original research under expert faculty mentorship across 10 schools.
          Presidency University provides the infrastructure, networks, and support
          to advance knowledge and build an impactful academic career.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-[#0A8F96] hover:bg-[#097e85] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200"
          >
            Apply Now
            <ArrowRight size={16} />
          </a>
          <a
            href="#schools"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 backdrop-blur-sm"
          >
            Explore Schools
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-white/15"
        >
          {[
            { label: "Schools Offering PhD", value: "10" },
            { label: "Research Areas", value: "60+" },
            { label: "Duration", value: "3–5 Yrs" },
            { label: "Degree", value: "Doctor of Philosophy" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

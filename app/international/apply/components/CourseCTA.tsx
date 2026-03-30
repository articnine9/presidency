"use client";

import { motion } from "framer-motion";
import data from "../data/HowToApply.json";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

export default function CourseCTA() {
  const { title, description, email, phone, applyUrl } = data.ctaSection;

  return (
    <section className="bg-[#fff] py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#0F1E3D] to-[#0D3B5C] 
          rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
        >
          {/* 🔥 BACKGROUND GLOW */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-teal-500/20 blur-3xl rounded-full" />

          {/* 🔥 LEFT CONTENT */}
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-snug">
              {title}
            </h2>

            <p className="text-gray-300 mt-3 text-base md:text-lg">
              {description}
            </p>

            {/* 🔥 CONTACT INFO */}
            <div className="mt-6 space-y-3 text-sm md:text-base text-gray-300">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-400" />
                <a
                  href={`tel:${phone}`}
                  className="hover:text-white transition"
                >
                  {phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Globe size={18} className="text-teal-400" />
                <a
                  href={applyUrl}
                  target="_blank"
                  className="hover:text-white transition"
                >
                  {applyUrl.replace("https://", "")}
                </a>
              </div>
            </div>
          </div>

          {/* 🔥 RIGHT CTA */}
          <div className="relative z-10 flex flex-col gap-4">
            {/* PRIMARY CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={applyUrl}
              target="_blank"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-lg 
              font-semibold flex items-center gap-2 shadow-lg transition"
            >
              APPLY NOW
              <ArrowRight size={18} />
            </motion.a>

            {/* SECONDARY CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={`mailto:${email}`}
              className="border border-white/30 text-white px-6 py-3 rounded-lg 
              text-sm hover:bg-white/10 transition text-center"
            >
              Contact Admissions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

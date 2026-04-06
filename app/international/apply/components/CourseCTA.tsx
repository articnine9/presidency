"use client";

import { motion } from "framer-motion";
import data from "../data/HowToApply.json";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";

export default function CourseCTA() {
  const { title, description, email, phone, applyUrl } = data.ctaSection;

  return (
    <section className="bg-[#fff] pb-16 pt-12 md:pb-20 md:pt-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-stretch justify-between gap-8 overflow-hidden rounded-2xl bg-gradient-to-r from-[#0F1E3D] to-[#0D3B5C] px-4 py-8 sm:px-8 sm:py-10 md:flex-row md:items-center md:px-8 md:py-12"
        >
          {/* 🔥 BACKGROUND GLOW */}
          <div className="absolute -top-10 -right-10 w-60 h-60 bg-teal-500/20 blur-3xl rounded-full" />

          {/* 🔥 LEFT CONTENT */}
          <div className="relative z-10 min-w-0 max-w-xl text-left">
            <h2 className="font-serif text-2xl leading-snug text-white sm:text-3xl md:text-4xl">
              {title}
            </h2>

            <p className="mt-3 text-sm text-gray-300 md:text-base lg:text-lg">
              {description}
            </p>

            {/* 🔥 CONTACT INFO */}
            <div className="mt-6 space-y-3 text-xs text-gray-300 sm:text-sm md:text-base">
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <a
                  href={`mailto:${email}`}
                  className="min-w-0 break-all transition hover:text-white"
                >
                  {email}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-teal-400" />
                <a href={`tel:${phone}`} className="break-all transition hover:text-white">
                  {phone}
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Globe size={18} className="mt-0.5 shrink-0 text-teal-400" />
                <a
                  href={applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-w-0 break-all transition hover:text-white"
                >
                  {applyUrl.replace("https://", "")}
                </a>
              </div>
            </div>
          </div>

          {/* 🔥 RIGHT CTA */}
          <div className="relative z-10 flex w-full flex-col gap-3 sm:max-w-xs md:w-auto md:shrink-0">
            {/* PRIMARY CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-teal-500 px-6 py-3.5 font-semibold text-white shadow-lg transition hover:bg-teal-600 sm:px-8 sm:py-4"
            >
              APPLY NOW
              <ArrowRight size={18} />
            </motion.a>

            {/* SECONDARY CTA */}
            <motion.a
              whileHover={{ scale: 1.02 }}
              href={`mailto:${email}`}
              className="rounded-lg border border-white/30 px-6 py-3 text-center text-sm text-white transition hover:bg-white/10"
            >
              Contact Admissions
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

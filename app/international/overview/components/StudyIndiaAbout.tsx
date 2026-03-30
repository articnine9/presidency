"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

export default function StudyIndiaAbout({ data }: any) {
  const about = data?.about;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f8fafc]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid md:grid-cols-2 gap-12 items-center align-middle">
        {/* 🔹 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CommonHeader
            tag={about?.tag}
            title={about?.title}
            highlight={about?.highlight}
            description=""
            align="left"
          />

          {/* NOTE / EXTENDED TEXT */}
          <p className="text-gray-600 mt-5 leading-relaxed text-base md:text-lg max-w-xl">
            {about?.content}
          </p>
          <p className="text-gray-600 mt-5 leading-relaxed text-base md:text-lg max-w-xl">
            {about?.note}
          </p>

          {/* OPTIONAL CTA */}
          <div className="mt-6">
            <a
              href="/apply"
              className="inline-block px-6 py-3 bg-[#0A8F96] text-white rounded-lg shadow hover:bg-[#0BB5B5] transition"
            >
              Apply Now
            </a>
          </div>
        </motion.div>

        {/* 🔹 RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[420px] md:h-[600px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={
              about?.image ||
              "https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            }
            alt="Presidency University Campus"
            fill
            className="object-cover"
          />

          {/* 🔥 Overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

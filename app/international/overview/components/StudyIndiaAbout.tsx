"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function StudyIndiaAbout({ data }: any) {
  const about = data?.about;

  return (
    <section className="bg-[#f7f7f7] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* 🔹 LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[320px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden"
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
          </motion.div>

          {/* 🔹 RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* HEADER */}
            <CommonHeader
              tag={about?.tag}
              title={about?.title}
              highlight={about?.highlight}
              description=""
              align="left"
              primaryColor="#0A8F96"
            />

            {/* CONTENT */}
            <p className="text-gray-600 mt-5 leading-relaxed text-sm md:text-base">
              {about?.content}
            </p>

            {/* NOTE */}
            <p className="text-gray-600 mt-5 leading-relaxed text-sm md:text-base">
              {about?.note}
            </p>

            {/* CTA BUTTON */}
            <div className="mt-8">
              <a
                href={about?.buttonLink || "/apply"}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0A8F96] text-white rounded-md hover:bg-[#08757a] transition-all duration-300"
              >
                {about?.buttonText || "Discover Presidency"}

                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

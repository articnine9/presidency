"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function GlobalPresence() {
  return (
     <section className="bg-[#F5F6F8] py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        {/* 🔹 TITLE */}
        <div className="mb-10 text-center md:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-lg text-sm mb-4"
            >
              Global Presence/International Connect
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl text-[#1e3a5f]"
            >
              Worldwide Academic 
              <span className="block text-[#0A8F96]">Connections</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-xl mx-auto text-sm md:text-lg"
            >
              Through its worldwide academic connections, the University fosters global collaborations that enrich education and broaden perspectives
            </motion.p>
          </div>
       

        {/* 🌍 MAP CONTAINER */}
        <div className="relative w-full">
          {/* MAP IMAGE */}
          <img
            src="/img/aboutus/global-presence.jpeg"
            className="w-full max-w-[1000px] mx-auto"
          />

          {/* 🔥 PINS (Examples) */}
        </div>
      </div>
    </section>
  );
}

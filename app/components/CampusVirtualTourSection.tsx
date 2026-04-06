"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function CampusVirtualTourSection() {
  const [videoError, setVideoError] = useState(false);
  return (
    <section className="relative pb-12 md:pb-20 lg:pb-32 bg-[#F5F6F8]">
      {/* IMAGE */}
      <div className="relative h-[240px] sm:h-[320px] md:h-[420px] w-full overflow-hidden">
        {/* <img
          src="https://www.360cities.net/"
          alt="Campus"
          className="w-full h-full object-cover"
        /> */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          onError={() => setVideoError(true)}
          poster="https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        >
          <source src="https://www.immersivetourz.com/presidencyuniversity/index.html" type="video/mp4" />
          <source
                src="https://cdn.coverr.co/videos/coverr-university-students-studying-together-5237/1080p.mp4"
                type="video/mp4"
              />
              
        </video> */}
        <iframe
          src="https://www.immersivetourz.com/presidencyuniversity/index.html"
          className="w-full h-full pointer-events-auto"
          allow="fullscreen; autoplay"
          loading="eager"
        />
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

        {/* 360 BADGE */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold border-2 md:border-4 p-2 md:p-3 border-white rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center backdrop-blur-sm bg-white/10 shadow-lg">
            360°
          </div>
        </div>
      </div>

      {/* CONTENT BOX */}
      <div className="relative max-w-[1000px] mx-4 sm:mx-auto bg-white shadow-xl rounded-xl px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-14 -mt-12 sm:-mt-16 md:-mt-24 text-center">
        {/* ✅ COMMON HEADER */}
        <div className="mb-6">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-lg text-sm mb-4"
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
          className="text-gray-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto"
        >
          Experience the vibrant campus of Presidency University located in
          Bangalore — a thriving academic environment where innovation, global
          learning, and student life come together.
        </motion.p>

        {/* ✅ CTA BUTTON (MATCHED STYLE) */}
        <a
          href="https://www.immersivetourz.com/presidencyuniversity/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 md:mt-10 bg-[#ff8c42] hover:bg-[#e67932] text-white px-6 py-2.5 md:px-8 md:py-3 rounded-lg flex items-center gap-3 mx-auto transition shadow-md hover:shadow-lg text-sm md:text-base"
          >
            Virtual Tour 360
            <ArrowRight size={18} />
          </button>
        </a>
      </div>
    </section>
  );
}

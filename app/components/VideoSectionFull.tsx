"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export default function VideoSectionFull() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 🔥 VIDEO BACKGROUND */}

      <div className="absolute inset-0 z-0 flex justify-center items-center">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full object-cover scale-105 "
            onError={() => setVideoError(true)}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            className="w-3/4 h-full object-cover"
          />
        )}

        {/* 🔥 OVERLAY */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#0b2a4a]/90 via-[#0b2a4a]/70 to-[#0b2a4a]/40" /> */}

        {/* 🔥 PATTERN (OPTIONAL) */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      </div>

      {/* 🔥 CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex items-center"></div>
    </section>
  );
}

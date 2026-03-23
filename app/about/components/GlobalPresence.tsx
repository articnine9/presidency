"use client";

import { MapPin } from "lucide-react";

export default function GlobalPresence() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-[1400px] mx-auto text-center px-6">
        {/* 🔹 TITLE */}
        <h2 className="text-3xl md:text-4xl  text-[#1e3a5f] mb-4">
          GLOBAL PRESENCE / INTERNATIONAL CONNECT
        </h2>

        {/* 🌍 MAP CONTAINER */}
        <div className="relative w-full">
          {/* MAP IMAGE */}
          <img
            src="/img/about/world-map-dark.png"
            className="w-full max-w-[1000px] mx-auto"
          />

          {/* 🔥 PINS (Examples) */}
        </div>
      </div>
    </section>
  );
}

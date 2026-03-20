"use client";

import { Download, Eye, ArrowRight } from "lucide-react";

/* -------------------- DATA -------------------- */

const campusFeatures = [
  "Smart classrooms with digital learning technology",
  "Advanced AI, Robotics, and Engineering laboratories",
  "Central library with international research databases",
  "Innovation & startup incubation centres",
  "Student hostels, sports facilities, and wellness spaces",
];

const campusStats = [
  {
    value: "15,000+",
    label: "Students",
    color: "text-[#1e3a5f]",
    position: "top-8 right-8",
  },
  {
    value: "100 Acre",
    label: "Green Campus",
    color: "text-[#ff8c42]",
    position: "bottom-8 left-8",
  },
];

const ctaContent = {
  title: "Experience Life at Presidency University",
  description:
    "Visit our campus in Bangalore and explore our world-class facilities, vibrant student life, and global learning environment.",
  button: "Plan Your Visit",
};

/* -------------------- COMPONENT -------------------- */

export function MasterPlanSection() {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SPLIT LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <div className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-6 py-3 rounded-full mb-6">
              <span className="uppercase tracking-wider">Campus Overview</span>
            </div>

            <h2 className="text-2xl md:text-4xl text-[#1e3a5f] mb-6 leading-tight">
              STUDY ON A
              <br />
              <span className="text-[#ff8c42]">
                WORLD-CLASS CAMPUS IN BANGALORE
              </span>
            </h2>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Located in Yelahanka, Bangalore, Presidency University's 100-acre
              green campus combines modern academic infrastructure, advanced
              laboratories, and vibrant student life — creating the perfect
              environment for innovation, research, and global education.
            </p>

            {/* FEATURES */}
            <div className="space-y-4 mb-8">
              {campusFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-[#ff8c42] rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ff8c42] text-white px-8 py-4 rounded-full hover:bg-[#e67a32] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Download size={20} />
                Download Prospectus
              </button>

              <button className="bg-white text-[#1e3a5f] px-8 py-4 rounded-full hover:bg-gray-50 transition-all border-2 border-[#1e3a5f] flex items-center gap-2">
                <Eye size={20} />
                Virtual Tour
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585"
                alt="Campus aerial view"
                className="w-full h-[500px] object-cover"
              />

              {/* FLOATING STATS */}
              {campusStats.map((stat, index) => (
                <div
                  key={index}
                  className={`absolute ${stat.position} bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl`}
                >
                  <div className={`text-2xl ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* DECORATIVE BLOBS */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#ff8c42] rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#1e3a5f] rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>

        {/* CTA BANNER */}
        <div className="mt-20 relative bg-gradient-to-r from-[#1e3a5f] to-[#2a4a6f] rounded-3xl p-8 lg:p-12 overflow-hidden">
          {/* PATTERN */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)",
              }}
            ></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-xl md:text-4xl text-white mb-4">
                {ctaContent.title}
              </h3>

              <p className="text-white/80 text-lg">{ctaContent.description}</p>
            </div>

            <button className="flex-shrink-0 bg-[#ff8c42] text-white px-8 py-4 rounded-full hover:bg-[#e67a32] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
              {ctaContent.button}
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

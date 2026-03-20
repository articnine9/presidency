"use client";

import { Briefcase, TrendingUp } from "lucide-react";

export function PlacementSection() {
  return (
    <section className="relative py-24 bg-[#1e3a5f] overflow-hidden">
      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,120 1140,0 1440,120 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* Glow */}
      {/* <div className="absolute -top-20 right-0 w-96 h-96 bg-[#ff8c42]/20 blur-3xl rounded-full"></div> */}

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT - IMAGE STACK */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.4)] group">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
                alt="Corporate placement"
                className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-10 -right-6 z-20 bg-white rounded-2xl shadow-xl p-6 w-64">
              <div className="text-3xl text-[#1e3a5f] font-bold">₹12 LPA</div>
              <div className="text-gray-500 text-sm mb-2">Highest Package</div>

              <div className="border-t pt-2 mt-2">
                <div className="text-xl text-[#ff8c42] font-semibold">95%</div>
                <div className="text-gray-500 text-xs">Placement Rate</div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* Badge */}
            <div className="flex items-center gap-2 text-[#ff8c42] mb-6">
              <Briefcase size={22} />
              <span className="uppercase text-sm tracking-wider">
                Placements
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              SHAPING CAREERS WITH
              <span className="block text-[#ff8c42]">
                TOP INDUSTRY PLACEMENTS
              </span>
            </h2>

            {/* Description */}
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Our strong industry connections and career-focused programs ensure
              students secure top placements in leading global companies. We
              prepare you for real-world success.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="text-2xl text-[#ff8c42] mb-1">300+</div>
                <div className="text-white/80 text-sm">Recruiters</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="text-2xl text-[#ff8c42] mb-1">₹6 LPA</div>
                <div className="text-white/80 text-sm">Average Package</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="text-2xl text-[#ff8c42] mb-1">95%</div>
                <div className="text-white/80 text-sm">Placement Rate</div>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/20 transition">
                <div className="text-2xl text-[#ff8c42] mb-1">Global</div>
                <div className="text-white/80 text-sm">Opportunities</div>
              </div>
            </div>

            {/* Recruiter Logos */}
            <div className="flex flex-wrap gap-4 mb-8 opacity-80">
              {["Google", "Amazon", "Infosys", "TCS"].map((company, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm"
                >
                  {company}
                </div>
              ))}
            </div>

            {/* CTA */}
            <button className="bg-[#ff8c42] text-white px-8 py-4 rounded-full hover:bg-[#e67a32] transition shadow-lg flex items-center gap-2">
              View Placement Report
              <TrendingUp size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C300,0 1140,120 1440,0 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

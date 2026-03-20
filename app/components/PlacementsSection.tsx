"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const companies = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
];

export function PlacementsSection() {
  return (
    <section className="relative py-28 overflow-hidden text-white">
      {/* TOP SHAPE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,120 1140,0 1440,120 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d)",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#1e3a5f]/80"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 z-20">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white/10 text-orange-400 px-4 py-2 rounded-full mb-4 backdrop-blur">
            Placements & Careers
          </span>

          <h2 className="text-2xl md:text-4xl mb-6">
            OUTSTANDING
            <span className="block text-orange-400">PLACEMENT RECORDS</span>
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto">
            Our students secure top positions in global companies with excellent
            salary packages.
          </p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
            <h3 className="text-3xl font-semibold text-orange-400">₹45 LPA</h3>
            <p className="text-white/70 mt-2">Highest Package</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
            <h3 className="text-3xl font-semibold text-orange-400">95%</h3>
            <p className="text-white/70 mt-2">Placement Rate</p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/10">
            <h3 className="text-3xl font-semibold text-orange-400">300+</h3>
            <p className="text-white/70 mt-2">Recruiters</p>
          </div>
        </div>

        {/* LOGO SLIDER */}
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          modules={[Autoplay]}
        >
          {companies.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-xl p-6 flex items-center justify-center h-[90px]">
                <img
                  src={logo}
                  alt="company"
                  className="max-h-10 object-contain grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-[#ff8c42] text-white px-8 py-4 rounded-full hover:bg-[#e67a32] transition">
            View Placement Report
          </button>
        </div>
      </div>

      {/* BOTTOM SHAPE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C300,120 1140,0 1440,120 L1440,0 L0,0 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

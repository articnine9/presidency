"use client";

import { Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

/* ---------------- DATA ---------------- */

const slides = [
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    title: "Vibrant Student Community",
    subtitle: "Experience Beyond Classroom",
  },
  {
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
    title: "Cultural Festivals",
    subtitle: "Celebrate Diversity & Creativity",
  },
  {
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    title: "Innovation & Learning",
    subtitle: "Hands-on Experience",
  },
];

const stats = [
  { value: "50+", label: "Student Clubs" },
  { value: "50+", label: "Annual Events" },
  { value: "20+", label: "Sports Activities" },
  { value: "Global", label: "Exposure" },
];

const sectionContent = {
  tag: "Life @ Presidency",
  title: "WHERE STUDENT LIFE",
  highlight: "COMES ALIVE",
  description:
    "At Presidency University, campus life extends far beyond the classroom. Students participate in cultural festivals, leadership programs, sports competitions, innovation hubs, and vibrant clubs that help them grow into confident global citizens.",
  button: "Explore Campus Life",
};

/* ---------------- COMPONENT ---------------- */

export function LifeAtPresidency() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#ff8c42] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff8c42] rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SLIDER */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.4)]">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={{ clickable: true }}
              className="h-[500px]"
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={i}>
                  <div className="relative h-[500px] group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm">
                      Campus Life
                    </div>

                    <div className="absolute bottom-6 left-6 text-white">
                      <p className="text-sm text-white/70">{slide.subtitle}</p>
                      <h3 className="text-xl font-semibold">{slide.title}</h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="flex items-center gap-2 text-[#ff8c42] mb-4">
              <Sparkles size={22} />
              <span className="uppercase text-sm tracking-wider">
                {sectionContent.tag}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl text-white mb-6 leading-tight">
              {sectionContent.title}
              <span className="block text-[#ff8c42]">
                {sectionContent.highlight}
              </span>
            </h2>

            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              {sectionContent.description}
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:bg-white/20 transition"
                >
                  <div className="text-2xl text-[#ff8c42] mb-1">
                    {item.value}
                  </div>
                  <div className="text-white/80 text-sm">{item.label}</div>
                </div>
              ))}
            </div>

            <button className="bg-[#ff8c42] text-white px-8 py-4 rounded-full hover:bg-[#e67a32] transition shadow-lg">
              {sectionContent.button}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

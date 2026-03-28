"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";

import "swiper/css";

export default function BangaloreLife() {
  return (
    <section className="w-full bg-[#EEF1F5]">
      {/* 🔵 HERO SECTION */}
      <div className="relative h-[520px] w-full">
        <img
          src="/img/bang-life/innovation-2.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl  max-w-4xl leading-tight ">
            YOUR JOURNEY IN INDIA’S SILICON VALLEY:
            <br />
            DISCOVER BANGALORE
          </h1>

          <button className="mt-6 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-6 py-3 rounded-lg font-semibold transition">
            START EXPLORING
          </button>
        </div>
      </div>

      {/* 🔥 CAROUSEL SECTION */}
      <div className="relative z-20 -mt-24 px-6 max-w-[1400px] mx-auto">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* ✅ MORE CARDS */}
          {[
            {
              title: "TECHNOLOGY HUBS",
              desc: "Specific innovation labs",
              img: "img/banglo/hubs.png",
            },
            {
              title: "CULTURAL LANDMARKS",
              desc: "Modernised heritage-inspired sites",
              img: "img/banglo/landmark.png",
            },
            {
              title: "CUBBON PARK",
              desc: "Photorealistic, lush view",
              img: "/img/banglo/cubbon.png",
            },
            {
              title: "STARTUP ECOSYSTEM",
              desc: "India’s startup capital",
              img: "/img/banglo/eco.png",
            },
            {
              title: "IT PARKS",
              desc: "Global tech companies hub",
              img: "/img/banglo/it.png",
            },
            {
              title: "GREEN SPACES",
              desc: "Beautiful parks & nature",
              img: "/img/banglo/green.png",
            },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="group relative rounded-2xl overflow-hidden shadow-xl border border-white/20">
                {/* IMAGE */}
                <img
                  src={item.img}
                  className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* FULL DARK GRADIENT */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/70" /> */}
                <div className="absolute inset-0 bg-gradient-to-t   to-black/70" />

                {/* TOP TITLE */}
                <div className="absolute top-4 left-4 right-4">
                  <h3 className="text-white text-sm md:text-2xl  tracking-wide">
                    {item.title}
                  </h3>
                </div>

                {/* 🔥 BOTTOM OVERLAY BOX */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-md flex items-center justify-between">
                  <p className="text-xl text-white/90">{item.desc}</p>

                  <div className="w-9 h-9 rounded-lg border border-white/40 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition">
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

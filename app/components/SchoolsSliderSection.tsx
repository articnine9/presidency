"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import styles from "@/styles/swiper.module.css";

import "swiper/css";
import "swiper/css/pagination";

export function SchoolsSliderSection() {
  const schools = [
    {
      title: "School of Computer Science & Engineering",
      description:
        "Offers UG, PG and PhD programmes in Artificial Intelligence, Data Science, Cyber Security, Blockchain and Robotics.",
      image: "img/cse.png",
    },
    {
      title: "School of Engineering",
      description:
        "Engineering programmes in Electronics, Electrical, Civil, Mechanical, Petroleum and VLSI technologies.",
      image: "img/school-eng.png",
    },
    {
      title: "School of Management",
      description:
        "Business education including BBA, MBA and doctoral research across finance, marketing and analytics.",
      image: "img/mang.png",
    },
    {
      title: "School of Design",
      description:
        "Creative design programmes including product design, fashion design, game design and multimedia.",
      image: "img/media.png",
    },
    {
      title: "School of Law",
      description:
        "Integrated BA LLB, BBA LLB and LLM programmes with moot court training and legal research.",
      image: "img/law.png",
    },
  ];

  return (
    <section className="w-full min-h-[68vh] h-[68vh] md:min-h-screen md:h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className={`w-full h-full ${styles.customSwiper}`}
      >
        {schools.map((school, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full min-h-[68vh] h-[68vh] md:min-h-screen md:h-screen">
              {/* IMAGE */}
              <img
                src={school.image}
                alt={school.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-end md:items-center pb-8 md:pb-0">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-6 lg:gap-12 items-center w-full">
                  {/* LEFT SIDE (optional content or empty for spacing) */}

                  {/* RIGHT SIDE CARD */}
                  <div className="bg-black/60 backdrop-blur-xl rounded-xl md:rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-w-xl lg:ml-auto hover:-translate-y-1 transition duration-300 w-full">
                    {/* TITLE */}
                    <div className="text-white px-4 py-3 md:px-6 md:py-4 text-base sm:text-lg md:text-2xl font-semibold leading-snug">
                      {school.title}
                    </div>

                    {/* BODY */}
                    <div className="p-4 md:p-8 md:pt-0 pt-0">
                      <p className="text-white text-sm md:text-base mb-4 md:mb-6 line-clamp-4 md:line-clamp-none">
                        {school.description}
                      </p>

                      {/* BUTTON */}
                      <button className="bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-3 flex items-center gap-3 rounded-lg text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                        Explore
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

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
    <section className="w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        className={`w-full h-full ${styles.customSwiper}`}
      >
        {schools.map((school, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen">
              {/* IMAGE */}
              <img
                src={school.image}
                alt={school.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* CONTENT */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center w-full">
                  {/* LEFT SIDE (optional content or empty for spacing) */}

                  {/* RIGHT SIDE CARD */}
                  <div className="bg-black/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-w-xl hover:-translate-y-1 transition duration-300">
                    {/* TITLE */}
                    <div className="text-white px-6 py-4 text-xl md:text-2xl font-semibold">
                      {school.title}
                    </div>

                    {/* BODY */}
                    <div className="p-6 md:p-8 md:pt-0 pt-0">
                      <p className="text-white mb-6">{school.description}</p>

                      {/* BUTTON */}
                      <button className="bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-3 flex items-center gap-3 rounded-full text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
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

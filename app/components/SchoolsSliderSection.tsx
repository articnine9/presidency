"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import styles from "@/styles/swiper.module.css";

import "swiper/css";
import "swiper/css/pagination";

const schools = [
  {
    title: "School of Computer Science & Engineering",
    description:
      "Offers UG, PG and PhD programmes in Artificial Intelligence, Data Science, Cyber Security, Blockchain and Robotics.",
    image: "/img/cse.png",
    slug: "computer-science",
  },
  {
    title: "School of Engineering",
    description:
      "Engineering programmes in Electronics, Electrical, Civil, Mechanical, Petroleum and VLSI technologies.",
    image: "/img/school-eng.png",
    slug: "engineering",
  },
  {
    title: "School of Management",
    description:
      "Business education including BBA, MBA and doctoral research across finance, marketing and analytics.",
    image: "/img/mang.png",
    slug: "management",
  },
  {
    title: "School of Design",
    description:
      "Creative design programmes including product design, fashion design, game design and multimedia.",
    image: "/img/media.png",
    slug: "design",
  },
  {
    title: "School of Law",
    description:
      "Integrated BA LLB, BBA LLB and LLM programmes with moot court training and legal research.",
    image: "/img/law.png",
    slug: "law",
  },
];

function ExploreButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}
    >
      Explore
      <ArrowRight size={18} />
    </button>
  );
}

export function SchoolsSliderSection() {
  return (
    <section className="w-full">
      {/* Carousel: all breakpoints — autoplay, dots, loop, swipe */}
      <div className="h-[72dvh] min-h-[520px] w-full md:h-screen md:min-h-screen">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={700}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop
          className={`h-full w-full ${styles.customSwiper}`}
        >
          {schools.map((school, index) => (
            <SwiperSlide key={index} className="!h-full">
              <div className="relative h-full min-h-[520px] w-full md:min-h-screen">
                <img
                  src={school.image}
                  alt={school.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/25 md:bg-black/20" />

                <div className="absolute inset-0 flex items-end pb-10 md:items-center md:pb-0">
                  <div className="mx-auto grid w-full max-w-[1400px] items-center gap-6 px-4 sm:px-6 md:grid-cols-2 md:gap-12 md:px-10 lg:grid-cols-2">
                    <div
  className="
    bg-[#173B6D]
    w-full
    max-w-[420px]
    px-5
    py-5
    rounded-sm
    shadow-xl
  "
>

  {/* Content */}
  <div className="px-5 py-5 md:px-8 md:py-8">

    {/* Title */}
    <h3
      className="
        text-white
        text-xl
        md:text-3xl

        leading-tight
        mb-4
      "
    >
      {school.title}
    </h3>

    {/* Description */}
    <p
      className="
        text-white/90
        text-sm
        md:text-base
        leading-7
        mb-6
      "
    >
      {school.description}
    </p>

    {/* Button */}
    <div className="flex justify-end"><Link
    href={`/schools/${school.slug}`}
    className="
      flex
      items-center
      gap-2
      text-[#F5A623]
      text-sm
      font-medium
      hover:gap-3
      transition-all
      duration-300
    "
  >
    View More
    <ArrowRight size={16} />
  </Link></div>

  </div>
</div>
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

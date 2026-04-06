"use client";

import CommonHeader from "@/app/components/CommonHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import styles from "@/styles/swiper.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function WhyChooseUs() {
  const items = [
    {
      title: "International Pathways",
      desc: "UG, PG & Doctoral across 10 Schools",
      img: "/img/why-choose/004.png",
    },
    {
      title: "Verified Accreditations",
      desc: "NAAC A+ • UGC, BCI, AICTE",
      img: "/img/why-choose/009.png",
    },
    {
      title: "Top Placements",
      desc: "3+1+1 Dual Degree • Global MoUs",
      img: "/img/why-choose/003.png",
    },
    {
      title: "Bangalore Advantage",
      desc: "Clubs, Activities & Hostels",
      img: "/img/why-choose/005.png",
    },
    {
      title: "World-Class Facilities",
      desc: "300+ Industry Recruiters",
      img: "/img/why-choose/002.png",
    },
    {
      title: "100+ Global Programmes",
      desc: "Labs, Digital Campus",
      img: "/img/why-choose/006.png",
    },
    {
      title: "Vibrant Campus",
      desc: "India’s Silicon Valley",
      img: "/img/why-choose/007.png",
    },
    {
      title: "Faculty Support",
      desc: "Mentorship & OBE Learning",
      img: "/img/why-choose/008.png",
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-[#F5F6F8] to-white py-8 md:py-12 lg:py-16"
      id="programmes"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 w-full">
        <CommonHeader
          tag="Why We Stand Out"
          title="Why Choose"
          highlight="Presidency"
          description="When you choose Presidency University, you are choosing more than a degree. You are choosing a community, a city, and a career advantage that few universities in Asia can match."
          primaryColor="#0A8F96"
          secondaryColor="#1B4E8C"
          align="center"
        />

        <div className="mt-6 md:mt-10 relative px-0 sm:px-10 md:px-12 w-full min-w-0 overflow-hidden">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{ clickable: true }}
            navigation
            autoHeight
            loop={items.length > 4}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={16}
            slidesPerView={1.15}
            breakpoints={{
              480: { slidesPerView: 1.25, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 4, spaceBetween: 24 },
            }}
            className={`${styles.whyChooseSwiper} pb-2`}
          >
            {items.map((item, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <div
                  className="group relative flex h-full flex-col bg-white rounded-xl md:rounded-2xl shadow-md border-b-4 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderBottomColor:
                      i < items.length / 2 ? "#0A8F96" : "#d4a843",
                  }}
                >
                  <div className="w-full shrink-0 bg-[#f4f6f8]">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="h-auto w-full object-contain object-center group-hover:scale-[1.02] transition duration-500"
                    />
                  </div>
                  <div className="p-3 md:p-4 shrink-0">
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-1 md:mb-2 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center mt-6 md:mt-10">
          <a href="/about">
            <button className="bg-[#0A8F96] text-white px-8 py-3 rounded-lg text-sm md:text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Know More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

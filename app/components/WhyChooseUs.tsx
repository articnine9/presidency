"use client";

import Link from "next/link";
import CommonHeader from "@/app/components/CommonHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { H4 } from "@/app/components/Headings";

import styles from "@/styles/swiper.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export function WhyChooseUs() {
  const items = [
    {
      title: "International Pathways",
      desc: "UG, PG & Doctoral across 8 Schools",
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
    <section className="bg-[#F5F6F8] py-8 md:py-12 lg:py-16" id="programmes">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 w-full">
        {/* 🔥 MOBILE HEADER */}
        <div className="md:hidden">
          <CommonHeader
            tag="Why We Stand Out"
            title="Why Choose"
            highlight="Presidency"
            description="More than a degree, Presidency University offers you a community, a city of opportunity, and a career advantage that sets you apart in Asia."
            primaryColor="#0A8F96"
            secondaryColor="#1B4E8C"
            align="center"
          />
        </div>

        {/* 🔥 DESKTOP HEADER */}
        <div className="hidden md:block">
          <CommonHeader
            tag="Why We Stand Out"
            title="Why Choose"
            highlight="Presidency"
            description="When you choose Presidency University, you are choosing more than a degree. You are choosing a community, a city, and a career advantage that few universities in Asia can match."
            primaryColor="#F58A3C"
            secondaryColor="#1B4E8C"
            align="center"
          />
        </div>

        {/* 🔥 MOBILE DESIGN */}
        <div className="md:hidden mt-8">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".why-mobile-next",
              prevEl: ".why-mobile-prev",
            }}
            className="pb-2"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="
                    bg-white
                    rounded-[24px]
                    overflow-hidden
                    shadow-md
                    border-b-4
                  "
                  style={{
                    borderBottomColor: i % 2 === 0 ? "#0A8F96" : "#d4a843",
                  }}
                >
                  {/* IMAGE */}
                  <div className="overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="
                        w-full
                        h-[260px]
                        object-cover
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5">
                    <H4 className="text-[#1B1F3B]">
                      {item.title}
                    </H4>

                    <p className="text-[#475569] text-sm mt-2 leading-7">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 🔥 CUSTOM NAVIGATION */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              className="
                why-mobile-prev
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-[#0A8F96]
                shadow-sm
              "
            >
              <ChevronLeft size={18} />
            </button>

            <button
              className="
                why-mobile-next
                w-10
                h-10
                rounded-full
                border
                border-gray-200
                bg-white
                flex
                items-center
                justify-center
                text-[#0A8F96]
                shadow-sm
              "
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* 🔥 MOBILE BUTTON */}
          <div className="mt-6">
            <Link
              href="/about"
              className="
                w-full
                bg-[#F58A3C]
                hover:bg-[#eb7a28]
                text-white
                py-4
                rounded-xl
                font-semibold
                text-sm
                flex
                items-center
                justify-center
                gap-2
                transition-all
              "
            >
              KNOW MORE
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* 🔥 DESKTOP DESIGN (UNCHANGED) */}
        <div className="hidden md:block">
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
                      <H4 className="text-gray-800 mb-1 md:mb-2 text-xs sm:text-sm md:text-base">
                        {item.title}
                      </H4>

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
            <Link href="/about" className="bg-[#0A8F96] text-white px-8 py-3 rounded-lg text-sm md:text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Know More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

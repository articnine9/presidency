"use client";

import Link from "next/link";
import {
  Briefcase,
  TrendingUp,
  Award,
  Users,
  DollarSign,
  BarChart,
} from "lucide-react";
import { ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const companies = [
   {
    name: "Amazon",
    logo: "/img/logos/amazon.png",
  },
  {
    name: "google",
    logo: "/img/logos/google.png",
  },
  {
    name: "microsoft",
    logo: "/img/logos/microsoft.png",
  },
  {
    name: "KPMG",
    logo: "/img/logos/kpmg.png",
  },
  {
    name: "Infosys",
    logo: "/img/logos/infosys.png",
  },
  {
    name: "Cognizant",
    logo: "/img/logos/cognizant.png",
  },
];

const stats = [
  {
    icon: <Award size={28} />,
    value: "Global Recruiters",
    label: "Amazon, Deloitte, Infosys, KPMG",
  },
  {
    icon: <TrendingUp size={28} />,
    value: "300+ Partners",
    label: "Industry Recruitment Partners",
  },
  {
    icon: <Users size={28} />,
    value: "Career Services",
    label: "Dedicated Training & Placement",
  },
  {
    icon: <Briefcase size={28} />,
    value: "Campus Drives",
    label: "Regular Industry Hiring",
  },
  {
    icon: <DollarSign size={28} />,
    value: "Global Careers",
    label: "MNC Opportunities",
  },
  {
    icon: <BarChart size={28} />,
    value: "Industry Aligned",
    label: "Internships & Live Projects",
  },
];

export function PlacementPartnersSection() {
  return (
    <section
      className="
        py-10
        md:py-16
        lg:py-24
        bg-cover
        bg-center
        bg-no-repeat
        relative
        overflow-hidden
      "
      style={{
        backgroundImage: "url('/img/background/bg-2.png')",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
        {/* 🔥 HEADER */}
        <div className="mb-8 md:mb-12 lg:mb-16">
          <span className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-5 py-2 rounded-xl text-sm mb-4">
            Placements & Careers
          </span>

          <h2 className="text-[34px] md:text-4xl text-[#1e3a5f] leading-tight">
            Career Outcomes &
            <span className="block text-[#F58A3C]">Industry Partners</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2 leading-7">
            Presidency University connects students with top global recruiters,
            ensuring strong career outcomes and industry ready skills.
          </p>
        </div>

        {/* 🔥 MOBILE LOGOS */}
        <div className="grid grid-cols-3 gap-6 md:hidden mb-8 place-items-center">
          {companies.slice(0, 3).map((company, index) => (
            <div key={index} className="flex justify-center items-center h-14">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 object-contain"
              />
            </div>
          ))}
        </div>

        {/* 🔥 DESKTOP LOGOS */}
        <div className="hidden md:block">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop
            spaceBetween={16}
            slidesPerView={2}
            breakpoints={{
              480: { spaceBetween: 24 },
              640: { slidesPerView: 3, spaceBetween: 32 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5, spaceBetween: 40 },
            }}
            className="mb-8 md:mb-16 w-full min-w-0"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-16 opacity-80 hover:opacity-100 transition">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-8 object-contain transition"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🔥 STATS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-5
                md:p-6
                flex
                flex-col
                md:flex-row
                items-center
                md:items-start
                text-center
                md:text-left
                gap-3
                md:gap-4
                shadow-sm
                hover:shadow-lg
                transition
                border
                border-gray-100
              "
            >
              {/* ICON */}
              <div className="text-[#1e3a5f] shrink-0 [&_svg]:w-6 [&_svg]:h-6 md:[&_svg]:w-7 md:[&_svg]:h-7">
                {item.icon}
              </div>

              {/* TEXT */}
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-[#1e3a5f] break-words">
                  {item.value}
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mt-1 break-words leading-6">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 MOBILE CTA */}
        <div className="mt-6 md:hidden">
          <Link
            href="/campus-life"
            className="
              w-full
              bg-[#0A8F96]
              hover:bg-[#087e84]
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
            VIEW ALL PLACEMENTS
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* 🔥 DESKTOP CTA */}
        <div className="hidden md:block mt-10">
          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 bg-[#ff8c42] text-white px-7 py-3 rounded-lg hover:bg-[#e67932] transition shadow-md hover:shadow-lg"
          >
            View All Placements
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

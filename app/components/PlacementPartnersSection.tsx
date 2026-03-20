"use client";

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
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Deloitte",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Deloitte.svg",
  },
  {
    name: "Capgemini",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Capgemini_201x_logo.svg",
  },
  {
    name: "KPMG",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9a/KPMG_logo.svg",
  },
  {
    name: "Infosys",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
  },
  {
    name: "Cognizant",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/Cognizant_logo_2022.svg",
  },
];

const stats = [
  {
    icon: <Award size={28} />,
    value: "Top Global Recruiters",
    label: "Amazon, Deloitte, Infosys, KPMG",
  },
  {
    icon: <TrendingUp size={28} />,
    value: "300+",
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
    value: "Industry Curriculum",
    label: "Internships & Live Projects",
  },
];

export function PlacementPartnersSection() {
  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        {/* ✅ COMMON HEADER */}
        <div className="mb-16">
          <span className="inline-block bg-[#ff7a2f]/10 text-[#ff7a2f] px-4 py-2 rounded-full text-sm mb-4">
            Placements & Careers
          </span>

          <h2 className="text-3xl md:text-4xl text-[#1e3a5f]">
            Career Outcomes &
            <span className="block text-[#ff7a2f]">Industry Partners</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Presidency University connects students with top global recruiters,
            ensuring strong career outcomes and industry-ready skills.
          </p>
        </div>

        {/* ✅ LOGO CAROUSEL */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="mb-16"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-16 opacity-80 hover:opacity-100 transition">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 object-contain  transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ STATS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 flex items-start gap-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="text-[#1e3a5f]">{item.icon}</div>

              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  {item.value}
                </h3>

                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="inline-flex items-center gap-2 bg-[#ff8c42] text-white px-7 py-3 rounded-full hover:bg-[#e67932] transition shadow-md hover:shadow-lg">
            View All Placement
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { ArrowRight, Zap } from "lucide-react";
import styles from "@/styles/swiper.module.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const schools = [
  {
    slug: "computer-science",
    title: "Computer Science & Engineering",
    category: "Engineering Technology",
    description:
      "Cutting-edge UG, PG and PhD programmes in AI, Data Science, Cyber Security, Blockchain and Robotics.",
    image: "img/cse.png",
    accentColor: "#0A8F96",
    programCount: 17,
  },
  {
    slug: "engineering",
    title: "Engineering",
    category: "Core Engineering",
    description:
      "Comprehensive programmes in Electronics, Electrical, Civil, Mechanical, Petroleum and VLSI technologies.",
    image: "img/school-eng.png",
    accentColor: "#D84315",
    programCount: 14,
  },
  {
    slug: "management",
    title: "Management",
    category: "Business Education",
    description:
      "Strategic business education with BBA, MBA and doctoral research across finance, marketing and analytics.",
    image: "img/mang.png",
    accentColor: "#6A3E92",
    programCount: 14,
  },
  {
    slug: "design",
    title: "Design",
    category: "Creative Studies",
    description:
      "Innovative design programmes including product design, fashion design, game design and multimedia.",
    image: "img/media.png",
    accentColor: "#FF6B6B",
    programCount: 8,
  },
  {
    slug: "law",
    title: "Law",
    category: "Legal Studies",
    description:
      "Comprehensive BA LLB, BBA LLB and LLM programmes with moot court training and legal research.",
    image: "img/law.png",
    accentColor: "#2C3E50",
    programCount: 4,
  },
  {
    slug: "information-science",
    title: "Information Science",
    category: "Technology",
    description:
      "Advanced BCA, BCA AI/ML, and M.Tech programmes in data science and cloud computing.",
    image: "img/cse.png",
    accentColor: "#1A5F7A",
    programCount: 5,
  },
  {
    slug: "commerce",
    title: "Commerce",
    category: "Business Studies",
    description:
      "Comprehensive undergraduate and postgraduate programmes in accounting, finance and economics.",
    image: "img/mang.png",
    accentColor: "#C97C1C",
    programCount: 8,
  },
  {
    slug: "media-studies",
    title: "Media Studies",
    category: "Communication Arts",
    description:
      "Dynamic JMC, Digital Media and Mass Communication programmes with industry partnerships.",
    image: "img/media.png",
    accentColor: "#E63946",
    programCount: 8,
  },
  {
    slug: "liberal-arts",
    title: "Liberal Arts & Sciences",
    category: "Interdisciplinary",
    description:
      "Integrated BA and BSc programmes emphasizing critical thinking and diverse knowledge domains.",
    image: "img/law.png",
    accentColor: "#2A9D8F",
    programCount: 13,
  },
  {
    slug: "health-sciences",
    title: "Health Sciences",
    category: "Healthcare & Wellness",
    description:
      "Specialized programmes in physiotherapy, nursing, occupational therapy and medical technology.",
    image: "img/cse.png",
    accentColor: "#06A77D",
    programCount: 7,
  },
];

interface ExploreButtonProps {
  className?: string;
  accentColor?: string;
}

function ExploreButton({ className = "", accentColor = "#0A8F96" }: ExploreButtonProps) {
  return (
    <button
      type="button"
      className={`group relative flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`,
      }}
    >
      <span className="relative z-10 flex items-center gap-2">
        Explore School
        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
      </span>
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ backgroundColor: accentColor }}
      />
    </button>
  );
}

export function SchoolsSliderSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f8f9fa] to-white overflow-hidden">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 md:pt-16 pb-8 md:pb-12">
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 mb-4">
            <Zap size={16} className="text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Explore Our Schools</span>
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#1e3a5f] mb-3 leading-tight">
          World-Class Education Across <span className="text-blue-600">10 Schools</span>
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Discover specialized programmes designed to shape leaders, innovators, and global citizens
        </p>
      </div>

      {/* Carousel */}
      <div className="h-[70dvh] min-h-[500px] w-full md:h-[600px] px-4 sm:px-6 lg:px-8 pb-12">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          navigation={false}
          loop
          className={`h-full w-full ${styles.customSwiper}`}
        >
          {schools.map((school) => (
            <SwiperSlide key={school.slug} className="!h-full">
              <div className="relative h-full w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group">
                {/* Background Image */}
                <img
                  src={school.image}
                  alt={school.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Multi-layered Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${school.accentColor}, transparent)`,
                  }}
                />

                {/* Content Container */}
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="w-full max-w-2xl">
                    {/* Category Tag */}
                    <div className="mb-4 flex items-center gap-2">
                      <div
                        className="h-1 w-8 rounded-full"
                        style={{ backgroundColor: school.accentColor }}
                      />
                      <span
                        className="text-xs sm:text-sm font-bold uppercase tracking-widest"
                        style={{ color: school.accentColor }}
                      >
                        {school.category}
                      </span>
                    </div>

                    {/* School Title */}
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                      {school.title}
                    </h3>

                    {/* Divider Line */}
                    <div
                      className="h-1 w-16 mb-4 rounded-full"
                      style={{ backgroundColor: school.accentColor }}
                    />

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-white/95 mb-6 max-w-xl leading-relaxed drop-shadow-md line-clamp-3">
                      {school.description}
                    </p>

                    {/* Program Count */}
                    <div className="mb-6 flex items-center gap-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-bold text-white">
                          {school.programCount}
                        </span>
                        <span className="text-sm text-white/80">Programmes</span>
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <ExploreButton accentColor={school.accentColor} />
                      <button
                        type="button"
                        className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>

                {/* Gradient Border Effect */}
                <div
                  className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${school.accentColor}, transparent)`,
                    border: `2px solid ${school.accentColor}`,
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0A8F96] mb-2">10</div>
              <p className="text-gray-600 text-sm md:text-base">Schools</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0A8F96] mb-2">98+</div>
              <p className="text-gray-600 text-sm md:text-base">Programmes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0A8F96] mb-2">UG/PG/PhD</div>
              <p className="text-gray-600 text-sm md:text-base">Degree Levels</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#0A8F96] mb-2">Global</div>
              <p className="text-gray-600 text-sm md:text-base">Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

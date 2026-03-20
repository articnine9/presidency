"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const focusItems = [
  {
    title: "Global Academic Partnerships",
    description:
      "Presidency University continues to expand international collaborations with universities across Europe, Asia, and the Americas.",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
  },
  {
    title: "Research and Innovation Initiatives",
    description:
      "The Research & Innovation Council supports faculty and scholars through global collaborations and advanced labs.",
    image:
      "/img/research-innovation.jpeg",
  },
  {
    title: "International Student Community",
    description:
      "Students from across the world create a vibrant multicultural campus and global learning experience.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
  },
  {
    title: "Innovation & Entrepreneurship",
    description:
      "The Presidency Launchpad supports startups and innovation, transforming ideas into real-world impact.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  },
];

export function InFocusSection() {
  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ✅ COMMON HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-full text-sm mb-4"
          >
            In Focus
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f]"
          >
            Highlights & Insights
            <span className="block text-[#0A8F96]">
              From Presidency University
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Discover key initiatives, global collaborations, and impactful
            developments shaping the future of learning and innovation.
          </motion.p>
        </div>

        {/* ✅ CAROUSEL */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {focusItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500"
                    alt=""
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col">
                  <h3 className="font-semibold text-[#1e3a5f] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm flex-grow">
                    {item.description}
                  </p>

                  {/* ✅ BUTTON UPDATED */}
                  <button className="mt-4 text-[#ff8c42] flex items-center gap-1 hover:gap-2 transition">
                    View More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ CTA BUTTON (MATCHED STYLE) */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-[#ff8c42] text-white px-7 py-3 rounded-full hover:bg-[#e67932] transition shadow-md hover:shadow-lg">
            View All Highlights
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

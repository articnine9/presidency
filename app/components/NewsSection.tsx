"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import "swiper/css";
import "swiper/css/pagination";

const news = [
  {
    title: "Global Academic Partnerships Expanded",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=2070",
  },
  {
    title: "Innovation and Research Initiatives Launched",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070",
  },
  {
    title: "International Student Exchange Programmes",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070",
  },
  {
    title: "TechBiz Innovation Challenge Highlights",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
  },
];

export function NewsSection() {
  return (
    <section className="bg-[#062f54]  text-white relative mt-20">
      <img
        src="/img/world.svg"
        alt="World Map"
        className="absolute inset-0 w-1/2 h-full object-contain opacity-20 top-0"
      />
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* WORLD MAP */}
        <div></div>

        {/* CONTENT */}
        <div className="py-16 sm:py-20 lg:py-24">
          {/* HEADER */}
          <div className="mb-8 sm:mb-10">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm mb-3 sm:mb-4"
            >
              News & Updates
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl leading-tight"
            >
              Stay Updated with
              <span className="block text-[#ff8c42]">Latest News</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mt-3 sm:mt-4 text-lg sm:text-lg"
            >
              Stay updated with the latest developments at Presidency
              University, including global collaborations, research
              breakthroughs, and international programmes.
            </motion.p>
          </div>

          {/* NEWS CAROUSEL */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={16}
            slidesPerView={2}
            autoplay={{ delay: 3500 }}
            pagination={false}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {news.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white text-[#1e3a5f] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      className="w-full h-[220px] sm:h-[260px] md:h-[300px] object-cover group-hover:scale-110 transition duration-500"
                      alt=""
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="font-semibold text-sm sm:text-base leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CTA */}
          <div className="mt-8 sm:mt-10">
            <button className="w-auto inline-flex justify-center items-center gap-2 bg-[#ff8c42] text-white px-6 sm:px-7 py-3 rounded-lg hover:bg-[#e67932] transition shadow-md hover:shadow-lg text-sm sm:text-base">
              View All News
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

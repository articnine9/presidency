"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ ADD THIS
import "swiper/css";
import CommonHeader from "@/app/components/CommonHeader";

/* ✅ TYPE DEFINITION */
type Leader = {
  name: string;
  role: string;
  img: string;
};

export default function ThoughtLeadersSection() {
  const leaders: Leader[] = [
    {
      name: "S. Sadagopan",
      role: "Director – IIIT Bangalore",
      img: "/img/l1.jpg",
    },
    { name: "Divya & Raghavendra", role: "Entrepreneurs", img: "/img/l2.jpg" },
    { name: "Rajiv Talreja", role: "Business Coach", img: "/img/l3.jpg" },
    { name: "Sanjay Sahay", role: "Tech Founder", img: "/img/l4.jpg" },
    { name: "Prerana Gopal", role: "Filmmaker", img: "/img/l5.jpg" },
    { name: "Jonita Gandhi", role: "Singer", img: "/img/l6.jpg" },
    { name: "Aditi Rao Hydari", role: "Actress", img: "/img/l7.jpg" },
    { name: "Dhvani Bhanushali", role: "Singer", img: "/img/l8.jpg" },
  ];

  const row1 = leaders.slice(0, 4);
  const row2 = leaders.slice(4, 8);

  const Card = (item: Leader, i: number) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4 text-center">
        <h4 className="text-sm md:text-base font-semibold text-[#ff6a00]">
          {item.name}
        </h4>
        <p className="text-xs md:text-sm text-gray-600 mt-1">{item.role}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-16 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ✅ HEADER */}
        <CommonHeader
          tag="Thought Leaders"
          title="Thought Leaders"
          highlight="on Campus"
          description={`Presidency University hosts visionary leaders from academia, industry, research, governance, and the arts. Their presence enriches students with real-world insights and innovation.

Through keynote sessions, workshops, and discussions, students gain exposure to global perspectives and practical knowledge.`}
          primaryColor="#0A8F96"
          secondaryColor="#1B4E8C"
          align="center"
        />

        <div className="mt-12">
          {/* ✅ ROW 1 */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // ✅ nice UX
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {row1.map((item: Leader, i: number) => (
              <SwiperSlide key={i}>{Card(item, i)}</SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ ROW 2 (reverse effect 🔥) */}
          <div className="mt-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              dir="rtl" // 🔥 opposite direction
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {row2.map((item: Leader, i: number) => (
                <SwiperSlide key={i}>{Card(item, i)}</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

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
      img: "/img/leaders/m1.jpeg",
    },
    { name: "Divya & Raghavendra", role: "Entrepreneurs", img: "/img/leaders/m2.jpeg" },
    { name: "Rajiv Talreja", role: "Business Coach", img: "/img/leaders/m3.jpeg" },
    { name: "Sanjay Sahay", role: "Tech Founder", img: "img/leaders/m4.jpeg" },
    { name: "Prerana Gopal", role: "Filmmaker", img: "/img/leaders/m5.jpeg" },
    { name: "Jonita Gandhi", role: "Singer", img: "/img/leaders/m5.jpeg" },
    { name: "Aditi Rao Hydari", role: "Actress", img: "/img/leaders/m5.jpeg" },
    { name: "Dhvani Bhanushali", role: "Singer", img: "/img/leaders/m6.jpeg" },
    { name: "Divya & Raghavendra", role: "Entrepreneurs", img: "/img/leaders/m7.jpeg" },
    { name: "Sanjay Sahay", role: "Tech Founder", img: "/img/leaders/m9.jpeg" },
    { name: "Prerana Gopal", role: "Filmmaker", img: "/img/leaders/m10.jpeg" },
    { name: "Jonita Gandhi", role: "Singer", img: "/img/leaders/m11.jpeg" },
    
    { name: "Sanjay Sahay", role: "Tech Founder", img: "/img/leaders/m9.jpeg" },
    { name: "Prerana Gopal", role: "Filmmaker", img: "/img/leaders/m10.jpeg" },
    { name: "Jonita Gandhi", role: "Singer", img: "/img/leaders/m11.jpeg" },


  ];

  const row1 = leaders.slice(0, 7);
  const row2 = leaders.slice(7, 15);

  const Card = (item: Leader, i: number) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl  shadow-md border-b-4 border-b-[#0A8F96] overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-500"
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
    <section className="py-24 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ✅ HEADER */}
        <CommonHeader
          tag="Campus Experts"
          title="Thought Leaders"
          highlight="on Campus"
          description={`Presidency University hosts visionary leaders from academia, industry, research, governance, and the arts. Their presence enriches students with real-world insights and innovation.

Through keynote sessions, workshops, and discussions, students gain exposure to global perspectives and practical knowledge.`}
          primaryColor="#0A8F96"
          secondaryColor="#1B4E8C"
          align="center"
        />

        <div className="mt-14">
          {/* ✅ ROW 1 */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, // ✅ nice UX
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 6 }, // ✅ important
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
              slidesPerView={6}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              dir="rtl" // 🔥 opposite direction
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 6}, // ✅ important
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

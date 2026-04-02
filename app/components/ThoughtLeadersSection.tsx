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
      name: "DR. V. NARAYANAN",
      role: "Chairman, ISRO",
      img: "/img/leaders/m1.jpeg",
    },
    { name: "DEEPAK VOHRA", role: "Former Ambassador of India to Poland", img: "/img/leaders/m2.jpeg" },
    { name: "RAKESH SINGH", role: "K-RERA Chief", img: "/img/leaders/m3.jpeg" },
    { name: "MADHU BANGARAPPA", role: "Minister Of Primary And Sec. Edu. Gov. Of Karnataka", img: "img/leaders/m4.jpeg" },
    { name: "SANJAY GUPTA ", role: "VLSI Society of India (VSI)Member, National Committee on Electronics Manufacturing", img: "/img/leaders/m5.jpeg" },
    { name: "RAJDEEP SARDESAI", role: "Journalist", img: "/img/leaders/m6.jpeg" },
    { name: "KIREN RIJIJU", role: "Union Minister of Parliamentary & Minority Affairs of India ", img: "/img/leaders/m7.jpeg" },
    { name: "PRIYANK KHARGE ", role: "Minister of Rural Development and Panchayat Raj of Karnataka", img: "/img/leaders/m8.png" },
    { name: "PADMA BHUSHAN DR. SURYA PRAKASH", role: "Journalist and Author", img: "/img/leaders/m9.jpeg" },
    { name: "SANJAY MUJOO ", role: "Vice President at Hewlett Packard Enterprise", img: "/img/leaders/m10.jpeg" },
     {
      name: "DR. RAM PRASATH",
      role: "Chairman BWSSB",
      img: "/img/leaders/m11.jpeg",
    },
    { name: "S. SADAGOPAN", role: "Director – IIIT Bangalore", img: "/img/leaders/m12.jpeg" },
    { name: "DIVYA & RAGHAVENDRA ", role: "Owner Rameshwaram Cafe", img: "/img/leaders/m14.jpeg" },
    { name: "RAJIV TALREJA ", role: "Business Coach ", img: "img/leaders/m16.jpeg" },
    { name: "SANJAY SAHAY ", role: "Founder & Director, TechConPro Pvt Ltd.", img: "/img/leaders/m18.jpeg" },
    { name: "QUAKE ", role: "Indian Rapper.", img: "/img/leaders/m20.jpeg" },
    { name: "VIVEK VASVANI", role: "Indian Actor & Writer", img: "https://presidencyuniversity.in/assets/images/eminent/Artboard 26.jpg?load=1" },
    { name: "NEEL PAREKH ", role: "Founder CEO, Ansaan Capital", img: "/img/leaders/m24.jpeg" },
    { name: "ZAKIR KHAN", role: "Indian Comedian", img: "/img/leaders/m25.jpeg" },
    { name: "BHUVAN BHAM ", role: "Indian Creator", img: "/img/leaders/m26.jpeg" },
    { name: "M.C SCQUARE  ", role: "Indian Rapper", img: "/img/leaders/m27.jpeg" },
    { name: "SHANE WATSON ", role: "International Cricketer", img: "/img/leaders/m28.jpeg" },
    { name: "RANDEEP HOODA ", role: "Indian Actor", img: "/img/leaders/m29.jpeg" },
    { name: "RAFTAR", role: "Indian Rapper & Lyricist ", img: "/img/leaders/m30.jpeg" },
    { name: "MADAN PADAKI ", role: "Co-Founder CEO & MD of Head Held High Foundation ", img: "/img/leaders/m31.jpeg" },
    { name: "UDAY HOLLAH", role: "Senior Advocate & Former Advocate General of Karnataka Holla & Holla Associates ", img: "/img/leaders/m32.jpeg" },
    { name: "RAGHURAM BHAT ", role: "Former Cricketer ", img: "/img/leaders/m33.jpeg" },
    { name: "Mr. Juan Antonio March Pujol ", role: "Ambassador of Spain to India ", img: "/img/leaders/m13.png" },
    { name: "Justice N. K. Sudhindra Rao (Rtd.)", role: "Chairman, State", img: "/img/leaders/m15.png" },
    { name: "Mr.Dilip Thakore", role: "Publisher-Editor, EducationWorld", img: "/img/leaders/m17.png" },
    { name: "Ronnie Screwvala", role: "Co-founder & Chairperson, upGrad", img: "https://presidencyuniversity.in/assets/4.png?load=1" },
    { name: "Dr. B.K.Das", role: "Director General(Electronics and Communication Systems)DRDO", img: "/img/leaders/m32.jpeg" },
    { name: "Dr. Abhay Jagdish Jere", role: "Vice Chairman – AICTE Chief Innovation Officer – Ministry of Education, Govt. of India", img: "https://presidencyuniversity.in/assets/4.png?load=1" },
    { name: "Shri. H.N. Nagamohan", role: "Das Former Judge, High Court of Karnataka", img: "/img/leaders/m21.png" },
    { name: "Mr. Narayanan Ramaswamy", role: "Partner & Head, Education & Skill Development Practice, KPMG in India", img: "/img/leaders/m35.png" },
    
  ];

  const row1 = leaders.slice(0, 35);
  const row2 = leaders.slice(7, 15);

  const Card = (item: Leader, i: number) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl  shadow-md border-b-4 border-b-[#0A8F96] overflow-hidden hover:shadow-2xl transition-all duration-300"
      style={{height:"320px"}}
    >
      <div className="overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500"
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
            slidesPerView={5}
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
              1024: { slidesPerView: 5 }, // ✅ important
            }}
          >
            {row1.map((item: Leader, i: number) => (
              <SwiperSlide key={i}>
                {Card(item, i)}
                </SwiperSlide>
            ))}
          </Swiper>

          {/* ✅ ROW 2 (reverse effect 🔥) */}
          <div className="mt-8">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={5}
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
                1024: { slidesPerView: 5}, // ✅ important
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

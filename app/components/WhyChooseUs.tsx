"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

export function WhyChooseUs() {
  const items = [
    {
      title: "100+ Global Programmes",
      desc: "UG, PG & Doctoral across 10 Schools",
      img: "/img/why-choose/1.png",
    },
    {
      title: "Verified Accreditations",
      desc: "NAAC A+ • UGC, BCI, AICTE",
      img: "/img/why-choose/2.jpeg",
    },
    {
      title: "International Pathways",
      desc: "3+1+1 Dual Degree • Global MoUs",
      img: "/img/why-choose/3.png",
    },
    {
      title: "Vibrant Campus",
      desc: "Clubs, Activities & Hostels",
      img: "/img/why-choose/4.png",
    },
    {
      title: "Top Placements",
      desc: "300+ Industry Recruiters",
      img: "/img/why-choose/5.png",
    },
    {
      title: "World-Class Facilities",
      desc: "Labs, Digital Campus",
      img: "/img/why-choose/6.png",
    },
    {
      title: "Bangalore Advantage",
      desc: "India’s Silicon Valley",
      img: "/img/why-choose/7.jpeg",
    },
    {
      title: "Faculty Support",
      desc: "Mentorship & OBE Learning",
      img: "/img/why-choose/8.png",
    },
  ];

  return (
    <section
      className="min-h-screen flex items-center bg-gradient-to-b from-[#F5F6F8] to-white py-12 md:py-16 lg:py-20"
      id="programmes"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        {/* HEADER */}
        <CommonHeader
          tag="Why We Stand Out"
          title="Why Choose"
          highlight="Presidency"
          description="When you choose Presidency University, you are choosing more than a degree. You are choosing a community, a city, and a career advantage that few universities in Asia can match."
          primaryColor="#0A8F96"
          secondaryColor="#1B4E8C"
          align="center"
        />

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* GOLD ACCENT */}
              {/* <div className="absolute top-0 left-0 w-10 h-1 bg-[#C9A24A]"></div> */}

              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2 leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a href="/about"><button className="bg-[#0A8F96] text-white px-8 py-3 rounded-lg text-sm md:text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
            Know More
          </button></a>
        </div>
      </div>
    </section>
  );
}

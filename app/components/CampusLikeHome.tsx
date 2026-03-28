"use client";

import { motion } from "motion/react";

export function CampusLikeHome() {
  type BangaloreItem = {
    title: string;
    subtitle: string;
    image: string;
    large?: boolean;
    wide?: boolean;
  };

  const items: BangaloreItem[] = [
    {
      title: "Sports & Student Life",
      subtitle: "Athletics, wellness & recreation facilities",
      image: "img/campus-like/sports.png",
      large: true,
    },
    {
      title: "Smart Digital Campus",
      subtitle: "High-speed Wi-Fi & fully networked environment",
      image: "img/campus-like/smart.jpeg",
    },
    {
      title: " Design & Media Studios",
      subtitle: "SOD labs, media labs & broadcasting studios",
      image: "img/bang-life/world.png",
    },
    {
      title: "Advanced Learning Labs",
      subtitle: "AI, ML, IoT, VLSI & Robotics facilities",
      image: "img/bang-life/life.png",
      wide: true,
    },
    {
      title: "  Library & Knowledge Hub",
      subtitle: " Digital library, journals & Manupatra access",
      image: "img/bang-life/innovation.png",
    },
  ];

  return (
    <section className="py-24 bg-[#eef1f5]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ✅ COMMON HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-lg text-sm mb-4"
          >
            Campus Like Home
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f]"
          >
            World-Class
            <span className="block text-[#0A8F96]">Campus Facilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Our campus is designed to deliver a world-class learning experience,
            combining advanced academic infrastructure with modern recreational
            and student support facilities.
          </motion.p>
        </div>

        {/* ✅ GRID */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[260px]">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl group cursor-pointer
                ${item.large ? "md:col-span-2 row-span-2" : ""}
                ${item.wide ? "md:col-span-2" : ""}
              `}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                alt=""
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition"></div>

              {/* TEXT */}
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-white/80">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

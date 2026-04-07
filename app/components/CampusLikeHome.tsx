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
      image: "img/campus-like/design-media.jpeg",
    },
    {
      title: "Library & Knowledge Hub",
      subtitle: "AI, ML, IoT, VLSI & Robotics facilities",
      image: "img/campus-like/library.png",
      wide: true,
    },
    {
      title: "Advanced Learning Labs",
      subtitle: "Digital library, journals & Manupatra access",
      image: "img/bang-life/innovation.png",
    },
  ];

  return (
    <section className="py-10 md:py-16 lg:py-24 bg-[#eef1f5] w-full min-w-0 overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full min-w-0">
        {/* ✅ COMMON HEADER */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
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
            className="text-2xl sm:text-3xl md:text-4xl text-[#1e3a5f] px-1"
          >
            World-Class
            <span className="block text-[#0A8F96]">Campus Facilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-3 md:mt-4 max-w-2xl mx-auto text-sm md:text-base lg:text-lg"
          >
            Our campus is designed to deliver a world-class learning experience,
            combining advanced academic infrastructure with modern recreational
            and student support facilities.
          </motion.p>
        </div>

        {/* ✅ GRID — same bento layout as desktop (3 columns) on all breakpoints */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 auto-rows-[minmax(76px,19vw)] sm:auto-rows-[minmax(100px,14vw)] md:auto-rows-[260px] w-full min-w-0">
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg sm:rounded-xl group cursor-pointer min-h-0
                ${item.large ? "col-span-2 row-span-2" : ""}
                ${item.wide ? "col-span-2" : ""}
              `}
            >
              {/* IMAGE */}
              <img
                src={item.image}
                className="w-full h-full min-h-[100%] object-cover group-hover:scale-110 transition duration-500"
                alt={item.title}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition"></div>

              {/* TEXT */}
              <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-auto md:bottom-6 md:left-6 text-white">
                <h3 className="text-[0.7rem] leading-tight sm:text-sm md:text-lg lg:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="mt-0.5 hidden text-[0.6rem] leading-snug text-white/85 line-clamp-2 sm:block sm:text-xs md:text-sm sm:line-clamp-none">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

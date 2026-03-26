"use client";
import { motion } from "framer-motion";

type SchoolHeroProps = {
  data: {
    title: {
      normal: string;
      italic: string;
    };
    description: string;
    breadcrumb?: string[];
    stats?: {
      label: string;
      value: string;
    }[];
    image?: string;
  };
};

export default function SchoolHero({ data }: SchoolHeroProps) {
  return (
    <>
      {/* 🔹 BREADCRUMB */}
      {data.breadcrumb && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-wrap">
            {data.breadcrumb.map((item, index, arr) => (
              <span key={index}>
                {item}
                {index !== arr.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 🔥 HERO */}
      <section className="relative w-full min-h-[520px] md:h-[520px] overflow-hidden">
        {/* IMAGE */}
        <img
          src={data.image || "/img/law.jpg"}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0 
          bg-gradient-to-r md:bg-gradient-to-r 
          from-[#0b2a4a]/95 via-[#0b2a4a]/85 to-transparent 
          bg-gradient-to-b from-[#0b2a4a]/80 via-[#0b2a4a]/70 to-[#0b2a4a]/90 md:to-transparent"
        ></div>

        {/* CONTENT */}
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-6 h-full flex items-center gap-60">
          <div className="max-w-4xl text-white pt-10 md:pt-0 pb-28 md:pb-0">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl"
            >
              {data.title.normal}
              <i className="ml-2">{data.title.italic}</i>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-white/90 mb-4"
            >
              {data.description}
            </motion.p>

            {/* BUTTON */}
            {/* <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#0A8F96] text-white px-8 py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg"
            >
              Request Information
            </motion.button> */}
            
             <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-10 mt-16"
          >
            <a
              href="/brochures/cse-brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
                Download Brouchure
              </button>
            </a>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
              How to Apply
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
              Contact
            </button>
          </motion.div>
          </div>
          <div>
              {data.stats && (
              <div className="relative mt-5 ">
                <div className="max-w-xl">
                  <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
                    {data.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="
              bg-white/10 backdrop-blur-md 
              border border-white/20 
              rounded-xl 
              px-4 py-4 
              text-center 
              transition-all duration-300
              hover:bg-white/20 hover:scale-105
            "
                      >
                        <p className="text-lg md:text-xl font-bold text-[#D4A843]">
                          {stat.value}
                        </p>
                        <p className="text-xs md:text-sm text-white/80 mt-1">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 📊 NEW GLASS STATS DESIGN */}
        </div>
      </section>
    </>
  );
}

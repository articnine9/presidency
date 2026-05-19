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
      <section className="relative w-full min-h-[480px] overflow-hidden sm:min-h-[520px] md:h-[520px]">
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
        <div className="relative mx-auto flex h-full min-h-[480px] w-full max-w-[1400px] flex-col gap-8 px-4 py-10 sm:px-6 md:min-h-[520px] md:flex-row md:items-center md:justify-between md:gap-12 md:py-0 xl:gap-24">
          <div className="max-w-4xl pb-4 text-white md:pb-0">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-3xl text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              {data.title.normal}
              <i className="ml-2">{data.title.italic}</i>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-lg text-white/90 md:text-xl lg:text-2xl"
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
              className="flex flex-wrap gap-4 mb-5 mt-10"
            >
              <button className="bg-[#0A8F96] text-white px-8 py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg">
                Download Brouchure
              </button>
              <button className="bg-white text-[#0F1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg">
                How to Apply
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
                Contact the OIA
              </button>
            </motion.div>
          </div>
          <div className="w-full shrink-0 md:w-auto">
            {data.stats && (
              <div className="mt-0 md:mt-6">
                <div className="max-w-sm mx-auto">
                  <div className="flex flex-col items-center gap-4">
                    {data.stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="
              w-full
              bg-white
              rounded-2xl
              px-6 py-5
              text-center
              shadow-md
              hover:shadow-lg
              transition duration-300
            "
                      >
                        <p className="text-2xl font-semibold text-[#D4A843]">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
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

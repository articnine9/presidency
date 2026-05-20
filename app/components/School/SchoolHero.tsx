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
      <section className="relative min-h-screen w-full overflow-hidden !content-center">
        {/* Background Image */}
        <img
          src={data.image || "/img/law.jpg"}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-center px-6 md:px-14">
          {/* Left Content */}
          <div className="max-w-[520px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white leading-tight text-4xl md:text-6xl font-semibold"
            >
              {data.title.normal}
              <br />
              <span className="italic font-light">{data.title.italic}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-sm md:text-base leading-relaxed text-white/80"
            >
              {data.description}
            </motion.p>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#0097A7] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#00b7c9]"
            >
              HOW TO APPLY
              <span>→</span>
            </motion.button>
          </div>

          {/* Stats Cards */}
          {data.stats && (
            <div className="mt-16 flex flex-wrap gap-5">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="
              w-[180px]
              rounded-xl
              border border-white/20
              bg-white/10
              backdrop-blur-md
              px-6
              py-7
              text-center
              text-white
            "
                >
                  <h3 className="text-4xl font-semibold text-[#D4A843]">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

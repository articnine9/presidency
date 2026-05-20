"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, GraduationCap } from "lucide-react";
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
      <section className="relative min-h-[720px] w-full overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <img
          src={
            data.image ||
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
          }
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div
          className="
      absolute inset-0
      bg-gradient-to-r
      from-black/75
      via-black/45
      to-black/20
    "
        />

        {/* CONTENT */}
        <div
          className="
      relative z-10
      mx-auto
      flex
      h-full
      min-h-[720px]
      max-w-[1400px]
      flex-col
      justify-center
      px-6
      md:px-10
    "
        >
          {/* LEFT CONTENT */}
          <div className="max-w-[750px]">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="
          text-5xl
          md:text-7xl
          leading-tight
          font-semibold
          text-white
        "
            >
              {data.title.normal}

              <br />

              <span
                className="
            italic
            font-light
            text-[#00B8C4]
          "
              >
                {data.title.italic}
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
          mt-6
          max-w-[560px]
          text-base
          leading-7
          text-white/80
        "
            >
              {data.description}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
          mt-10
          flex
          flex-wrap
          gap-4
        "
            >
              {/* BUTTON 1 */}
              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
    mt-10
    flex
    flex-wrap
    gap-4
  "
              >
                {/* BUTTON 1 */}
                <button
                  className="
      inline-flex
      items-center
      gap-2
      rounded-md
      bg-[#00A8B5]
      px-6
      py-3
      text-sm
      font-medium
      text-white
      transition
      hover:bg-[#0095A1]
    "
                >
                  <GraduationCap size={16} />
                  EXPLORE PROGRAMMES
                  <ArrowRight size={16} />
                </button>

                {/* BUTTON 2 */}
                <button
                  className="
      inline-flex
      items-center
      gap-2
      rounded-md
      border border-white
      bg-white/5
      px-6
      py-3
      text-sm
      font-medium
      text-white
      backdrop-blur-sm
      transition
      hover:bg-white/10
    "
                >
                  <Phone size={16} />
                  CONTACT THE OIA
                </button>

                {/* BUTTON 3 */}
                <button
                  className="
      inline-flex
      items-center
      gap-2
      rounded-md
      bg-white
      px-6
      py-3
      text-sm
      font-medium
      text-[#183153]
      transition
      hover:bg-gray-100
    "
                >
                  HOW TO APPLY
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* STATS */}
          {data.stats && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
          mt-16
          grid
          gap-5
          md:grid-cols-4
        "
            >
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="
              rounded-2xl
              border border-white/15
              bg-white/10
              px-8
              py-8
              text-center
              backdrop-blur-md
              shadow-xl
            "
                >
                  {/* VALUE */}
                  <h3
                    className="
                text-4xl
                font-semibold
                text-[#D4A843]
              "
                  >
                    {stat.value}
                  </h3>

                  {/* LABEL */}
                  <p
                    className="
                mt-3
                text-sm
                text-white/80
              "
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

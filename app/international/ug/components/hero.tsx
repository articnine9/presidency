"use client";
import { GraduationCap, CalendarDays, Building2, MapPin } from "lucide-react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

export default function CourseHero({ data, school }: any) {
  const hero = data.hero;

  return (
    <section className="relative z-30 flex min-h-[480px] items-center justify-center overflow-hidden sm:min-h-[520px] md:h-[520px]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img/banner/ug.JPG"
          alt="University Campus"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3D]/50 via-[#0F1E3D]/50 to-[#0F1E3D]/50"></div>

        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 py-10 sm:px-6 md:px-10 md:py-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm text-gray-300 mb-3"
          >
            {hero?.breadcrumb?.join(" › ")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-4 text-3xl text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {hero?.title.normal}
            <i>{hero?.title.italic}</i>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-lg text-white/90 md:text-xl lg:text-2xl"
          >
            {hero?.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

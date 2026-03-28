"use client";
import { GraduationCap, CalendarDays, Building2, MapPin } from "lucide-react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

export default function CourseHero({ data, school }: any) {
  const hero = data.hero;

  return (
    <section className="relative h-screen min-h-[500px] flex items-center justify-center z-30">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 w-full">
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
            className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl"
          >
            {hero?.title.normal}
            <i>{hero?.title.italic}</i>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-4"
          >
            {hero?.description}
          </motion.p>
        </div>
      </div>
    </section>
  );
}

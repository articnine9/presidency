"use client";
import { GraduationCap, CalendarDays, Building2, MapPin } from "lucide-react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

export default function CourseHero({ data, school }: any) {
  const hero = data.hero;

  return (
    <>
      {hero.breadcrumb && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-wrap">
            {hero?.breadcrumb?.join(" › ")}
          </div>
        </div>
      )}
      <section className="relative z-10 w-full min-h-[480px] overflow-x-hidden pb-8 sm:min-h-[520px] md:h-[520px] md:pb-0">
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
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 pb-12 pt-12 sm:px-6 md:px-10 md:pb-16 md:pt-16">
          <div className="max-w-4xl">
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
        <div
          className="
         relative md:absolute 
         md:left-1/2 md:-translate-x-1/2 
         md:bottom-[-60px] 
         w-full max-w-[1400px] px-4 md:px-6 mt-[-40px] md:mt-0
         z-20
       "
        >
          <div className="rounded-xl overflow-hidden shadow-xl">
            {/* HEADER */}
            <div className="bg-gradient-to-r from-[#1E3A5F] to-[#C9A24A] px-4 md:px-6 py-3 text-white text-sm md:text-xl font-semibold">
              Program Overview
              {/* Quick Info Bar */}
            </div>

            {/* GRID */}
            <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-6 py-5 md:py-6 text-gray-800">
              <InfoItem
                icon={<GraduationCap size={18} />}
                label="Degree"
                value={data?.degree}
              />
              <InfoItem
                icon={<CalendarDays size={18} />}
                label="Duration"
                value={data?.details?.duration}
              />
              <InfoItem
                icon={<Building2 size={18} />}
                label="School"
                value={data?.details?.school}
              />
              <InfoItem
                icon={<MapPin size={18} />}
                label="Campus"
                value={data?.details?.campus}
              />
            </div>
          </div>
        </div>
      </section>
    </>
    // <section className="relative text-white">
    //   {/* BACKGROUND */}
    //   <div className="absolute inset-0">
    //     <img
    //       src={hero?.image || "/img/campus.jpg"}
    //       className="w-full h-full object-cover"
    //     />
    //     <div
    //       className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-black/80 via-black/60 to-black/20
    //                     bg-gradient-to-b from-black/80 via-black/60 to-black/90 md:to-black/20"
    //     />
    //   </div>

    //   {/* CONTENT */}
    //   <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-14 md:py-20 pb-28 md:pb-24">
    //     {/* BREADCRUMB */}
    //     <p className="text-xs md:text-sm text-gray-300 mb-3">
    //       {hero?.breadcrumb?.join(" › ")}
    //     </p>

    //     {/* TITLE */}
    //     <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight max-w-3xl">
    //       {hero?.title.normal}
    //       <i>{hero?.title.italic}</i>
    //     </h1>

    //     {/* DESCRIPTION */}
    //     <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl leading-relaxed">
    //       {hero?.description}
    //     </p>

    //     {/* STATS */}
    //     <div className="grid grid-cols-3 sm:flex gap-3 md:gap-4 mt-6 md:mt-8">
    //       {hero?.stats?.map((stat: any, i: number) => (
    //         <div
    //           key={i}
    //           className="px-3 md:px-6 py-3 md:py-4 rounded-lg border border-yellow-400/40 bg-black/30 backdrop-blur-sm text-center"
    //         >
    //           <p className="text-sm md:text-xl font-semibold text-white">
    //             {stat.value}
    //           </p>
    //           <p className="text-[10px] md:text-xs text-gray-300 mt-1 uppercase tracking-wide">
    //             {stat.label}
    //           </p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>

    //   {/* 🔥 QUICK INFO BAR */}
    //   <div
    //     className="
    //     relative md:absolute
    //     md:left-1/2 md:-translate-x-1/2
    //     md:bottom-[-60px]
    //     w-full max-w-[1400px] px-4 md:px-6 mt-[-40px] md:mt-0
    //   "
    //   >
    //     <div className="rounded-xl overflow-hidden shadow-xl">
    //       {/* HEADER */}
    //       <div className="bg-gradient-to-r from-[#1E3A5F] to-[#C9A24A] px-4 md:px-6 py-3 text-white text-sm md:text-base font-semibold">Program Overview
    //         {/* Quick Info Bar */}
    //       </div>

    //       {/* GRID */}
    //       <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-6 py-5 md:py-6 text-gray-800">
    //         <InfoItem
    //           icon={<GraduationCap size={18} />}
    //           label="Degree"
    //           value={data.degree}
    //         />
    //         <InfoItem
    //           icon={<CalendarDays size={18} />}
    //           label="Duration"
    //           value={data.details?.duration}
    //         />
    //         <InfoItem
    //           icon={<Building2 size={18} />}
    //           label="School"
    //           value={data.details?.school}
    //         />
    //         <InfoItem
    //           icon={<MapPin size={18} />}
    //           label="Campus"
    //           value={data.details?.campus}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}

/* 🔹 Info Item */
function InfoItem({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      <div className="text-[#1E3A5F]">{icon}</div>
      <div>
        <p className="text-[10px] md:text-lg text-gray-500">{label}:</p>
        <p className="font-semibold text-xs md:text-base">{value}</p>
      </div>
    </div>
  );
}

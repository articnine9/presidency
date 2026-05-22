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
      <div className="block md:hidden">
        <section className="relative min-h-screen overflow-hidden">
          {/* BG IMAGE */}
          <img
            src={hero?.image || "/img/law.png"}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-[#071827]/70" />

          {/* CONTENT */}
          <div className="relative z-10 px-4 pt-24 pb-10">
            {/* TITLE */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="
          max-w-[340px]
          text-[28px]
          font-semibold
          leading-[1.05]
          text-white
        "
            >
              {hero?.title.normal}
              <br />

              <span className="font-light italic">{hero?.title.italic}</span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
          mt-5
          text-[14px]
          leading-8
          text-white/85
        "
            >
              {hero?.description}
            </motion.p>

            {/* STATS */}
            <div className="mt-8 space-y-4">
              {hero?.stats?.map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/40
              bg-white/5
              px-5
              py-4
              backdrop-blur-md
            "
                >
                  {/* ICON */}
                  <div
                    className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-[#11B6C9]
                text-white
              "
                  >
                    {i === 0 && <CalendarDays size={22} />}
                    {i === 1 && <CalendarDays size={22} />}
                    {i === 2 && <GraduationCap size={22} />}
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3
                      className="
                  text-[30px]
                  font-semibold
                  leading-none
                  text-[#D4A843]
                "
                    >
                      {stat.value}
                    </h3>

                    <p className="mt-1 text-[15px] text-white/90">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="hidden md:block">
        <section className="relative min-h-screen w-full overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <img
            src={hero?.image || "/img/law.png"}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/55" />

          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col justify-center px-6 md:px-12">
            {/* TEXT CONTENT */}
            <div className="max-w-[700px]">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="
          text-white
          leading-[1.05]
          text-4xl
          md:text-6xl
          font-semibold
        "
              >
                {hero?.title.normal}
                <br />

                <span className="italic font-light">{hero?.title.italic}</span>
              </motion.h1>

              {/* SUBTITLE */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="
          mt-5
          max-w-[620px]
          text-sm
          md:text-base
          leading-relaxed
          text-white/80
        "
              >
                {hero?.description}
              </motion.p>
            </div>

            {/* GLASS STATS */}
            <div className="mt-14 flex flex-wrap gap-5">
              {hero?.stats?.map((stat: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="
            w-[280px]
            rounded-2xl
            border border-white/20
            bg-white/10
            backdrop-blur-md
            px-6 py-6
            text-center
            shadow-lg
          "
                >
                  <h3 className="text-4xl font-semibold text-[#D4A843]">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM INFO BAR */}
          </div>
        </section>
      </div>
      <div
        className="
       
        bottom-0
        left-0
        w-full
        bg-[#F3F4F6]
        border-t border-gray-200
      "
      >
        <div
          className="
          mx-auto
          grid
          max-w-[1400px]
          grid-cols-2
          gap-6
          px-6
          py-10
          md:grid-cols-4
        "
        >
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
    </>
  );
}

/* 🔹 Info Item */
function InfoItem({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-3">
      {/* ICON */}
      <div className="mt-1 text-[#0097A7]">{icon}</div>

      {/* TEXT */}
      <div>
        <p className="text-sm font-medium text-[#0097A7]">{label}:</p>

        <p className="mt-1 text-sm font-medium text-[#183153]">{value}</p>
      </div>
    </div>
  );
}

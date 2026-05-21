"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Database,
  Settings,
  Film,
  ArrowRight,
  Flower2,
  Briefcase,
} from "lucide-react";

export default function ShortCoursesSection({ data }: any) {
  const shortCourses = data?.shortCourses;

  // 🔹 ICONS
  const icons: any = {
    bigdata: Database,
    drone: Flower2,
    administration: Settings,
    film: Film,
  };

  return (
    <section className="py-20 md:py-28 bg-[#f8f8f8] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={shortCourses?.tag}
          title={shortCourses?.title}
          highlight={shortCourses?.highlight}
          description={shortCourses?.description}
          align="center"
          primaryColor="#0A8F96"
        />

        {/* 🔥 COURSE LIST */}
        <div className="mt-14 space-y-5">
          {shortCourses?.courses?.map((item: any, index: number) => {
            const Icon = icons[item.icon as keyof typeof icons] || Database;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group bg-white border border-[#d7ecee] rounded-2xl px-6 py-5 flex items-center justify-between hover:shadow-lg transition-all duration-300"
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl bg-[#e8f7f8] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#0A8F96]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-[#183153] font-semibold text-sm md:text-lg leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* BADGE */}
                <span className="text-[#0A8F96] text-xs md:text-sm bg-[#e8f7f8] px-4 py-2 rounded-full">
                  Short Course
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 INFO BOXES */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* BOX 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-[#d7ecee] rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#0A8F96]" />

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#e8f7f8] flex items-center justify-center shrink-0">
                <Briefcase className="w-5 h-5 text-[#0A8F96]" />
              </div>

              <div>
                <h3 className="text-[#183153] text-lg font-semibold">
                  Industry-Aligned Learning
                </h3>

                <p className="text-[#5b6475] text-sm leading-relaxed mt-3">
                  {shortCourses?.note}
                </p>
              </div>
            </div>
          </motion.div>

          {/* BOX 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-[#d7ecee] rounded-2xl p-6 relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 h-full w-[4px] bg-[#0A8F96]" />

            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#e8f7f8] flex items-center justify-center shrink-0">
                <Flower2 className="w-5 h-5 text-[#0A8F96]" />
              </div>

              <div>
                <h3 className="text-[#183153] text-lg font-semibold">
                  Indian Classical Arts
                </h3>

                <p className="text-[#5b6475] text-sm leading-relaxed mt-3">
                  {shortCourses?.arts?.join(", ")} are also offered through the
                  School of Liberal Arts and Sciences.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🔥 CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-10 bg-[#12345b] rounded-2xl px-8 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your Next Move{" "}
              <span className="text-[#0A8F96] italic">Awaits</span>
            </h2>

            <p className="text-white/70 mt-4 text-sm md:text-base">
              Start your global academic journey with Presidency University
            </p>
          </div>

          {/* BUTTON */}
          <a
            href="/apply"
            className="group inline-flex items-center gap-2 bg-[#0A8F96] hover:bg-[#0c7f85] text-white px-8 py-4 rounded-xl transition-all duration-300"
          >
            APPLY NOW
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

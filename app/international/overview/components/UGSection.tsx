"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import Link from "next/link";
import {
  Cpu,
  Monitor,
  Briefcase,
  Palette,
  Scale,
  Film,
  HeartPulse,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function UGSection({ data }: any) {
  const ug = data?.ug;

  // 🔹 ICON MAPPING
  const icons: any = {
    engineering: Cpu,
    computing: Monitor,
    management: Briefcase,
    design: Palette,
    law: Scale,
    media: Film,
    health: HeartPulse,
    arts: GraduationCap,
  };

  return (
    <section className="py-20 md:py-28 bg-[#f8f8f8]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={ug?.tag}
          title={ug?.title}
          highlight={ug?.highlight}
          description={ug?.description}
          align="center"
          primaryColor="#ff7a2f"
        />

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {ug?.categories.map((item: any, index: number) => {
            const Icon =
              icons[item.icon as keyof typeof icons] || GraduationCap;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="group relative bg-white border border-[#dbe4ea] rounded-xl p-6 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* LEFT ORANGE BORDER */}
                <div className="absolute left-0 top-0 h-full w-[4px] bg-[#ff7a2f]" />

                {/* TITLE */}
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-5 h-5 text-[#ff7a2f]" />

                  <h3 className="text-lg font-semibold text-[#183153] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* COURSES */}
                <ul className="space-y-3">
                  {item.courses.map((course: any, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#4b5563]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff7a2f] mt-[2px] shrink-0" />

                      {course.link ? (
                        <Link
                          href={course.link}
                          className="hover:text-[#ff7a2f] transition-colors"
                        >
                          {course.name}
                        </Link>
                      ) : (
                        <span>
                          {typeof course === "string" ? course : course.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-[#ff7a2f]/5 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* 🔹 NOTE */}
        {ug?.note && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-[#4b5563] mt-14 max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {ug.note}
          </motion.p>
        )}
      </div>
    </section>
  );
}

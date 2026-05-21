"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Cpu,
  Briefcase,
  Palette,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function PhDSection({ data }: any) {
  const phd = data?.phd;

  // 🔹 ICON MAP
  const icons: any = {
    engineering: Cpu,
    management: Briefcase,
    arts: Palette,
    sciences: GraduationCap,
  };

  return (
    <section className="py-20 md:py-28 bg-[#f5f7fa]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={phd?.tag}
          title={phd?.title}
          highlight={phd?.highlight}
          description={phd?.description}
          align="center"
          primaryColor="#ff7a2f"
        />

        {/* 🔥 PROGRAMME GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {phd?.categories.map((item: any, index: number) => {
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
                {/* 🔹 LEFT ORANGE BORDER */}
                <div className="absolute left-0 top-0 h-full w-[4px] bg-[#ff7a2f]" />

                {/* 🔹 TITLE */}
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-5 h-5 text-[#ff7a2f]" />

                  <h3 className="text-lg font-semibold text-[#183153] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* 🔹 COURSE LIST */}
                <ul className="space-y-3">
                  {item.courses.map((course: any, i: number) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#4b5563]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ff7a2f] mt-[2px] shrink-0" />

                      <span>
                        {typeof course === "string" ? course : course.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* 🔥 HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-[#ff7a2f]/5 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* 🔹 RESEARCH INFO BOX */}
        {phd?.research && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-14 bg-[#183b6b] rounded-2xl p-8 md:p-10 text-white"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {phd?.research?.title}
            </h3>

            <p className="text-white/80 leading-relaxed max-w-4xl">
              {phd?.research?.description}
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {phd?.research?.features?.map((item: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm md:text-base text-white/90"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ff7a2f] shrink-0" />

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

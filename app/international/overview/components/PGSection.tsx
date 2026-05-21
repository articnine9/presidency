"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Cpu,
  Briefcase,
  Scale,
  Film,
  Database,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

export default function PGSection({ data }: any) {
  const pg = data?.pg;

  // 🔹 ICON MAP
  const icons: any = {
    engineering: Cpu,
    management: Briefcase,
    humanities: GraduationCap,
    media: Film,
    law: Scale,
    information: Database,
  };

  return (
    <section className="py-20 md:py-28 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={pg?.tag}
          title={pg?.title}
          highlight={pg?.highlight}
          description={pg?.description}
          align="center"
          primaryColor="#0A8F96"
        />

        {/* 🔥 GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {pg?.categories.map((item: any, index: number) => {
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
                {/* 🔹 LEFT TEAL BORDER */}
                <div className="absolute left-0 top-0 h-full w-[4px] bg-[#0A8F96]" />

                {/* 🔹 TITLE */}
                <div className="flex items-center gap-3 mb-5">
                  <Icon className="w-5 h-5 text-[#0A8F96]" />

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
                      <CheckCircle2 className="w-4 h-4 text-[#0A8F96] mt-[2px] shrink-0" />

                      <span>
                        {typeof course === "string" ? course : course.name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* 🔥 HOVER EFFECT */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-[#0A8F96]/5 to-transparent" />
              </motion.div>
            );
          })}
        </div>

        {/* 🔹 OPTIONAL NOTE */}
        {pg?.note && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center text-[#4b5563] mt-14 max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
          >
            {pg.note}
          </motion.p>
        )}
      </div>
    </section>
  );
}

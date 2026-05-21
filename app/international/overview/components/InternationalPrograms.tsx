"use client";

import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";
import { Globe, GraduationCap, Plane, Award, BookOpen } from "lucide-react";

export default function InternationalPrograms({ data }: any) {
  const international = data?.international;

  // 🔹 ICON MAP
  const icons: any = {
    exchange: Globe,
    masters: GraduationCap,
    internship: Plane,
    dual: BookOpen,
    scholarship: Award,
  };

  return (
    <section className="py-20 md:py-28 bg-[#fff] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        {/* 🔹 HEADER */}
        <CommonHeader
          tag={international?.tag}
          title={international?.title}
          highlight={international?.highlight}
          description={international?.description}
          align="center"
          primaryColor="#0A8F96"
        />

        {/* 🔥 PROGRAMME CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {international?.programs?.map((item: any, index: number) => {
            const Icon = icons[item.icon as keyof typeof icons] || Globe;

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
                className="group bg-white border border-[#d9e7ec] rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-[#e8f7f8] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#0A8F96]" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-[#183153] mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-[#5b6475] leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 🌍 GLOBAL MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-20 bg-[#eef4fb] rounded-3xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 items-center">
            {/* LEFT CONTENT */}
            <div className="p-10 md:p-14">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#183153]">
                Our Global <br />
                <span className="text-[#0A8F96]">Partner Institutions</span>
              </h2>

              <div className="w-24 h-1 bg-[#0A8F96] rounded-full mt-6 mb-8" />

              <p className="text-[#4b5563] text-base leading-relaxed">
                Partner institutions include universities in the{" "}
                <span className="font-semibold text-[#0A8F96]">
                  USA, UK, Germany, France, Spain, Malaysia, Taiwan, Japan
                </span>{" "}
                and beyond.
              </p>

              <div className="mt-8 pt-8 border-t border-[#d7e2ec]">
                <div className="flex items-center gap-3 mb-3">
                  <Globe className="w-5 h-5 text-[#0A8F96]" />

                  <span className="text-[#183153] font-medium">
                    Presidency University maintains active MoUs
                  </span>
                </div>

                <p className="text-[#4b5563]">
                  with institutions on{" "}
                  <span className="font-semibold text-[#0A8F96]">
                    six continents.
                  </span>
                </p>
              </div>
            </div>

            {/* RIGHT MAP */}
            <div className="relative h-[450px] lg:h-full">
              <img
                src="/img/study-in-india/world-map.webp"
                alt="Global Partner Institutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

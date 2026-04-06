"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function IntakeSection({ data }: any) {
  return (
    <section className="bg-[#f4f6f8] py-12 md:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-5 md:px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Admissions"
          title="Application Intakes"
          highlight="& Deadlines"
          description={data.description}
          align="center"
        />

        {/* 🔥 INTAKE BLOCKS */}
        <div className="mt-10 space-y-12 md:mt-16 md:space-y-20">
          {data.intakes.map((intake: any, index: number) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`grid items-center gap-8 md:grid-cols-2 md:gap-12`}
              >
                {/* 🔥 IMAGE CARD */}
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${isReverse ? "md:order-2" : ""}`}
                >
                  <img
                    src={intake.image || "/img/intake.jpg"}
                    alt={intake.name}
                    className="aspect-[4/3] w-full object-cover sm:h-[280px] sm:aspect-auto md:h-[320px]"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* TEXT OVER IMAGE */}
                  <div className="absolute bottom-4 left-4 text-white sm:bottom-6 sm:left-6">
                    <p className="text-[10px] uppercase opacity-80 sm:text-xs">
                      {intake.type}
                    </p>
                    <h3 className="text-lg font-semibold leading-tight sm:text-2xl">
                      {intake.name}
                    </h3>
                  </div>
                </div>

                {/* 🔥 CONTENT CARD */}
                <div className={`${isReverse ? "md:order-1" : ""}`}>
                  <div className="relative rounded-2xl border bg-white p-5 shadow-lg sm:p-8">
                    {/* ACCENT LINE */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-[#0A8F96] rounded-l-2xl" />

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {intake.details}
                    </p>

                    {/* 🔥 TIMELINE */}
                    <div className="space-y-5">
                      {intake.timeline.map((item: any, i: number) => (
                        <div key={i} className="flex items-start gap-4">
                          {/* ICON */}
                          <div
                            className="w-10 h-10 flex items-center justify-center rounded-lg 
                            bg-[#0A8F96]/10 text-[#0A8F96] shrink-0"
                          >
                            <Calendar size={18} />
                          </div>

                          {/* TEXT */}
                          <div>
                            <p className="text-xs text-gray-500">
                              {item.label}
                            </p>
                            <p className="text-sm font-semibold text-gray-800">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔥 NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 rounded-xl border bg-white p-4 text-center shadow-sm sm:mt-20 sm:p-6"
        >
          <p className="text-gray-700 text-sm md:text-base">{data.note}</p>
        </motion.div>

        {/* 🔥 CTA */}
      </div>
    </section>
  );
}

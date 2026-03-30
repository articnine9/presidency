"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function IntakeSection({ data }: any) {
  return (
    <section className="py-20 bg-[#f4f6f8]">
      <div className="max-w-[1400px] mx-auto px-5">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="Admissions"
          title="Application Intakes"
          highlight="& Deadlines"
          description={data.description}
          align="center"
        />

        {/* 🔥 INTAKE BLOCKS */}
        <div className="mt-16 space-y-20">
          {data.intakes.map((intake: any, index: number) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`grid md:grid-cols-2 gap-12 items-center`}
              >
                {/* 🔥 IMAGE CARD */}
                <div
                  className={`relative rounded-2xl overflow-hidden shadow-xl ${isReverse ? "md:order-2" : ""}`}
                >
                  <img
                    src={intake.image || "/img/intake.jpg"}
                    alt={intake.name}
                    className="w-full h-[320px] object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* TEXT OVER IMAGE */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs uppercase opacity-80">
                      {intake.type}
                    </p>
                    <h3 className="text-2xl font-semibold">{intake.name}</h3>
                  </div>
                </div>

                {/* 🔥 CONTENT CARD */}
                <div className={`${isReverse ? "md:order-1" : ""}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border relative">
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
          className="mt-20 bg-white border rounded-xl p-6 text-center shadow-sm"
        >
          <p className="text-gray-700 text-sm md:text-base">{data.note}</p>
        </motion.div>

        {/* 🔥 CTA */}
      </div>
    </section>
  );
}

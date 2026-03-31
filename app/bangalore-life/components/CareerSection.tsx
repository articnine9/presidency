"use client";
import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { Globe, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const icons = [GraduationCap, Briefcase, Globe];

const CareerSection = ({ data }: any) => {
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag={data.header.tag}
          title={data.header.title}
          highlight={data.header.highlight}
          description={data.header.description}
        />

        {/* INTRO */}
        <div className=" mt-12 space-y-5">
          {data.intro.map((text: string, i: number) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        {/* 🔥 RECRUITER MARQUEE (UPGRADED) */}
        <div className="mt-20">
          <p className="text-base uppercase tracking-wide text-gray-400 mb-6">
            Trusted by Global Employers
          </p>

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...data.recruiters, ...data.recruiters].map((item, i) => (
                <div
                  key={i}
                  className="px-5 py-3 bg-white border rounded-xl text-sm text-gray-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </motion.div>

            {/* fade edges */}
            <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>

        {/* 🔥 PATHWAY FLOW (TIMELINE STYLE) */}
        <div className="mt-28 relative">
          {/* LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-[#0A8F96]/20"></div>

          <div className="grid md:grid-cols-3 gap-10 relative">
            {data.pathways.map((item: any, i: number) => {
              const Icon = icons[i];

              return (
                <div key={i} className="relative group">
                  {/* NODE */}
                  <div className="hidden md:flex absolute left-1/2 -top-6 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A8F96] text-white items-center justify-center shadow-md z-10">
                    {i + 1}
                  </div>

                  {/* CARD */}
                  <div className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0A8F96]/10 text-[#0A8F96]">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h4 className="mt-5 font-semibold text-[#0F1E3D] text-lg">
                      {item.title}
                    </h4>

                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔥 OUTCOMES (GLASS CARD STYLE) */}
        <div className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0A8F96] to-[#0F6B73] p-10 text-white shadow-xl">
            {/* glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

            <h3 className="text-2xl  mb-6">Career Outcomes</h3>

            <div className="grid md:grid-cols-2 gap-5">
              {data.outcomes.map((item: string, i: number) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur p-4 rounded-xl"
                >
                  <div className="w-2 h-2 bg-white mt-2 rounded-full"></div>
                  <p className="text-base text-white">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;

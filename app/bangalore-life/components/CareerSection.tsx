"use client";

import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { Globe, Briefcase, GraduationCap } from "lucide-react";

const icons = [GraduationCap, Briefcase, Globe];

const CareerSection = ({ data }: any) => {
  return (
    <section className="bg-[#F7F7F5] py-12 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* TOP GRID */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* LEFT CONTENT */}
          <div>
            {/* TAG */}
            <span className="inline-block rounded-md bg-[#FFF1E8] px-4 py-2 text-xs font-medium text-[#F58233]">
              {data.header.tag}
            </span>

            {/* TITLE */}
            <h2 className="mt-4 md:mt-6 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-[#183153]">
              {data.header.title}{" "}
              <span className="text-[#F58233]">{data.header.highlight}</span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-5 md:mt-8 space-y-4 md:space-y-6">
              {data.intro.map((text: string, i: number) => (
                <p key={i} className="text-sm md:text-base leading-7 md:leading-8 text-gray-600">
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img src="/img/bang-life/2.png" alt="Top Global Recruiters" className="w-full" />
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-10 md:mt-16 grid gap-4 md:gap-6 sm:grid-cols-2 md:grid-cols-3">
          {data.pathways.map((item: any, i: number) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="rounded-2xl border border-[#F4B183] bg-white px-5 py-5 md:px-7 md:py-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-lg bg-[#FFF3EA] text-[#F58233]">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 md:mt-5 text-base md:text-lg font-semibold text-[#183153]">
                  {item.title}
                </h3>
                <p className="mt-2 md:mt-3 text-sm leading-7 text-gray-600">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerSection;

"use client";

import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { Globe, Briefcase, GraduationCap } from "lucide-react";

const icons = [GraduationCap, Briefcase, Globe];

const CareerSection = ({ data }: any) => {
  return (
    <section className="bg-[#F7F7F5] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* TOP GRID */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* TAG */}
            <span
              className="
                inline-block
                rounded-md
                bg-[#FFF1E8]
                px-4 py-2
                text-xs
                font-medium
                text-[#F58233]
              "
            >
              {data.header.tag}
            </span>

            {/* TITLE */}
            <h2
              className="
                mt-6
                text-5xl
                font-semibold
                leading-tight
                text-[#183153]
              "
            >
              {data.header.title}{" "}
              <span className="text-[#F58233]">{data.header.highlight}</span>
            </h2>

            {/* DESCRIPTION */}
            <div className="mt-8 space-y-6">
              {data.intro.map((text: string, i: number) => (
                <p
                  key={i}
                  className="
                      text-base
                      leading-8
                      text-gray-600
                    "
                >
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="
              overflow-hidden
              rounded-2xl
              shadow-xl
            "
          >
            <img
              src="/img/bang-life/2.png"
              alt="Top Global Recruiters"
              className="
               
                w-full
               
              "
            />
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-3
          "
        >
          {data.pathways.map((item: any, i: number) => {
            const Icon = icons[i];

            return (
              <div
                key={i}
                className="
                    rounded-2xl
                    border
                    border-[#F4B183]
                    bg-white
                    px-7
                    py-7
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
              >
                {/* ICON */}
                <div
                  className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-lg
                      bg-[#FFF3EA]
                      text-[#F58233]
                    "
                >
                  <Icon size={18} />
                </div>

                {/* TITLE */}
                <h3
                  className="
                      mt-5
                      text-lg
                      font-semibold
                      text-[#183153]
                    "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                      mt-3
                      text-sm
                      leading-7
                      text-gray-600
                    "
                >
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

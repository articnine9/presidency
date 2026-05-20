"use client";

import React from "react";
import CommonHeader from "@/app/components/CommonHeader";

import {
  Sun,
  Bus,
  HeartPulse,
  ShoppingBag,
  ShieldCheck,
  Home,
  Utensils,
  Smile,
} from "lucide-react";

const iconMap: any = {
  climate: Sun,
  transport: Bus,
  health: HeartPulse,
  shopping: ShoppingBag,
  safety: ShieldCheck,
};

const breakdownIcons = [Home, Utensils, Bus, Smile];

const CostSection = ({ data }: any) => {
  return (
    <section className="bg-[#fff] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* TOP SECTION */}
        <div className="grid items-start gap-14 lg:grid-cols-2">
          {/* LEFT IMAGE AREA */}
          <div className="relative">
            {/* MAIN IMAGE */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/img/bang-life/5.png"
                alt="Cost of Living"
                className="h-[520px] w-full object-cover"
              />
            </div>

            {/* SMALL FLOATING IMAGE */}
            <div
              className="
                absolute
                right-[-20px]
                top-8
                overflow-hidden
                rounded-2xl
                border-4
                border-white
                shadow-xl
              "
            >
              <img
                src="/img/bang-life/4.png"
                alt="Student Life"
                className="h-36 w-36 object-cover"
              />
            </div>

            {/* FLOATING COST CARD */}
            <div
              className="
                absolute
                bottom-[-90px]
                left-6
                rounded-2xl
                bg-white
                px-5
                py-4
                shadow-xl
              "
            >
              <p className="text-xs text-gray-500">Monthly Living Cost</p>

              <h3
                className="
                  mt-1
                  text-2xl
                  font-bold
                  text-[#183153]
                "
              >
                ₹15,000 – ₹35,000
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                $180 – $420 / £140 – £330
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="pt-6">
            {/* TAG */}
            <span
              className="
                inline-block
                rounded-md
                bg-[#EAF7F7]
                px-4 py-2
                text-xs
                font-medium
                text-[#0A8F96]
              "
            >
              {data.header.tag}
            </span>

            {/* TITLE */}
            <h2
              className="
                mt-5
                text-5xl
                font-semibold
                leading-tight
                text-[#183153]
              "
            >
              {data.header.title}{" "}
              <span className="text-[#0A8F96]">{data.header.highlight}</span>
            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                text-base
                leading-8
                text-gray-600
              "
            >
              {data.header.description}
            </p>

            {/* HIGHLIGHTS */}
            <div className="mt-10 space-y-7">
              {data.highlights.map((item: any, i: number) => {
                const Icon = iconMap[item.icon];

                return (
                  <div key={i} className="flex items-start gap-4">
                    {/* ICON */}
                    <div
                      className="
                        mt-1
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#EAF7F7]
                        text-[#0A8F96]
                      "
                    >
                      <Icon size={18} />
                    </div>

                    {/* TEXT */}
                    <div>
                      <h4
                        className="
                          text-lg
                          font-semibold
                          text-[#183153]
                        "
                      >
                        {item.title}
                      </h4>

                      <p
                        className="
                          mt-1
                          text-sm
                          leading-7
                          text-gray-600
                        "
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* BREAKDOWN */}
        <div className="mt-20">
          <h3
            className="
              mb-10
              text-3xl
              font-semibold
              text-[#183153]
            "
          >
            Monthly Cost Breakdown
          </h3>

          <div className="grid gap-6 md:grid-cols-2">
            {data.breakdown.map((item: any, i: number) => {
              const Icon = breakdownIcons[i];

              return (
                <div
                  key={i}
                  className="
                    rounded-2xl
                    border
                    border-[#D7EDED]
                    bg-white
                    px-6
                    py-5
                    shadow-sm
                  "
                >
                  {/* TOP */}
                  <div className="flex items-start gap-4">
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#EAF7F7]
                        text-[#0A8F96]
                      "
                    >
                      <Icon size={18} />
                    </div>

                    {/* TEXT */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4
                          className="
                            text-lg
                            font-semibold
                            text-[#183153]
                          "
                        >
                          {item.item}
                        </h4>

                        <span
                          className="
                            text-2xl
                            font-bold
                            text-[#0A8F96]
                          "
                        >
                          {item.value}
                        </span>
                      </div>

                      {/* BAR */}
                      <div className="mt-5">
                        <div
                          className="
                            h-2
                            overflow-hidden
                            rounded-full
                            bg-gray-100
                          "
                        >
                          <div
                            className="
                              h-full
                              rounded-full
                              bg-[#0A8F96]
                            "
                            style={{
                              width: `${65 + i * 10}%`,
                            }}
                          />
                        </div>

                        <p
                          className="
                            mt-2
                            text-xs
                            text-gray-400
                          "
                        >
                          Estimated monthly range
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSection;

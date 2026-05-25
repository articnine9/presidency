"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Wifi,
  Computer,
  Cpu,
  PenTool,
  Clapperboard,
  Building2,
  UtensilsCrossed,
  Library,
  Dumbbell,
  HeartPulse,
  Accessibility,
  MonitorPlay,
} from "lucide-react";

import CommonHeader from "@/app/components/CommonHeader";

type FacilityItem = {
  title: string;
  desc: string;
  image?: string;
};

type FacilitiesData = {
  header: {
    tag: string;
    title: string;
    highlight: string;
    description: string;
  };
  items: FacilityItem[];
};

type FacilitiesSectionProps = {
  data: FacilitiesData;
};

const iconList = [
  Wifi,
  Computer,
  Cpu,
  PenTool,
  Clapperboard,
  Building2,
  UtensilsCrossed,
  Library,
  Dumbbell,
  Building2,
  HeartPulse,
  Accessibility,
  MonitorPlay,
];

const FacilitiesSection = ({ data }: FacilitiesSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#F7F8F6] py-24 max-md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag={data.header.tag}
          title={data.header.title}
          highlight={data.header.highlight}
          description={data.header.description}
          primaryColor="#0A8F96"
        />

        {/* DESKTOP GRID */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-3">
          {data.items.map((item, i) => (
            <div
              key={i}
              className={`${
                i === data.items.length - 1
                  ? "md:col-span-3 flex justify-center"
                  : ""
              }`}
            >
              <div
                className="
                  group
                  relative
                  h-full
                  w-full
                  max-w-[430px]
                  overflow-hidden
                  rounded-2xl
                  border-b-[3px]
                  border-b-[#0A8F96]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      h-[180px]
                      w-full
                      object-cover
                      transition
                      duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-5">
                  <h4 className="mb-2 text-xl text-[#0F1E3D]">{item.title}</h4>

                  <p className="text-base leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE ACCORDION */}
        <div className="mt-8 space-y-2 md:hidden">
          {data.items.map((item, i) => {
            const Icon = iconList[i] || Building2;

            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#0A8F96]/10
                  bg-[#0FA3AD]
                  shadow-sm
                "
              >
                {/* HEADER */}
                <button
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-3
                    px-4
                    py-3
                    text-left
                    text-white
                  "
                >
                  <div className="flex items-center gap-3">
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-md
                        border
                        border-white/30
                        bg-white/10
                      "
                    >
                      <Icon size={14} />
                    </div>

                    {/* TITLE */}
                    <span className="text-[13px] font-medium">
                      {item.title}
                    </span>
                  </div>

                  {/* TOGGLE */}
                  {isActive ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* CONTENT */}
                <div
                  className={`
                    overflow-hidden
                    bg-white
                    transition-all
                    duration-300
                    ${isActive ? "max-h-[300px] py-3" : "max-h-0"}
                  `}
                >
                  <div className="px-4">
                    {/* OPTIONAL IMAGE */}
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="
                          mb-3
                          h-[140px]
                          w-full
                          rounded-lg
                          object-cover
                        "
                      />
                    )}

                    <p
                      className="
                        text-[12px]
                        leading-6
                        text-gray-600
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

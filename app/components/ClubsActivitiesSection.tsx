"use client";

import CommonHeader from "@/app/components/CommonHeader";
import { motion } from "framer-motion";
import {
  Cpu,
  Palette,
  Briefcase,
  Heart,
  Mic,
  Users,
  ChevronRight,
  Trophy,
} from "lucide-react";
import { H2, H4, H5 } from "@/app/components/Headings";

const iconMap: any = {
  tech: Cpu,
  arts: Palette,
  business: Briefcase,
  wellness: Heart,
  speaking: Mic,
  social: Users,
};

type ClubsPageProps = {
  data: any;
};

export default function ClubsActivitiesSection({ data }: ClubsPageProps) {
  return (
    <section className="bg-[#fff] py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag={data.header.tag}
          title={data.header.title}
          highlight={data.header.highlight}
          description={data.header.description}
          align="center"
          primaryColor="#0A8F96"
        />

        {/* CLUBS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {data.clubs.map((club: any, index: number) => {
            const Icon = iconMap[club.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-[#0A8F96]/20
                  shadow-sm
                  hover:shadow-xl
                  transition-all
                  duration-300
                  group
                "
              >
                {/* IMAGE */}
                <div className="relative h-[180px] overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="
                      w-full
                      h-full
                      object-cover
                      group-hover:scale-105
                      transition duration-500
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* TOP TITLE */}
                  <div className="absolute top-5 left-5 flex items-center gap-3 text-white">
                    <div
                      className="
                        w-10 h-10
                        rounded-xl
                        border border-white/40
                        bg-white/10
                        backdrop-blur-md
                        flex items-center justify-center
                      "
                    >
                      {Icon && <Icon size={18} />}
                    </div>

                    <H5 className="text-white">{club.title}</H5>
                  </div>
                </div>

                {/* CLUB LIST */}
                <div className="p-5">
                  <div className="space-y-3">
                    {club.items.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="
                          flex items-center justify-between
                          border-b border-gray-100
                          pb-2
                        "
                      >
                        <span className="text-[#1E3557] text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* VIEW MORE */}
                  <button
                    className="
                      mt-4
                      flex items-center gap-1
                      text-sm
                      text-[#0A8F96]
                      hover:gap-2
                      transition-all
                    "
                  >
                    View more
                    <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="block md:hidden">
          {/* SPORTS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
            mt-10
            bg-white
            rounded-2xl
            border
            border-[#0A8F96]/20
            p-6
            shadow-sm
            relative
            overflow-hidden
          "
          >
            {/* LEFT ACCENT */}
            <div className="absolute left-0 top-0 h-full w-[5px] bg-[#0A8F96]" />

            <div className="flex items-start gap-4">
              <div
                className="
                w-12 h-12
                rounded-xl
                bg-[#0A8F96]/10
                text-[#0A8F96]
                flex items-center justify-center
                shrink-0
              "
              >
                <Trophy size={22} />
              </div>

              <div>
                <H4 className="text-[#1E3557] mb-2">
                  {data.sports.title}
                </H4>

                <p className="text-gray-600 leading-relaxed">
                  {data.sports.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        {/* EVENTS */}
        <div className="mt-20">
          <H2 className="text-[#1E3557] mb-8">Major Campus Events</H2>

          <div className="grid md:grid-cols-3 gap-6">
            {data.events.map((event: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
    group
    relative
    overflow-hidden
    rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px]
    border
    border-[#0A8F96]
    bg-[#F8F8F8]
    p-8
    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
              >
                {/* TOP ACCENT */}
                <div
                  className="
      absolute
      left-0
      top-0
      h-[6px]
      w-[95px]
      bg-[#BFECEF]
    "
                />

                {/* LEFT ACCENT */}
                <div
                  className="
      absolute
      left-0
      top-0
      h-[100px]
      w-[6px]
      bg-[#BFECEF]
    "
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <H4
                    className="
        mb-6
        leading-none
        text-[#1B2B52]
      "
                  >
                    {event.title}
                  </H4>

                  <p
                    className="
        max-w-4xl
        
        leading-[1.7]
        text-[#2F3B5B]

        max-md:text-[16px]
        max-md:leading-8
      "
                  >
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          {/* SPORTS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
            mt-10
            bg-white
            rounded-2xl
            border
            border-[#0A8F96]/20
            p-6
            shadow-sm
            relative
            overflow-hidden
          "
          >
            {/* LEFT ACCENT */}
            <div className="absolute left-0 top-0 h-full w-[5px] bg-[#0A8F96]" />

            <div className="flex items-start gap-4">
              <div
                className="
                w-12 h-12
                rounded-xl
                bg-[#0A8F96]/10
                text-[#0A8F96]
                flex items-center justify-center
                shrink-0
              "
              >
                <Trophy size={22} />
              </div>

              <div>
                <H4 className="text-[#1E3557] mb-2">
                  {data.sports.title}
                </H4>

                <p className="text-gray-600 leading-relaxed">
                  {data.sports.desc}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

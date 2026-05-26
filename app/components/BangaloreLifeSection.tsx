"use client";

import CommonHeader from "@/app/components/CommonHeader";
import {
  BedDouble,
  Utensils,
  ShieldCheck,
  Bus,
  HeartPulse,
  Home,
  Info,
} from "lucide-react";

import { motion } from "framer-motion";
import { H4, H6 } from "@/app/components/Headings";

const features = [
  {
    title: "Furnished Rooms",
    desc: "Twin & triple-sharing rooms with Wi-Fi and storage.",
    icon: BedDouble,
  },
  {
    title: "Dining",
    desc: "Four meals daily with veg & non-veg options.",
    icon: Utensils,
  },
  {
    title: "24×7 Security",
    desc: "CCTV monitoring, wardens, and safety support.",
    icon: ShieldCheck,
  },
  {
    title: "Transport",
    desc: "Weekend transport to Yelahanka and city access.",
    icon: Bus,
  },
  {
    title: "Health Support",
    desc: "Medical room, nurse, and emergency ambulance.",
    icon: HeartPulse,
  },
  {
    title: "Off Campus Help",
    desc: "Assistance in finding nearby accommodation.",
    icon: Home,
  },
];

export default function StudentHousingSection() {
  return (
    <section className="bg-white py-20 max-md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 max-md:px-4">
        {/* HEADER */}
        <CommonHeader
          tag="Campus Life"
          title="Student"
          highlight="Housing"
          description="The hostels include separate blocks for male and female students, including a new boys’ hostel with a capacity of 1,700 students. Additional facilities such as laundry rooms, common rooms with TV, indoor and outdoor games, and hot and cold purified drinking water are also available. Rooms are allotted on a first-come, first-served basis and cannot be changed once assigned, so students are advised to apply early."
          align="center"
          primaryColor="#ff7a2f"
        />

        {/* DESKTOP GRID */}
        <div className="mt-14 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#f4d7c3]
                  bg-white
                  px-8
                  py-7
                  shadow-[0_4px_20px_rgba(0,0,0,0.04)]
                  transition-all
                  duration-300
                  hover:shadow-xl
                "
              >
                {/* LEFT ACCENT */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[6px]
                    rounded-l-[22px]
                    bg-[#ff7a2f]
                  "
                />

                <div className="flex items-start gap-5">
                  {/* ICON */}
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#ff7a2f]/10
                      text-[#ff7a2f]
                    "
                  >
                    <Icon size={28} strokeWidth={2.2} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <H4
                      className="
                        mb-3
                        leading-snug
                        text-[#1E3557]
                      "
                    >
                      {item.title}
                    </H4>

                    <p
                      className="
                        max-w-2xl
                        text-lg
                        leading-relaxed
                        text-gray-500
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE LIST DESIGN */}
        <div className="mt-8 space-y-3 md:hidden">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  rounded-2xl
                  border
                  border-[#f3ddd0]
                  bg-[#faf7f5]
                  px-4
                  py-3
                "
              >
                <div className="flex items-start gap-3">
                  {/* ICON */}
                  <div
                    className="
                      mt-0.5
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-[#ff7a2f]/30
                      bg-[#ff7a2f]/10
                      text-[#ff7a2f]
                    "
                  >
                    <Icon size={16} />
                  </div>

                  {/* CONTENT */}
                  <div>
                    <H6
                      className="
                        text-[#1E3557]
                      "
                    >
                      {item.title}
                    </H6>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        leading-5
                        text-gray-500
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* NOTE BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="
            mt-8
            rounded-xl
            border
            border-[#ff7a2f]/40
            bg-[#fffaf5]
            px-6
            py-4

            max-md:mt-6
            max-md:px-4
            max-md:py-3
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                mt-0.5
                text-[#ff7a2f]
              "
            >
              <Info size={18} />
            </div>

            <div>
              <H6
                className="
                  mb-1
                  text-[#ff7a2f]
                "
              >
                Note
              </H6>

              <p
                className="
                  text-sm
                  leading-relaxed
                  text-gray-600

                  max-md:text-[11px]
                  max-md:leading-5
                "
              >
                For students who prefer to live off-campus, the university’s
                student services team can assist in identifying reputable
                private accommodation near Yelahanka and Bangalore city.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

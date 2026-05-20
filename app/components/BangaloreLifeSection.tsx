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
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Campus Life"
          title="Student"
          highlight="Housing"
          description="The hostels include separate blocks for male and female students, including a new boys’ hostel with a capacity of 1,700 students. Additional facilities such as laundry rooms, common rooms with TV, indoor and outdoor games, and hot and cold purified drinking water are also available. Rooms are allotted on a first-come, first-served basis and cannot be changed once assigned, so students are advised to apply early."
          align="center"
          primaryColor="#ff7a2f"
        />

        {/* FEATURES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
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
      bg-[#ff7a2f]
      rounded-l-[22px]
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
                    <h3
                      className="
          text-[#1E3557]
          text-2xl
          leading-snug
          mb-3
        "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
          text-gray-500
          text-lg
          leading-relaxed
          max-w-2xl
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
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-8
            border
            border-[#ff7a2f]/40
            rounded-xl
            bg-[#fffaf5]
            px-6
            py-4
          "
        >
          <div className="flex items-start gap-3">
            <div className="text-[#ff7a2f] mt-0.5">
              <Info size={18} />
            </div>

            <div>
              <h4 className="text-[#ff7a2f] text-sm mb-1">Note</h4>

              <p className="text-sm text-gray-600 leading-relaxed">
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

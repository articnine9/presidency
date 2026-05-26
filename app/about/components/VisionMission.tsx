"use client";
import { motion } from "motion/react";

import { CheckCircle } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";
import { H5 } from "@/app/components/Headings";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <CommonHeader
          tag="Vision, Mission & Values"
          title="The Core of "
          highlight="Presidency"
          description={`At the heart of the University lies a commitment to vision, mission, and values that inspire innovation, guide growth, and create lasting impact.`}
          primaryColor="#ff8c42"
          secondaryColor="#1e3a5f"
          align="center"
        />
        {/* 🔹 TITLE */}

        {/* 🔥 CARDS */}
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="
      rounded-[22px]
      border
      border-[#0A8F96]/10
      border-b-[4px]
      border-b-[#0A8F96]
      bg-[#f8fcfc]
      p-5
      shadow-sm
      transition-all
      duration-300
      hover:shadow-xl

      md:rounded-xl
      md:bg-white
      md:p-8
    "
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0A8F96]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#0A8F96]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"
                  />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <H5>Vision</H5>
            </div>

            <p className="text-[13px] leading-7 text-gray-600 md:text-base">
              To be an internationally networked research university, dedicated
              to research-oriented teaching and the holistic development of
              students as global citizens.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="
      rounded-[22px]
      border
      border-[#d4a017]/10
      border-b-[4px]
      border-b-[#d4a017]
      bg-[#fffdf8]
      p-5
      shadow-sm
      transition-all
      duration-300
      hover:shadow-xl

      md:rounded-xl
      md:bg-white
      md:p-8
    "
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d4a017]/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[#d4a017]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3"
                  />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-[#1e3a5f]">Mission</h3>
            </div>

            <p className="text-[13px] leading-7 text-gray-600 md:text-base">
              To provide an academically excellent and globally connected
              environment that empowers students to think critically, innovate
              boldly, and lead with integrity.
            </p>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15 }}
            className="
      rounded-[22px]
      border
      border-[#ff8c42]/10
      border-b-[4px]
      border-b-[#ff8c42]
      bg-[#fffaf7]
      p-5
      shadow-sm
      transition-all
      duration-300
      hover:shadow-xl

      md:rounded-xl
      md:bg-white
      md:p-8
    "
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff8c42]/10">
                <CheckCircle size={18} className="text-[#ff8c42]" />
              </div>

              <h3 className="text-lg font-semibold text-[#1e3a5f]">Values</h3>
            </div>

            <ul className="space-y-3 text-[13px] text-gray-600 md:text-base">
              {[
                "Academic Excellence",
                "Global Outlook",
                "Inclusivity & Diversity",
                "Innovation & Entrepreneurship",
                "Integrity & Ethics",
                "Social Responsibility",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle
                    size={15}
                    className="mt-[2px] shrink-0 text-[#ff8c42]"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

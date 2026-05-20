"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function IntakeSection({ data }: any) {
  return (
    <section className="bg-[#fff] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* HEADER */}
        <div className="text-center">
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
            Admissions
          </span>

          {/* TITLE */}
          <h2
            className="
          mt-5
          text-4xl
          md:text-5xl
          font-semibold
          text-[#183153]
        "
          >
            Application Intakes{" "}
            <span className="text-[#F58233]">& Deadlines</span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
          mx-auto
          mt-5
          max-w-4xl
          text-sm
          leading-7
          text-gray-600
        "
          >
            {data.description}
          </p>
        </div>

        {/* INTAKE GRID */}
        <div className="mt-16 space-y-8">
          {data.intakes.map((intake: any, index: number) => {
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid gap-6 md:grid-cols-2"
              >
                {/* IMAGE CARD */}
                <div
                  className={`
                relative overflow-hidden rounded-2xl
                shadow-md
                ${isReverse ? "md:order-2" : ""}
              `}
                >
                  <img
                    src={intake.image || "/img/intake.jpg"}
                    alt={intake.name}
                    className="
                  h-[360px]
                  w-full
                  object-cover
                "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* TEXT */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-xs uppercase tracking-wide text-white/80">
                      {intake.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      {intake.name}
                    </h3>
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div
                  className={`
                relative rounded-2xl
                border border-gray-200
                bg-white
                px-8 py-8
                shadow-sm
                ${isReverse ? "md:order-1" : ""}
              `}
                >
                  {/* LEFT ACCENT */}
                  <div
                    className="
                  absolute left-0 top-0
                  h-full w-[5px]
                  rounded-l-2xl
                  bg-[#00A8B5]
                "
                  />

                  {/* DESCRIPTION */}
                  <p
                    className="
                  text-sm
                  leading-8
                  text-gray-600
                "
                  >
                    {intake.details}
                  </p>

                  {/* TIMELINE */}
                  <div className="mt-10 space-y-7">
                    {intake.timeline.map((item: any, i: number) => (
                      <div key={i} className="flex items-start gap-4">
                        {/* ICON */}
                        <div
                          className={`
                        flex h-12 w-12 shrink-0 items-center justify-center
                        rounded-xl
                        ${
                          i === 1
                            ? "bg-[#FDECEC] text-[#D9534F]"
                            : "bg-[#E7F7F8] text-[#00A8B5]"
                        }
                      `}
                        >
                          <Calendar size={18} />
                        </div>

                        {/* TEXT */}
                        <div>
                          <p className="text-sm text-gray-500">{item.label}</p>

                          <p
                            className="
                          mt-1
                          text-base
                          font-semibold
                          text-[#183153]
                        "
                          >
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* NOTE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
        mt-8
        rounded-2xl
        border border-[#F4C7A1]
        bg-[#FFF8F2]
        px-6 py-5
      "
        >
          <div className="flex items-start gap-3">
            {/* ICON */}
            <div className="mt-1 text-[#F58233]">ⓘ</div>

            {/* TEXT */}
            <div>
              <h4
                className="
              text-base
              font-semibold
              text-[#F58233]
            "
              >
                Apply Early, Stay Ahead
              </h4>

              <p
                className="
              mt-2
              text-sm
              leading-7
              text-gray-600
            "
              >
                {data.note}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

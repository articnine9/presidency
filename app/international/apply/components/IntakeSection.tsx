"use client";

import { motion } from "framer-motion";
import { Calendar, PhoneCall } from "lucide-react";

export default function IntakeSection({ data }: any) {
  return (
    <section className="bg-[#fff] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* ================= HEADER ================= */}
        <div className="text-center">
          {/* TAG */}
          <span
            className="
              inline-block
              rounded-xl
              bg-[#EAF7F8]
              px-4
              py-2
              text-[11px]
              font-medium
              text-[#00A8B5]

              md:rounded-md
              md:text-xs
            "
          >
            Admissions
          </span>

          {/* TITLE */}
          <h2
            className="
              mt-5
              text-[38px]
              font-semibold
              leading-[1.1]
              tracking-tight
              text-[#183153]

              md:text-5xl
            "
          >
            How to Apply
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-[13px]
              leading-7
              text-gray-600

              md:max-w-4xl
              md:text-sm
            "
          >
            Applications to Presidency University are completed online through
            our admissions portal. Follow these simple steps to apply.
          </p>
        </div>

        {/* ================= INTAKE GRID ================= */}
        <div className="mt-12 space-y-8 md:mt-16">
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
                    relative overflow-hidden rounded-2xl shadow-md
                    ${isReverse ? "md:order-2" : ""}
                  `}
                >
                  <img
                    src={intake.image || "/img/intake.jpg"}
                    alt={intake.name}
                    className="
                      h-[260px]
                      w-full
                      object-cover

                      md:h-[360px]
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* TEXT */}
                  <div className="absolute bottom-5 left-5 text-white md:bottom-6 md:left-6">
                    <p className="text-[11px] uppercase tracking-wide text-white/80 md:text-xs">
                      {intake.type}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold md:text-3xl">
                      {intake.name}
                    </h3>
                  </div>
                </div>

                {/* CONTENT CARD */}
                <div
                  className={`
                    relative rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm

                    md:px-8 md:py-8

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
                      text-[13px]
                      leading-7
                      text-gray-600

                      md:text-sm
                      md:leading-8
                    "
                  >
                    {intake.details}
                  </p>

                  {/* TIMELINE */}
                  <div className="mt-8 space-y-6 md:mt-10 md:space-y-7">
                    {intake.timeline.map((item: any, i: number) => (
                      <div key={i} className="flex items-start gap-4">
                        {/* ICON */}
                        <div
                          className={`
                            flex h-11 w-11 shrink-0 items-center justify-center rounded-xl

                            md:h-12 md:w-12

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
                          <p className="text-[12px] text-gray-500 md:text-sm">
                            {item.label}
                          </p>

                          <p
                            className="
                              mt-1
                              text-[15px]
                              font-semibold
                              text-[#183153]

                              md:text-base
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

        {/* ================= NOTE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            mt-8
            rounded-2xl
            border border-[#F4C7A1]
            bg-[#FFF8F2]
            px-5 py-5

            md:px-6
          "
        >
          <div className="flex items-start gap-3">
            {/* ICON */}
            <div className="mt-1 text-[#F58233]">ⓘ</div>

            {/* TEXT */}
            <div>
              <h4
                className="
                  text-[15px]
                  font-semibold
                  text-[#F58233]

                  md:text-base
                "
              >
                Apply Early, Stay Ahead
              </h4>

              <p
                className="
                  mt-2
                  text-[13px]
                  leading-7
                  text-gray-600

                  md:text-sm
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

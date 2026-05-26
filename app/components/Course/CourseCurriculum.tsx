"use client";

import { useState } from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { motion } from "framer-motion";
import { H2 } from "@/app/components/Headings";

export default function CourseCurriculum({ data }: any) {
  const curriculum = data?.tabs?.curriculum || [];

  const [active, setActive] = useState(0);

  if (!curriculum.length) return null;

  return (
    <section className="bg-[#F7F7F5] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center">
          <span
            className="
              inline-block
              rounded-md
              bg-[#E7F5F5]
              px-4 py-2
              text-xs
              font-medium
              text-[#0097A7]
            "
          >
            Curriculum
          </span>

          <H2 className="mt-5 text-[#183153]">
            Semester-by-Semester{" "}
            <span className="text-[#0097A7]">Structure</span>
          </H2>
        </div>

        {/* TABS */}
        <div className="mt-10 flex justify-center">
          <div
            className="
              flex flex-wrap
              rounded-xl
              border border-[#0097A7]/40
              bg-white
              p-1.5
              shadow-sm
            "
          >
            {curriculum.map((sem: any, index: number) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`
                  rounded-lg
                  px-6 py-3
                  text-sm
                  font-medium
                  transition-all duration-300
                  ${
                    active === index
                      ? "bg-[#0097A7] text-white shadow-md"
                      : "text-[#183153] hover:bg-[#F3F4F6]"
                  }
                `}
              >
                {sem.semester}
              </button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            mt-12
            overflow-hidden
            rounded-[24px]
            bg-white
            shadow-xl
          "
        >
          {/* HEADER */}
          <div
            className="
              grid grid-cols-12
              bg-[#0097A7]
              px-8 py-5
              text-sm
              font-semibold
              text-white
            "
          >
            <div className="col-span-1">#</div>

            <div className="col-span-8">Module</div>

            <div className="col-span-3 text-right">Code</div>
          </div>

          {/* BODY */}
          <div className="divide-y divide-gray-200">
            {curriculum[active]?.modules?.map((mod: any, i: number) => (
              <div
                key={i}
                className="
                    grid grid-cols-12
                    items-center
                    px-8 py-6
                    text-sm
                    transition hover:bg-gray-50
                  "
              >
                <div className="col-span-1 text-gray-500">{i + 1}</div>

                <div className="col-span-8 font-medium text-[#183153]">
                  {mod.name}
                </div>

                <div
                  className="
                      col-span-3
                      text-right
                      font-semibold
                      text-[#0097A7]
                    "
                >
                  {mod.code || "-"}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

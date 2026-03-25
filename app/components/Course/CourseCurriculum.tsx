"use client";

import { useState } from "react";
import CommonHeader from "@/app/components/CommonHeader";

export default function CourseCurriculum({ data }: any) {
  const curriculum = data?.tabs?.curriculum || [];

  const [active, setActive] = useState(0);

  if (!curriculum.length) return null;

  return (
    <section className="bg-[#fff] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ✅ HEADER */}
        <CommonHeader
          tag="Curriculum"
          title="Semester Structure"
          highlight="Overview"
          primaryColor="#0A8F96"
        />

        {/* 🔥 MAIN LAYOUT */}
        <div className="flex items-stretch mt-10">
          {/* 🔹 LEFT VERTICAL TABS */}
          <div className="flex flex-col border-r border-gray-200">
            {curriculum.map((sem: any, index: number) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`flex-1 min-h-[80px] flex items-center justify-center transition ${
                  active === index
                    ? "bg-[#1E3A5F] text-white rounded-l-xl"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span className="rotate-[-90deg] text-sm tracking-wide">
                  {sem.semester}
                </span>
              </button>
            ))}
          </div>

          {/* 📦 RIGHT CONTENT */}
          <div className="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
            {/* 🔥 HEADER STRIP */}
            <div className="bg-gray-100 px-5 py-3 border-b">
              <h3 className="text-lg text-gray-800">
                {curriculum[active]?.semester}
              </h3>

              <p className="text-base text-gray-600 mt-1">
                {curriculum[active]?.modules?.length} Modules
              </p>
            </div>

            {/* 🔥 TABLE */}
            <div className="p-6">
              {curriculum[active].modules.map((mod: any, i: number) => (
                <div
                  key={i}
                  className={`grid grid-cols-12 border-b ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  {/* INDEX */}
                  <div className="col-span-1 px-4 py-3 text-gray-500">
                    {i + 1}
                  </div>

                  {/* MODULE NAME */}
                  <div className="col-span-8 px-4 py-3 text-gray-800">
                    {mod.name}
                  </div>

                  {/* CODE */}
                  <div className="col-span-3 px-4 py-3 text-right text-[#0A8F96] font-medium">
                    {mod.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

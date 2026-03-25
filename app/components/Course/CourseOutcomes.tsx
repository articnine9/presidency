"use client";

import { useState } from "react";
import CommonHeader from "@/app/components/CommonHeader";

export default function CourseOutcomes({ data }: any) {
  const tabs = data?.tabs?.outcomes || {};
  const keys = Object.keys(tabs);
  const [active, setActive] = useState(keys[0]);

  if (!keys.length) return null;

  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ✅ COMMON HEADER */}
        <CommonHeader
          tag="Programme"
          title="Programme"
          highlight="Outcomes"
          primaryColor="#0A8F96"
        />

        {/* 🔥 MAIN LAYOUT */}
        <div className="flex items-stretch mt-10">
          {/* 🔹 LEFT TABS */}
          <div className="flex flex-col border-r border-gray-200">
            {keys.map((key) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`flex-1 min-h-[80px] flex items-center justify-center transition ${
                  active === key
                    ? "bg-[#1E3A5F] text-white rounded-l-xl"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <span className="rotate-[-90deg] text-base  tracking-wide">
                  {key}
                </span>
              </button>
            ))}
          </div>

          {/* 📦 RIGHT TABLE */}
          {/* 📦 RIGHT CONTENT */}
          <div className="flex-1 bg-white border border-gray-300 rounded-lg overflow-hidden">
            {/* 🔥 HEADER STRIP */}
            <div className="bg-gray-100 px-5 py-3 border-b">
              <h3 className="text-lg text-gray-800">
                {active}: {tabs[active][0]?.title}
              </h3>

              <p className="text-base text-gray-600 mt-1 leading-relaxed">
                {tabs[active][0]?.text}
              </p>
            </div>

            {/* 🔥 TABLE ROWS */}
            <div className="p-6">
              {tabs[active].map((item: any, index: number) => (
                <div
                  key={index}
                  className={`
          grid grid-cols-[120px_1fr]
          border-b border-gray-300
          ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
        `}
                >
                  {/* LEFT CELL */}
                  <div className="bg-gray-50 px-4 py-3 text-lg  text-gray-700 border-r border">
                    {item.id} : {item.text || item.title}
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

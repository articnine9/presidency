"use client";

import { useState } from "react";

export default function CourseOutcomes({ data }: any) {
  const tabs = data?.tabs?.outcomes || {};
  const keys = Object.keys(tabs);
  const [active, setActive] = useState(keys[0]);

  if (!keys.length) return null;

  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2 mb-8">
          Programme Outcomes - Tabbed
        </h2>

        {/* 🔥 MAIN LAYOUT */}
        <div className="flex items-stretch">
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
                <span className="rotate-[-90deg] text-sm font-semibold tracking-wide">
                  {key}
                </span>
              </button>
            ))}
          </div>

          {/* 📦 RIGHT CONTENT */}
          <div className="flex-1 bg-white border border-gray-200 rounded-r-xl shadow-sm overflow-hidden">
            {tabs[active].map((item: any, index: number) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border-b last:border-none"
              >
                <div className="min-w-[60px] text-sm font-semibold text-gray-700">
                  {item.id} :
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

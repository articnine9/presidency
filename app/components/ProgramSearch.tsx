"use client";

import { Search } from "lucide-react";

export function ProgramSearch() {
  return (
    <section className="relative  z-20 px-4 py-20 pb-0">
      <div className="mx-auto">
        {/* MAIN BOX */}
        <div className="bg-[#1e3a5f] text-white border border-[#2c5a87] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-6 md:p-8">
          {/* TOP */}
          <div className="grid md:grid-cols-4 gap-4 items-end">
            {/* TITLE */}
            <div>
              <h2 className="text-white text-xl md:text-2xl ">
                Find Your Program
              </h2>
              <p className="text-blue-100 text-sm mt-1">
                Search courses & start your journey
              </p>
            </div>

            {/* SELECT */}
            <div>
              <label className="text-sm text-blue-200">Program Level</label>
              <select className="w-full mt-1 bg-white text-black border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#ff8c42]">
                <option>Undergraduate</option>
                <option>Postgraduate</option>
              </select>
            </div>

            {/* INPUT */}
            <div>
              <label className="text-sm text-blue-200">Keyword</label>
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full mt-1 bg-white text-black border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#ff8c42]"
              />
            </div>

            {/* BUTTON */}
            <div>
              <button className="w-full bg-[#ff8c42] hover:bg-[#e67a32] text-white py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-md">
                Search
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* BOTTOM LINKS */}
          <div className="flex flex-wrap gap-6 mt-6 pt-4 border-t border-white/20 text-blue-100 text-sm">
            {[
              "Enrolment Process",
              "Financial Assistance",
              "FAQ",
              "Notifications",
            ].map((item) => (
              <span
                key={item}
                className="hover:text-white cursor-pointer transition"
              >
                {item}
              </span>
            ))}

            <span className="ml-auto text-[#ff8c42] font-semibold tracking-wide cursor-pointer hover:text-orange-300">
              APPLY NOW →
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

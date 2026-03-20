"use client";

import { useState } from "react";

export default function CourseCurriculum({ data }: any) {
  const curriculum = data?.tabs?.curriculum || [];

  const [active, setActive] = useState(0);

  if (!curriculum.length) return null;

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-16">
      {/* Heading */}
      <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold">
        Curriculum
      </p>

      <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2 mb-8">
        Semester-by-Semester Structure
      </h2>

      {/* Semester Tabs */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {curriculum.map((sem: any, index: number) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-5 py-2 rounded-full text-sm border transition ${
              active === index
                ? "bg-white shadow border-gray-300 font-medium"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {sem.semester}
          </button>
        ))}
      </div>

      {/* Subtitle */}
      <p className="text-sm text-gray-500 italic mb-4">
        {curriculum[active]?.modules?.[0]?.name}
      </p>

      {/* Table */}
      <div className="rounded-xl overflow-hidden border border-gray-200">
        {/* Table Header */}
        <div className="grid grid-cols-12 bg-[#0F1E3D] text-white text-sm font-semibold px-4 py-3">
          <div className="col-span-1">#</div>
          <div className="col-span-8">Module</div>
          <div className="col-span-3 text-right">Code</div>
        </div>

        {/* Table Body */}
        {curriculum[active].modules.map((mod: any, i: number) => (
          <div
            key={i}
            className="grid grid-cols-12 px-4 py-4 border-t text-sm items-center bg-white"
          >
            <div className="col-span-1">{i + 1}</div>

            <div className="col-span-8 text-gray-800">{mod.name}</div>

            <div className="col-span-3 text-right text-teal-600 font-medium">
              {mod.code}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

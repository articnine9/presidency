"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProgramsAccordion({ data, query }: any) {
  const [active, setActive] = useState(0);
  const schools = data?.schools || [];
  const filteredSchools = data?.schools
    .map((school: any) => {
      const filteredPrograms = school.programs.filter((program: string) =>
        program.toLowerCase().includes(query.toLowerCase()),
      );

      return {
        ...school,
        programs: filteredPrograms,
      };
    })
    .filter((school: any) => school.programs.length > 0);
  return (
    <section className="pb-16 bg-[#1e4c8f]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 space-y-4">
        {(query ? filteredSchools : schools).map(
          (school: any, index: number) => {
            const isActive = active === index;

            return (
              <div
                key={school.id}
                className="rounded-xl bg-white shadow-md overflow-hidden border border-gray-200"
              >
                {/* HEADER */}
                <div
                  onClick={() => setActive(isActive ? -1 : index)}
                  className={`flex items-center justify-between px-5 py-4 cursor-pointer transition
                  ${isActive ? "bg-[#1E3A5F] text-white" : "bg-white"}
                `}
                >
                  <div className="flex items-center gap-4">
                    {/* Number */}
                    <div
                      className={`w-8 h-8 flex items-center justify-center rounded-full font-bold
                      ${
                        isActive
                          ? "bg-white text-[#1E3A5F]"
                          : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      {school.id}
                    </div>

                    {/* Title */}
                    <h3 className="text-base md:text-lg">{school.name}</h3>
                  </div>

                  {/* Icon */}
                  {isActive ? <ChevronUp /> : <ChevronDown />}
                </div>

                {/* CONTENT */}
                {isActive && (
                  <div className="p-6 bg-gray-50">
                    {/* Programs Grid */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      {school.programs.map((program: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-white p-3 rounded-lg border border-gray-200"
                        >
                          <div className="w-2 h-2 mt-2 rounded-full bg-[#1E3A5F]" />
                          <p className="text-sm text-gray-700">{program}</p>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                  </div>
                )}
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}

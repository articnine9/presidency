"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FlaskConical } from "lucide-react";

type School = {
  name: string;
  slug: string;
  phdSummary: {
    title: string;
    degree: string;
    duration: string;
    description: string;
    programmes?: string[];
    researchAreas: string[];
    eligibility: string;
  };
};

const SCHOOL_ICONS: Record<string, string> = {
  "computer-science": "💻",
  "engineering":      "⚙️",
  "information-science": "🗄️",
  "management":       "📊",
  "commerce":         "💰",
  "design":           "🎨",
  "law":              "⚖️",
  "media":            "🎬",
  "liberal-arts":     "📚",
  "health":           "🏥",
};

export default function PhDSchools({ schools }: { schools: School[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="py-16 md:py-24 bg-[#F6F7FB]" id="schools">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#E6F4F5] text-[#0A8F96] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-md mb-4">
            Research Disciplines
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0F1E3D]">
            Schools & Research Areas
          </h2>
          <p className="text-gray-500 mt-3 text-[15px] max-w-xl mx-auto">
            Explore doctoral research opportunities available across all 10 schools at Presidency University.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-4xl mx-auto space-y-3">
          {schools.map((school, i) => {
            const isOpen = openIdx === i;
            const emoji = SCHOOL_ICONS[school.slug] || "🎓";
            return (
              <motion.div
                key={school.slug}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm"
              >
                {/* Header */}
                <button
                  onClick={() => toggle(i)}
                  className={`w-full flex items-center justify-between px-6 py-4 text-left transition-colors duration-200 ${
                    isOpen ? "bg-[#0F1E3D] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xl w-8 text-center">{emoji}</span>
                    <div>
                      <p className={`font-semibold text-[15px] ${isOpen ? "text-white" : "text-[#0F1E3D]"}`}>
                        {school.name}
                      </p>
                      <p className={`text-xs mt-0.5 ${isOpen ? "text-gray-300" : "text-gray-400"}`}>
                        {school.phdSummary.programmes && school.phdSummary.programmes.length > 1
                          ? `${school.phdSummary.programmes.length} Doctoral Programmes`
                          : school.phdSummary.degree + " · " + school.phdSummary.duration}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-teal-300" : "text-gray-400"}`}
                  />
                </button>

                {/* Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 border-t border-gray-100">
                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-5">
                          {school.phdSummary.description}
                        </p>

                        {/* Programmes offered (if multiple) */}
                        {school.phdSummary.programmes && school.phdSummary.programmes.length > 1 && (
                          <div className="mb-5">
                            <p className="text-xs font-semibold text-[#0A8F96] uppercase tracking-wider mb-2">
                              Programmes
                            </p>
                            <ul className="space-y-1.5">
                              {school.phdSummary.programmes.map((prog, pi) => (
                                <li key={pi} className="flex items-start gap-2 text-sm text-gray-700">
                                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0A8F96]" />
                                  {prog}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Research Areas */}
                        <div>
                          <p className="text-xs font-semibold text-[#0A8F96] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                            <FlaskConical size={12} />
                            Research Areas
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {school.phdSummary.researchAreas.map((area, ai) => (
                              <span
                                key={ai}
                                className="bg-[#E6F4F5] text-[#0A8F96] text-xs font-medium px-3 py-1.5 rounded-full border border-[#0A8F96]/20"
                              >
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

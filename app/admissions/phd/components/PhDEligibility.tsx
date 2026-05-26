"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, ClipboardList, BookOpen } from "lucide-react";

const criteria = [
  {
    icon: BookOpen,
    title: "Academic Qualification",
    points: [
      "Master's degree (or equivalent) in a relevant discipline",
      "Minimum 55% aggregate marks (50% for SC/ST/OBC candidates)",
      "Candidates with M.Phil. degree may be given additional weightage",
    ],
  },
  {
    icon: ClipboardList,
    title: "Entrance & Selection",
    points: [
      "University's doctoral entrance examination (written test)",
      "Research aptitude interview with departmental committee",
      "Submission of a research proposal (500–1000 words)",
    ],
  },
  {
    icon: FileText,
    title: "Required Documents",
    points: [
      "UG and PG marksheets & degree certificates",
      "Photo identity proof (Aadhar / Passport)",
      "Research proposal / statement of purpose",
      "Two academic reference letters",
      "Work experience certificate (if applicable)",
    ],
  },
];

export default function PhDEligibility() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#E6F4F5] text-[#0A8F96] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-md mb-4">
            Eligibility
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0F1E3D]">
            Who Can Apply?
          </h2>
          <p className="text-gray-500 mt-3 text-[15px] max-w-lg mx-auto">
            Check if you meet the requirements to join our Ph.D. programme.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {criteria.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#F6F7FB] rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A8F96]/10">
                    <Icon size={20} className="text-[#0A8F96]" />
                  </div>
                  <h3 className="font-semibold text-[#0F1E3D] text-[15px]">
                    {c.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {c.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-[#0A8F96]" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-8 bg-[#0F1E3D] rounded-xl px-6 py-4 flex items-start gap-3 max-w-4xl mx-auto"
        >
          <span className="text-teal-400 mt-0.5 flex-shrink-0">ℹ️</span>
          <p className="text-sm text-gray-300 leading-relaxed">
            Eligibility criteria may vary slightly by school and discipline. International applicants should contact the
            Office of International Affairs for country-specific equivalency details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

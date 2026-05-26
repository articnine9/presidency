"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, Clock, BookOpen, FlaskConical, ArrowRight } from "lucide-react";

type PhDSummary = {
  title: string;
  degree: string;
  duration: string;
  description: string;
  programmes?: string[];
  researchAreas: string[];
  eligibility: string;
  applyHref?: string;
};

export default function SchoolPhDSection({ data }: { data: PhDSummary }) {
  if (!data) return null;

  const applyHref = data.applyHref || "/admissions/phd";

  return (
    <section className="py-16 bg-white" id="phd-research">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ── section label ── */}
        <div className="mb-8">
          <span className="inline-block rounded-md bg-[#E6F4F5] px-4 py-2 text-xs font-semibold tracking-widest text-[#0A8F96] uppercase mb-3">
            Doctoral Research
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0F1E3D]">
            {data.title}
          </h2>
        </div>

        {/* ── main card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#0F1E3D] rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="grid lg:grid-cols-2 gap-0">

            {/* ── LEFT: info panel ── */}
            <div className="p-8 md:p-10 flex flex-col justify-between gap-8">

              {/* degree + duration chips */}
              <div className="flex flex-wrap gap-3">
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white">
                  <GraduationCap size={13} className="text-[#0A8F96]" />
                  {data.degree}
                </span>
                <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white">
                  <Clock size={13} className="text-[#0A8F96]" />
                  {data.duration}
                </span>
              </div>

              {/* description */}
              <p className="text-gray-300 text-[15px] leading-relaxed">
                {data.description}
              </p>

              {/* programmes offered (if multiple) */}
              {data.programmes && data.programmes.length > 1 && (
                <div>
                  <p className="text-xs font-semibold text-[#0A8F96] uppercase tracking-widest mb-3">
                    Programmes Offered
                  </p>
                  <ul className="space-y-1.5">
                    {data.programmes.map((name, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0A8F96]" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* eligibility */}
              <div className="rounded-xl bg-white/5 border border-white/10 px-5 py-4">
                <div className="flex items-start gap-3">
                  <BookOpen size={16} className="mt-0.5 flex-shrink-0 text-[#0A8F96]" />
                  <div>
                    <p className="text-xs font-semibold text-[#0A8F96] uppercase tracking-widest mb-1">
                      Eligibility
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {data.eligibility}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div>
                <Link
                  href={applyHref}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#0A8F96] hover:bg-[#097e85] text-white font-semibold text-sm px-6 py-3 transition-colors duration-200"
                >
                  Apply for Ph.D.
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* ── RIGHT: research areas ── */}
            <div className="bg-[#0A1628] p-8 md:p-10 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-2 mb-2">
                <FlaskConical size={18} className="text-[#0A8F96]" />
                <p className="text-xs font-semibold text-[#0A8F96] uppercase tracking-widest">
                  Research Areas
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {data.researchAreas.map((area, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="rounded-full border border-[#0A8F96]/40 bg-[#0A8F96]/10
                               px-4 py-2 text-sm font-medium text-teal-300
                               hover:bg-[#0A8F96]/20 hover:border-[#0A8F96]/70
                               transition-colors duration-200 cursor-default"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>

              {/* divider */}
              <div className="border-t border-white/10 mt-2 pt-6">
                <p className="text-xs text-gray-500 leading-relaxed">
                  Research scholars at Presidency University benefit from expert faculty supervision,
                  high-performance computing infrastructure, access to international journals, and
                  active collaboration with industry and academic partners.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

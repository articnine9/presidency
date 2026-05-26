"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  FileCheck,
  Building2,
  BookOpen,
  Globe2,
  HeartHandshake,
  Microscope,
  Trophy,
} from "lucide-react";

const supports = [
  {
    icon: Lightbulb,
    title: "Seed Grant Funding",
    desc: "Financial support for early-stage and approved research projects.",
  },
  {
    icon: FileCheck,
    title: "Patent Filing Assistance",
    desc: "End-to-end support for filing patents arising from doctoral research.",
  },
  {
    icon: Building2,
    title: "Centres of Excellence",
    desc: "Access to specialised research labs, HPC infrastructure, and fabrication facilities.",
  },
  {
    icon: BookOpen,
    title: "Publication Support",
    desc: "Guidance on submitting to peer-reviewed journals and conference proceedings.",
  },
  {
    icon: Globe2,
    title: "International Collaborations",
    desc: "Research partnerships with universities and institutes across the globe.",
  },
  {
    icon: Microscope,
    title: "Inter-Disciplinary Research",
    desc: "Opportunities to collaborate across schools for multi-domain research projects.",
  },
  {
    icon: Trophy,
    title: "Awards & Recognition",
    desc: "University-level awards for outstanding research contributions and publications.",
  },
  {
    icon: HeartHandshake,
    title: "Supervisor Matching",
    desc: "Personalised pairing with faculty supervisors whose expertise aligns with your research topic.",
  },
];

export default function PhDSupport() {
  return (
    <section className="py-16 md:py-24 bg-[#0F1E3D]">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#0A8F96]/20 border border-[#0A8F96]/40 text-teal-300 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            Research Support
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Everything You Need to <span className="text-[#0A8F96]">Succeed</span>
          </h2>
          <p className="text-gray-400 mt-3 text-[15px] max-w-lg mx-auto">
            Presidency University provides comprehensive support systems so scholars can focus on research.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {supports.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 transition-colors duration-200"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0A8F96]/15 mb-4">
                  <Icon size={18} className="text-teal-400" />
                </div>
                <h4 className="text-[14px] font-semibold text-white mb-2">
                  {s.title}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

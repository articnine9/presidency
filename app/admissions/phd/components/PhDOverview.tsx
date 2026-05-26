"use client";

import { motion } from "framer-motion";
import { FlaskConical, Users, Globe2, Award } from "lucide-react";

const pillars = [
  {
    icon: FlaskConical,
    title: "Advanced Research Infrastructure",
    desc: "State-of-the-art laboratories, HPC clusters, and specialised research centres across all disciplines.",
  },
  {
    icon: Users,
    title: "Expert Faculty Mentorship",
    desc: "Work under the guidance of faculty with active publication records and industry-research experience.",
  },
  {
    icon: Globe2,
    title: "Global Academic Networks",
    desc: "Collaboration opportunities with international universities, conferences, and research consortiums.",
  },
  {
    icon: Award,
    title: "Funding & Publication Support",
    desc: "Seed grants, patent assistance, and structured pathways to publish in peer-reviewed journals.",
  },
];

export default function PhDOverview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-block bg-[#E6F4F5] text-[#0A8F96] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-md mb-4">
              About the Programme
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0F1E3D] leading-snug mb-6">
              Research That Shapes <br />
              <span className="text-[#0A8F96]">the Future</span>
            </h2>
            <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
              <p>
                Presidency University's doctoral programmes are designed to nurture
                independent thinkers and original researchers. With a dedicated
                Research and Innovation Council overseeing academic quality across all
                schools, scholars are supported from registration through to
                publication and degree completion.
              </p>
              <p>
                Our PhD programmes span 10 schools — from Computer Science and
                Engineering to Liberal Arts and Health Sciences — offering structured
                coursework, supervised research, and access to Centres of Excellence
                equipped with industry-grade infrastructure.
              </p>
              <p>
                Candidates receive regular milestone reviews, publication guidance,
                and access to an active community of researchers and visiting scholars
                from across the country and beyond.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-5">
            {pillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative bg-[#F6F7FB] rounded-xl p-5 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-[#0A8F96]" />
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0A8F96]/10 mb-4">
                    <Icon size={20} className="text-[#0A8F96]" />
                  </div>
                  <h4 className="text-[14px] font-semibold text-[#0F1E3D] mb-2 leading-snug">
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

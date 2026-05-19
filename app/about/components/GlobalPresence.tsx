"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function GlobalPresence() {
  return (
    <section className="bg-[#F4F5F7] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-5 inline-block rounded-md bg-[#0A8F96]/10 px-4 py-2 text-sm font-medium text-[#0A8F96]"
            >
              Global Presence
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-3xl font-bold leading-snug text-[#163B65] md:text-4xl"
            >
              Worldwide Academic{" "}
              <span className="text-[#0A8F96]">Connections</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-sm leading-7 text-[#4B5563] md:text-base"
            >
              Presidency University is part of a growing global academic
              network, with partnerships spanning universities across the USA,
              UK, Germany, France, Taiwan, Malaysia, Japan, and beyond. These
              collaborations create meaningful opportunities for students to
              engage in exchange programs, joint research, and international
              internships, bringing a truly global dimension to their education.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-sm leading-7 text-[#4B5563] md:text-base"
            >
              Through these worldwide connections, students gain exposure to
              diverse academic environments, cultures, and industry practices.
              Whether through international study tours, collaborative projects,
              or cultural exchange initiatives, Presidency University ensures
              that students graduate with broader perspectives and the
              confidence to succeed in an international career.
            </motion.p>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-2xl"
          >
            <img
              src="/img/aboutus/global-presence.jpeg"
              alt="Global Presence"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>

        {/* CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#0D2E57] px-8 py-10 md:flex-row"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Your Next Move{" "}
              <span className="text-[#0A8F96] italic">Awaits</span>
            </h3>

            <p className="mt-2 text-sm text-[#D1D5DB]">
              Start your global academic journey with Presidency University
            </p>
          </div>

          <Link
            href="/apply-now"
            className="inline-flex items-center gap-2 rounded-md bg-[#0A8F96] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#08787e]"
          >
            APPLY NOW →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

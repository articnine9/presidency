"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Headphones } from "lucide-react";
import { H2, H3 } from "@/app/components/Headings";

export default function GlobalPresence() {
  return (
    <section className="bg-[#F4F5F7] py-12 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ================= MOBILE VIEW ================= */}
        <div className="block lg:hidden">
          {/* HEADER */}
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="
                inline-block
                rounded-xl
                bg-[#0A8F96]/10
                px-4
                py-2
                text-[11px]
                font-medium
                text-[#0A8F96]
              "
            >
              Global Presence
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5"
            >
              <H2 className="text-[#163B65]">
                Worldwide Academic
                <span className="block text-[#0A8F96]">Connections</span>
              </H2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                mx-auto
                mt-5
                max-w-md
                text-[13px]
                leading-7
                text-[#4B5563]
              "
            >
              Through its worldwide academic connections, the University fosters
              global collaborations that enrich education and broaden
              perspectives.
            </motion.p>
          </div>

          {/* IMAGE CARD */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              mt-8
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-sm
            "
          >
            <img
              src="/img/aboutus/global-presence.jpeg"
              alt="Global Presence"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* CTA CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
              mt-4
              rounded-2xl
              bg-[#163B65]
              p-5
            "
          >
            <H2 className="text-white">
              Your Next Move
              <span className="ml-2 italic text-[#0A8F96]">Awaits</span>
            </H2>

            <p className="mt-3 text-[13px] leading-6 text-white/75">
              Start your global academic journey with Presidency University
            </p>

            {/* Buttons */}
            <div className="mt-6 space-y-3">
              <Link
                href="/apply-now"
                className="
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#0A8F96]
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#08787e]
                "
              >
                APPLY NOW
                <ArrowRight size={18} />
              </Link>

              <button
                className="
                  flex
                  h-[54px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/40
                  bg-transparent
                  text-sm
                  font-semibold
                  text-white
                "
              >
                TALK TO COUNSELLOR
                <Headphones size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ================= DESKTOP VIEW ================= */}
        <div className="hidden lg:block">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="max-w-xl"
              >
                <H2 className="text-[#163B65]">
                  Worldwide Academic{" "}
                  <span className="text-[#0A8F96]">Connections</span>
                </H2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-sm leading-7 text-[#4B5563] md:text-base"
              >
                Presidency University is part of a growing global academic
                network, with partnerships spanning universities across the USA,
                UK, Germany, France, Taiwan, Malaysia, Japan, and beyond.
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
              <H3 className="text-white">
                Your Next Move{" "}
                <span className="text-[#0A8F96] italic">Awaits</span>
              </H3>

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
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResearchInnovation() {
  const cards = [
    {
      title: "Academic Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/acadmic.webp",
      link: "/research/academic",
    },
    {
      title: "Sponsored Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/mini-sponsers.webp",
      link: "/research/sponsored",
    },
    {
      title: "Research Centers",
      img: "https://presidencyuniversity.in/assets/frontend/images/rnd.webp",
      link: "/research/centers",
    },
    {
      title: "Innovation Hub",
      img: "https://presidencyuniversity.in/assets/images/r-overview.webp",
      link: "/research/innovation",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#123765] py-10 text-white md:bg-[#062f54] md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* MOBILE LAYOUT */}
        <div className="block lg:hidden">
          {/* HEADER */}
          <div className="mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-xl bg-white/10 px-4 py-2 text-[11px] text-white/90"
            >
              Research & Innovation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-[38px] leading-[1.05] tracking-tight text-white"
            >
              Research That
              <span className="text-[#ff8c42]"> Matters</span>
            </motion.h2>
          </div>

          {/* IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
                onClick={() => (window.location.href = item.link)}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[165px] w-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CONTENT */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-[13px] leading-7 text-white/85"
          >
            Research is at the heart of Presidency University's identity. The
            university's Research & Innovation Council oversees a growing
            portfolio of academic and sponsored research, with dedicated Centres
            of Excellence, seed grant funding, patent filing support, and a
            peer-reviewed institutional journal.
            <br />
            <br />
            Faculty and doctoral students collaborate with industry partners and
            international institutions on projects addressing global challenges
            in technology, sustainability, health, and society.
            <br />
            <br />
            The Presidency Launchpad — the university's incubation and
            entrepreneurship centre — supports student and faculty startups from
            ideation to market, reflecting the university's commitment to
            turning research into real-world impact.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-7"
          >
            <Link href="/international/phd">
              <button
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
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#0BB5B5]
                "
              >
                VIEW MORE
                <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden items-center gap-16 lg:grid lg:grid-cols-2">
          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                className="group relative h-[350px] cursor-pointer overflow-hidden rounded-xl shadow-md"
                onClick={() => (window.location.href = item.link)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <h3 className="text-center text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <div className="mt-2 flex justify-center opacity-0 transition-opacity duration-300 delay-100 group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-sm text-[#ff8c42]">
                      Learn More
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block rounded-lg bg-white/10 px-4 py-2 text-sm"
            >
              Research & Innovation
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-4xl leading-tight"
            >
              Research That
              <span className="text-[#ff8c42]"> Matters</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="mt-6 text-[13px] leading-7 text-white/85"
            >
              Research is at the heart of Presidency University's identity. The
              university's Research & Innovation Council oversees a growing
              portfolio of academic and sponsored research, with dedicated
              Centres of Excellence, seed grant funding, patent filing support,
              and a peer-reviewed institutional journal.
              <br />
              <br />
              Faculty and doctoral students collaborate with industry partners
              and international institutions on projects addressing global
              challenges in technology, sustainability, health, and society.
              <br />
              <br />
              The Presidency Launchpad — the university's incubation and
              entrepreneurship centre — supports student and faculty startups
              from ideation to market, reflecting the university's commitment to
              turning research into real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link href="/international/phd">
                <button className="flex items-center gap-2 rounded-lg bg-[#0A8F96] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-[#0BB5B5]">
                  View More
                  <ArrowRight size={18} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

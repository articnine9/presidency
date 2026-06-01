"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import CommonHeader from "@/app/components/CommonHeader";

export function AboutPresidency() {
  return (
    <section className="bg-[#F5F6F8]" id="programmes">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 items-center py-10 md:py-16 lg:py-24">
        {/* 🔥 MOBILE HEADER */}
        <div className="block md:hidden mb-6">
          <CommonHeader
            tag="About Presidency"
            title="A Global University Experience"
            highlight="in the Heart of India"
            description=""
            primaryColor="#0A8F96"
            align="center"
          />
        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 🔹 IMAGE */}
          <div className="order-2 md:order-1">
            <div className="relative h-[260px] sm:h-[320px] md:h-[420px] lg:h-[600px] rounded-[24px] overflow-hidden shadow-xl group">
              <img
                src="/img/degree-program.jpeg"
                alt="Students"
                className="w-full h-full object-cover transition duration-500"
              />
            </div>
          </div>

          {/* 🔹 CONTENT */}
          <div className="space-y-4 md:space-y-6 order-3 md:order-2">
            {/* 🔥 DESKTOP HEADER */}
            <div className="hidden md:block">
              <CommonHeader
                tag="About Presidency"
                title="A Global University Experience"
                highlight="in the Heart of India"
                description=""
                primaryColor="#0A8F96"
                align="left"
              />
            </div>

            {/* 🔥 DESKTOP CONTENT */}
            <div className="hidden md:block">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base md:text-lg text-black/80 mb-4 md:mb-6 max-w-3xl"
              >
                Presidency University offers rigorous academic programmes,
                global exposure, and industry-driven learning. Presidency
                University, Bangalore, is one of India’s most ambitious private
                universities — a place where global thinking, cutting-edge
                research, and a vibrant campus community come together on a lush
                100-acre campus in the heart of India’s Silicon Valley.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base md:text-lg text-black/80 mb-6 md:mb-8 max-w-3xl"
              >
                From undergraduate and postgraduate degrees to doctoral
                research, international exchange programmes, and professional
                short courses, Presidency University offers a pathway for every
                ambition — backed by national accreditations, industry-leading
                placements, and a dedicated Office of International Affairs.
              </motion.p>
            </div>

            {/* 🔥 MOBILE CONTENT */}
            <div className="md:hidden space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-[15px] leading-8 text-[#334155]"
              >
                Presidency University offers rigorous academics, global
                exposure, and industry-driven learning on a vibrant 100-acre
                campus in Bangalore — India’s Silicon Valley. One of India’s
                most ambitious private universities, it brings together global
                thinking, cutting-edge research, and a diverse community,
                welcoming students from around the world.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-[15px] leading-8 text-[#334155]"
              >
                With undergraduate, postgraduate, doctoral, exchange programmes,
                and short courses, it provides pathways for every ambition —
                supported by strong accreditations, excellent placements, and a
                dedicated Office of International Affairs.
              </motion.p>
            </div>

            {/* 🔥 DESKTOP BUTTON */}
            <div className="hidden md:flex">
              <Link href="/about" className="bg-[#0A8F96] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-base md:text-lg">
                Discover Presidency
              </Link>
            </div>

            {/* 🔥 MOBILE BUTTON */}
            <div className="md:hidden">
              <Link
                href="/about"
                className="
                  w-full
                  bg-[#F58A3C]
                  hover:bg-[#eb7a28]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  text-sm
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                "
              >
                DISCOVER PRESIDENCY
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

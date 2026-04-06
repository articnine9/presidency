"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";
import CommonHeader from "@/app/components/CommonHeader";

export function AboutPresidency() {
  return (
    <section className="bg-[#F5F6F8]" id="programmes">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 items-center py-10 md:py-16 lg:py-24">
        {/* RIGHT SIDE */}

        {/* LEFT CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <CommonHeader
              tag="About Presidency"
              title="A Global University Experience"
              highlight="in the Heart of India"
              description=""
              primaryColor="#0A8F96"
              align="left"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-black/80 mb-4 md:mb-6 max-w-3xl"
            >
              Presidency University offers rigorous academic programmes, global
              exposure, and industry-driven learning. Presidency University, Bangalore, is one of India’s most ambitious
              private universities — a place where global thinking, cutting-edge
              research, and a vibrant campus community come together on a lush
              100-acre campus in the heart of India’s Silicon Valley. Whether
              you are arriving from Africa, the Middle East, South-East Asia,
              Europe, or beyond, you will find a university that is genuinely
              built to welcome the world.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base md:text-lg text-black/80 mb-6 md:mb-8 max-w-3xl"
            >
              From undergraduate and postgraduate degrees to doctoral research,
              international exchange programmes, and professional short courses,
              Presidency University offers a pathway for every ambition — backed
              by national accreditations, industry-leading placements, and a
              dedicated Office of International Affairs to support you every
              step of the way.
            </motion.p>
            <div className="flex">
              <a href="/about"><button className="bg-[#0A8F96] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-base md:text-lg">
                Discover Presidency
              </button></a>
            </div>
          </div>
          <div>
            <div className="relative h-[220px] sm:h-[320px] md:h-[420px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group mt-4 md:mt-5">
              <img
                src="img/degree-program.jpeg"
                alt="Students"
                className="w-full h-full object-cover transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

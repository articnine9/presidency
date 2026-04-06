"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function JourneySection() {
  return (
    <section className="py-10 md:py-16 lg:py-20 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* 🔥 LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CommonHeader
            tag="Admissions"
            title="Your Journey"
            highlight="Starts Here"
            align="left"
          />
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-4 md:mb-6">
            Applying to Presidency University as an international student is
            straightforward. Our Office of International Affairs (OIA) guides
            you through every stage — from choosing your programme and preparing
            your documents, to securing your Indian Student Visa and settling in
            on campus.
          </p>

          <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            We welcome students from all academic backgrounds and nationalities.
            Whether you are a school leaver, a graduate, or a professional
            pursuing research, there is a place for you at Presidency.
          </p>

          {/* 🔥 CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-2 sm:gap-3"
          >
            <button className="bg-[#0A8F96] text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-xs sm:text-sm md:text-lg"
            >
              Explore Programmes
            </button>

            <button className="bg-[#062f54] text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#073966] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-xs sm:text-sm md:text-lg backdrop-blur-sm"
            >
              Contact the OIA
            </button>
            <button className="bg-white text-[#062f54] px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 text-xs sm:text-sm md:text-lg border border-[#062f54]"
            >
              How to Apply
            </button>
          </motion.div>
        </motion.div>

        {/* 🔥 RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6"
        >
          {/* IMAGE 1 */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/img/hero/yourjourney-one.png"
              className="w-full h-[200px] sm:h-[280px] md:h-[420px] object-cover"
            />
          </div>

          {/* IMAGE 2 */}
          <div className="rounded-xl overflow-hidden shadow-md">
            <img
              src="/img/hero/yourjourney-two.png"
              className="w-full h-[200px] sm:h-[280px] md:h-[420px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

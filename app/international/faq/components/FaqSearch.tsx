"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

export default function FaqSearch({ query, setQuery }: any) {
  return (
    <section className="py-16 md:py-20 bg-[#f4f6f8]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-6">
        {/* 🔥 HEADER */}
        <CommonHeader
          tag="FAQ"
          title="How can we"
          highlight="help you?"
          description="Search for answers to common questions about admissions, campus life, visas, and more."
          align="center"
        />

        {/* 🔥 SEARCH BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative mt-8"
        >
          <div className="relative flex items-center bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            {/* ICON */}
            <div className="absolute left-5 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <Search className="text-gray-500" size={18} />
            </div>

            {/* INPUT */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search FAQs (e.g. visa, fees, hostel...)"
              className="w-full pl-16 pr-6 py-5 rounded-full bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400 text-sm md:text-base"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

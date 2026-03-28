"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import CommonHeader from "@/app/components/CommonHeader";

export default function ExplorePrograms({ query, setQuery }: any) {
  return (
    <section className="pt-16 md:pt-20 pb-10 bg-[#1e4c8f]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        {/* Header */}
        <CommonHeader
          tag="Explore"
          title="Our Schools and"
          highlight=" Programmes"
          description="Search and discover Research and Doctoral Programmes across multiple schools."
          align="center"
          primaryColor="#ffffff" // tag + highlight
          secondaryColor="#ffffff" // full heading
          descriptionColor="#ffffff" // description
        />

        {/* 🔥 Premium Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative mt-8"
        >
          <div className="relative flex items-center bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            {/* Icon */}
            <div className="absolute left-5 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
              <Search className="text-gray-500" size={18} />
            </div>

            {/* Input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search e.g. BBA, B.Tech"
              className="w-full pl-16 pr-6 py-5 rounded-full bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400 text-sm md:text-base"
            />

            {/* Optional right action (future use) */}
            {/* <button className="mr-3 bg-[#1E3A5F] text-white px-5 py-2 rounded-full text-sm">
              Search
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

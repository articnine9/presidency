"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";

export function ProgrammesSection() {
  const programmes = [
    { title: "Undergraduate", color: "border-b-[#0A8F96]" },
    { title: "Doctoral (PhD)", color: "border-b-[#D4A843]" },
    { title: "Postgraduate", color: "border-b-[#0A8F96]" },
    { title: "International Pathways", color: "border-b-[#D4A843]" },
  ];

  return (
    <section
      className="min-h-screen flex items-center bg-[#F5F6F8]"
      id="programmes"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group mt-5">
            <img
              src="img/bang-coll.png"
              alt="Students"
              className="w-full h-full object-cover transition duration-500"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 ">
              <p className="text-white text-sm">
                Explore campus life and academic excellence
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#1B4E8C] text-4xl font-semibold mb-6 leading-tight"
          >
            Find Your Perfect
            <span className="block text-[#0A8F96]">Degree Programme</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4A5568] max-w-md"
          >
            Presidency University offers rigorous academic programmes, global
            exposure, and industry-driven learning.
          </motion.p>
          {/* DEGREE BOXES */}
          <div className="grid grid-cols-2 gap-6">
            {programmes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`bg-white shadow-md rounded-xl p-8 text-center border-b-4 ${item.color} hover:shadow-xl transition`}
              >
                <h3 className="text-[#1B4E8C] font-medium">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* SEARCH */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by: Keyword or course"
              className="w-full border border-gray-300 rounded-md py-4 px-5 pr-12 focus:border-[#0A8F96] focus:ring-2 focus:ring-[#0A8F96]/20 outline-none transition"
            />
            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

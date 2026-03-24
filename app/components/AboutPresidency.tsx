"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";

export function AboutPresidency() {
  

  return (
    <section
      className="min-h-screen flex items-center bg-[#F5F6F8]"
      id="programmes"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
      
        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#1B4E8C] text-4xl font-semibold mb-6 leading-tight"
          >
            A Global University Experience
            <span className="block text-[#0A8F96]">in the Heart of India</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4A5568] max-w-md"
          >
            Presidency University offers rigorous academic programmes, global
            exposure, and industry-driven learning.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-black/80 mb-10 max-w-3xl  "
          >
            Presidency University, Bangalore, is one of India’s most ambitious private universities — a place where global thinking, cutting-edge research, and a vibrant campus community come together on a lush 100-acre campus in the heart of India’s Silicon Valley. Whether you are arriving from Africa, the Middle East, South-East Asia, Europe, or beyond, you will find a university that is genuinely built to welcome the world.
          </motion.p>

           <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-black/80 mb-10 max-w-3xl  "
          >
            From undergraduate and postgraduate degrees to doctoral research, international exchange programmes, and professional short courses, Presidency University offers a pathway for every ambition — backed by national accreditations, industry-leading placements, and a dedicated Office of International Affairs to support you every step of the way.
          </motion.p>
          <div className="flex justify-center align-center">
          <button className="bg-[#0A8F96] text-white px-8 py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg">
              Discover Presidency
            </button>
          </div>

          
        </div>
        {/* LEFT CONTENT */}
        <div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group mt-5">
            <img
              src="img/bang-coll.png"
              alt="Students"
              className="w-full h-full object-cover transition duration-500"
            />

            {/* OVERLAY */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 ">
              <p className="text-white text-sm">
                Explore campus life and academic excellence
              </p>
            </div> */}
          </div>
        </div>


      </div>
    </section>
  );
}

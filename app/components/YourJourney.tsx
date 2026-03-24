"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";
import { ArrowRight, Play } from "lucide-react";

export function YourJourney() {
  

  return (
    <section
      className="min-h-screen flex items-center bg-[white] py-12 md:py-16 lg:py-20"
      id="programmes"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center mt-3">
      
        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#1B4E8C] text-4xl font-semibold mb-6 leading-tight"
          >
            Your Journey <span className="text-[#0A8F96]">Starts Here</span>
            
          </motion.h2>

           <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4A5568] max-w-md"
          >
           Applying to Presidency University as an international student is straightforward.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-black/80 mb-10 max-w-3xl  "
          >
             Our Office of International Affairs (OIA) guides you through every stage — from choosing your programme and preparing your documents, to securing your Indian Student Visa and settling in on campus. We accept applications for both our July and January intakes.
          </motion.p>

           <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-black/80 mb-10 max-w-3xl  "
          >
            We welcome students from all academic backgrounds and nationalities. Whether you are a school leaver ready for your first degree, a graduate seeking a specialist qualification, or an experienced professional pursuing doctoral research, there is a place for you at Presidency.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-2 mb-16"
          >
            <div style={{display:"block",margin:"auto"}}>
            <button className="bg-black/80 text-[white] px-8 py-4 rounded-lg hover:bg-balck-100 transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg mx-3">
              How to Apply
            </button>
            <button className="bg-black/80 text-[white] px-8 py-4 rounded-lg hover:bg-black-100 transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg">
              Contact OIA
            </button>
            </div>
            <div style={{display:"block",margin:"auto",marginTop:"10px"}}>
            
            <button className="bg-[#0A8F96] text-white px-8 py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg">
              Explore Programmes
              <ArrowRight size={22} />
            </button>
            </div>
            
          </motion.div>
          
        </div>
        {/* LEFT CONTENT */}
        <div>
          <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group mt-5">
            <img
              src="img/degree-program.jpeg"
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

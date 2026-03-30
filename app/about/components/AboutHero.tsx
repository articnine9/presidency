"use client";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "../../../styles/about.css";

export default function AboutHero() {
  const breadcrumbs = [{
    name: "Home", link: "/"
  },
  {
    name: "About", link: "/about"
  }
  ]
  return (
    <>
      {breadcrumbs && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-wrap">
            {breadcrumbs.map((item, index, arr) => (
              <span key={index}>
                {index === 0 ? (
                  <a href={item.link}>
                    {item.name}
                  </a>
                ) : (
                  <span>{item.name}</span>
                )}

                {index !== arr.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
      <section className="relative w-full  min-h-[70vh]
 
    flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="img/mang.png"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3D]/50 via-[#0F1E3D]/50 to-[#0F1E3D]/50"></div>

          {/* Animated Overlay Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 w-full">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-white/90 mb-4"
            >
              Presidency University, Bangalore, is a University established under the Karnataka Act 41 of 2013 by the Presidency Group of Institutions — an educational legacy spanning five decades. The university is approved by the University Grants Commission (UGC) of India and is accredited by NAAC (National Assessment and Accreditation Council). It features in the Times Higher Education (THE) World University Rankings, the QS Rankings & Ratings, and the National Institutional Ranking Framework (NIRF).
            </motion.p>
            {/* <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f] leading-tight mb-4"
          >
            
            <span className="block text-[#ff8c42]">Our History</span>
          </motion.h2>
          <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 mb-8"
            >
              Presidency University, Bangalore, is a University established under the Karnataka Act 41 of 2013 by the Presidency Group of Institutions — an educational legacy spanning five decades. The university is approved by the University Grants Commission (UGC) of India and is accredited by NAAC (National Assessment and Accreditation Council). It features in the Times Higher Education (THE) World University Rankings, the QS Rankings & Ratings, and the National Institutional Ranking Framework (NIRF).
            </motion.p> */}
             

          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-5"
          >
            <button className="bg-[#0A8F96] text-white px-8 py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg">
              Explore Programmes
              <ArrowRight size={22} />
            </button>
            {/* <button className="bg-white text-[#0F1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg">
              How to Apply
            </button> */}
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">

              Request Information
            </button>
          </motion.div>
        </div>

      </section>
      {/* <section className="w-full py-10 px-6 bg-[#0F1E3D]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 ">
       
          <div className=" text-white flex items-center px-8 md:px-16 py-12">
            <div className="max-w-md">
              <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                A leading private university in India, known for academic
                excellence, global collaborations, and industry-focused
                education.
              </h1>

              <div className="flex gap-4">
                <button className="ml-3 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-2.5 rounded-full flex items-center gap-3 text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Explore Programmes
                </button>

                <button className="border border-[#c4a45b] text-[#c4a45b] px-5 py-2 rounded-full  text-sm font-medium hover:bg-[#c4a45b] hover:text-white transition">
                  Request Information
                </button>
              </div>
            </div>
          </div>

         
          <div className="relative">
            <img
              src="/img/bang-life/innovation-2.png"
              className="w-full h-full object-cover"
            />

     
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
          </div>
        </div>
      </div>
    </section> */}
    </>
  );
}

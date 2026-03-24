"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";

export function WhyChooseUs() {


    return (
        <section
            className="min-h-screen flex items-center bg-[#F5F6F8] py-12 md:py-16 lg:py-20"
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
                        Why Choose<span className="text-[#0A8F96]"> Presidency</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-[#4A5568] max-w-md"
                    >
                        When you choose Presidency University, you are choosing more than a degree. You are choosing a community, a city, and a career advantage that few universities in Asia can match.
                    </motion.p>
                    <motion.ul
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg text-black/80 mb-10 max-w-3xl list-[square] pl-5 marker:text-[#0a8f96] space-y-3"
                    >
                        <li>100+ undergraduate, postgraduate, and doctoral programmes across 10 Schools</li>
                        <li>Accredited by NAAC and approved by the University Grants Commission (UGC), Government of India</li>
                        <li>Ranked in NIRF, QS, and Times Higher Education (THE) rankings [CONFIRM current year rankings]</li>
                        <li>Dedicated Office of International Affairs (OIA) with support from application to graduation</li>
                        <li>International MoU partnerships with universities across the USA, UK, Germany, France, Taiwan, Malaysia, and Japan</li>
                        <li>3+1+1 dual-qualification pathway — complete your final year and a Master’s abroad</li>
                        <li>Safe, fully-equipped on-campus hostel accommodation for male and female students</li>
                        <li>Located in Bangalore — home to the Indian offices of Amazon, Google, Microsoft, Infosys, Wipro, and hundreds more</li>
                    </motion.ul>
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

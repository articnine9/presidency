"use client";
import { motion } from "motion/react";

import { CheckCircle } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function VisionMission() {
  return (
   <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">

         <CommonHeader
                  tag="Vision, Mission & Values"
                  title="The Core of "
                  highlight="Presidency"
                  description={`At the heart of the University lies a commitment to vision, mission, and values that inspire innovation, guide growth, and create lasting impact.`}
                  primaryColor="#ff8c42"
                  secondaryColor="#1e3a5f"
                  align="center"
                />
        {/* 🔹 TITLE */}
       

        {/* 🔥 CARDS */}
        < div 
        
        
        className="grid md:grid-cols-3 gap-6">
      
          {/* <div className="relative rounded-xl overflow-hidden shadow-md">
            <img
              src="/img/about/vision.jpg"
              className="w-full h-[180px] object-cover"
            />

        
            <div className="absolute inset-0 bg-black/50 flex items-end p-4">
              <h3 className="text-white font-semibold text-sm">VISION</h3>
            </div>
          </div> */}

          {/* 🟡 VISION CARD */}

           <motion.div 
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15}}
                className={`bg-white shadow-md rounded-xl p-8 border-b-4  border-b-[#0A8F96] hover:shadow-xl transition`}>
            
            <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  Vision
                </h3>

           <p className="space-y-3 text-base text-gray-600 max-w-md">
            To be an internationally networked research university, dedicated to research-oriented teaching and the holistic development of students as global citizens.
          </p>
          </motion.div>



          {/* 🟡 MISSION CARD */}
          <motion.div 
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -15}}
                className={`bg-white shadow-md rounded-xl p-8 border-b-4  border-b-[#0A8F96] hover:shadow-xl transition`}>
             <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  Mission
                </h3>

            {/* <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Fomentment of mission</strong>
                  <br />
                  Mission-driven motivations
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Reequipments</strong>
                  <br />
                  Innovation possibilities
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#c4a45b] mt-1" />
                <span>
                  <strong>Excellences</strong>
                  <br />
                  Innovation standards
                </span>
              </li>
            </ul> */}
            <p className="space-y-3 text-base text-gray-600 max-w-md">
            To provide an academically excellent and globally connected environment that empowers students to think critically, innovate boldly, and lead with integrity.
          </p>
          </motion.div>

          {/* 🟢 VALUES CARD */}
          <motion.div 
           initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           whileHover={{ y: -15}}
                className={`bg-white shadow-md rounded-xl p-8 border-b-4  border-b-[#0A8F96] hover:shadow-xl transition`}>
             <h3 className="text-lg font-semibold text-[#1e3a5f]">
                  Values
                </h3>

            <ul className="space-y-3 text-base text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#ff8c42] mt-1" />
                <span>
                  
                 Academic Excellence 
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#ff8c42] mt-1" />
                <span>
                 
                  Global Outlook
                </span>
              </li>

              <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#ff8c42] mt-1" />
                <span>
                  
                  Inclusivity & Diversity
                </span>
              </li>
               <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#ff8c42] mt-1" />
                <span>
                  
                 Innovation & Entrepreneurship
                </span>
              </li>
               <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#ff8c42] mt-1" />
                <span>
                  
                 Integrity & Ethics
                </span>
              </li>
               <li className="flex items-start gap-2">
                <CheckCircle size={16} className="text-[#ff8c42] mt-1" />
                <span>
                  
                 Social Responsibility
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

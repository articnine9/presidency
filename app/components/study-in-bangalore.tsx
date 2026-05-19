"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import CommonHeader from "@/app/components/CommonHeader";

export default function StudyInBangalore() {
  return (
    <section className="w-full bg-white  overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 items-center py-10 md:py-16 lg:py-24">

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >

            {/* Common Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <CommonHeader
                tag="Life in Bangalore"
                title="Study in India’s Most"
                highlight="Exciting City"
                description=""
                primaryColor="#F58A3C"
                align="left"
              />
            </motion.div>

            {/* Paragraphs */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-5 mt-6"
            >
              <p className="text-[#475569] text-base leading-8">
                Bangalore (Bengaluru), India’s leading technology and
                innovation hub, gives students access to world-class
                companies, global opportunities, and a dynamic learning
                environment shaped by creativity and entrepreneurship.
              </p>

              <p className="text-[#475569] text-base leading-8">
                From internships and industry collaborations to startup
                culture and networking events, students gain practical
                exposure that prepares them for successful international
                careers in today’s fast-changing world.
              </p>

              <p className="text-[#475569] text-base leading-8">
                Beyond academics, Bangalore offers an exciting student
                lifestyle with diverse cultures, modern entertainment,
                pleasant weather, affordable living, and a welcoming
                international community.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button
                className="
                  bg-[#F58A3C]
                  hover:bg-[#eb7a28]
                  text-white
                  px-7
                  py-3.5
                  rounded-lg
                  font-semibold
                  text-sm
                  flex
                  items-center
                  gap-2
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:shadow-lg
                "
              >
                Explore
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                overflow-hidden
                rounded-2xl
                shadow-2xl
              "
            >
              <img
                src="/images/bangalore-city.jpg"
                alt="Bangalore City"
                className="
                  w-full
                  h-[320px]
                  sm:h-[420px]
                  lg:h-[520px]
                  object-cover
                "
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
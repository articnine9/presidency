"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import CommonHeader from "@/app/components/CommonHeader";

export default function StudyInBangalore() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 items-center py-10 md:py-16 lg:py-24">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* 🔥 MOBILE HEADER */}
          <div className="block md:hidden order-1">
            <CommonHeader
              tag="Life in Bangalore"
              title="Study in India’s Most"
              highlight="Exciting City"
              description=""
              primaryColor="#F58A3C"
              align="center"
            />
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                overflow-hidden
                rounded-[28px]
                shadow-2xl
              "
            >
              <img
                src="/img/bang-life/bangalore-city.jpg"
                alt="Bangalore City"
                className="
                  w-full
                  h-[260px]
                  sm:h-[420px]
                  lg:h-[520px]
                  object-cover
                "
              />
            </motion.div>
          </motion.div>

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-3 lg:order-1"
          >
            {/* 🔥 DESKTOP HEADER */}
            <div className="hidden md:block">
              <CommonHeader
                tag="Life in Bangalore"
                title="Study in India’s Most"
                highlight="Exciting City"
                description=""
                primaryColor="#F58A3C"
                align="left"
              />
            </div>

            {/* 🔥 DESKTOP CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="hidden md:block space-y-5 mt-6"
            >
              <p className="text-[#475569] text-base leading-8">
                Bangalore (Bengaluru), India’s leading technology and innovation
                hub, gives students access to world-class companies, global
                opportunities, and a dynamic learning environment shaped by
                creativity and entrepreneurship.
              </p>

              <p className="text-[#475569] text-base leading-8">
                From internships and industry collaborations to startup culture
                and networking events, students gain practical exposure that
                prepares them for successful international careers in today’s
                fast-changing world.
              </p>

              <p className="text-[#475569] text-base leading-8">
                Beyond academics, Bangalore offers an exciting student lifestyle
                with diverse cultures, modern entertainment, pleasant weather,
                affordable living, and a welcoming international community.
              </p>
            </motion.div>

            {/* 🔥 MOBILE CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:hidden mt-5"
            >
              <p className="text-[#475569] text-[15px] leading-8">
                Bangalore (Bengaluru), India’s tech and innovation capital,
                offers direct access to global companies, industry exposure, and
                career opportunities from day one. A cosmopolitan,
                student-friendly city, it combines a vibrant international
                community, great climate, and rich lifestyle experiences — all
                at a fraction of the cost of major global cities.
              </p>
            </motion.div>

            {/* 🔥 DESKTOP BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
              className="hidden md:block mt-8"
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

            {/* 🔥 MOBILE BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:hidden mt-7"
            >
              <button
                className="
                  w-full
                  bg-[#F58A3C]
                  hover:bg-[#eb7a28]
                  text-white
                  py-4
                  rounded-xl
                  font-semibold
                  text-sm
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition-all
                "
              >
                EXPLORE
                <ArrowRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { H1 } from "@/app/components/Headings";
// import "../../../styles/about.css";

export default function AboutHero() {
  const breadcrumbs = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
  ];
  return (
    <>
      {breadcrumbs && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-wrap">
            {breadcrumbs.map((item, index, arr) => (
              <span key={index}>
                {index === 0 ? (
                  <a href={item.link}>{item.name}</a>
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
      <section className="relative flex min-h-[85vh] w-full items-end justify-center overflow-hidden px-4 pt-24 sm:min-h-[80dvh] md:min-h-screen lg:px-8">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="img/management.jpg"
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
        <div className="relative z-10 mx-auto flex w-full max-w-[1400px] items-end px-4 pb-10 sm:px-6 md:px-10 md:pb-16 lg:pb-20">
          <div className="max-w-3xl">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="
        mb-4
        max-w-[320px]

        sm:max-w-xl

        md:max-w-3xl
      "
            >
              <H1 className="text-white tracking-tight">
                Where Ambition Meets Opportunity
              </H1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="
        mb-6
        max-w-[340px]
        text-[13px]
        leading-6
        text-white/85

        sm:max-w-2xl
        sm:text-base

        md:text-lg
      "
            >
              Presidency University, Bangalore, is established under the
              Karnataka Act 41 of 2013 by the Presidency Group of Institutions,
              with over 50 years of academic legacy. It is UGC-approved,
              NAAC-accredited, and featured in leading rankings including QS,
              NIRF, and THE.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="
        flex
        flex-col
        gap-3

        sm:flex-row
        sm:items-center
      "
            >
              <Link
                href="/campus-life"
                className="
          flex
          h-[52px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-[#0A8F96]
          px-6
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-[#0BB5B5]
          hover:shadow-2xl

          sm:w-auto
          sm:px-8
          sm:text-base
        "
              >
                Explore Career Outcomes
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="
    hidden
    sm:flex
    h-[52px]
    items-center
    justify-center
    rounded-xl
    border
    border-white/30
    bg-white/10
    px-8
    text-base
    font-medium
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:bg-white/20
  "
              >
                Request Information
              </Link>
            </motion.div>
          </div>
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

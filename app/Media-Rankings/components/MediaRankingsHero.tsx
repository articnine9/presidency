"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";


export default function MediaRankingsHero() {
  const breadcrumbs = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Media Rankings", link: "" },
  ];

  const stats = [
    { value: "50+", label: "Rankings & Ratings" },
    { value: "2026", label: "Latest Year" },
    { value: "#1", label: "BBA Pan India (GHRDC)" },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-[#f8f9fb] py-3 border-b border-[#f0f2f5]">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center gap-1 text-[13px] text-[#667085]">
          {breadcrumbs.map((item, index, arr) => (
            <span key={index} className="flex items-center gap-1">
              {index !== arr.length - 1 ? (
                <a href={item.link} className="hover:text-[#0A8F96] transition-colors duration-200">
                  {item.name}
                </a>
              ) : (
                <span className="text-[#0A8F96] font-medium">{item.name}</span>
              )}
              {index !== arr.length - 1 && (
                <span className="text-[#d0d5dd] mx-1">›</span>
              )}
            </span>
          ))}
        </div>
      </div>

      
      {/* Hero Section */}
      <section className="relative flex min-h-[min(100dvh,560px)] w-full items-center justify-center px-4 py-12 sm:min-h-[70vh] sm:px-6 sm:py-16 lg:px-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={
              "/img/ranking.jpg"
            }
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3D]/80 via-[#0F1E3D]/70 to-[#0F1E3D]/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="max-w-3xl text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 font-serif text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Media 
              <span className="italic text-[#D4A843]">{"  "}Rankings</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 text-base text-white/90 md:text-lg lg:text-xl"
            >
             Presidency University, Bengaluru is consistently ranked among India's top universities by leading survey bodies including Times Survey, Careers360, The Week–Hansa, GHRDC, and Education World, reflecting its excellence across engineering, management, law, and information science.
            </motion.p>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
          >
              {/* <Link
              href="#memberships"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0A8F96] px-6 py-3.5 text-base text-white transition-all duration-300 hover:scale-105 hover:bg-[#0BB5B5] hover:shadow-xl sm:w-auto md:px-8 md:py-4 md:text-lg"
            >
              View All Memberships
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-lg border-2 border-white px-6 py-3.5 text-base text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/10 sm:w-auto md:px-8 md:py-4 md:text-lg flex items-center justify-center gap-2"
            >
              Download Affiliation Letter
              <Download size={18} />
            </Link>
             */}
          </motion.div>
        </div>
      </section>
    </>
  );
}

"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ResearchInnovation() {
  const cards = [
    {
      title: "Academic Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/acadmic.webp",
      link: "/research/academic",
    },
    {
      title: "Sponsored Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/mini-sponsers.webp",
      link: "/research/sponsored",
    },
    {
      title: "Research Centers",
      img: "https://presidencyuniversity.in/assets/frontend/images/rnd.webp",
      link: "/research/centers",
    },
    {
      title: "Innovation Hub",
      img: "https://presidencyuniversity.in/assets/images/r-overview.webp",
      link: "/research/innovation",
    },
  ];

  return (
    <>
      <section className="bg-[#062f54] text-white relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {cards.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden group shadow-md h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px] cursor-pointer"
                onClick={() => (window.location.href = item.link)}
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                />

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/90 via-[#1e3a5f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* TEXT - SLIDE UP */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-white text-xl font-semibold text-center">
                    {item.title}
                  </h3>
                  <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span className="text-[#ff8c42] text-sm flex items-center gap-1">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CONTENT */}
          <div className="py-16 sm:py-20 lg:py-24">
            {/* HEADER */}
            <div className="mb-8 sm:mb-10 mt-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm mb-3 sm:mb-4"
              >
                Research & Innovation
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl leading-tight"
              >
                Research That
                <span className="text-[#ff8c42]"> Matters</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/80 mt-3 sm:mt-4 text-lg sm:text-lg"
              >
                Research is at the heart of Presidency University's identity.
                The university's Research & Innovation Council oversees a
                growing portfolio of academic and sponsored research, with
                dedicated Centres of Excellence, seed grant funding, patent
                filing support, and a peer-reviewed institutional journal.
                Faculty and doctoral students collaborate with industry partners
                and international institutions on projects addressing global
                challenges in technology, sustainability, health, and society.
                The Presidency Launchpad — the university's incubation and
                entrepreneurship centre — supports student and faculty startups
                from ideation to market, reflecting the university's commitment
                to turning research into real-world impact.
              </motion.p>

              {/* BUTTON WITH MOTION AND LINK */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="mt-6 sm:mt-8"
              >
                <Link href="/international/phd">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      boxShadow: [
                        "0px 0px 0px rgba(11, 181, 181, 0)",
                        "0px 0px 20px rgba(11, 181, 181, 0.5)",
                        "0px 0px 0px rgba(11, 181, 181, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                    className="bg-[#0A8F96] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl flex items-center gap-2 text-base sm:text-lg font-medium group"
                  >
                    View More
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import { motion } from "motion/react";

export default function ResearchInnovation() {
  const cards = [
    {
      title: "Academic Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/acadmic.webp",
    },
    {
      title: "Sposored Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/mini-sponsers.webp",
    },
    {
      title: "Research Centers",
      img: "https://presidencyuniversity.in/assets/frontend/images/rnd.webp",
    },
    {
      title: "Research Centers",
      img: "https://presidencyuniversity.in/assets/images/r-overview.webp",
    },
  ];

  return (

    <>
    
    <section className="bg-[#062f54]  text-white relative">
      {/* <img
        src="/img/world.svg"
        alt="World Map"
        className="absolute inset-0 w-1/2 h-full object-contain opacity-20 top-0"
      /> */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
         <div className="grid grid-cols-2 gap-4">
          {cards.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group shadow-md h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px]"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500 h-[200px] sm:h-[240px] md:h-[280px] lg:h-[350px]"
              />

              {/* OVERLAY */}
              {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition"></div> */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-white text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>{/* WORLD MAP */}
        

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
              <span className="block text-[#ff8c42]">Matters</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mt-3 sm:mt-4 text-lg sm:text-lg"
            >
               Research is at the heart of Presidency University's identity. The university's Research & Innovation Council oversees a growing portfolio of academic and sponsored research, with dedicated Centres of Excellence, seed grant funding, patent filing support, and a peer-reviewed institutional journal. Faculty and doctoral students collaborate with industry partners and international institutions on projects addressing global challenges in technology, sustainability, health, and society.
The Presidency Launchpad — the university's incubation and entrepreneurship centre — supports student and faculty startups from ideation to market, reflecting the university's commitment to turning research into real-world impact.
          
            </motion.p>
          </div>

         

         
        </div>
      </div>
    </section>
    </>
  );
}

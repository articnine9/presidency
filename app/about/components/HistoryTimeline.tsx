"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { motion } from "framer-motion";
type ScrollDirection = "left" | "right";


export default function HistoryTimeline() {
  // const scrollRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth < 640; // Tailwind sm breakpoint
    const scrollAmount = isMobile ? 280 : 360;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // const timeline = [
  //   {
  //     left: {
  //       year: "2013",
  //       title: "Establishment",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //     right: {
  //       year: "2015",
  //       title: "First BTech Batch",
  //     },
  //   },
  //   {
  //     left: {
  //       year: "2015",
  //       title: "First BTech Batch",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //     right: {
  //       year: "2018",
  //       title: "Research Center Launch",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //   },
  //   {
  //     left: {
  //       year: "2021",
  //       title: "International Collaborations",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //     right: {
  //       year: "2023",
  //       title: "NAAC A+ Accreditation",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //   },
  // ];

  const timeline = [
    { year: "1976", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle: "Nandini Layout(ICSE)" },
    { year: "1980", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle: "R T Nagar(ICSE)" },
    { year: "1983", img: "/img/bang-life/innovation-2.png", title: "St Paul's English School", subtitle: "J P Nagar(ICSE)" },
    { year: "2000", img: "/img/bang-life/innovation-2.png", title: "Presidency College", subtitle: "Kempapura, Hebbal" },
    { year: "2001", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle: "Mangaloor(CBSE)" },
    { year: "2006", img: "/img/bang-life/innovation-2.png", title: "Presidency Jr. College", subtitle: "J P Nagar(PU Board)" },
    { year: "2006", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle: "Bengaluru South(CBSE)" },
    { year: "2008", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle: "Bengaluru East(CBSE)" },
    { year: "2012", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle: "Bengaluru North(CBSE)" },
    { year: "2015", img: "/img/bang-life/innovation-2.png", title: "Presidency University", subtitle: "Yelahanka, Bengaluru" },
    { year: "2019", img: "/img/bang-life/innovation-2.png", title: "Presidency PU College", subtitle: "Mangalore" },
    { year: "2019", img: "/img/bang-life/innovation-2.png", title: "Presidency PU College", subtitle: "Kogilu" },
    { year: "2021", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle: "Banashanakri(ICSE)" },
  ]

  return (
    <>


      <section
        className="min-h-screen flex items-center bg-[#F5F6F8] py-12 md:py-16 lg:py-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">

          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-lg text-sm mb-4"
            >
              Our History & Mission
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl text-[#1e3a5f]"
            >
              University's
              <span className="block text-[#0A8F96]">Journey and growth</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 mt-4 max-w-5xl mx-auto text-sm md:text-lg"
            >
              The Presidency Group of Institutions was founded over 50 years ago with a singular mission: to nurture talent and transform students into successful professionals and responsible global citizens. Today, the Group comprises eight schools, four colleges, and Presidency University — a comprehensive university offering programmes from undergraduate through doctoral level.
            </motion.p>
          </div>

          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div className="flex items-center min-w-max px-6 py-6">

              {timeline.map((item, index, arr) => (
                <div key={index} className="flex items-center">

                  {/* Circle */}
                  <div className="w-[180px] flex flex-col items-center text-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: true }}
                      className="w-20 h-20 rounded-full  flex items-center justify-center shadow-md mb-8"
                      style={{ backgroundColor: "#1B4E8C" }}
                    >
                      <img src={item.img} alt="" className="w-12 h-12 object-cover rounded-full" />
                    </motion.div>

                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-4 py-2 rounded-lg text-sm mb-4"
                    >
                      {item.year}
                    </motion.span>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-[#1e3a5f] font-medium mb-1 text-sm md:text-base">
                      {item.title}
                    </motion.h3>



                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-sm text-gray-500">
                      {item.subtitle}
                    </motion.p>
                  </div>

                  {/* Line */}
                  {index !== arr.length - 1 && (
                    <div className="w-32 h-[2px] bg-gray-300 mx-4"></div>
                  )}

                </div>
              ))}

            </div>
          </div>
          {/* Arrows BELOW - RIGHT SIDE */}
          <div className="flex justify-end mt-6 gap-3">
            <button
              onClick={() => scroll("left")}
              className="bg-[#0A8F96] border rounded-full p-2 shadow hover:bg-[#0A8F96]/40"
            >
              <ChevronLeft style={{ color: "white" }} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="bg-[#0A8F96] border rounded-full p-2 shadow hover:bg-[#0A8F96]/40"
            >
              <ChevronRight style={{ color: "white" }} />
            </button>
          </div>
        </div>


        {/* <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
        <div>
          <p className="text-[#c4a45b] font-semibold text-sm mb-2">
            OUR HISTORY & MISSION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            University's Journey and growth.
          </h2>

          <p className="text-base text-gray-600 leading-relaxed max-w-md">
            The University’s journey devols is interactive tegener sonol-seckees
            steoge rourotion and tchnology and earnrs colosstntaits, its authors
            evdavals deir veierve creeterassseion andesicn, acivated
            connections.
          </p>
        </div>


        <div className="relative">
       
          <div className="absolute left-1/2 top-0 h-full w-1 bg-black shadow-[0_0_8px_#0a8f96] -translate-x-1/2"></div>

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-2 items-center relative">
         
                <div className="flex justify-between items-center gap-3 px-6 py-10 ">
                  {item.left.img && (
                    <img
                      src={item.left.img}
                      className="w-[100px] h-[100px] rounded-xl object-cover shadow"
                    />
                  )}
                  <div className="text-right">
                    <h4 className="text-2xl font-bold text-[#1e3a5f]">
                      {item.left.year}
                    </h4>
                    <p className="text-xl text-gray-600">{item.left.title}</p>
                  </div>
                </div>

          
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-[#0A8F96] rounded-full border-4 border-white shadow"></div>
                </div>

         
                <div className="flex justify-start items-center gap-3 px-6 py-10 ">
                  <div>
                    <h4 className="text-2xl font-bold text-[#1e3a5f]">
                      {item.right.year}
                    </h4>
                    <p className="text-xl text-gray-600">{item.right.title}</p>
                  </div>

                  {item.right.img && (
                    <img
                      src={item.right.img}
                      className="w-[100px] h-[100px] rounded-xl object-cover shadow"
                    />
                  )}
                </div>
              </div>
            ))}

        
          </div>
        </div>
      </div> */}
      </section >
    </>
  );
}

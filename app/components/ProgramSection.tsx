"use client";

import { useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const eventsData = [

  {
    title: "ISAC 2026",
    date: "29 Oct 2026",
    image: "https://presidencyuniversity.in/uploads/events/699d2739859831771906873.jpeg",
  },
  {
    title: "TFuzzy Mathematics and its Applications",
    date: "10 July 2026",
    image: "https://presidencyuniversity.in/uploads/events/698d9519725b91770886425.jpg",
  },
  {
    title: "International Conference on Graph Theory and its Applications",
    date:"27 JUN 2026",
    image: "https://presidencyuniversity.in/uploads/events/6835b5564933b1748350294.png",
  },
  {
    title: "SOL Announces National Blog Writing Competition 2026",
    date: "18 APRIL 2026",
    image: "https://presidencyuniversity.in/uploads/events/69a68327ddb1e1772520231.jpeg",
  },
];

export function EventsActivitiesSection() {
  const [activeEvent, setActiveEvent] = useState(eventsData[0]);

  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-[1200px]  mx-auto px-6">
        {/* ✅ COMMON HEADER */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-4 py-2 rounded-full text-sm mb-4"
          >
            Campus Life
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f]"
          >
            Events & Activities That
            <span className="block text-[#ff8c42]">Shape Student Life</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Discover exciting campus experiences including cultural festivals,
            innovation summits, leadership forums, and student-led activities.
          </motion.p>
        </div>

        {/* ✅ EVENT GRID */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* MAIN EVENT */}
          <div className="lg:col-span-2  w-full h-[425px] relative rounded-3xl overflow-hidden group">
            <img
              src={activeEvent.image}
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
              alt=""
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <div className="flex items-center gap-2 text-[#ff8c42] text-sm mb-2">
                <Calendar size={16} />
                {activeEvent.date}
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                {activeEvent.title}
              </h3>
            </div>
          </div>

          {/* SIDE CARDS */}
          <div className="flex flex-col gap-6">
            {eventsData.map((event, i) => {
              const isActive = activeEvent.title === event.title;

              return (
                <div
                  key={i}
                  onClick={() => setActiveEvent(event)}
                  className={`flex gap-4 p-4 rounded-2xl cursor-pointer transition border ${
                    isActive
                      ? "bg-[#ff8c42]/10 border-[#ff8c42]"
                      : "bg-white border-gray-100 hover:shadow-lg"
                  }`}
                >
                  <img
                    src={event.image}
                    className="w-24 h-24 object-cover rounded-xl"
                    alt=""
                  />

                  <div>
                    <div className="flex items-center gap-2 text-[#ff8c42] text-sm mb-1">
                      <Calendar size={14} />
                      {event.date}
                    </div>

                    <h4 className="text-[#1e3a5f] font-semibold text-sm leading-snug">
                      {event.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button className="inline-flex items-center gap-2 bg-[#ff8c42] text-white px-7 py-3 rounded-full hover:bg-[#e67932] transition shadow-md hover:shadow-lg">
            View All Events
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

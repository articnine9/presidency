"use client";

import { useEffect, useState } from "react";
import { GraduationCap, HandCoins, Users } from "lucide-react";
import { ArrowRight } from "lucide-react";

type CounterProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return (
    <span>
      {Number.isInteger(end) ? Math.floor(count) : count.toFixed(2)}
      {suffix}
    </span>
  );
}

export function ScholarshipsSection() {
  return (
    <section className="relative py-28 text-white overflow-hidden">
      {/* BACKGROUND */}
      <img
        src="img/scholarships.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt=""
      />

      {/* ✅ FIXED OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E4E]/80 via-[#0A2E4E]/60 to-[#0A2E4E]/80"></div>

      <div className="relative max-w-[1400px] mx-auto px-6 text-center">
        {/* ✅ HEADER (COMMON STYLE) */}
        <div className="mb-16">
          <span className="inline-block bg-[#ff7a2f]/20 px-4 py-2 rounded-full text-sm mb-4">
            Scholarships
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Scholarships &
            <span className="block text-[#ff7a2f]">Financial Support</span>
          </h2>
        </div>

        {/* COUNTERS */}
        <div className="grid md:grid-cols-3 gap-10 items-center">
          {/* ITEM 1 */}
          <div className="flex flex-col items-center">
            <GraduationCap size={60} className="text-[#ff7a2f] mb-4" />

            <h3 className="text-4xl md:text-5xl font-bold">
              <Counter end={600} suffix="+" />
            </h3>

            <p className="text-white/80 mt-2">Scholarships</p>
          </div>

          {/* ITEM 2 */}
          <div className="flex flex-col items-center border-x border-white/30 px-6">
            <HandCoins size={60} className="text-[#ff7a2f] mb-4" />

            <h3 className="text-4xl md:text-5xl font-bold">
              ₹<Counter end={4.87} suffix=" Cr" />
            </h3>

            <p className="text-white/80 mt-2">Worth of Scholarships</p>
          </div>

          {/* ITEM 3 */}
          <div className="flex flex-col items-center">
            <Users size={60} className="text-[#ff7a2f] mb-4" />

            <h3 className="text-4xl md:text-5xl font-bold">
              <Counter end={579} suffix="+" />
            </h3>

            <p className="text-white/80 mt-2">Students Supported</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <button className="inline-flex items-center gap-2 bg-[#ff8c42] text-white px-7 py-3 rounded-full hover:bg-[#e67932] transition shadow-md hover:shadow-lg">
            View All Scholarships
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg" // put your image in /public
        alt="Campus"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Content */}
        <div className="max-w-2xl text-white">
          <h1 className="text-white mb-6 text-3xl md:text-4xl lg:text-6xl">
            LIFE AT PRESIDENCY:
            <br />
            YOUR HOME IN INDIA’S
            <br />
            SILICON VALLEY
          </h1>

          <p className="mt-4 text-sm md:text-xl text-gray-200">
            Discover a vibrant, multicultural community where academic
            excellence meets a rich global student experience.
          </p>

          <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition">
            REQUEST INFO
          </button>
        </div>

        {/* Right Stats */}
        <div className="hidden md:flex flex-col gap-4">
          {[
            { title: "30+", subtitle: "STUDENTS FROM COUNTRIES" },
            { title: "50+", subtitle: "STUDENT CLUBS" },
            { title: "24/7", subtitle: "CAMPUS SUPPORT" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-black px-6 py-4 rounded-lg shadow-md text-center"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl">{item.title}</h3>
              <p className="text-xl font-medium">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

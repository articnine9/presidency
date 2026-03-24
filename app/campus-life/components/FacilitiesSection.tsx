"use client";

import Image from "next/image";

const facilities = [
  {
    title: "MODERN GLASS BUILDING LEARNING",
    desc: "Discover a vibrant multicultural learning experience.",
    image: "/f1.jpg",
  },
  {
    title: "STATE-OF-THE-ART AUDITORIUM",
    desc: "Discover a vibrant, multicultural global student experience.",
    image: "/f2.jpg",
  },
  {
    title: "GLOBAL PARTNERSHIP HUB",
    desc: "Promote partnership excellence.",
    image: "/f3.jpg",
  },
  {
    title: "GLOBAL PARTNERSHIP HUB",
    desc: "Discover a vibrant, multicultural community.",
    image: "/f4.jpg",
  },
  {
    title: "GLOBAL LIVING SUITES (Student Housing)",
    desc: "Comfortable, secure residences with modern amenities.",
    image: "/f5.jpg",
    highlight: true,
  },
];

export default function FacilitiesSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl text-[#1B4E8C] mb-12 tracking-wide">
          WORLD-CLASS CAMPUS FACILITIES
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Big Left Card */}
          <div className="relative h-[300px] md:col-span-1 rounded-xl overflow-hidden">
            <Image
              src={facilities[0].image}
              alt=""
              fill
              className="object-cover"
            />
            <OverlayCard data={facilities[0]} />
          </div>

          {/* Middle Large Card */}
          <div className="relative h-[300px] md:col-span-1 rounded-xl overflow-hidden">
            <Image
              src={facilities[1].image}
              alt=""
              fill
              className="object-cover"
            />
            <OverlayCard data={facilities[1]} />
          </div>

          {/* Two Stacked Cards */}
          <div className="flex flex-col gap-6">
            {[facilities[2], facilities[3]].map((item, i) => (
              <div
                key={i}
                className="relative h-[140px] rounded-xl overflow-hidden"
              >
                <Image src={item.image} alt="" fill className="object-cover" />
                <OverlayCard data={item} small />
              </div>
            ))}
          </div>

          {/* Highlight Card */}
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src={facilities[4].image}
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-teal-600/80" />
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl">{facilities[4].title}</h3>
              <p className="text-base mt-1">{facilities[4].desc}</p>
              <span className="text-sm mt-2 inline-block font-medium">
                Learn More →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Overlay Component */
function OverlayCard({ data, small = false }: any) {
  return (
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
      <h3 className={` ${small ? "text-base" : "text-xl"}`}>{data.title}</h3>
      <p className="text-base mt-1">{data.desc}</p>
      <span className="text-sm mt-2 inline-block font-medium">
        Learn More →
      </span>
    </div>
  );
}

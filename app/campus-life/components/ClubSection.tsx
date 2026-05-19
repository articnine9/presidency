"use client";

import Image from "next/image";

const clubs = [
  { title: "Robotics Club", img: "/c1.jpg" },
  { title: "International Students Association", img: "/c2.jpg" },
  { title: "Dance Troupe", img: "/c3.jpg" },
  { title: "Cricket Team", img: "/c4.jpg" },
  { title: "Entrepreneurship Cell", img: "/c5.jpg" },
  { title: "Art Society", img: "/c6.jpg" },
  { title: "Film Club", img: "/c7.jpg" },
  {
    title: "Student Housing",
    desc: "Comfortable, secure residences with modern amenities.",
    img: "/c8.jpg",
    highlight: true,
  },
];

export default function ClubSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-4xl text-[#1B4E8C] mb-12">
          THE 50+ CLUB ECOSYSTEM
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {clubs.map((club, i) => (
            <div
              key={i}
              className={`relative rounded-xl overflow-hidden h-[180px] ${
                club.highlight ? "md:col-span-1" : ""
              }`}
            >
              <Image
                src={club.img}
                alt={club.title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              {club.highlight ? (
                <div className="absolute inset-0 bg-teal-600/90 flex flex-col justify-end p-4 text-white">
                  <h3 className="font-semibold text-xl">{club.title}</h3>
                  <p className="text-base mt-1">{club.desc}</p>
                  <span className="text-sm mt-2">Learn More →</span>
                </div>
              ) : (
                <div className="absolute inset-0 bg-white/80 flex flex-col justify-end p-3">
                  <h3 className="text-xl  text-gray-900">{club.title}</h3>
                  <span className="text-sm text-gray-700 mt-1">
                    Learn More →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

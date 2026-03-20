"use client";

import {
  Dumbbell,
  Waves,
  Trees,
  Users,
  ShoppingBag,
  Shield,
} from "lucide-react";

const amenities = [
  {
    icon: Dumbbell,
    title: "Sports & Fitness Centre",
    description:
      "Indoor and outdoor sports facilities including gymnasium, football, basketball, cricket, and fitness training areas.",
  },
  {
    icon: Waves,
    title: "Central Digital Library",
    description:
      "Extensive digital and physical resources with access to global journals, research databases, and study spaces.",
  },
  {
    icon: Trees,
    title: "100-Acre Green Campus",
    description:
      "A lush eco-friendly campus in Bangalore designed for learning, sustainability, and student wellbeing.",
  },
  {
    icon: Users,
    title: "Student Clubs & Activities",
    description:
      "Over 50 student clubs covering technology, arts, entrepreneurship, languages, sports, and leadership.",
  },
  {
    icon: ShoppingBag,
    title: "Dining & Food Courts",
    description:
      "Multiple cafeterias and dining facilities offering diverse cuisine including vegetarian and international options.",
  },
  {
    icon: Shield,
    title: "Safe & Secure Campus",
    description:
      "24/7 security with CCTV surveillance, controlled campus access, and dedicated student safety services.",
  },
];

export function AmenitiesSection() {
  return (
    <section className="relative py-24 overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1562774053-701939374585)",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1e3a5f]/85"></div>

      {/* TOP CURVE */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/10 backdrop-blur-sm text-[#ff8c42] px-6 py-3 rounded-full mb-6 border border-white/20">
            <span className="uppercase tracking-wider">Campus Facilities</span>
          </div>

          <h2 className="text-2xl md:text-4xl mb-6">
            A CAMPUS DESIGNED FOR
            <br />
            <span className="text-[#ff8c42]">
              LEARNING, INNOVATION & COMMUNITY
            </span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-3xl mx-auto text-white/80 text-sm md:text-lg leading-relaxed">
            Our campus offers world-class infrastructure designed for academic
            excellence and student wellbeing. Modern facilities support
            learning, innovation, collaboration, and vibrant campus life.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                style={{
                  marginTop: index % 3 === 1 ? "2rem" : "0",
                }}
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff8c42]/0 to-[#ff8c42]/0 group-hover:from-[#ff8c42]/5 group-hover:to-[#ff8c42]/10 transition-all"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] rounded-xl flex items-center justify-center mb-6 group-hover:from-[#ff8c42] group-hover:to-[#e67a32] transition-all">
                    <Icon className="text-white" size={28} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl text-[#1e3a5f] mb-3">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* STATS CARD */}
        <div className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl text-[#ff8c42] mb-2">100+</div>
              <div className="text-white">Campus Facilities</div>
            </div>
            <div className="border-x border-white/20">
              <div className="text-4xl text-[#ff8c42] mb-2">24/7</div>
              <div className="text-white">Wi-Fi Access</div>
            </div>
            <div>
              <div className="text-4xl text-[#ff8c42] mb-2">50+ Acres</div>
              <div className="text-white">Campus Area</div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CURVE */}
    </section>
  );
}

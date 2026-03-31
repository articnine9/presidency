"use client";
import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import {
  Cpu,
  Palette,
  Briefcase,
  Mic,
  Users,
  Heart,
  Trophy,
} from "lucide-react";

// ICON MAP
const getIcon = (icon: string) => {
  const base = "w-6 h-6";
  switch (icon) {
    case "tech":
      return <Cpu className={base} />;
    case "arts":
      return <Palette className={base} />;
    case "business":
      return <Briefcase className={base} />;
    case "leadership":
      return <Mic className={base} />;
    case "social":
      return <Users className={base} />;
    case "wellness":
      return <Heart className={base} />;
    case "sports":
      return <Trophy className={base} />;
    default:
      return <Cpu className={base} />;
  }
};

const ClubSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag="Student Life"
          title="Student Clubs & Activities at"
          highlight="Presidency University"
          description="Explore one of the most vibrant student ecosystems in India — where innovation, culture, leadership, and community thrive every single week."
        />

        {/* INTRO */}
        <p className="text-gray-600 text-lg mt-6  leading-relaxed">
          Life at Presidency extends far beyond the lecture hall. The Department
          of Student Affairs (DSA) coordinates over{" "}
          <strong>50+ active clubs</strong> spanning cultural, technical,
          social, and management domains. Every Friday, structured club
          activities create a consistent rhythm of engagement. The DSA also
          hosts festivals, national celebrations, talk series, and leadership
          sessions throughout the year — making student life dynamic, immersive,
          and impactful.
        </p>

        {/* CATEGORIES */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {/* TECH */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-[#0A8F96] mb-4">{getIcon("tech")}</div>
            <h4 className="font-semibold text-xl text-[#0F1E3D] mb-3">
              Tech & Innovation
            </h4>
            <div className="flex flex-wrap gap-2 max-h-[140px] overflow-auto pr-2">
              {[
                "AI Club",
                "Aero Drone Club",
                "Blockchain (Genesis)",
                "Cyber Security (Hackeye)",
                "Omega Coding Club",
                "DevOps (GoOps)",
                "IoT (IOTVA)",
                "Data Science (Innosphere)",
                "Gen AI Club",
                "Quantum Frontier",
                "Metaverse Society",
                "Graphics & Animation",
                "Build Club",
                "STEM Club",
                "ZettaByte",
                "Enkindle",
                "Next Gen Cipher",
                "Logicverse Analytics",
                "Electro Nirman",
              ].map((club, i) => (
                <span key={i} className="chip text-base">
                  {club}
                </span>
              ))}
            </div>
          </div>

          {/* ARTS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-[#0A8F96] mb-4">{getIcon("arts")}</div>
            <h4 className="font-semibold text-xl text-[#0F1E3D] mb-3">
              Arts & Culture
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Dance Club",
                "Music Club",
                "Theatre Society",
                "Art & Sketch",
                "Photography",
                "Film Club",
                "Anime Club",
                "Kannada Club",
                "Glamora",
              ].map((club, i) => (
                <span key={i} className="chip text-base">
                  {club}
                </span>
              ))}
            </div>
          </div>

          {/* BUSINESS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-[#0A8F96] mb-4">{getIcon("business")}</div>
            <h4 className="font-semibold text-xl text-[#0F1E3D] mb-3">
              Business & Management
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Entrepreneurship Cell (Pragya)",
                "Finance Club (Artha)",
                "Business Analytics",
                "Anthrops",
                "Voicebridge",
                "Aarohan",
                "El Fortuna",
                "Digitopedia",
              ].map((club, i) => (
                <span key={i} className="chip text-base">
                  {club}
                </span>
              ))}
            </div>
          </div>

          {/* LEADERSHIP */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-[#0A8F96] mb-4">{getIcon("leadership")}</div>
            <h4 className="font-semibold text-xl text-[#0F1E3D] mb-3">
              Speaking & Leadership
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Debate Society",
                "Toastmasters",
                "Anchors Club",
                "MUN Society",
                "TEDx",
                "Under-25 Club",
                "Quiz Club",
              ].map((club, i) => (
                <span key={i} className="chip text-base">
                  {club}
                </span>
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-[#0A8F96] mb-4">{getIcon("social")}</div>
            <h4 className="font-semibold text-xl text-[#0F1E3D] mb-3">
              Social & Community
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Rotaract",
                "NSS",
                "NCC",
                "UN-SDG Club",
                "WE Impact",
                "Women Empowerment",
                "Tails & Trails",
                "Disaster Risk Club",
                "Harvest Club",
                "HumanScape",
              ].map((club, i) => (
                <span key={i} className="chip text-base">
                  {club}
                </span>
              ))}
            </div>
          </div>

          {/* WELLNESS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition">
            <div className="text-[#0A8F96] mb-4">{getIcon("wellness")}</div>
            <h4 className="font-semibold text-xl text-[#0F1E3D] mb-3">
              Wellness & Lifestyle
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Mind Blossom",
                "Culinary Club",
                "Groomed & Gracious",
                "Magic Shop",
                "Nova Club",
                "Creovators",
              ].map((club, i) => (
                <span key={i} className="chip text-base">
                  {club}
                </span>
              ))}
            </div>
          </div>

          {/* SPORTS */}
          <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition md:col-span-2 lg:col-span-3">
            <div className="text-[#0A8F96] mb-4">{getIcon("sports")}</div>
            <h4 className="font-semibold text-xl text-[#0F1E3D] mb-3">
              Sports & Athletics
            </h4>
            <p className="text-gray-600 text-base">
              Inter-collegiate teams compete across cricket, football,
              basketball, badminton, and more. The Motor Sports Club adds an
              engineering edge to athletics.
            </p>
          </div>
        </div>

        {/* EVENTS */}
        <div className="mt-20">
          <h3 className="text-2xl  mb-8 text-[#0F1E3D]">Major Campus Events</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Kaleidoscope",
                desc: "The flagship cultural festival bringing together talent from across India.",
              },
              {
                title: "TechBiz",
                desc: "A 24-hour high-intensity tech and business innovation challenge.",
              },
              {
                title: "Eunoia",
                desc: "An immersive arts festival celebrating creativity and expression.",
              },
            ].map((event, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0A8F96] to-[#0F6B73] text-white p-6 rounded-2xl shadow-md hover:scale-[1.02] transition"
              >
                <h4 className="text-lg">{event.title}</h4>
                <p className="text-base mt-2 opacity-90 text-white">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CHIP STYLE */}
      <style jsx>{`
        .chip {
          background: #f8fafc;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
};

export default ClubSection;

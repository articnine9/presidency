"use client";

import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function SocialMediaSection() {
  return (
    <section className="py-20 bg-[#F5F6F8]">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        {/* ✅ COMMON HEADER */}
        <CommonHeader
          tag="Connect With Us"
          title="Follow Presidency"
          highlight="University"
          primaryColor="#0A8F96"
        />

        {/* 🔥 SOCIAL GRID */}
        <div className="flex justify-center flex-wrap gap-6 mt-10">
          {[
            { icon: <Facebook size={22} />, name: "Facebook" },
            { icon: <Instagram size={22} />, name: "Instagram" },
            { icon: <Linkedin size={22} />, name: "LinkedIn" },
            { icon: <Youtube size={22} />, name: "YouTube" },
            { icon: <Twitter size={22} />, name: "Twitter/X" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="
                group flex flex-col items-center gap-2
                bg-white px-6 py-5 rounded-2xl 
                shadow-sm hover:shadow-xl 
                transition duration-300
                hover:bg-[#0A8F96] hover:text-[#0A8F96]
              "
            >
              <div className="text-[#0A8F96] group-hover:text-[#0A8F96]">
                {item.icon}
              </div>

              <span className="text-sm text-gray-600 group-hover:text-[#0A8F96]">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

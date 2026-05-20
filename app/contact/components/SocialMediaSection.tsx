"use client";

import { Facebook, Instagram, Linkedin, Youtube, Twitter } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function SocialMediaSection() {
  return (
    <section className="bg-[#fff] py-24">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        {/* HEADER */}
        <div>
          {/* TAG */}
          <span
            className="
          inline-block
          rounded-md
          bg-[#DDF4F4]
          px-4 py-2
          text-xs
          font-medium
          text-[#0097A7]
        "
          >
            Connect With Us
          </span>

          {/* TITLE */}
          <h2
            className="
          mt-5
          text-4xl
          md:text-5xl
          font-semibold
          text-[#183153]
        "
          >
            Follow Presidency <span className="text-[#0097A7]">University</span>
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
          mx-auto
          mt-4
          max-w-3xl
          text-sm
          leading-7
          text-gray-600
        "
          >
            Located in Bengaluru, Presidency University offers a vibrant,
            well-connected campus experience.
          </p>
        </div>

        {/* SOCIAL CARDS */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {[
            { icon: <Facebook size={18} />, name: "Facebook" },
            { icon: <Instagram size={18} />, name: "Instagram" },
            { icon: <Youtube size={18} />, name: "YouTube" },
            { icon: <Twitter size={18} />, name: "Twitter/X" },
            { icon: <Linkedin size={18} />, name: "LinkedIn" },
          ].map((item, i) => (
            <a
              key={i}
              href="#"
              className="
            group
            flex
            h-[110px]
            w-[110px]
            flex-col
            items-center
            justify-center
            rounded-2xl
            border border-[#BFE7EA]
            bg-white
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-lg
          "
            >
              {/* ICON */}
              <div
                className="
              text-[#0097A7]
              transition-transform duration-300
              group-hover:scale-110
            "
              >
                {item.icon}
              </div>

              {/* TEXT */}
              <span
                className="
              mt-4
              text-sm
              font-medium
              text-gray-600
            "
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>

        {/* CTA CARD */}
        <div
          className="
        mt-16
        rounded-2xl
        bg-[#0F2D52]
        px-8
        py-10
        md:flex
        md:items-center
        md:justify-between
      "
        >
          {/* LEFT */}
          <div className="text-left">
            <h3
              className="
            text-3xl
            font-semibold
            text-white
          "
            >
              Your Next Move{" "}
              <span className="italic text-[#35C0C8]">Awaits</span>
            </h3>

            <p
              className="
            mt-3
            text-sm
            text-white/70
          "
            >
              Begin an extraordinary journey at Presidency University,
              Bengaluru.
            </p>
          </div>

          {/* BUTTON */}
          <button
            className="
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-md
          bg-[#00A8B5]
          px-6
          py-3
          text-sm
          font-medium
          text-white
          transition hover:bg-[#0095A1]
          md:mt-0
        "
          >
            APPLY NOW →
          </button>
        </div>
      </div>
    </section>
  );
}

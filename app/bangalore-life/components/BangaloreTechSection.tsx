import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { Building2, Briefcase, Rocket, Sparkles } from "lucide-react";
import LogoCarousel from "./LogoCarousel";

const icons = [Building2, Briefcase, Rocket, Sparkles];

const BangaloreTechSection = ({ data }: any) => {
  return (
    <section className="bg-[#fff] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* TOP GRID */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* TAG */}
            <span
              className="
            inline-block
            rounded-md
            bg-[#E6F7F8]
            px-4 py-2
            text-xs
            font-medium
            text-[#00A8B5]
          "
            >
              {data.header.tag}
            </span>

            {/* TITLE */}
            <h2
              className="
            mt-6
            text-5xl
            font-semibold
            leading-tight
            text-[#183153]
          "
            >
              <span className="text-[#00A8B5]">{data.header.title}</span>{" "}
              {data.header.highlight}
            </h2>

            {/* PARAGRAPHS */}
            <div className="mt-8 space-y-6">
              {data.content.paragraphs.map((para: string, i: number) => (
                <p
                  key={i}
                  className="
                  text-base
                  leading-8
                  text-gray-600
                "
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}

          <div
            className="
    overflow-hidden
    rounded-2xl
    shadow-xl
    group
  "
          >
            <img
              src="/img/bang-life/1.png"
              alt="Bangalore Tech Ecosystem"
              className="
     
      w-full
     
      transition duration-500
      group-hover:scale-105
    "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BangaloreTechSection;

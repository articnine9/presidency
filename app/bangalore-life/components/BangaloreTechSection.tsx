import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { Building2, Briefcase, Rocket, Sparkles } from "lucide-react";
import LogoCarousel from "./LogoCarousel";

const icons = [Building2, Briefcase, Rocket, Sparkles];

const BangaloreTechSection = ({ data }: any) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag={data.header.tag}
          title={data.header.title}
          highlight={data.header.highlight}
          description={data.header.description}
        />

        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* LEFT CONTENT */}
          <div className="space-y-4">
            {data.content.paragraphs.map((para: string, i: number) => (
              <p key={i} className="text-gray-600 leading-relaxed text-lg">
                {para}
              </p>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* COMPANY CARD */}
            <div className="bg-[#0A8F96]/5 border border-[#0A8F96]/20 rounded-2xl p-6">
              <h3 className="font-semibold text-[#0F1E3D] mb-4">
                Global Tech Presence
              </h3>

              <div className="flex flex-wrap gap-2">
                <LogoCarousel companies={data.companies} />
              </div>
            </div>

            {/* QUICK FACT */}
            <div className="bg-gradient-to-br from-[#0A8F96] to-[#0F6B73] text-white p-6 rounded-2xl">
              <h3 className="mb-2">Why It Matters</h3>
              <p className="text-sm opacity-90 text-white">
                Studying in Bangalore connects you directly to the world’s
                fastest-growing tech ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {data.highlights.map((item: any, i: number) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition border-b-4 border-b-[#0A8F96]"
              >
                <Icon className="w-6 h-6 text-[#0A8F96]" />

                <h4 className="mt-3  text-[#0F1E3D]">{item.title}</h4>

                <p className="text-base text-gray-600 mt-1">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BangaloreTechSection;

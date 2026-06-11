"use client";

import Link from "next/link";
import CommonHeader from "@/app/components/CommonHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function InternationalSupport({ data }: any) {
  return (
    <section className="bg-[#F7F8F6] py-12 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* TOP SECTION */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          {/* LEFT CONTENT */}
          <div>
            <CommonHeader
              tag={data.header.tag}
              title={data.header.title}
              highlight={data.header.highlight}
              description={data.header.description}
              align="left"
              primaryColor="#ff7a2f"
            />

            {/* POINTS */}
            <div className="mt-6 md:mt-8 space-y-4 md:space-y-6">
              {data.points.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3 md:gap-4">
                  <div className="mt-1 shrink-0 text-[#ff7a2f]">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="text-sm md:text-base leading-7 md:leading-8 text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="overflow-hidden rounded-xl border-2 border-[#35537A] bg-white shadow-lg">
            <img src="/img/bang-life/3.png" alt="Global Student Support" className="h-full w-full object-cover" />
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="mt-10 md:mt-14 rounded-2xl bg-[#0F2D52] px-6 py-8 md:px-8 md:py-10 shadow-xl">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            {/* LEFT */}
            <div>
              <h3 className="text-2xl md:text-4xl font-semibold text-white">
                Your Next Move{" "}
                <span className="italic text-[#0A8F96]">Awaits</span>
              </h3>
              <p className="mt-2 md:mt-3 text-sm md:text-base text-white/80">
                Start your global academic journey with Presidency University
              </p>
            </div>

            {/* BUTTON */}
            <Link
              href="/international/apply"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0A8F96] px-6 py-3 md:px-7 text-sm font-medium text-white transition hover:bg-[#11B8C0]"
            >
              Apply Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

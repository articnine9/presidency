"use client";

import CommonHeader from "@/app/components/CommonHeader";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function InternationalSupport({ data }: any) {
  return (
    <section className="bg-[#F7F8F6] py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* TOP SECTION */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
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
            <div className="mt-8 space-y-6">
              {data.points.map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-4">
                  {/* ICON */}
                  <div
                    className="
                      mt-1
                      flex
                      h-6
                      w-6
                      items-center
                      justify-center
                      rounded-full
                      text-[#ff7a2f]
                    "
                  >
                    <CheckCircle2 size={20} />
                  </div>

                  {/* TEXT */}
                  <p
                    className="
                      text-base
                      leading-8
                      text-gray-700
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div>
            <div
              className="
                overflow-hidden
                rounded-xl
                border-2
                border-[#35537A]
                bg-white
                shadow-lg
              "
            >
              <img
                src="/img/bang-life/3.png"
                alt="Global Student Support"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div
          className="
            mt-14
            rounded-2xl
            bg-[#0F2D52]
            px-8
            py-10
            shadow-xl
          "
        >
          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-6
              md:flex-row
              md:items-center
            "
          >
            {/* LEFT */}
            <div>
              <h3
                className="
                  text-4xl
                  font-semibold
                  text-white
                "
              >
                Your Next Move{" "}
                <span className="italic text-[#0A8F96]">Awaits</span>
              </h3>

              <p
                className="
                  mt-3
                  text-base
                  text-white/80
                "
              >
                Start your global academic journey with Presidency University
              </p>
            </div>

            {/* BUTTON */}
            <button
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[#0A8F96]
                px-7
                py-3
                text-sm
                font-medium
                text-white
                transition
                hover:bg-[#11B8C0]
              "
            >
              APPLY NOW
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

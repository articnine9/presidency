import React from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { Sun, Bus, HeartPulse, ShoppingBag, ShieldCheck } from "lucide-react";
import { Home, Utensils, Smile } from "lucide-react";

const iconMap: any = {
  climate: Sun,
  transport: Bus,
  health: HeartPulse,
  shopping: ShoppingBag,
  safety: ShieldCheck,
};
const breakdownIcons = [Home, Utensils, Bus, Smile];
const CostSection = ({ data }: any) => {
  return (
    <section className="py-32 bg-[#fff]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <CommonHeader
          tag={data.header.tag}
          title={data.header.title}
          highlight={data.header.highlight}
          description={data.header.description}
        />

        {/* INTRO */}
        <div className=" mt-10 space-y-4">
          {data.intro.map((text: string, i: number) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed">
              {text}
            </p>
          ))}
        </div>

        {/* 🔥 CINEMATIC SECTION */}
        <div className="mt-20 grid lg:grid-cols-3 gap-24 items-center">
          {/* LEFT → IMAGE STACK */}
          <div className="relative col-span-2">
            {/* main image */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400"
              className="rounded-3xl h-[480px] w-full object-cover shadow-xl"
            />

            {/* floating card */}
            <div className="absolute -bottom-10 left-10 bg-white p-6 rounded-2xl shadow-xl border max-w-xs">
              <p className="text-xs text-gray-500">Monthly Living Cost</p>
              <h2 className="text-3xl  text-[#0F1E3D] mt-1">
                {data.averageCost.range}
              </h2>
              <p className="text-base text-gray-500 mt-1">
                {data.averageCost.usd} / {data.averageCost.gbp}
              </p>
            </div>

            {/* small overlay image */}
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=800"
              className="absolute top-10 -right-10 w-40 h-40 object-cover rounded-xl shadow-lg border"
            />
          </div>

          {/* RIGHT → HIGHLIGHTS */}
          <div className="space-y-6">
            {data.highlights.map((item: any, i: number) => {
              const Icon = iconMap[item.icon];

              return (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0A8F96]/10 text-[#0A8F96] group-hover:scale-110 transition">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#0F1E3D] text-lg">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔥 BREAKDOWN (VISUAL BARS) */}
        <div className="mt-32">
          <h3 className="text-2xl  text-[#0F1E3D] mb-12 text-center">
            Monthly Cost Breakdown
          </h3>

          <div className="grid md:grid-cols-4 gap-8  mx-auto">
            {data.breakdown.map((item: any, i: number) => {
              const Icon = breakdownIcons[i];

              return (
                <div
                  key={i}
                  className="group relative bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
                >
                  {/* subtle gradient hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A8F96]/0 to-[#0A8F96]/10 opacity-0 group-hover:opacity-100 transition"></div>

                  {/* CONTENT */}
                  <div className="relative z-10">
                    {/* TOP ROW */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#0A8F96]/10 text-[#0A8F96]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#0F1E3D]">
                            {item.item}
                          </h4>
                          <span className="text-lg font-bold text-[#0A8F96]">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* BAR */}
                    <div className="relative">
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0A8F96] to-[#0F6B73] rounded-full transition-all duration-700"
                          style={{ width: `${55 + i * 12}%` }}
                        />
                      </div>

                      {/* subtle label */}
                      <div className="text-xs text-gray-400 mt-2">
                        Estimated monthly range
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 🔥 FINAL STATEMENT */}
      </div>
    </section>
  );
};

export default CostSection;

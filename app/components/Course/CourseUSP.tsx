import {
  BarChart3,
  Settings,
  Target,
  Brain,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { TrendingUp, Award, Users, DollarSign, BarChart } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function CourseUSP({ data }: any) {
  if (!data?.highlights || data.highlights.length === 0) return null;

  return (
    <section className="bg-[#EAF3F3] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center">
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
            Key Highlights
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
            Why Choose This <span className="text-[#0097A7]">Programme</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {data.highlights.map((item: any, index: number) => (
            <div
              key={index}
              className="
            relative
            rounded-xl
            bg-white
            p-7
            shadow-md
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
            >
              {/* LEFT BORDER */}
              <div className="absolute left-0 top-0 h-full w-[4px] rounded-l-xl bg-[#0097A7]" />

              {/* CONTENT */}
              <div className="flex items-start gap-4">
                {/* ICON */}
                <div className="mt-1 text-[#0097A7]">{getIcon(index)}</div>

                {/* TEXT */}
                <div>
                  <h3
                    className="
                  text-lg
                  font-semibold
                  text-[#183153]
                "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                  mt-3
                  text-sm
                  leading-7
                  text-gray-600
                "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔥 ICON MAPPER */
function getIcon(index: number) {
  const icons = [
    <BarChart3 size={18} className="text-[#0097A7]" />,
    <Settings size={18} className="text-[#0097A7]" />,
    <Target size={18} className="text-[#0097A7]" />,
    <Brain size={18} className="text-[#0097A7]" />,
    <Briefcase size={18} className="text-[#0097A7]" />,
    <GraduationCap size={18} className="text-[#0097A7]" />,
  ];

  return icons[index % icons.length];
}

import {
  Brain,
  Briefcase,
  GraduationCap,
  Settings,
  Sparkles,
} from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";
import { H2, H4 } from "@/app/components/Headings";

export default function CourseCareers({ data }: any) {
  const careers = data?.careers || [];

  if (!careers.length) return null;

  return (
    <section className="bg-[#fff] py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADER */}
        <div className="text-center">
          {/* TAG */}
          <span
            className="
          inline-block
          rounded-md
          bg-[#FFF1E8]
          px-4 py-2
          text-xs
          font-medium
          text-[#F58233]
        "
          >
            After Graduation
          </span>

          {/* TITLE */}
          <H2 className="mt-5 text-[#183153]">
            Career <span className="text-[#F58233]">Opportunities</span>
          </H2>
        </div>

        {/* GRID */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {careers.map((item: any, index: number) => (
            <div
              key={index}
              className="
            relative
            rounded-xl
            bg-white
            p-8
            shadow-md
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
            >
              {/* LEFT BORDER */}
              <div
                className="
              absolute
              left-0
              top-0
              h-full
              w-[5px]
              rounded-l-xl
              bg-[#F58233]
            "
              />

              {/* CONTENT */}
              <div className="flex items-start gap-4">
                {/* ICON */}
                <div className="mt-1 text-[#F58233]">{getIcon(index)}</div>

                {/* TEXT */}
                <div>
                  {/* TITLE */}
                  <H4 className="text-[#183153]">
                    {item.category}
                  </H4>

                  {/* ROLES */}
                  <div className="mt-5 space-y-4">
                    {item.roles.map((role: string, i: number) => (
                      <div key={i} className="flex items-start gap-3">
                        {/* DOT */}
                        <div
                          className="
                        mt-[7px]
                        h-2.5
                        w-2.5
                        rounded-full
                        bg-[#F58233]
                        shrink-0
                      "
                        />

                        {/* TEXT */}
                        <p
                          className="
                        text-sm
                        leading-6
                        text-gray-600
                      "
                        >
                          {role}
                        </p>
                      </div>
                    ))}
                  </div>
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
    <Brain size={18} className="text-[#F58233]" />,
    <Briefcase size={18} className="text-[#F58233]" />,
    <GraduationCap size={18} className="text-[#F58233]" />,
    <Settings size={18} className="text-[#F58233]" />,
    <Sparkles size={18} className="text-[#F58233]" />,
  ];

  return icons[index % icons.length];
}

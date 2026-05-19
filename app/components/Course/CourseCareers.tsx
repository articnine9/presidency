import {
  Brain,
  Briefcase,
  GraduationCap,
  Settings,
  Sparkles,
} from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

export default function CourseCareers({ data }: any) {
  const careers = data?.careers || [];

  if (!careers.length) return null;

  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="max-w-[1400px] mx-auto px-6 ">
        {/* HEADING */}
        <CommonHeader
          tag="After Graduation"
          title="Career"
          highlight="Opportunities"
          primaryColor="#0A8F96"
        />

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {careers.map((item: any, index: number) => (
            <div
              key={index}
              className={`bg-white p-6 flex items-start gap-4 shadow-md rounded-xl p-8 text-center border-b-4 border-b-[#D4A843]  hover:shadow-xl transition`}
            >
              {/* ICON */}
              <div className="text-[#1e3a5f]">{getIcon(index)}</div>
              <div className="text-left">
                {/* TITLE */}
                <h3 className=" text-gray-900 text-xl mb-2">{item.category}</h3>

                {/* ROLES */}
                <div className="space-y-1 text-base text-gray-600">
                  {item.roles.slice(0, 2).map((role: string, i: number) => (
                    <p key={i}>{role}</p>
                  ))}
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
    <Brain size={18} className="text-[#1E3A5F]" />,
    <Briefcase size={18} className="text-[#1E3A5F]" />,
    <GraduationCap size={18} className="text-[#1E3A5F]" />,
    <Settings size={18} className="text-[#1E3A5F]" />,
    <Sparkles size={18} className="text-[#1E3A5F]" />,
  ];

  return icons[index % icons.length];
}

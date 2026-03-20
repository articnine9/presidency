import {
  Brain,
  Briefcase,
  GraduationCap,
  Settings,
  Sparkles,
} from "lucide-react";

export default function CourseCareers({ data }: any) {
  const careers = data?.careers || [];

  if (!careers.length) return null;

  return (
    <section className="bg-[#F6F7FB] py-16">
      <div className="max-w-[1400px] mx-auto px-6 ">
        {/* HEADING */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900">
            After graduation,
          </h2>
          <h3 className="text-2xl font-semibold text-gray-900 mt-1">
            Career Opportunities
          </h3>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="w-10 h-10 rounded-full bg-[#F4E9D8] flex items-center justify-center mb-3">
                {getIcon(index)}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-900 text-sm mb-2">
                {item.category}
              </h3>

              {/* ROLES */}
              <div className="space-y-1 text-sm text-gray-600">
                {item.roles.slice(0, 2).map((role: string, i: number) => (
                  <p key={i}>{role}</p>
                ))}
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

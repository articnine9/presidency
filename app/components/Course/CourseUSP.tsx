import {
  BarChart3,
  Settings,
  Target,
  Brain,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function CourseUSP({ data }: any) {
  if (!data?.highlights || data.highlights.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
          Why Choose This Programme
        </h2>
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Key Highlights for International Students 
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.highlights.map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="w-12 h-12 rounded-full bg-[#F4E9D8] flex items-center justify-center mb-4">
                {getIcon(index)}
              </div>

              {/* TITLE */}
              <h3 className="font-semibold text-gray-900 text-base">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {item.description}
              </p>
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
    <BarChart3 size={20} className="text-[#1E3A5F]" />,
    <Settings size={20} className="text-[#1E3A5F]" />,
    <Target size={20} className="text-[#1E3A5F]" />,
    <Brain size={20} className="text-[#1E3A5F]" />,
    <Briefcase size={20} className="text-[#1E3A5F]" />,
    <GraduationCap size={20} className="text-[#1E3A5F]" />,
  ];

  return icons[index % icons.length];
}

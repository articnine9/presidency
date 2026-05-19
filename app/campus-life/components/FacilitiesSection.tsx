import CommonHeader from "@/app/components/CommonHeader";
import {
  Wifi,
  Cpu,
  BookOpen,
  Trophy,
  HeartPulse,
  Building2,
} from "lucide-react";

type FacilityItem = {
  title: string;
  desc: string;
};

type FacilitiesData = {
  header: {
    tag: string;
    title: string;
    highlight: string;
    description: string;
  };
  items: FacilityItem[];
};

type FacilitiesSectionProps = {
  data: FacilitiesData;
};

// 🔹 Simple icon mapper
const getIcon = (title: string) => {
  if (title.includes("Wi-Fi")) return <Wifi className="w-6 h-6" />;
  if (title.includes("Labs")) return <Cpu className="w-6 h-6" />;
  if (title.includes("Library")) return <BookOpen className="w-6 h-6" />;
  if (title.includes("Sports")) return <Trophy className="w-6 h-6" />;
  if (title.includes("Wellness")) return <HeartPulse className="w-6 h-6" />;
  return <Building2 className="w-6 h-6" />;
};

const FacilitiesSection = ({ data }: FacilitiesSectionProps) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        <CommonHeader
          tag={data.header.tag}
          title={data.header.title}
          highlight={data.header.highlight}
          description={data.header.description}
        />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {data.items.map((item, i) => (
            <div
              key={i}
              className="
                relative
                bg-white
                p-6
                rounded-2xl
                shadow-sm
                hover:shadow-xl
                transition-all duration-300
                border-b-4 border-b-[#0A8F96]
                group
              "
            >
              {/* 🔹 ICON */}
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0A8F96]/10 text-[#0A8F96] mb-4">
                {getIcon(item.title)}
              </div>

              {/* 🔹 TITLE */}
              <h4 className=" text-[#0F1E3D] text-lg">{item.title}</h4>

              {/* 🔹 DESC */}
              <p className="text-gray-500 text-base mt-2 leading-relaxed">
                {item.desc}
              </p>

              {/* 🔹 BOTTOM ACCENT LINE */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

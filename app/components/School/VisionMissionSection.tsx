import { Eye, Target, CheckCircle2 } from "lucide-react";
type VisionMission = {
  vision: {
    title: string;
    description: string;
    points: string[];
  };
  mission: {
    title: string;
    description: string;
    points: string[];
  };
};
type Props = {
  data: VisionMission;
};

export default function VisionMissionSection({ data }: Props) {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="max-w-[1400px] mx-auto px-6 mx-auto ">
        <div className="block md:hidden">
          <div className="space-y-5">
            {/* ================= VISION ================= */}
            <div
              className="
        rounded-2xl
        border
        border-[#0A8F96]/20
        bg-[#F3F8FA]
        px-5
        py-5
        shadow-sm
      "
            >
              {/* TITLE */}
              <div className="flex items-center gap-3">
                <div
                  className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#0A8F96]/10
            text-[#0A8F96]
          "
                >
                  <Eye size={18} />
                </div>

                <h2
                  className="
            text-[28px]
            font-semibold
            text-[#0A8F96]
          "
                >
                  {data.vision.title}
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
          mt-4
          text-[13px]
          leading-8
          text-gray-600
        "
              >
                {data.vision.description}
              </p>

              {/* POINTS */}
              {data.vision.points.length > 0 && (
                <ul className="mt-5 space-y-3">
                  {data.vision.points.map((point, i) => (
                    <li
                      key={i}
                      className="
                flex
                items-start
                gap-3
                text-[13px]
                leading-7
                text-gray-700
              "
                    >
                      <span className="mt-1 text-[#0A8F96]">
                        <CheckCircle2 size={15} />
                      </span>

                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* BOTTOM BORDER */}
              <div className="mt-5 h-[3px] w-full rounded-full bg-[#0A8F96]" />
            </div>

            {/* ================= MISSION ================= */}
            <div
              className="
        rounded-2xl
        border
        border-[#D4A843]/20
        bg-[#FCFAF4]
        px-5
        py-5
        shadow-sm
      "
            >
              {/* TITLE */}
              <div className="flex items-center gap-3">
                <div
                  className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[#D4A843]/10
            text-[#D4A843]
          "
                >
                  <Target size={18} />
                </div>

                <h2
                  className="
            text-[28px]
            font-semibold
            text-[#D4A843]
          "
                >
                  {data.mission.title}
                </h2>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
          mt-4
          text-[13px]
          leading-8
          text-gray-600
        "
              >
                {data.mission.description}
              </p>

              {/* POINTS */}
              <ul className="mt-5 space-y-3">
                {data.mission.points.map((point, i) => (
                  <li
                    key={i}
                    className="
              flex
              items-start
              gap-3
              text-[13px]
              leading-7
              text-gray-700
            "
                  >
                    <span className="mt-1 text-[#D4A843]">
                      <CheckCircle2 size={15} />
                    </span>

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* BOTTOM BORDER */}
              <div className="mt-5 h-[3px] w-full rounded-full bg-[#D4A843]" />
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid md:grid-cols-2 gap-8">
            {/* VISION */}
            <div className="bg-gradient-to-br from-[#EAF3F5] to-[#DCEBEE] rounded-xl p-6 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-5">
                {data.vision.title}
              </h2>

              <p className="text-lg text-gray-600 mb-4">
                {data.vision.description}
              </p>

              <ul className="space-y-3">
                {data.vision.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base text-gray-700"
                  >
                    <span className="text-[#0A8F96]">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* MISSION */}
            <div className="bg-gradient-to-br from-[#EAF3F5] to-[#DCEBEE] rounded-xl p-6 shadow-sm">
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-5">
                {data.mission.title}
              </h2>

              <p className="text-lg text-gray-600 mb-4">
                {data.mission.description}
              </p>

              <ul className="space-y-3">
                {data.mission.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-base text-gray-700"
                  >
                    <span className="text-[#0A8F96]">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

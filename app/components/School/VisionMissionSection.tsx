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
        <div className="grid md:grid-cols-2 gap-8">
          {/* VISION */}
          <div className="bg-gradient-to-br from-[#EAF3F5] to-[#DCEBEE] rounded-xl p-6 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-5">
              {data.vision.title}
            </h2>

            <p className="text-sm text-gray-600 mb-4">
              {data.vision.description}
            </p>

            <ul className="space-y-3">
              {data.vision.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700"
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

            <p className="text-sm text-gray-600 mb-4">
              {data.mission.description}
            </p>

            <ul className="space-y-3">
              {data.mission.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-700"
                >
                  <span className="text-[#0A8F96]">✔</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

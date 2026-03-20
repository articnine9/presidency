import { GraduationCap, CalendarDays, Building2, MapPin } from "lucide-react";

export default function CourseHero({ data, school }: any) {
  const hero = data.hero;

  return (
    <section className="relative text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={hero?.image || "/img/campus.jpg"}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-black/80 via-black/60 to-black/20 
                        bg-gradient-to-b from-black/80 via-black/60 to-black/90 md:to-black/20"
        />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-6 py-14 md:py-20 pb-28 md:pb-24">
        {/* BREADCRUMB */}
        <p className="text-xs md:text-sm text-gray-300 mb-3">
          {hero?.breadcrumb?.join(" › ")}
        </p>

        {/* TITLE */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight max-w-3xl">
          {hero?.title.normal}
          <i>{hero?.title.italic}</i>
        </h1>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-4 text-sm md:text-base max-w-2xl leading-relaxed">
          {hero?.description}
        </p>

        {/* STATS */}
        <div className="grid grid-cols-3 sm:flex gap-3 md:gap-4 mt-6 md:mt-8">
          {hero?.stats?.map((stat: any, i: number) => (
            <div
              key={i}
              className="px-3 md:px-6 py-3 md:py-4 rounded-lg border border-yellow-400/40 bg-black/30 backdrop-blur-sm text-center"
            >
              <p className="text-sm md:text-xl font-semibold text-white">
                {stat.value}
              </p>
              <p className="text-[10px] md:text-xs text-gray-300 mt-1 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 QUICK INFO BAR */}
      <div
        className="
        relative md:absolute 
        md:left-1/2 md:-translate-x-1/2 
        md:bottom-[-60px] 
        w-full max-w-[1400px] px-4 md:px-6 mt-[-40px] md:mt-0
      "
      >
        <div className="rounded-xl overflow-hidden shadow-xl">
          {/* HEADER */}
          <div className="bg-gradient-to-r from-[#1E3A5F] to-[#C9A24A] px-4 md:px-6 py-3 text-white text-sm md:text-base font-semibold">
            Quick Info Bar
          </div>

          {/* GRID */}
          <div className="bg-white grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 md:px-6 py-5 md:py-6 text-gray-800">
            <InfoItem
              icon={<GraduationCap size={18} />}
              label="Degree"
              value={data.degree}
            />
            <InfoItem
              icon={<CalendarDays size={18} />}
              label="Duration"
              value={data.details?.duration}
            />
            <InfoItem
              icon={<Building2 size={18} />}
              label="School"
              value={data.details?.school}
            />
            <InfoItem
              icon={<MapPin size={18} />}
              label="Campus"
              value={data.details?.campus}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* 🔹 Info Item */
function InfoItem({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-2 md:gap-3">
      <div className="text-[#1E3A5F]">{icon}</div>
      <div>
        <p className="text-[10px] md:text-xs text-gray-500">{label}:</p>
        <p className="font-semibold text-xs md:text-sm">{value}</p>
      </div>
    </div>
  );
}

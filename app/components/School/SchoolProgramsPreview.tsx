type SchoolProgramsPreviewProps = {
  data: {
    title: string;
    subtitle?: string;
    content: string[];
    programs: {
      name: string;
      duration: string;
      image: string;
    }[];
  };
};

export default function SchoolProgramsPreview({
  data,
}: SchoolProgramsPreviewProps) {
  return (
    <section className="py-16 bg-[#ffffff]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1e3a5f] mb-3">
              {data.title}
            </h2>

            {data.subtitle && (
              <p className="text-[#0A8F96] font-medium mb-4">{data.subtitle}</p>
            )}

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed max-w-xl">
              {data.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* RIGHT PROGRAM CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {data.programs.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div className="relative">
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-[140px] object-cover"
                  />

                  {/* Overlay number (optional) */}
                  <span className="absolute bottom-2 right-2 text-xs text-white bg-black/60 px-2 py-1 rounded">
                    3.4
                  </span>
                </div>

                {/* TITLE */}
                <div className="px-4 py-3">
                  <h3 className="text-[#1e3a5f] font-semibold text-sm">
                    {program.name}
                  </h3>
                </div>

                {/* BOTTOM BAR */}
                <div className="bg-gradient-to-r from-[#1e3a5f] to-[#0A8F96] text-white text-xs px-4 py-2">
                  {program.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

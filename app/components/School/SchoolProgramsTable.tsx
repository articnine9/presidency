type Program = {
  name: string;
  duration: string;
};

type Section = {
  title: string;
  programs: Program[];
};

type Props = {
  data: {
    sections: Section[];
    image: string;
    description: string;
  };
};

export default function SchoolProgramsTable({ data }: Props) {
  return (
    <section className="py-16 bg-[#F4F6FB]">
      <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          {data.sections.map((section, idx) => (
            <div key={idx}>
              {/* TITLE */}
              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-4">
                {section.title}
              </h3>

              {/* TABLE */}
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                {/* HEADER */}
                <div className="grid grid-cols-2 bg-gradient-to-r from-[#1e3a5f] to-[#6B8ECF] text-white text-sm font-semibold px-4 py-3">
                  <div>Programme Name</div>
                  <div>Duration</div>
                </div>

                {/* ROWS */}
                {section.programs.map((p, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 px-4 py-3 text-sm border-t"
                  >
                    <div className="text-[#1e3a5f] font-medium">{p.name}</div>
                    <div className="text-gray-600">{p.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* IMAGE */}
          <div className="relative">
            <img
              src={data.image}
              className="w-full h-[300px] object-cover"
              alt="program"
            />

            <span className="absolute bottom-2 right-2 text-xs text-white bg-black/60 px-2 py-1 rounded">
              3.3
            </span>
          </div>

          {/* CONTENT */}
          <div className="p-5 text-sm text-gray-600 leading-relaxed">
            {data.description}
          </div>
        </div>
      </div>
    </section>
  );
}

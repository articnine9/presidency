export default function CourseOverview({ data }: any) {
  if (!data?.overview) return null;

  return (
    <section className="bg-white py-16 pt-28">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* LABEL */}
        <p className="text-sm font-semibold text-gray-500 mb-2">
          Programme Overview
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mt-2 mb-8">
          Designing the Communication Systems of Tomorrow
        </h2>

        {/* CONTENT */}
        <div className="space-y-5 text-gray-700 leading-relaxed text-[15px]">
          {Array.isArray(data.overview) ? (
            data.overview.map((para: string, index: number) => (
              <p key={index}>{para}</p>
            ))
          ) : (
            <p>{data.overview}</p>
          )}
        </div>
      </div>
    </section>
  );
}

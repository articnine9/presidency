import CommonHeader from "@/app/components/CommonHeader";
export default function CourseOverview({ data }: any) {
  if (!data?.overview) return null;

  return (
    <section className="bg-[#F6F7FB] pb-16 pt-32 relative z-0">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* LABEL */}
        <CommonHeader
          tag="Programme Overview"
          title="Designing the Communication Systems"
          highlight="of Tomorrow"
          primaryColor="#0A8F96"
        />

        {/* CONTENT */}
        <div className="space-y-5 text-gray-700 leading-relaxed ">
          {Array.isArray(data.overview) ? (
            data.overview.map((para: string, index: number) => (
              <p key={index} className="text-base">
                {para}
              </p>
            ))
          ) : (
            <p className="text-base">{data.overview}</p>
          )}
        </div>
      </div>
    </section>
  );
}

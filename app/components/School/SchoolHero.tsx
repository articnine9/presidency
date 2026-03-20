type SchoolHeroProps = {
  data: {
    title: {
      normal: string;
      italic: string;
    };
    description: string;
    breadcrumb?: string[];
    stats?: {
      label: string;
      value: string;
    }[];
    image?: string;
  };
};

export default function SchoolHero({ data }: SchoolHeroProps) {
  return (
    <>
      {/* 🔹 BREADCRUMB */}
      {data.breadcrumb && (
        <div className="bg-[#f5f7fa] py-3">
          <div className="max-w-[1400px] mx-auto px-4 md:px-6 text-xs md:text-sm text-gray-600 flex flex-wrap">
            {data.breadcrumb?.map((item, index, arr) => (
              <span key={index}>
                {item}
                {index !== arr.length - 1 && (
                  <span className="mx-2 text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 🔥 HERO */}
      <section className="relative w-full min-h-[520px] md:h-[520px] overflow-hidden">
        {/* IMAGE */}
        <img
          src={data.image || "/img/law.jpg"}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div
          className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-[#0b2a4a]/95 via-[#0b2a4a]/85 to-transparent 
                        bg-gradient-to-b from-[#0b2a4a]/80 via-[#0b2a4a]/70 to-[#0b2a4a]/90 md:to-transparent"
        ></div>

        {/* CONTENT */}
        <div className="relative max-w-[1400px] mx-auto px-5 md:px-6 h-full flex items-center">
          <div className="max-w-xl text-white pt-10 md:pt-0 pb-28 md:pb-0">
            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight mb-4">
             {typeof data.title === "string" ? (
    data.title
  ) : (
    <>
      {data.title.normal}
      <i>{data.title.italic}</i>
    </>
  )}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 leading-relaxed">
              {data.description}
            </p>

            {/* BUTTON */}
            <button className="w-full sm:w-auto bg-[#0A8F96] hover:bg-[#0BB5B5] px-6 py-3 rounded-lg text-white font-medium transition shadow-md">
              Request Information
            </button>
          </div>
        </div>

        {/* 📊 STATS */}
        {data.stats && (
          <div
            className="
            absolute 
            bottom-4 md:bottom-10 
            left-0 md:left-auto 
            right-0 md:right-10 
            px-4 md:px-0
          "
          >
            <div
              className="
              bg-white rounded-xl shadow-xl p-3 
              grid grid-cols-3 gap-3 
              md:flex md:gap-4 md:p-0 md:bg-transparent md:shadow-none
            "
            >
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="
                    bg-gray-50 md:bg-white 
                    rounded-lg md:rounded-xl 
                    px-3 md:px-6 py-3 md:py-4 
                    text-center shadow md:shadow-xl
                  "
                >
                  <p className="text-sm md:text-xl font-bold text-[#1e3a5f]">
                    {stat.value}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}

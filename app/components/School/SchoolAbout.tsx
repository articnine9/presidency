type SchoolAboutProps = {
  data: {
    title: string;
    subtitle?: string;
    content: string[];
    image?: string;

    hexagons?: {
      type: "text" | "image";
      text?: string;
      icon?: string;
      image?: string;
      top: string;
      left: string;
    }[];

    features?: {
      title: string;
      description: string;
    }[];
  };
};

export default function SchoolAbout({ data }: SchoolAboutProps) {
  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-widest text-teal-600 font-semibold mb-2">
              About Us
            </p>

            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
              {data.title}
            </h2>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              {data.content.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* RIGHT HEXAGON DESIGN */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-[360px] h-[320px]">
              {data.hexagons?.map((item, i) => (
                <div
                  key={i}
                  className="absolute w-[100px] h-[100px] flex flex-col items-center justify-center text-center px-0 border-0 border-white shadow-md overflow-hidden"
                  style={{
                    top: item.top,
                    left: item.left,
                    background:
                      item.type === "text" ? "#0A8F96" : "transparent",
                    clipPath:
                      "polygon(25% %, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                    WebkitClipPath:
                      "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                  }}
                >
                  {item.type === "image" ? (
                    <img
                      src={item.image}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      {item.icon && (
                        <img src={item.icon} className="w-5 h-5 mb-1" />
                      )}
                      <span className="text-[11px] text-white px-4">
                        {item.text}
                      </span>
                    </>
                  )}
                </div>
              ))}

              {/* CENTER IMAGE (HEX STYLE) */}
              <div
                className="absolute left-1/2 w-[160px] h-[150px] -translate-x-1/2 hex border-4 border-white shadow-lg overflow-hidden"
                style={{ top: "95px" }}
              >
                <img
                  src={data.image || "/img/classes/1.jpg"}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* KEY HIGHLIGHTS */}
        {data.features && (
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
             What You’ll Experience Here  
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {data.features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
                >
                  {/* TOP TEAL BORDER */}
                  <div className="h-[6px] bg-[#0A8F96]" />

                  {/* CONTENT */}
                  <div className="p-6 text-center">
                    {/* ICON */}
                    <div className="mb-4 flex justify-center">
                      {index === 0 && (
                        <img
                          src="/img/classes/1.jpg"
                          className="h-16 object-contain"
                        />
                      )}
                      {index === 1 && (
                        <img
                          src="/img/classes/2.jpg"
                          className="h-16 object-contain"
                        />
                      )}
                      {index === 2 && (
                        <img
                          src="/img/classes/3.jpg"
                          className="h-16 object-contain"
                        />
                        // <div className="flex items-center gap-3">
                        //   <img
                        //     src="/img/classes/3.jpg"
                        //     className="h-8 object-contain"
                        //   />
                        //   <img
                        //     src="/icons/aws.png"
                        //     className="h-6 object-contain"
                        //   />
                        //   <img
                        //     src="/icons/azure.png"
                        //     className="h-6 object-contain"
                        //   />
                        // </div>
                      )}
                    </div>

                    {/* TITLE */}
                    <h4 className="font-semibold text-[#1e3a5f] mb-2">
                      {item.title}
                    </h4>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

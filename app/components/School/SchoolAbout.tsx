import CommonHeader from "@/app/components/CommonHeader";
import { ArrowRight } from "lucide-react";
import { Cpu, Globe2, Handshake } from "lucide-react";
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
  const icons = [
    <Cpu size={18} />,
    <Globe2 size={18} />,
    <Handshake size={18} />,
  ];
  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="block lg:hidden">
          {/* HEADER */}
          <CommonHeader
            tag="About Us"
            title={data.title}
            primaryColor="#0A8F96"
            align="left"
          />

          {/* CONTENT */}
          <div className="space-y-4">
            {data.content.map((para, i) => (
              <p
                key={i}
                className="
                  text-[13px]
                  leading-8
                  text-gray-600
                  text-justify
                "
              >
                {para}
              </p>
            ))}
          </div>

          {/* FEATURE CARDS */}
          {data.features && (
            <div className="mt-8 space-y-4">
              {data.features.map((item, index) => (
                <div
                  key={index}
                  className="
                    rounded-2xl
                    border
                    border-[#0A8F96]/40
                    bg-white
                    px-4
                    py-5
                    shadow-sm
                  "
                >
                  {/* TOP */}
                  <div className="flex items-start gap-3">
                    {/* ICON */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#0A8F96]/10
                        text-[#0A8F96]
                      "
                    >
                      {icons[index % icons.length]}
                    </div>

                    {/* TEXT */}
                    <div>
                      <h3
                        className="
                          text-[20px]
                          font-semibold
                          leading-[1.3]
                          text-[#0A8F96]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-[13px]
                          leading-7
                          text-gray-600
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="hidden lg:block">
          {/* TOP GRID */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div>
              <CommonHeader
                tag="About Us"
                title={data.title}
                primaryColor="#0A8F96"
                align="left"
              />

              <div className="space-y-4">
                {data.content.map((para, i) => (
                  <p
                    key={i}
                    className=" text-gray-600 text-base leading-relaxed text-justify"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT HEXAGON DESIGN */}
            <div className="relative flex justify-center items-center">
              <div className="relative w-[360px] h-[320px]">
                {data.hexagons?.map((item, i) => (
                  <div key={i}>
                    {item.type === "image" ? (
                      <div
                        className="absolute left-1/2 w-[160px] h-[160px] -translate-x-1/2 hex border-4 border-white shadow-lg overflow-hidden"
                        style={{
                          top: item.top,
                          left: item.left,

                          clipPath:
                            "polygon(25% %, 75% 6%, 97% 50%, 75% 94%, 25% 94%, 3% 50%)",
                          WebkitClipPath:
                            "polygon(25% 6%, 75% 6%, 97% 50%, 75% 94%, 25% 94%, 3% 50%)",
                        }}
                      >
                        <img
                          src={item.image}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <>
                        <div
                          className="absolute w-[130px] h-[130px] flex flex-col items-center justify-center text-center px-0 border-0 border-white shadow-md overflow-hidden"
                          style={{
                            top: item.top,
                            left: item.left,
                            background:
                              item.type === "text"
                                ? "linear-gradient(135deg, #0A8F96, #13C2C9)"
                                : "transparent",
                            clipPath:
                              "polygon(25% %, 75% 6%, 97% 50%, 75% 94%, 25% 94%, 3% 50%)",
                            WebkitClipPath:
                              "polygon(25% 6%, 75% 6%, 97% 50%, 75% 94%, 25% 94%, 3% 50%)",
                          }}
                        >
                          {item.icon && (
                            <img src={item.icon} className="w-8 h-8 mb-1" />
                          )}
                          <span className="text-[11px] text-white px-4">
                            {item.text}
                          </span>
                        </div>
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
          {/* KEY HIGHLIGHTS */}
          {data.features && (
            <div className="mt-16">
              {/* ✅ COMMON HEADER (optional upgrade) */}
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
                What You’ll Experience Here
              </h2>

              {/* ✅ GRID (same as swiper cards style) */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.features.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group"
                  >
                    {/* IMAGE */}
                    <div className="overflow-hidden">
                      <img
                        src={`/img/classes/${index + 1}.png`}
                        className="w-full h-[380px] object-cover group-hover:scale-110 transition duration-500"
                        alt=""
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-5 flex flex-col">
                      <h3 className="text-[#1e3a5f] mb-2">{item.title}</h3>

                      <p className="text-gray-600 text-base flex-grow">
                        {item.description}
                      </p>

                      {/* BUTTON */}
                      {/* <button className="mt-4 text-[#ff8c42] flex items-center gap-1 hover:gap-2 transition">
                      View More <ArrowRight size={16} />
                    </button> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

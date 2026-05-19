"use client";
import { ArrowRight } from "lucide-react";

export default function BangaloreHighlights() {
  return (
    <section className="py-16 px-6 bg-[#EEF1F5]">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-10 items-start relative px-6">
        {/* 🔵 LEFT SIDE */}
        <div>
          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
            TECH CAREER PATHWAYS
          </h2>

          {/* DESCRIPTION */}
          <p className="text-base text-gray-600 leading-relaxed mb-6">
            Visit Presidency University connections with major tech firms, major
            tech firms, and can in contention to programme new help you
            connected a wagos-minu oonpanitarity.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid grid-cols-3 gap-4">
  {[
    { img: "img/logos/ibm.png", title: "IBM" },
    { img: "img/logos/microsoft.png", title: "MICROSOFT" },
    { img: "img/logos/google.png", title: "google" },
    { img: "img/logos/amazon.png", title: "amazon" },
    { img: "img/logos/infosys.png", title: "infosys" },
    { img: "img/logos/wipro.png", title: "wipro" },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white rounded-xl shadow-sm h-[80px] flex items-center justify-center hover:shadow-md transition"
    >
      <img
        src={item.img}
        alt={item.title}
        className="h-10 object-contain"
      />
    </div>
  ))}
</div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Placement Services
              </h4>

              <p className="text-base text-gray-600 mb-3">
                Placement services owny plunvters for youwoxant and evuamative
                students.
              </p>

              <button className="text-[#c4a45b] font-semibold text-xs tracking-wide flex items-center gap-1 group">
                LEARN MORE
                <ArrowRight
                  size={14}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
          {/* LOGO GRID */}

          {/* PLACEMENT SERVICES */}
        </div>

        {/* 🟢 RIGHT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
            VIBRANT CITY LIFE
          </h2>

          <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-md">
            Modern cafes, art galleries, and co-working spaces, ent-moders and
            adnsors coom city moders community.
          </p>

          {/* IMAGE CARDS */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { img: "img/city-life/cafes.png", title: "Modern Cafes" },
              {
                img: "img/city-life/Art.png",
                title: "Art Galleries",
              },
              {
                img: "img/city-life/Co-working.png",
                title: "Co-working Spaces",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <img src={item.img} className="h-[100px] w-full object-cover" />
                <div className="px-3 py-3 text-xl font-medium text-gray-700">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 CENTER DIVIDER */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-300"></div>
      </div>
    </section>
  );
}

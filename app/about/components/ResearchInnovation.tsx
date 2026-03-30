"use client";

export default function ResearchInnovation() {
  const cards = [
    {
      title: "Academic Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/acadmic.webp",
    },
    {
      title: "Sposored Research",
      img: "https://presidencyuniversity.in/assets/frontend/images/mini-sponsers.webp",
    },
    {
      title: "Research Centers",
      img: "https://presidencyuniversity.in/assets/frontend/images/rnd.webp",
    },
    {
      title: "Research Centers",
      img: "https://presidencyuniversity.in/assets/images/r-overview.webp",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#0F1E3D] to-[#1e3a5f] text-white">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* 🔵 LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl   mb-4">RESEARCH & INNOVATION</h2>

          <p className="text-base text-white/80 leading-relaxed max-w-md">
            Research is at the heart of Presidency University's identity. The university's Research & Innovation Council oversees a growing portfolio of academic and sponsored research, with dedicated Centres of Excellence, seed grant funding, patent filing support, and a peer-reviewed institutional journal. Faculty and doctoral students collaborate with industry partners and international institutions on projects addressing global challenges in technology, sustainability, health, and society.
The Presidency Launchpad — the university's incubation and entrepreneurship centre — supports student and faculty startups from ideation to market, reflecting the university's commitment to turning research into real-world impact.
          </p>
        </div>

        {/* 🟢 RIGHT GRID */}
        <div className="grid grid-cols-2 gap-4">
          {cards.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group shadow-md"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/30 transition"></div>

              {/* TEXT */}
              <div className="absolute bottom-3 left-3 text-sm font-medium">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

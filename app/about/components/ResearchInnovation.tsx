"use client";

export default function ResearchInnovation() {
  const cards = [
    {
      title: "Research Centres",
      img: "/img/research/1.jpg",
    },
    {
      title: "Publications",
      img: "/img/research/2.jpg",
    },
    {
      title: "Industry Projects",
      img: "/img/research/3.jpg",
    },
    {
      title: "Innovation Labs",
      img: "/img/research/4.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#0F1E3D] to-[#1e3a5f] text-white">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* 🔵 LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl   mb-4">RESEARCH & INNOVATION</h2>

          <p className="text-sm text-white/80 leading-relaxed max-w-md">
            Heading + short paragraph with coeductor or discontent team
            innovation, some area proficiences and creative industry projects
            innovation and reaction.
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
                className="w-full h-[120px] object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition"></div>

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

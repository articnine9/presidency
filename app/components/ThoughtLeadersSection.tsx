"use client";

export function ThoughtLeadersSection() {
  const leaders = [
    {
      name: "Satya Nadella",
      role: "CEO, Microsoft",
      image: "https://placehold.co/400x500",
    },
    {
      name: "Sundar Pichai",
      role: "CEO, Google",
      image: "https://placehold.co/400x500",
    },
    {
      name: "Indra Nooyi",
      role: "Former CEO, PepsiCo",
      image: "https://placehold.co/400x500",
    },
    {
      name: "Elon Musk",
      role: "CEO, Tesla",
      image: "https://placehold.co/400x500",
    },
  ];

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      {/* 🔵 TOP CURVE */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[100px]">
          <path
            d="M0,0 C300,120 1140,0 1440,120 L1440,0 L0,0 Z"
            fill="#1e3a5f"
          />
        </svg>
      </div> */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-[#ff8c42] uppercase tracking-wider text-sm mb-3">
            Industry Interaction
          </p>

          <h2 className="text-2xl md:text-4xl text-[#1e3a5f] mb-4">
            Thought Leaders on Campus
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto  text-sm md:text-lg">
            Learn directly from global leaders, innovators, and visionaries who
            bring real-world insights into the classroom.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              {/* Image */}
              <div
                className="h-80 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${leader.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Content */}
              <div className="absolute bottom-0 p-5 text-white">
                <h3 className="text-lg font-semibold">{leader.name}</h3>
                <p className="text-sm text-white/70">{leader.role}</p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔵 BOTTOM CURVE */}
      {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-[100px]">
          <path
            d="M0,120 C300,0 1140,120 1440,0 L1440,120 L0,120 Z"
            fill="#f8fafc"
          />
        </svg>
      </div> */}
    </section>
  );
}

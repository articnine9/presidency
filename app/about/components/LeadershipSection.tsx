"use client";

export default function LeadershipSection() {
  const leaders = [
    {
      name: "Chancellor",
      subtitle: "Presidency University Chancellor",
      desc: "A highly qualified academic leader with extensive experience.",
      img: "/img/about/leader1.jpg",
    },
    {
      name: "Vice Chancellor",
      subtitle: "Vice Chancellor Bangalore",
      desc: "A visionary leader driving institutional excellence and growth.",
      img: "/img/about/leader2.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#f3f4f6]">
      <div className="max-w-[1400px] mx-auto text-center px-6">
        {/* 🔹 TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
          LEADERSHIP & GOVERNANCE
        </h2>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 text-left hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                className="w-[80px] h-[100px] object-cover rounded-lg"
              />

              {/* TEXT */}
              <div>
                <h3 className=" text-gray-800 text-2xl">{item.name}</h3>

                <p className="text-xl text-gray-500 mb-1">{item.subtitle}</p>

                <p className="text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

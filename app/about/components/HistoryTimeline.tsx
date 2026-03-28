"use client";

export default function HistoryTimeline() {
  const timeline = [
    {
      left: {
        year: "2013",
        title: "Establishment",
        img: "/img/bang-life/innovation-2.png",
      },
      right: {
        year: "2015",
        title: "First BTech Batch",
      },
    },
    {
      left: {
        year: "2015",
        title: "First BTech Batch",
        img: "/img/bang-life/innovation-2.png",
      },
      right: {
        year: "2018",
        title: "Research Center Launch",
        img: "/img/bang-life/innovation-2.png",
      },
    },
    {
      left: {
        year: "2021",
        title: "International Collaborations",
        img: "/img/bang-life/innovation-2.png",
      },
      right: {
        year: "2023",
        title: "NAAC A+ Accreditation",
        img: "/img/bang-life/innovation-2.png",
      },
    },
  ];

  return (
    <section className="py-16 px-6 bg-[#f3f4f6]">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        {/* 🔵 LEFT CONTENT */}
        <div>
          <p className="text-[#c4a45b] font-semibold text-sm mb-2">
            OUR HISTORY & MISSION
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4">
            University's Journey and growth.
          </h2>

          <p className="text-base text-gray-600 leading-relaxed max-w-md">
            The University’s journey devols is interactive tegener sonol-seckees
            steoge rourotion and tchnology and earnrs colosstntaits, its authors
            evdavals deir veierve creeterassseion andesicn, acivated
            connections.
          </p>
        </div>

        {/* 🟢 TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-black shadow-[0_0_8px_#0a8f96] -translate-x-1/2"></div>

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-2 items-center relative">
                {/* 🔵 LEFT SIDE */}
                <div className="flex justify-between items-center gap-3 px-6 py-10 ">
                  {item.left.img && (
                    <img
                      src={item.left.img}
                      className="w-[100px] h-[100px] rounded-xl object-cover shadow"
                    />
                  )}
                  <div className="text-right">
                    <h4 className="text-2xl font-bold text-[#1e3a5f]">
                      {item.left.year}
                    </h4>
                    <p className="text-xl text-gray-600">{item.left.title}</p>
                  </div>
                </div>

                {/* 🔴 DOT */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-[#0A8F96] rounded-lg border-4 border-white shadow"></div>
                </div>

                {/* 🟢 RIGHT SIDE */}
                <div className="flex justify-start items-center gap-3 px-6 py-10 ">
                  <div>
                    <h4 className="text-2xl font-bold text-[#1e3a5f]">
                      {item.right.year}
                    </h4>
                    <p className="text-xl text-gray-600">{item.right.title}</p>
                  </div>

                  {item.right.img && (
                    <img
                      src={item.right.img}
                      className="w-[100px] h-[100px] rounded-xl object-cover shadow"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

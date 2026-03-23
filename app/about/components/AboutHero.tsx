"use client";

export default function AboutHero() {
  return (
    <section className="w-full py-10 px-6 bg-[#0F1E3D]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 ">
          {/* 🔵 LEFT CONTENT */}
          <div className=" text-white flex items-center px-8 md:px-16 py-12">
            <div className="max-w-md">
              <h1 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-6">
                A leading private university in India, known for academic
                excellence, global collaborations, and industry-focused
                education.
              </h1>

              {/* BUTTONS */}
              <div className="flex gap-4">
                <button className="ml-3 bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] text-white px-7 py-2.5 rounded-full flex items-center gap-3 text-sm font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Explore Programmes
                </button>

                <button className="border border-[#c4a45b] text-[#c4a45b] px-5 py-2 rounded-full  text-sm font-medium hover:bg-[#c4a45b] hover:text-white transition">
                  Request Information
                </button>
              </div>
            </div>
          </div>

          {/* 🟢 RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/img/bang-life/innovation-2.png"
              className="w-full h-full object-cover"
            />

            {/* LIGHT OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

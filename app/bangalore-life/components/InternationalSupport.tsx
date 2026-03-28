"use client";

export default function InternationalSupport() {
  return (
    <section className="relative bg-[#f3f4f6] py-16 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 items-center gap-10 px-6 ">
        {/* 🔵 LEFT CONTENT */}
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
            INTERNATIONAL <br /> STUDENT SUPPORT
          </h2>

          {/* MAP */}
          <div className="relative">
            <img
              src="/img/map-bang.jpeg"
              className="w-full max-w-2xl  h-full object-cover rounded-lg "
            />

            {/* 🔥 LINES (fake using borders)
            <div className="absolute left-[45%] bottom-[20%] w-[120px] h-[120px] border-l-2 border-b-2 border-[#c9a55c] rounded-bl-full rotate-12"></div>
            <div className="absolute left-[45%] bottom-[20%] w-[140px] h-[140px] border-l-2 border-b-2 border-[#c9a55c] rounded-bl-full -rotate-6"></div>
            <div className="absolute left-[45%] bottom-[20%] w-[160px] h-[160px] border-l-2 border-b-2 border-[#c9a55c] rounded-bl-full rotate-45"></div> */}

            {/* LABEL */}
            {/* <p className="absolute left-[48%] bottom-[15%] text-xs font-semibold text-black">
              BANGALORE
            </p> */}
          </div>
        </div>

        {/* 🟢 RIGHT IMAGE */}
        <div className="relative flex justify-center">
          {/* GOLD SHAPE */}
          <div className="absolute w-[280px] h-[280px] bg-[#c9a55c] rounded-lg right-10 top-10 opacity-80"></div>

          {/* IMAGE */}
          <div className="relative w-[320px] h-[320px] rounded-[40px] overflow-hidden shadow-xl">
            <img
              src="/img/bang-life/innovation-2.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 🔥 LEFT DECOR SHAPE */}
      <div className="absolute left-0 top-0 w-[200px] h-[200px] bg-[#c9a55c] rounded-br-[100px] opacity-60"></div>
    </section>
  );
}

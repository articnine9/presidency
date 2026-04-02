"use client";
import CommonHeader from "@/app/components/CommonHeader";


export default function InternationalSupport({ data }: any) {
   const cards = [
    {
      title: "Global Student Community",
      img: "/img/bang-life/studentcommunity.jpg",
    },
    {
      title: "End-to-End Student Support",
      img: "/img/bang-life/internationalsupport.jpg",
    },
   
  ];

  return (
    <section className="relative bg-[white] py-16 px-6 overflow-hidden">
      <CommonHeader
                tag={data.header.tag}
                title={data.header.title}
                highlight={data.header.highlight}
                description={data.header.description}
              />
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 items-center gap-10 px-6 ">
        {/* 🔵 LEFT CONTENT */}
        <div className="relative z-10">

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
        <div className="relative">
          {/* GOLD SHAPE */}
           <div className="grid grid-cols-2 gap-6">
          {cards.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group shadow-md h-full"
            >
              {/* IMAGE */}
              <img
                src={item.img}
                className="w-full  object-cover group-hover:scale-110 transition duration-500 h-full"
              />

              {/* OVERLAY */}
              {/* <div className="absolute inset-0 bg-black/10 group-hover:bg-black/10 transition"></div> */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-white text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
          

          {/* IMAGE */}
          {/* <div className="relative w-[320px] h-[320px] rounded-[40px] overflow-hidden shadow-xl">
            <img
              src="/img/bang-life/innovation-2.png"
              className="w-full h-full object-cover"
            />
          </div> */}
        </div>
      </div>

      {/* 🔥 LEFT DECOR SHAPE */}
      {/* <div className="absolute left-0 top-0 w-[200px] h-[200px] bg-[#c9a55c] rounded-br-[100px] opacity-60"></div> */}
    </section>
  );
}

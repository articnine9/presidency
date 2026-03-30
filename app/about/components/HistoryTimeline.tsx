"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
type ScrollDirection = "left" | "right";

export default function HistoryTimeline() {
  // const scrollRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

     const isMobile = window.innerWidth < 640; // Tailwind sm breakpoint
  const scrollAmount = isMobile ? 280 : 360;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // const timeline = [
  //   {
  //     left: {
  //       year: "2013",
  //       title: "Establishment",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //     right: {
  //       year: "2015",
  //       title: "First BTech Batch",
  //     },
  //   },
  //   {
  //     left: {
  //       year: "2015",
  //       title: "First BTech Batch",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //     right: {
  //       year: "2018",
  //       title: "Research Center Launch",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //   },
  //   {
  //     left: {
  //       year: "2021",
  //       title: "International Collaborations",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //     right: {
  //       year: "2023",
  //       title: "NAAC A+ Accreditation",
  //       img: "/img/bang-life/innovation-2.png",
  //     },
  //   },
  // ];

  const timeline = [
    { year: "1976", img: "/img/bang-life/innovation-2.png", title: "Presidency School", subtitle:"Nandini Layout(ICSE)" },
    { year: "1980", img: "/img/bang-life/innovation-2.png", title: "Presidency School",subtitle:"R T Nagar(ICSE)" },
    { year: "1983", img: "/img/bang-life/innovation-2.png", title: "St Paul's English School",subtitle:"J P Nagar(ICSE)" },
    { year: "2000", img: "/img/bang-life/innovation-2.png",  title: "Presidency College", subtitle: "Kempapura, Hebbal"},
    { year: "2001", img: "/img/bang-life/innovation-2.png", title: "Presidency School",subtitle: "Mangaloor(CBSE)" },
    { year: "2006", img: "/img/bang-life/innovation-2.png", title: "Presidency Jr. College", subtitle: "J P Nagar(PU Board)" },
    { year: "2006", img: "/img/bang-life/innovation-2.png", title: "Presidency School",subtitle: "Bengaluru South(CBSE)"  },
    { year: "2008", img: "/img/bang-life/innovation-2.png", title: "Presidency School",subtitle: "Bengaluru East(CBSE)"  },
    { year: "2012", img: "/img/bang-life/innovation-2.png", title: "Presidency School",subtitle: "Bengaluru North(CBSE)"  },
    { year: "2015", img: "/img/bang-life/innovation-2.png", title: "Presidency University",subtitle: "Yelahanka, Bengaluru"  },
    { year: "2019", img: "/img/bang-life/innovation-2.png", title: "Presidency PU College",subtitle: "Mangalore"  },
    { year: "2019", img: "/img/bang-life/innovation-2.png", title: "Presidency PU College",subtitle: "Kogilu"  },
    { year: "2021", img: "/img/bang-life/innovation-2.png", title: "Presidency School",subtitle: "Banashanakri(ICSE)"  },
  ]

  return (
    <>


      <section className="py-16 px-8 bg-[#f3f4f6]">
        <div className="relative w-full px-6 py-6">

          <p className="text-[#c4a45b] font-semibold text-sm mb-2 text-center">
            OUR HISTORY & MISSION
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a5f] mb-4 text-center">
            University's Journey and growth.
          </h2>

          {/* <p className="text-base text-gray-600 leading-relaxed max-w-md text-center"> */}
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto text-center">
            The University’s journey devols is interactive tegener sonol-seckees
            steoge rourotion and tchnology and earnrs colosstntaits, its authors
            evdavals deir veierve creeterassseion andesicn, acivated
            connections.
          </p>
          <div
            ref={scrollRef}
            className="overflow-x-auto scroll-smooth scrollbar-hide"
          >
            <div className="flex items-center min-w-max px-6 py-6">

              {timeline.map((item, index, arr) => (
                <div key={index} className="flex items-center">

                  {/* Circle */}
                  <div className="w-[180px] flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center shadow-md">
                      <img src={item.img} alt="" className="w-12 h-12 object-cover rounded-full" />
                    </div>
                    <p className="mt-3 text-[#1e3a5f] font-semibold text-lg">
                      {item.year}
                    </p>
                     <h3 className="text-gray-800 font-bold text-lg">
          {item.title}
        </h3>
                    
                    <p className="text-base text-gray-600 leading-relaxed max-w-[200px] mx-auto text-center break-words">
  {item.subtitle}
</p>
                  </div>

                  {/* Line */}
                  {index !== arr.length - 1 && (
                    <div className="w-32 h-[2px] bg-gray-300 mx-4"></div>
                  )}

                </div>
              ))}

            </div>
          </div>
          {/* Arrows BELOW - RIGHT SIDE */}
          <div className="flex justify-end mt-6 gap-3">
            <button
              onClick={() => scroll("left")}
              className="bg-white border rounded-full p-2 shadow hover:bg-gray-100"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={() => scroll("right")}
              className="bg-white border rounded-full p-2 shadow hover:bg-gray-100"
            >
              <ChevronRight />
            </button>
          </div>
        </div>


        {/* <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
        
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


        <div className="relative">
       
          <div className="absolute left-1/2 top-0 h-full w-1 bg-black shadow-[0_0_8px_#0a8f96] -translate-x-1/2"></div>

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <div key={i} className="grid grid-cols-2 items-center relative">
         
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

          
                <div className="absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-[#0A8F96] rounded-full border-4 border-white shadow"></div>
                </div>

         
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
      </div> */}
      </section>
    </>
  );
}

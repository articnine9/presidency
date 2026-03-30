"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const data1 = [
  { id: 1, name: "Chairman", role: "Chairman", image: "/img/aboutus/chairman.webp", desc: "A highly qualified academic leader with extensive experience." },
  { id: 2, name: "Vice President", role: "Vice President", image: "/img/aboutus/vice-president.webp", desc: "A highly qualified academic leader with extensive experience." },
  { id: 3, name: "Person 1", role: "Role", image: "/img/aboutus/person-1.jpg", desc: "A highly qualified academic leader with extensive experience." },
  { id: 4, name: "Person 2", role: "Role", image: "/img/aboutus/person-2.png", desc: "A highly qualified academic leader with extensive experience." },
  { id: 5, name: "Person 3", role: "Role", image: "/img/aboutus/person-3.png", desc: "A highly qualified academic leader with extensive experience." },
  { id: 6, name: "Person 4", role: "Role", image: "/img/aboutus/person-4.webp", desc: "A highly qualified academic leader with extensive experience." },
];

const data2 = [
  { id: 1, name: "Person 5", role: "Role", image: "/img/aboutus/person-5.png", desc: "A highly qualified academic leader with extensive experience." },
  { id: 2, name: "Person 6", role: "Role", image: "/img/aboutus/person-6.png", desc: "A highly qualified academic leader with extensive experience." },
  { id: 3, name: "Person 7", role: "Role", image: "/img/aboutus/person-7.png", desc: "A highly qualified academic leader with extensive experience." },
  { id: 4, name: "Person 8", role: "Role", image: "/img/aboutus/person-8.jpg", desc: "A highly qualified academic leader with extensive experience." },
  { id: 5, name: "Person 9", role: "Role", image: "/img/aboutus/person-9.jpg", desc: "A highly qualified academic leader with extensive experience." },
  { id: 6, name: "Person 10", role: "Role", image: "/img/aboutus/person-10.png", desc: "A highly qualified academic leader with extensive experience." },
]

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

        <div className="space-y-12 py-10">
          <Carousel direction="right" data={data1} />
          <Carousel direction="left" data={data2} />
        </div>

        {/* 🔥 CARDS */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          {leaders.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4 text-left hover:shadow-lg transition"
            >
              
              <img
                src={item.img}
                className="w-[80px] h-[100px] object-cover rounded-lg"
              />

              
              <div>
                <h3 className=" text-gray-800 text-2xl">{item.name}</h3>

                <p className="text-xl text-gray-500 mb-1">{item.subtitle}</p>

                <p className="text-base text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

function Carousel({
  direction,
  data,
}: {
  direction: "left" | "right";
  data: any[];
}) {
  const [items, setItems] = useState([...data, ...data]); // duplicate for loop
  const [isAnimating, setIsAnimating] = useState(false);
  const [translate, setTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 280; // match Tailwind min width
  const visibleCards = 4; // desktop

  useEffect(() => {
    setItems([...data, ...data]);
  }, [data]);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      slide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slide = () => {
    if (isAnimating || !containerRef.current) return;

    const slideWidth = containerRef.current.offsetWidth / 4;

    if (direction === "left") {
      // ✅ LEFT (already correct)
      setIsAnimating(true);
      setTranslate(-slideWidth);

      setTimeout(() => {
        setIsAnimating(false);
        setTranslate(0);
        setItems((prev) => [...prev.slice(1), prev[0]]);
      }, 500);

    } else {
      // ✅ RIGHT FIX (NO JUMP)

      // STEP 1: rearrange FIRST
      setItems((prev) => [
        prev[prev.length - 1],
        ...prev.slice(0, -1),
      ]);

      // STEP 2: instantly shift left (no animation)
      setIsAnimating(false);
      setTranslate(-slideWidth);

      // STEP 3: next frame → animate to 0
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true);
          setTranslate(0);
        });
      });

      // STEP 4: cleanup
      setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }
  };


  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full">

      {/* 🎞️ CAROUSEL */}
      <div
        ref={containerRef}
        className="relative overflow-hidden flex-1"
      >
        <div
          className={`flex gap-4 ${isAnimating ? "transition-transform duration-500" : ""
            }`}
          style={{
            transform: `translateX(${translate}px)`,
          }}
        >
          {items.map((item, i) => (
            <Card key={i} item={item} />
          ))}
        </div>
      </div>

      {/* 🎮 BUTTONS (SEPARATE DIV) */}
      <div className="flex flex-row sm:flex-col gap-2 justify-center items-center">

        {/* ⬅ LEFT */}
        <button
          onClick={slide}
          className="bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
        >
          <ChevronLeft className="text-[#ff8c42]" />
        </button>

        {/* ➡ RIGHT */}
        <button
          onClick={slide}
          className="bg-white shadow-md p-3 rounded-full hover:bg-gray-100 transition"
        >
          <ChevronRight className="text-[#ff8c42]" />
        </button>

      </div>

    </div>
  );
}

function Card({ item }: any) {
  return (
    <div className="
  min-w-[100%] 
  sm:min-w-[calc(50%-0.5rem)] 
  lg:min-w-[calc(25%-0.75rem)] 
  bg-white rounded-xl shadow-md overflow-hidden border-b-4 border-b-[#0A8F96]
">
      <img src={item.image} className="w-full h-62 object-cover" />
      <div className="p-4">
        <h3 className="text-gray-800 font-bold text-base uppercase">
          {item.name}
        </h3>

        <p className="text-xl text-gray-500 mb-1">{item.role}</p>
        <p className="text-base text-gray-600 leading-relaxed">
          {item.desc}
        </p>
      </div>
    </div>
  );
}

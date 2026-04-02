"use client";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";


const data1 = [
  { id: 1, name: "Dr. Nissar Ahmed", role: "Chairman", image: "/img/aboutus/chairman.png", desc: "Chairman, Presidency Group of Institutions" },
  { id: 2, name: "Mr. Salman Ahmed", role: "Vice President", image: "/img/aboutus/vice-president.png", desc: "The empowering fuel of the Presidency Group" },
  { id: 3, name: "Dr. S. J. Thiruvengadam", role: "Vice Chancellor", image: "/img/aboutus/m1.png", desc: "A distinguished academician, administrator, researcher and education enthusiast" },
  { id: 4, name: "Dr. Vidya Shankar Shetty", role: "Pro Vice Chancellor", image: "/img/aboutus/m2.png", desc: "An eminent educationist and author who has served in various capacities in both the K-12 sector and higher education" },
  { id: 5, name: "Dr. Sivaperumal", role: "Pro Vice Chancellor", image: "/img/aboutus/m3.png", desc: "Director - IRAcademic Leader | Research & Innovation Strategist | Internationalisation Expert" },
  { id: 6, name: "Dr. Venkateswaran S", role: "Registrar", image: "/img/aboutus/m4.png", desc: "An experienced academic professional with over 30 years of expertise in academic administration." },
  { id: 7, name: "Mr. Laxminarayan Nayak", role: "Chief Financial Officer", image: "/img/aboutus/m5.png", desc: "B. Com. degree from Karnataka University and a CMA from the Institute of Cost and Works Accountants (ICWA) of India." },
  { id: 8, name: "Mr. Chandrashekhar Ingle", role: "Controller of Examinations", image: "/img/aboutus/m6.png", desc: "A highly qualified academic leader with extensive experience." },
  { id: 9, name: "Dr. P Pal Pandian", role: "Director - IQAC", image: "/img/aboutus/m7.png", desc: "A highly qualified academic leader with extensive experience." },
  { id: 10, name: "Dr. N. Duraipandian", role: "Dean - School of Computer Science & Engineering & Information Science ", image: "/img/aboutus/person8.png", desc: "He holds a PhD from Anna University and an M.E. and a B.E. from NIT Trichy." },
  { id: 11, name: "Dr. Ramesh Sengottuvelu", role: "Dean, School of Engineering", image: "/img/aboutus/person12.png", desc: "An distinguished academician with over 34 years of extensive experience in teaching across reputed engineering institutions" },

];

const data2 = [
  
  { id: 1, name: "Dr. K. Krishna Kumar", role: "Dean In charge", image: "/img/aboutus/person11.png", desc: "A financial services industry professional turned academician, brings thirty years of industry and academic experience." },
  { id: 2, name: "Dr. Padmavathi", role: "Associate Dean, School of Commerce", image: "/img/aboutus/person10.png", desc: "a motivational speaker and has delivered programmes on national television and radio channels." },
  { id: 3, name: "Dr. Saroj Sharma", role: "Dean, School of Law", image: "/img/aboutus/person9.png", desc: "an accomplished education professional with a proven academic track record." },
  { id: 4, name: "Ms. Srishti Bajaj", role: "Director, School of Design", image: "/img/aboutus/person1.png", desc: "A distinguished design educator, leader, and strategist with nearly two decades of experience across academia and industry." },
  { id: 5, name: "Mr. Venkata Girish B.N.", role: "Director - Startup Incubation Centre & Industry Consulting", image: "/img/aboutus/person6.png", desc: "Holds a PGDM from IIM Calcutta" },
  { id: 6, name: "Ms. Jyothsna Pais", role: "Director - Human Resources", image: "/img/aboutus/person5.png", desc: "Holds an MBA and a Master’s degree in Psychology, combining HR leadership, strategic management expertise, and deep insight into human behavior. " },
  { id: 7, name: "Dr. Anu Sukhdev", role: "Professor and Dean - Student Affairs", image: "/img/aboutus/person4.png", desc: "An academician with over two decades of experience in administration, teaching, and research " },
  { id: 8, name: "Brigadier Sumesh Sharma", role: "Director - Administration & Facilities", image: "/img/aboutus/person3.png", desc: "Holds a master's degree in management studies and a B. Tech. in Electronics and Communication Engineering" },
  { id: 9, name: "Col. P.L. Jayram", role: "Director - Student Discipline and Sports", image: "/img/aboutus/person2.png", desc: "He holds an MBA in Finance, postgraduate diplomas in Human Resource Management and Defense Studies, and a Commerce degree from Bangalore University." },


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
    <section className="py-24 bg-white relative overflow-hidden">

      <div className="max-w-[1400px] mx-auto text-center px-6">
        {/* 🔹 TITLE */}
         <CommonHeader
                          tag="Leadership & Governance"
                          title="Guided by Strong "
                          highlight="Leadership"
                          description={``}
                          primaryColor="#ff8c42"
                          secondaryColor="#1e3a5f"
                          align="center"
                        />
       

        <div className="space-y-12 py-10">
          <Carousel direction="right" data={data1} />
          <Carousel direction="left" data={data2} />
        </div>

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
  const cardRef = useRef<HTMLDivElement>(null);

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
  }, [items]);

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
            <Card key={i} item={item} i={i}/>
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

function Card({ item, i }: any) {
  return (
    
     <motion.div
      key={i}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="
        min-w-[100%] 
        sm:min-w-[calc(50%-0.5rem)] 
        lg:min-w-[calc(25%-0.75rem)] 
        bg-white rounded-xl shadow-md overflow-hidden 
        border-b-4 border-b-[#0A8F96]
        h-[360px] sm:h-[380px] lg:h-[396px]
    flex flex-col
      "
    >
      <img src={item.image} className="w-full object-cover" />
      <div className="p-4">
        <h3 className="text-gray-800 font-bold text-base uppercase">
          {item.name}
        </h3>

        <p className="text-base text-gray-500 mb-1">{item.role}</p>
        {/* <p className="text-base text-gray-600 leading-relaxed">
          {item.desc}
        </p> */}
      </div>
    </motion.div>
  );
}

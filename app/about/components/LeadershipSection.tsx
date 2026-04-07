"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import CommonHeader from "@/app/components/CommonHeader";
import styles from "@/styles/swiper.module.css";

import "swiper/css";
import "swiper/css/pagination";

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
];

export default function LeadershipSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-4 text-center sm:px-6">
        <CommonHeader
          tag="Leadership & Governance"
          title="Guided by Strong "
          highlight="Leadership"
          description=""
          primaryColor="#ff8c42"
          secondaryColor="#1e3a5f"
          align="center"
        />

        <div className="space-y-10 py-6 md:space-y-12 md:py-8">
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
  data: (typeof data1)[number][];
}) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="flex w-full flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:gap-3">
      <div className="min-w-0 w-full flex-1 overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          speed={500}
          spaceBetween={16}
          slidesPerView={1}
          watchOverflow
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 4, spaceBetween: 16 },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            reverseDirection: direction === "left",
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSwiper={(instance) => {
            swiperRef.current = instance;
          }}
          className={`w-full pb-2 ${styles.leadershipSwiper}`}
        >
          {data.map((item, i) => (
            <SwiperSlide key={`${item.id}-${item.name}-${i}`} className="h-auto">
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex shrink-0 flex-row justify-center gap-2 sm:flex-col sm:justify-center sm:pt-0">
        <button
          type="button"
          aria-label="Previous slide"
          className="rounded-full bg-white p-3 shadow-md transition hover:bg-gray-100"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft className="text-[#ff8c42]" />
        </button>
        <button
          type="button"
          aria-label="Next slide"
          className="rounded-full bg-white p-3 shadow-md transition hover:bg-gray-100"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight className="text-[#ff8c42]" />
        </button>
      </div>
    </div>
  );
}

function Card({ item }: { item: (typeof data1)[number] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border-b-4 border-b-[#0A8F96] bg-white shadow-md lg:h-[396px]"
    >
      <div className="flex min-h-0 w-full flex-1 items-center justify-center bg-[#f0f2f5] lg:overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-auto w-full max-w-full object-contain object-top [image-rendering:auto] lg:max-h-full lg:object-contain"
          decoding="async"
        />
      </div>
      <div className="min-w-0 shrink-0 p-3 text-left sm:p-4">
        <h3 className="break-words text-base font-bold uppercase leading-snug text-gray-800">
          {item.name}
        </h3>
        <p className="mb-1 break-words text-sm leading-snug text-gray-600 sm:text-base">
          {item.role}
        </p>
      </div>
    </motion.article>
  );
}

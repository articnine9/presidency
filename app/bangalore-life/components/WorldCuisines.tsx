"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CommonHeader from "@/app/components/CommonHeader";

import "swiper/css";
import "swiper/css/navigation";

export default function WorldCuisines({ data }: any) {
  return (
    <section className="py-14 px-6 bg-[#EEF1F5]">
      <div className="max-w-[1400px] mx-auto px-6">
        <CommonHeader
                  tag={data.header.tag}
                  title={data.header.title}
                  highlight={data.header.highlight}
                  description={data.header.description}
                />
        
        {/* 🔹 HEADER */}
        <div className="flex items-center justify-end mb-6">
          

          {/* CUSTOM ARROWS */}
          <div className="flex gap-3">
            <button className="prev-btn w-9 h-9 rounded-lg border flex items-center justify-center">
              <ArrowLeft size={16} />
            </button>
            <button className="next-btn w-9 h-9 rounded-lg border flex items-center justify-center">
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* 🔥 CAROUSEL */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          spaceBetween={16}
          slidesPerView={1.5}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {[
            {
              title: "Masala Dosa",
              img: "/img/food/dosa.png",
            },
            {
              title: "Dum Biryani",
              img: "/img/food/biryani.png",
            },
            {
              title: "Pan-Asian Fare",
              img: "/img/food/west.png",
            },
            {
              title: "Street Food",
              img: "/img/food/fast.png",
            },
            {
              title: "South Indian Meals",
              img: "/img/food/south.png",
            },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              {/* CARD */}
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition group">
                <img
                  src={item.img}
                  className="w-full h-[150px] object-cover group-hover:scale-105 transition duration-300"
                />

                <div className="p-3 text-xl  text-gray-800">{item.title}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

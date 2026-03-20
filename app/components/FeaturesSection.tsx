"use client";

import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const events = [
  {
    title: "International Student Orientation",
    date: "January 12, 2026",
    desc: "Welcome session for new international students introducing campus life, academic systems, and student support services.",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
  },
  {
    title: "Global Innovation & Research Summit",
    date: "February 18, 2026",
    desc: "Industry leaders, researchers, and students explore future technologies, innovation, and global collaboration.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
  },
  {
    title: "Cultural Diversity Festival",
    date: "March 22, 2026",
    desc: "Students from across the world showcase their cultures through performances, food, art, and music.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    title: "Startup & Entrepreneurship Expo",
    date: "April 10, 2026",
    desc: "Students present innovative startup ideas to investors, mentors, and industry experts.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
  },
  {
    title: "International Career Fair",
    date: "May 14, 2026",
    desc: "Global companies connect with students for internships, placements, and networking opportunities.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0",
  },
];

export function UpcomingEvents() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* 🔵 TOP CURVE */}

      <div className="relative max-w-7xl mx-auto px-4">
        {/* 🔥 PREMIUM HEADING */}
        <div className="text-center mb-16">
          <p className="text-[#ff8c42] uppercase tracking-wider text-sm mb-3">
            Campus Life
          </p>

          <h2 className="text-2xl md:text-4xl text-[#1e3a5f] mb-4">
            UPCOMING EVENTS &
            <span className="block text-[#ff8c42]">ACTIVITIES</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto  text-sm md:text-lg">
            Stay updated with exciting events, fests, and experiences happening
            across our vibrant campus.
          </p>
        </div>

        {/* 🔥 SWIPER SLIDER */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {events.map((event, i) => (
              <SwiperSlide key={i}>
                <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition overflow-hidden">
                  {/* Image */}
                  <div
                    className="h-56 bg-cover bg-center transition duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${event.image})` }}
                  />

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[#ff8c42] text-sm mb-2">
                      <Calendar size={16} />
                      {event.date}
                    </div>

                    <h3 className="text-lg  text-[#1e3a5f] mb-2 group-hover:text-[#ff8c42] transition">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 text-sm">{event.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* 🔥 CUSTOM NAVIGATION */}
          <div className="flex justify-end gap-3 mt-6">
            <button className="prev-btn w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#ff8c42] hover:text-white transition">
              <ChevronLeft size={18} />
            </button>

            <button className="next-btn w-10 h-10 rounded-full border flex items-center justify-center hover:bg-[#ff8c42] hover:text-white transition">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 🔵 BOTTOM CURVE */}
    </section>
  );
}

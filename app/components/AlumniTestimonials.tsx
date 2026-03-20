"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    name: "Ananya Reddy",
    role: "Software Engineer — Google, Bangalore",
    text: "Presidency University gave me the technical foundation and industry exposure needed to succeed in the global tech industry. The hands-on learning and internship opportunities played a huge role in shaping my career.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Rohit Mehta",
    role: "Product Manager — Amazon",
    text: "The international exposure, industry collaborations, and mentorship from faculty helped me develop strong leadership and innovation skills. It truly prepared me for a global career.",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Sofia Martinez",
    role: "Data Scientist — Microsoft",
    text: "Studying at Presidency University allowed me to work on real-world projects and research initiatives. The diverse campus community and supportive faculty made the experience exceptional.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Aditya Kapoor",
    role: "Startup Founder — FinTech Innovator",
    text: "The entrepreneurial ecosystem and innovation labs encouraged me to build my own startup. Presidency provided the environment to turn ideas into impactful solutions.",
    image: "https://randomuser.me/api/portraits/men/29.jpg",
  },
];

export function AlumniTestimonials() {
  return (
    <section className="relative py-28 overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1e3a5f]/85"></div>

      {/* TOP CURVE */}

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-4 text-center z-10">
        <span className="inline-block bg-white/10 text-orange-400 px-4 py-2 rounded-full mb-4 backdrop-blur">
          Global Alumni Network
        </span>

        <h2 className="text-2xl md:text-4xl mb-12">
          SUCCESS STORIES
          <span className="block text-orange-400">FROM OUR ALUMNI</span>
        </h2>

        {/* SLIDER */}
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          modules={[Autoplay]}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
                {/* IMAGE */}
                <div className="flex justify-center mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-orange-400 object-cover"
                  />
                </div>

                {/* TEXT */}
                <p className="text-lg text-white/90 mb-6 italic">
                  “{item.text}”
                </p>

                {/* NAME */}
                <h3 className="text-xl font-semibold">{item.name}</h3>

                {/* ROLE */}
                <p className="text-orange-400 text-sm">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* BOTTOM CURVE */}
    </section>
  );
}

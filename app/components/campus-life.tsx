"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import { useRef } from "react";

export default function CampusLife() {
  const sliderRef = useRef<any>(null);

  const campusImages = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585",
      title: "Beautiful Campus",
      description: "100-acre green campus in Yelahanka",
    },
    {
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      title: "Modern Library",
      description: "State-of-the-art learning spaces",
    },
    {
      url: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
      title: "Comfortable Hostels",
      description: "Modern male and female accommodations",
    },
    {
      url: "https://images.unsplash.com/photo-1581093588401-22fbb62b47e6",
      title: "Advanced Labs",
      description: "Cutting-edge research facilities",
    },
    {
      url: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce",
      title: "Fitness Center",
      description: "Complete sports and gym facilities",
    },
    {
      url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
      title: "Student Activities",
      description: "50+ clubs and organizations",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section
      className="py-20 bg-gradient-to-b from-white to-[#FAFAF7]"
      id="campus-life"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-heading text-[#0F1E3D] mb-4"
          >
            Campus That Feels Like Home
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#4A5568] max-w-2xl mx-auto"
          >
            Explore our world-class facilities designed for your success and
            comfort
          </motion.p>
        </div>

        {/* Slider */}
        <div className="relative mb-16">
          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-lg p-3 hover:scale-110 transition"
          >
            <ChevronLeft className="text-[#0F1E3D]" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-lg p-3 hover:scale-110 transition"
          >
            <ChevronRight className="text-[#0F1E3D]" />
          </button>

          <Slider ref={sliderRef} {...settings} className="campus-slider">
            {campusImages.map((image, index) => (
              <div key={index} className="px-3">
                <div className="rounded-xl overflow-hidden group relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E3D]/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                    <div className="absolute bottom-0 p-6 text-white">
                      <h4 className="text-lg font-semibold">{image.title}</h4>

                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: "🏠",
              title: "Modern Hostels",
              text: "Separate hostels with security",
            },
            {
              icon: "📡",
              title: "Wi-Fi Campus",
              text: "High-speed connectivity everywhere",
            },
            {
              icon: "🏥",
              title: "Medical Facilities",
              text: "On-campus healthcare center",
            },
            {
              icon: "🎭",
              title: "Student Clubs",
              text: "50+ clubs and societies",
            },
            {
              icon: "🎖️",
              title: "NCC & NSS",
              text: "Leadership and social service",
            },
            {
              icon: "⚽",
              title: "Sports Facilities",
              text: "Football, cricket, basketball",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >
              <div className="flex gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-[#0F1E3D] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-[#0A8F96] text-white px-8 py-3 rounded-lg hover:bg-[#0BB5B5] transition inline-flex items-center gap-2">
            Discover Campus Life
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Slick CSS Override */}
      <style jsx global>{`
        .campus-slider .slick-dots {
          bottom: -40px;
        }

        .campus-slider .slick-dots li button:before {
          font-size: 12px;
          color: #0a8f96;
          opacity: 0.4;
        }

        .campus-slider .slick-dots li.slick-active button:before {
          opacity: 1;
        }

        .campus-slider .slick-slide {
          padding: 0 8px;
        }
      `}</style>
    </section>
  );
}

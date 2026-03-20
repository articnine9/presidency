import { motion } from "motion/react";
import {
  Briefcase,
  DollarSign,
  Users,
  ArrowRight,
  MapPin,
  Coffee,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Slider from "react-slick";
import { useRef } from "react";

export function BangaloreSection() {
  const sliderRef = useRef<any>(null);

  const bangaloreSpots = [
    {
      image:
        "https://images.unsplash.com/photo-1708067077797-74f83eaa8231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5nYWxvcmUlMjBzaWxpY29uJTIwdmFsbGV5JTIwdGVjaCUyMGNpdHl8ZW58MXx8fHwxNzczMzk4NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Silicon Valley of India",
      description: "Home to tech giants and innovative startups",
      icon: <Building2 size={32} />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1728910758653-7e990e489cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmb29kJTIwdHJhZGl0aW9uYWwlMjBjdWlzaW5lfGVufDF8fHx8MTc3MzM5ODc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Culinary Paradise",
      description: "Experience diverse cuisines from around the world",
      icon: <Coffee size={32} />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1646153114001-495dfb56506d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzM5ODc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Career Hub",
      description: "Connect with industry leaders and startups",
      icon: <Briefcase size={32} />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBncm91cCUyMHN0dWR5aW5nfGVufDF8fHx8MTc3MzM5OTQ1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "International Community",
      description: "Meet students from over 100 countries",
      icon: <Users size={32} />,
    },
    {
      image:
        "https://images.unsplash.com/photo-1770364292883-befec1322e25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBkaXZlcnNlJTIwZ3JvdXB8ZW58MXx8fHwxNzczMzk5NDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Cultural Melting Pot",
      description: "Experience rich traditions and modern lifestyle",
      icon: <MapPin size={32} />,
    },
  ];

  const highlights = [
    {
      icon: <Briefcase size={40} />,
      title: "Unmatched Career Opportunities",
      description:
        "Direct access to internships and jobs at Google, Amazon, Microsoft, Infosys, and hundreds of thriving startups.",
      stat: "500+",
      statLabel: "Companies",
    },
    {
      icon: <DollarSign size={40} />,
      title: "Affordable Excellence",
      description:
        "Enjoy a high quality of life with living costs 60% lower than Western countries without compromising on comfort.",
      stat: "60%",
      statLabel: "Lower Cost",
    },
    {
      icon: <Users size={40} />,
      title: "Global Community",
      description:
        "Join a vibrant expat community with students and professionals from over 100 countries worldwide.",
      stat: "100+",
      statLabel: "Nationalities",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  };

  return (
    <section
      className="py-20 bg-gradient-to-br from-[#0F1E3D] via-[#1a2d52] to-[#0F1E3D] text-white relative overflow-hidden"
      id="life-in-bangalore"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-5 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Study in India's Most Exciting City
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 max-w-3xl mx-auto text-lg"
          >
            Bangalore is India's Silicon Valley — a dynamic, cosmopolitan city
            where technology, innovation, and culture converge. It's the perfect
            place to study, grow, and launch your international career.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Beautiful Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Custom Navigation Buttons */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="text-[#0F1E3D]" size={28} />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white shadow-2xl rounded-full p-3 transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="text-[#0F1E3D]" size={28} />
            </button>

            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Slider
                ref={sliderRef}
                {...settings}
                className="bangalore-slider"
              >
                {bangaloreSpots.map((spot, index) => (
                  <div key={index} className="relative">
                    <div className="aspect-[4/3] relative">
                      <img
                        src={spot.image}
                        alt={spot.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E3D]/95 via-[#0F1E3D]/50 to-transparent"></div>

                      {/* Content Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                        <div className="text-[#D4A843] mb-4">{spot.icon}</div>
                        <h3 className="text-white mb-3 text-2xl md:text-3xl">
                          {spot.title}
                        </h3>
                        <p className="text-white/90 text-lg m-0">
                          {spot.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </motion.div>

          {/* Right: Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-white/40 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="text-[#D4A843] flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-3 text-xl">
                      {highlight.title}
                    </h4>
                    <p className="text-white/80 mb-4 m-0">
                      {highlight.description}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <div
                        className="text-4xl font-bold text-[#D4A843]"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {highlight.stat}
                      </div>
                      <div className="text-white/70 text-sm">
                        {highlight.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Why Bangalore Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5] rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-white mb-4 text-2xl md:text-3xl">
            Why International Students Choose Bangalore
          </h3>
          <p className="text-white/95 mb-8 max-w-3xl mx-auto text-lg">
            Home to global tech giants like Google, Amazon, Microsoft, Infosys,
            and Wipro, Bangalore offers unparalleled opportunities for
            internships, networking, and career development in the world's
            fastest-growing tech ecosystem.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                8M+
              </div>
              <div className="text-white/90 text-sm">Tech Professionals</div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                25°C
              </div>
              <div className="text-white/90 text-sm">Average Temperature</div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                #1
              </div>
              <div className="text-white/90 text-sm">Startup City in India</div>
            </div>
            <div className="text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                100+
              </div>
              <div className="text-white/90 text-sm">Nationalities</div>
            </div>
          </div>

          <button className="bg-white text-[#0F1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 mx-auto text-lg font-medium">
            Explore Life in Bangalore
            <ArrowRight size={22} />
          </button>
        </motion.div>
      </div>

      <style>{`
        .bangalore-slider .slick-dots {
          bottom: 20px;
          z-index: 10;
        }
        .bangalore-slider .slick-dots li button:before {
          font-size: 14px;
          color: white;
          opacity: 0.5;
        }
        .bangalore-slider .slick-dots li.slick-active button:before {
          opacity: 1;
          color: #D4A843;
        }
        .bangalore-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}

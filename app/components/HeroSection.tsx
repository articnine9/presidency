import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  const stats = [
    { value: "100+", label: "Programmes" },
    { value: "10", label: "Schools" },
    { value: "50+", label: "Student Clubs" },
    { value: "100-Acre", label: "Campus" },
  ];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
          onError={() => setVideoError(true)}
          poster="https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzM5ODc4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3D]/50 via-[#0F1E3D]/50 to-[#0F1E3D]/50"></div>

        {/* Animated Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 w-full">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white mb-6 text-5xl md:text-6xl lg:text-7xl"
          >
            Your World-Class Education Starts in Bangalore
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-4"
          >
            Study at Presidency University, Bangalore — where 50 years of
            academic excellence meet India’s most exciting city.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-5"
          >
            <button className="bg-[#0A8F96] text-white px-8 py-4 rounded-lg hover:bg-[#0BB5B5] transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2 text-lg">
              Explore Programmes
              <ArrowRight size={22} />
            </button>
            <button className="bg-white text-[#0F1E3D] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg">
              How to Apply
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg backdrop-blur-sm">
              <Play size={20} />
              Contact the OIA
            </button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/30 rounded-xl p-6 text-center hover:bg-white/15 hover:border-white/50 transition-all duration-300 hover:scale-105"
              >
                <div
                  className="text-xl md:text-2xl font-semibold text-[#D4A843] mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

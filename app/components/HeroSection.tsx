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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* Background Image / Video */}
      <div className="absolute inset-0 z-0">
        {!videoError ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <img
            src="/images/hero-bg.jpg"
            alt="Campus"
            className="w-full h-full object-cover"
          />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto ">
        
        {/* Left Content */}
        <div className="max-w-7xl">
          
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="
              text-white
              font-bold
              leading-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              max-w-2xl
            "
          >
            Your World-Class Education
            <br />
            Starts in Bangalore
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="
              mt-5
              text-white/90
              text-sm
              sm:text-base
              md:text-lg
              max-w-xl
              leading-relaxed
            "
          >
            Study at Presidency University, Bangalore — where 50 years
            of academic excellence meet India’s most exciting city.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              flex
              flex-wrap
              gap-3
              mt-8
            "
          >
            {/* Explore */}
            <button
              className="
                bg-[#00A3AD]
                hover:bg-[#00929B]
                text-white
                px-5
                py-3
                rounded-md
                text-sm
                md:text-base
                font-medium
                flex
                items-center
                gap-2
                transition-all
              "
            >
              Explore Programmes
              <ArrowRight size={18} />
            </button>

            {/* Contact */}
            <button
              className="
                border
                border-white/40
                bg-black/30
                backdrop-blur-sm
                text-white
                px-5
                py-3
                rounded-md
                text-sm
                md:text-base
                font-medium
                flex
                items-center
                gap-2
                hover:bg-white/10
                transition-all
              "
            >
              Contact the OIA
              <Play size={16} />
            </button>

            {/* Apply */}
            <button
              className="
                bg-white
                text-[#0F1E3D]
                px-5
                py-3
                rounded-md
                text-sm
                md:text-base
                font-medium
                flex
                items-center
                gap-2
                hover:bg-gray-200
                transition-all
              "
            >
              How to Apply
              <ArrowRight size={18} />
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-4
              mt-12
            "
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="
                  bg-white/10
                  backdrop-blur-md
                  border
                  border-white/20
                  rounded-2xl
                  px-5
                  py-6
                  text-center
                  hover:bg-white/15
                  transition-all
                "
              >
                <h3 className="text-[#D4A843] text-2xl md:text-3xl font-bold">
                  {stat.value}
                </h3>

                <p className="text-white text-sm md:text-base mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";
import {
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  School,
  Building2,
  Library,
  Landmark,
  Trophy,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

type ScrollDirection = "left" | "right";

export default function HistoryTimeline() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
  const isUserInteracting = useRef(false);

  const scroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

    const isMobile = window.innerWidth < 640;
    const scrollAmount = isMobile ? 280 : 360;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Smooth continuous auto-scroll
  const startAutoScroll = () => {
    if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);

    autoScrollInterval.current = setInterval(() => {
      if (!isUserInteracting.current && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 5) {
          // Instantly reset to start without animation for seamless loop
          scrollRef.current.style.scrollBehavior = "auto";
          scrollRef.current.scrollLeft = 0;
          // Force reflow to ensure smooth reset
          void scrollRef.current.offsetHeight;
          scrollRef.current.style.scrollBehavior = "smooth";
        } else {
          // Smooth scroll right
          const isMobile = window.innerWidth < 640;
          const scrollAmount = isMobile ? 280 : 360;
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
      }
    }, 3000); // Scroll every 3 seconds for smoother experience
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  // Handle user interaction
  const handleUserInteraction = (direction: ScrollDirection) => {
    isUserInteracting.current = true;
    scroll(direction);

    // Restart auto-scroll after 8 seconds of inactivity
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }

    setTimeout(() => {
      isUserInteracting.current = false;
      startAutoScroll();
    }, 8000);
  };

  // Start auto-scroll on mount
  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    isUserInteracting.current = true;
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      isUserInteracting.current = false;
      startAutoScroll();
    }, 2000);
  };

  // Icon mapping based on title or year
  const getIcon = (title: string, year: string) => {
    const iconProps = { size: 32, color: "white" };

    if (title.includes("School")) return <School {...iconProps} />;
    if (title.includes("College")) return <Building2 {...iconProps} />;
    if (title.includes("University")) return <Library {...iconProps} />;
    if (title.includes("St Paul")) return <Landmark {...iconProps} />;

    // Map by decade
    const yearNum = parseInt(year);
    if (yearNum < 1980) return <GraduationCap {...iconProps} />;
    if (yearNum < 1990) return <BookOpen {...iconProps} />;
    if (yearNum < 2000) return <Users {...iconProps} />;
    if (yearNum < 2010) return <Trophy {...iconProps} />;
    return <Award {...iconProps} />;
  };

  const timeline = [
    {
      year: "1976",
      title: "Presidency School",
      subtitle: "Nandini Layout (ICSE)",
    },
    { year: "1980", title: "Presidency School", subtitle: "R T Nagar (ICSE)" },
    {
      year: "1983",
      title: "St Paul's English School",
      subtitle: "J P Nagar (ICSE)",
    },
    {
      year: "2000",
      title: "Presidency College",
      subtitle: "Kempapura, Hebbal",
    },
    { year: "2001", title: "Presidency School", subtitle: "Mangalore (CBSE)" },
    {
      year: "2006",
      title: "Presidency Jr. College",
      subtitle: "J P Nagar (PU Board)",
    },
    {
      year: "2006",
      title: "Presidency School",
      subtitle: "Bengaluru South (CBSE)",
    },
    {
      year: "2008",
      title: "Presidency School",
      subtitle: "Bengaluru East (CBSE)",
    },
    {
      year: "2012",
      title: "Presidency School",
      subtitle: "Bengaluru North (CBSE)",
    },
    {
      year: "2015",
      title: "Presidency University",
      subtitle: "Yelahanka, Bengaluru",
    },
    { year: "2019", title: "Presidency PU College", subtitle: "Mangalore" },
    { year: "2019", title: "Presidency PU College", subtitle: "Kogilu" },
    {
      year: "2021",
      title: "Presidency School",
      subtitle: "Banashankari (ICSE)",
    },
  ];

  // Duplicate timeline for seamless infinite scroll effect
  const duplicatedTimeline = [...timeline, ...timeline];

  return (
    <section className="min-h-screen flex items-center bg-[#F5F6F8] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block bg-[#0A8F96]/10 text-[#0A8F96] px-4 py-2 rounded-lg text-sm mb-4"
          >
            Our History & Mission
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl text-[#1e3a5f]"
          >
            University's
            <span className="block text-[#0A8F96]">Journey and growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-5xl mx-auto text-sm md:text-lg"
          >
            The Presidency Group of Institutions was founded over 50 years ago
            with a singular mission: to nurture talent and transform students
            into successful professionals and responsible global citizens.
            Today, the Group comprises eight schools, four colleges, and
            Presidency University — a comprehensive university offering
            programmes from undergraduate through doctoral level.
          </motion.p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center min-w-max px-6 py-6">
            {duplicatedTimeline.map((item, index, arr) => (
              <div key={index} className="flex items-center">
                {/* Timeline Card */}
                <div className="w-[220px] md:w-[260px] flex flex-col items-center text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-8"
                    style={{ backgroundColor: "#1B4E8C" }}
                  >
                    {getIcon(item.title, item.year)}
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block bg-[#ff8c42]/10 text-[#ff8c42] px-4 py-2 rounded-lg text-sm mb-4 font-semibold"
                  >
                    {item.year}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-[#1e3a5f] font-semibold mb-1 text-sm md:text-base"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-sm text-gray-500"
                  >
                    {item.subtitle}
                  </motion.p>
                </div>

                {/* Connecting Line */}
                {index !== arr.length - 1 && (
                  <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-gray-300 to-gray-400 mx-2 md:mx-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end mt-8 gap-3">
          <button
            onClick={() => handleUserInteraction("left")}
            className="bg-[#0A8F96] hover:bg-[#0A8F96]/80 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll left"
          >
            <ChevronLeft className="text-white" size={20} />
          </button>

          <button
            onClick={() => handleUserInteraction("right")}
            className="bg-[#0A8F96] hover:bg-[#0A8F96]/80 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll right"
          >
            <ChevronRight className="text-white" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

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

  const getScrollStep = () => {
    if (!scrollRef.current) return 280;
    const step = scrollRef.current.querySelector(
      "[data-timeline-step]",
    ) as HTMLElement | null;
    return step?.getBoundingClientRect().width ?? Math.round(window.innerWidth * 0.45);
  };

  const scroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

    const scrollAmount = getScrollStep();

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
          const step = scrollRef.current.querySelector(
            "[data-timeline-step]",
          ) as HTMLElement | null;
          const scrollAmount =
            step?.getBoundingClientRect().width ??
            Math.round(window.innerWidth * 0.45);
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
    <section className="bg-[#F5F6F8] py-12 md:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        <div className="mb-10 text-center md:mb-16">
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
          <div className="flex min-w-max items-center px-3 py-6 sm:px-6">
            {duplicatedTimeline.map((item, index, arr) => (
              <div
                key={index}
                data-timeline-step
                className="flex shrink-0 items-center"
              >
                {/* Timeline Card — max-sm: ~half viewport so two milestones show */}
                <div
                  data-timeline-card
                  className="flex max-w-[210px] shrink-0 flex-col items-center text-center max-sm:w-[calc((100vw-5.5rem)/2)] sm:w-[220px] md:w-[260px]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-full shadow-lg sm:mb-8 sm:h-20 sm:w-20 [&_svg]:max-sm:h-7 [&_svg]:max-sm:w-7"
                    style={{ backgroundColor: "#1B4E8C" }}
                  >
                    {getIcon(item.title, item.year)}
                  </motion.div>

                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4 inline-block max-w-full break-words rounded-lg bg-[#ff8c42]/10 px-2 py-1.5 text-xs font-semibold text-[#ff8c42] sm:px-4 sm:py-2 sm:text-sm"
                  >
                    {item.year}
                  </motion.span>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-1 max-w-full break-words text-xs font-semibold text-[#1e3a5f] sm:text-sm md:text-base"
                  >
                    {item.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-full break-words text-[11px] leading-snug text-gray-500 sm:text-sm"
                  >
                    {item.subtitle}
                  </motion.p>
                </div>

                {/* Connecting Line */}
                {index !== arr.length - 1 && (
                  <div className="mx-1 h-[2px] w-6 shrink-0 bg-gradient-to-r from-gray-300 to-gray-400 sm:mx-2 sm:w-16 md:mx-4 md:w-24"></div>
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

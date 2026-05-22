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

    return (
      step?.getBoundingClientRect().width ??
      Math.round(window.innerWidth * 0.45)
    );
  };

  const scroll = (direction: ScrollDirection) => {
    if (!scrollRef.current) return;

    const scrollAmount = getScrollStep();

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Auto Scroll
  const startAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }

    autoScrollInterval.current = setInterval(() => {
      if (!isUserInteracting.current && scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        const maxScroll = scrollWidth - clientWidth;

        if (scrollLeft >= maxScroll - 5) {
          scrollRef.current.style.scrollBehavior = "auto";
          scrollRef.current.scrollLeft = 0;

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
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const handleUserInteraction = (direction: ScrollDirection) => {
    isUserInteracting.current = true;

    scroll(direction);

    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }

    setTimeout(() => {
      isUserInteracting.current = false;
      startAutoScroll();
    }, 8000);
  };

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

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

  // Icons
  const getIcon = (title: string, year: string) => {
    const iconProps = { size: 32, color: "white" };

    if (title.includes("School")) return <School {...iconProps} />;
    if (title.includes("College")) return <Building2 {...iconProps} />;
    if (title.includes("University")) return <Library {...iconProps} />;
    if (title.includes("St Paul")) return <Landmark {...iconProps} />;

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
    {
      year: "1980",
      title: "Presidency School",
      subtitle: "R T Nagar (ICSE)",
    },
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
    {
      year: "2001",
      title: "Presidency School",
      subtitle: "Mangalore (CBSE)",
    },
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
    {
      year: "2019",
      title: "Presidency PU College",
      subtitle: "Mangalore",
    },
    {
      year: "2019",
      title: "Presidency PU College",
      subtitle: "Kogilu",
    },
    {
      year: "2021",
      title: "Presidency School",
      subtitle: "Banashankari (ICSE)",
    },
  ];

  const duplicatedTimeline = [...timeline, ...timeline];

  return (
    <section className="bg-[#F5F6F8] py-12 md:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mb-10 text-center md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-xl bg-[#0A8F96]/10 px-4 py-2 text-sm text-[#0A8F96] mb-4"
          >
            Our History & Mission
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-[32px]
              leading-[1.15]
              text-[#1e3a5f]

              md:text-4xl
            "
          >
            University's
            <span className="block text-[#0A8F96]">Journey and growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="
              mx-auto
              mt-4
              max-w-5xl
              text-[13px]
              leading-7
              text-gray-600

              md:text-lg
            "
          >
            The Presidency Group of Institutions was founded over 50 years ago
            with a singular mission: to nurture talent and transform students
            into successful professionals and responsible global citizens.
          </motion.p>
        </div>

        {/* Timeline */}
        <div
          ref={scrollRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex min-w-max items-start px-2 py-4 sm:items-center sm:px-6 sm:py-6">
            {duplicatedTimeline.map((item, index, arr) => (
              <div
                key={index}
                data-timeline-step
                className="flex shrink-0 items-start sm:items-center"
              >
                {/* Card */}
                <div
                  className="
                    flex
                    w-[140px]
                    shrink-0
                    flex-col
                    items-center
                    text-center

                    sm:w-[220px]
                    md:w-[260px]
                  "
                >
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="
                      mb-3
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#0A8F96]
                      shadow-md

                      sm:mb-8
                      sm:h-20
                      sm:w-20

                      [&_svg]:h-5
                      [&_svg]:w-5

                      sm:[&_svg]:h-8
                      sm:[&_svg]:w-8
                    "
                  >
                    {getIcon(item.title, item.year)}
                  </motion.div>

                  {/* Year */}
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
                      mb-3
                      rounded-full
                      bg-[#ff8c42]/10
                      px-3
                      py-1
                      text-[11px]
                      font-semibold
                      text-[#ff8c42]

                      sm:px-4
                      sm:py-2
                      sm:text-sm
                    "
                  >
                    {item.year}
                  </motion.span>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
                      mb-1
                      px-1
                      text-[11px]
                      font-semibold
                      leading-[1.4]
                      text-[#1e3a5f]

                      sm:text-sm
                      md:text-base
                    "
                  >
                    {item.title}
                  </motion.h3>

                  {/* Subtitle */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="
                      text-[10px]
                      leading-[1.5]
                      text-gray-500

                      sm:text-sm
                    "
                  >
                    {item.subtitle}
                  </motion.p>
                </div>

                {/* Connecting Line */}
                {index !== arr.length - 1 && (
                  <div
                    className="
                      mx-2
                      mt-6
                      h-[2px]
                      w-5
                      shrink-0
                      bg-gray-300

                      sm:mx-4
                      sm:mt-0
                      sm:w-24
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-center gap-3 sm:mt-8 sm:justify-end">
          <button
            onClick={() => handleUserInteraction("left")}
            className="
              rounded-full
              border
              border-gray-200
              bg-white
              p-2
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#0A8F96]
              hover:text-white
            "
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => handleUserInteraction("right")}
            className="
              rounded-full
              border
              border-gray-200
              bg-white
              p-2
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
              hover:bg-[#0A8F96]
              hover:text-white
            "
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

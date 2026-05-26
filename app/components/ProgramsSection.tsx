"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useRef, useEffect } from "react";
import CommonHeader from "@/app/components/CommonHeader";
import { H3 } from "./Headings";

import {
  applyUrlForCourse,
  filterCourses,
  getAllCourses,
} from "@/lib/course-search";

export function ProgrammesSection() {
  const router = useRouter();

  const programmes = [
    {
      title: "Undergraduate",
      color: "border-b-[#0A8F96]",
      link: "/undergraduate",
    },
    {
      title: "Doctoral (PhD)",
      color: "border-b-[#D4A843]",
      link: "/doctoral",
    },
    {
      title: "Postgraduate",
      color: "border-b-[#0A8F96]",
      link: "/postgraduate",
    },
    {
      title: "International Pathways",
      color: "border-b-[#D4A843]",
      link: "/international",
    },
  ];

  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const searchWrapRef = useRef<HTMLDivElement>(null);

  const allCourses = useMemo(() => getAllCourses(), []);
  const results = useMemo(
    () => filterCourses(allCourses, query, "all", { maxSearch: 10 }),
    [allCourses, query],
  );

  const hasQuery = query.trim().length > 0;

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (
        searchWrapRef.current &&
        !searchWrapRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);

    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!hasQuery) return;

    setOpen(true);

    if (results.length === 1) {
      router.push(results[0].href);
    }
  };

  return (
    <section
      className="bg-white py-14 md:py-20 overflow-hidden"
      id="degree-programmes"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* 🔥 LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hidden lg:block order-2 lg:order-1"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="img/perfect.jpeg"
                alt="Students"
                className="
                  w-full
                  h-[350px]
                  sm:h-[450px]
                  lg:h-[600px]
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />
            </div>
          </motion.div>

          {/* 🔥 RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* HEADER */}
            <CommonHeader
              title="Find Your Perfect"
              highlight="Degree Programme"
              description=""
              primaryColor="#F58A3C"
              align="left"
            />

            {/* 🔥 MOBILE DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                text-[#475569]
                text-[15px]
                leading-7
                mt-4
                mb-7
                md:hidden
              "
            >
              Presidency University offers rigorous academic programmes, global
              exposure, and industry-driven learning.
            </motion.p>

            {/* 🔥 DESKTOP DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="
                hidden md:block
                text-[#475569]
                text-base
                leading-8
                mt-5
                mb-8
              "
            >
              Explore future-ready programmes designed to help students build
              successful global careers. Presidency University offers
              undergraduate, postgraduate, doctoral, and international pathway
              programmes with industry-focused learning, modern facilities, and
              global opportunities.
            </motion.p>

            {/* 🔥 PROGRAMME CARDS */}
            <div className="grid grid-cols-2 gap-4 md:gap-5 mb-8">
              {programmes.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className={`
                    bg-white
                    rounded-2xl
                    shadow-md
                    border-b-4
                    ${item.color}
                    hover:shadow-xl
                    transition-all
                    duration-300

                    p-5 md:p-7
                    text-center
                  `}
                >
                  <H3 className="text-[#1B4E8C] text-sm md:text-base">
                    {item.title}
                  </H3>
                </motion.div>
              ))}
            </div>

            {/* 🔥 SEARCH */}
            <div className="relative z-20" ref={searchWrapRef}>
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    id="degree-programme-search"
                    type="search"
                    autoComplete="off"
                    placeholder="Search by keyword or course name"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setOpen(true);
                    }}
                    onFocus={() => hasQuery && setOpen(true)}
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      py-4
                      pl-5
                      pr-14
                      text-sm
                      md:text-base
                      focus:border-[#0A8F96]
                      focus:ring-2
                      focus:ring-[#0A8F96]/20
                      outline-none
                      transition
                      bg-white
                    "
                    aria-expanded={open && hasQuery}
                    aria-controls="degree-search-results"
                  />

                  <button
                    type="submit"
                    className="
                      absolute
                      right-2
                      top-1/2
                      -translate-y-1/2
                      p-2
                      rounded-md
                      text-[#0A8F96]
                      hover:bg-[#0A8F96]/10
                      transition
                    "
                    aria-label="Search programmes"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>

              {/* 🔥 SEARCH RESULT */}
              {open && hasQuery ? (
                <div
                  id="degree-search-results"
                  role="listbox"
                  className="
                    absolute
                    left-0
                    right-0
                    top-full
                    z-30
                    mt-2
                    max-h-[320px]
                    overflow-y-auto
                    rounded-xl
                    border
                    border-gray-200
                    bg-white
                    shadow-xl
                  "
                >
                  {results.length === 0 ? (
                    <p className="p-4 text-sm text-gray-600">
                      No programmes match. Try another keyword.
                    </p>
                  ) : (
                    <ul className="py-2">
                      {results.map((course) => (
                        <li
                          key={`${course.schoolSlug}-${course.courseSlug}`}
                          className="border-b border-gray-100 last:border-0"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4">
                            <div>
                              <p className="text-sm font-semibold text-[#1B4E8C]">
                                {course.name}
                              </p>

                              <p className="text-xs text-gray-500 mt-1">
                                {course.schoolName}
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <Link
                                href={course.href}
                                className="
                                  inline-flex
                                  items-center
                                  justify-center
                                  rounded-md
                                  border
                                  border-[#0A8F96]
                                  px-3
                                  py-2
                                  text-xs
                                  font-medium
                                  text-[#0A8F96]
                                  hover:bg-[#0A8F96]/10
                                "
                                onClick={() => setOpen(false)}
                              >
                                View
                              </Link>

                              <Link
                                href={applyUrlForCourse(course.name)}
                                className="
                                  inline-flex
                                  items-center
                                  justify-center
                                  rounded-md
                                  bg-[#0A8F96]
                                  px-3
                                  py-2
                                  text-xs
                                  font-medium
                                  text-white
                                  hover:bg-[#088f96]
                                "
                                onClick={() => setOpen(false)}
                              >
                                Apply
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : null}

              {/* 🔥 MOBILE BUTTON */}
              <div className="mt-5 md:hidden">
                <button
                  className="
                    w-full
                    bg-[#F58A3C]
                    hover:bg-[#eb7a28]
                    text-white
                    py-4
                    rounded-xl
                    font-semibold
                    text-sm
                    flex
                    items-center
                    justify-center
                    gap-2
                    transition-all
                  "
                >
                  SEARCH
                  <Search size={16} />
                </button>
              </div>

              {/* 🔥 DESKTOP BUTTON */}
              <div className="hidden md:block mt-6">
                <Link href="/programmes">
                  <button
                    className="
                      w-full
                      bg-[#F58A3C]
                      hover:bg-[#eb7a28]
                      text-white
                      py-4
                      rounded-lg
                      font-semibold
                      text-sm
                      md:text-base
                      transition-all
                      duration-300
                      hover:shadow-lg
                    "
                  >
                    Explore All Programmes
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

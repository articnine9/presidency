"use client";

import { Search } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useRef, useEffect } from "react";
import {
  applyUrlForCourse,
  filterCourses,
  getAllCourses,
} from "@/lib/course-search";

export function ProgrammesSection() {
  const router = useRouter();
  const programmes = [
    { title: "Undergraduate", color: "border-b-[#0A8F96]" },
    { title: "Doctoral (PhD)", color: "border-b-[#D4A843]" },
    { title: "Postgraduate", color: "border-b-[#0A8F96]" },
    { title: "International Pathways", color: "border-b-[#D4A843]" },
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
    <section className="bg-[#F5F6F8] py-10 md:py-16 lg:py-20" id="degree-programmes">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image: second on mobile, left column on lg */}
        <div className="order-2 lg:order-1">
          <div className="relative h-[220px] sm:h-[340px] md:h-[460px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl group mt-0 lg:mt-5">
            <img
              src="img/perfect.jpeg"
              alt="Students"
              className="w-full h-full object-cover transition duration-500"
            />
          </div>
        </div>

        {/* Copy + cards: first on mobile, right column on lg */}
        <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#1B4E8C] text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-6 leading-tight"
          >
            Find Your Perfect
            <span className="block text-[#0A8F96]">Degree Programme</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#4A5568] max-w-md text-base md:text-lg"
          >
            Presidency University offers rigorous academic programmes, global
            exposure, and industry-driven learning.
          </motion.p>
          {/* DEGREE BOXES */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {programmes.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className={`bg-white shadow-md rounded-xl p-4 sm:p-5 md:p-8 text-center border-b-4 ${item.color} hover:shadow-xl transition`}
              >
                <h3 className="text-[#1B4E8C] font-medium text-sm sm:text-base">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          {/* SEARCH */}
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
                  className="w-full border border-gray-300 rounded-md py-3 md:py-4 pl-4 md:pl-5 pr-14 text-sm md:text-base focus:border-[#0A8F96] focus:ring-2 focus:ring-[#0A8F96]/20 outline-none transition bg-white"
                  aria-expanded={open && hasQuery}
                  aria-controls="degree-search-results"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-md text-[#0A8F96] hover:bg-[#0A8F96]/10 transition"
                  aria-label="Search programmes"
                >
                  <Search size={20} />
                </button>
              </div>
            </form>

            {open && hasQuery ? (
              <div
                id="degree-search-results"
                role="listbox"
                className="absolute left-0 right-0 top-full z-30 mt-1 max-h-[min(320px,50vh)] overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg"
              >
                {results.length === 0 ? (
                  <p className="p-4 text-sm text-gray-600">
                    No programmes match. Try another keyword.
                  </p>
                ) : (
                  <ul className="py-1">
                    {results.map((course) => (
                      <li
                        key={`${course.schoolSlug}-${course.courseSlug}`}
                        role="option"
                        className="border-b border-gray-100 last:border-0"
                      >
                        <div className="flex flex-col gap-2 p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-[#1B4E8C] leading-snug">
                              {course.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-0.5 truncate">
                              {course.schoolName}
                            </p>
                            {course.type ? (
                              <span className="mt-1 inline-block rounded bg-[#0A8F96]/10 px-2 py-0.5 text-[10px] font-medium uppercase text-[#0A8F96]">
                                {course.type}
                              </span>
                            ) : null}
                          </div>
                          <div className="flex shrink-0 gap-2">
                            <Link
                              href={course.href}
                              className="inline-flex items-center justify-center rounded-md border border-[#0A8F96] px-3 py-1.5 text-xs font-medium text-[#0A8F96] hover:bg-[#0A8F96]/10"
                              onClick={() => setOpen(false)}
                            >
                              View
                            </Link>
                            <Link
                              href={applyUrlForCourse(course.name)}
                              className="inline-flex items-center justify-center rounded-md bg-[#0A8F96] px-3 py-1.5 text-xs font-medium text-white hover:bg-[#088f96]"
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
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useCallback } from "react";
import {
  applyUrlForCourse,
  filterCourses,
  getAllCourses,
  type ProgramLevel,
  type CourseSearchItem,
} from "@/lib/course-search";

const LEVEL_OPTIONS: { value: ProgramLevel; label: string }[] = [
  { value: "all", label: "All levels" },
  { value: "UG", label: "Undergraduate" },
  { value: "PG", label: "Postgraduate" },
  { value: "PhD", label: "Doctoral (PhD)" },
  { value: "Diploma", label: "Diploma" },
];

function typeBadgeClass(type: string): string {
  switch (type) {
    case "UG":
      return "bg-[#0A8F96]/25 text-[#7fe8ed]";
    case "PG":
      return "bg-[#ff8c42]/25 text-[#ffd4a8]";
    case "PhD":
      return "bg-violet-500/25 text-violet-200";
    case "Diploma":
      return "bg-white/15 text-blue-100";
    default:
      return "bg-white/10 text-blue-100";
  }
}

function ResultRow({ course }: { course: CourseSearchItem }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 py-3 border-b border-white/15 last:border-0">
      <div className="min-w-0 flex-1">
        <p className="text-white font-medium text-sm md:text-base leading-snug">
          {course.name}
        </p>
        <p className="text-blue-200/90 text-xs md:text-sm mt-0.5 truncate">
          {course.schoolName}
        </p>
        {course.type ? (
          <span
            className={`inline-block mt-2 text-[10px] md:text-xs uppercase tracking-wide px-2 py-0.5 rounded ${typeBadgeClass(course.type)}`}
          >
            {course.type}
          </span>
        ) : null}
      </div>
      <div className="flex w-full shrink-0 flex-wrap justify-center gap-2 sm:w-auto sm:justify-end">
        <Link
          href={course.href}
          className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white transition hover:bg-white/20 md:text-sm"
        >
          View programme
        </Link>
        <Link
          href={applyUrlForCourse(course.name)}
          className="inline-flex items-center justify-center rounded-lg bg-[#ff8c42] px-4 py-2 text-xs font-semibold text-white shadow-md transition hover:bg-[#e6762f] md:text-sm"
        >
          Apply
        </Link>
      </div>
    </li>
  );
}

export function ProgramSearch() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<ProgramLevel>("all");

  const allCourses = useMemo(() => getAllCourses(), []);

  const hasQuery = query.trim().length > 0;

  const results = useMemo(
    () => filterCourses(allCourses, query, level),
    [allCourses, query, level],
  );

  const scrollToResults = useCallback(() => {
    document
      .getElementById("course-search-results")
      ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    scrollToResults();
  };

  return (
    <section
      className="relative w-full min-w-0 overflow-x-hidden bg-[#F5F6F8] px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-24"
      aria-labelledby="course-search-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <form onSubmit={handleSearch}>
          <div className="bg-[#1e3a5f] text-white border border-[#2c5a87] rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-4 sm:p-6 md:p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:items-end">
              <div className="sm:col-span-2 lg:col-span-1">
                <h2
                  id="course-search-heading"
                  className="text-white text-lg md:text-2xl font-semibold"
                >
                  Find your programme
                </h2>
                <p className="text-blue-100 text-xs md:text-sm mt-1">
                  Search courses from all schools — then view details or apply.
                </p>
              </div>

              <div>
                <label
                  htmlFor="program-level"
                  className="text-xs md:text-sm text-blue-200"
                >
                  Level
                </label>
                <select
                  id="program-level"
                  value={level}
                  onChange={(e) =>
                    setLevel(e.target.value as ProgramLevel)
                  }
                  className="w-full mt-1 bg-white text-black border border-gray-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm outline-none focus:ring-2 focus:ring-[#ff8c42]"
                >
                  {LEVEL_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="program-keyword"
                  className="text-xs md:text-sm text-blue-200"
                >
                  Keyword
                </label>
                <input
                  id="program-keyword"
                  type="search"
                  autoComplete="off"
                  placeholder="e.g. MBA, B.Tech, Law…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full mt-1 bg-white text-black border border-gray-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm outline-none focus:ring-2 focus:ring-[#ff8c42]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#ff8c42] hover:bg-[#e67a32] text-white py-2.5 md:py-3 rounded-xl flex items-center justify-center gap-2 transition shadow-md text-sm md:text-base font-semibold"
                >
                  Search
                  <Search size={18} aria-hidden />
                </button>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-4 border-t border-white/20 pt-4 text-center text-xs text-blue-100 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left md:text-sm">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
                <Link
                  href="/international/apply"
                  className="hover:text-white transition"
                >
                  How to apply
                </Link>
                <span className="hidden sm:inline text-white/30" aria-hidden>
                  |
                </span>
                <Link href="/contact" className="hover:text-white transition">
                  Contact admissions
                </Link>
              </div>
              <Link
                href="/international/apply"
                className="block w-full font-semibold tracking-wide text-[#ff8c42] transition hover:text-orange-300 sm:inline sm:w-auto sm:text-right"
              >
                Apply now →
              </Link>
            </div>

            {hasQuery ? (
              <div
                id="course-search-results"
                className="mt-6 pt-4 border-t border-white/20"
              >
                <p className="text-blue-100 text-sm font-medium mb-3">
                  Results ({results.length})
                </p>
                {results.length === 0 ? (
                  <p
                    className="text-blue-200/80 text-sm"
                    role="status"
                    aria-live="polite"
                  >
                    No programmes match your search. Try another keyword or
                    level.
                  </p>
                ) : (
                  <ul className="max-h-[min(420px,50vh)] overflow-y-auto pr-1 -mr-1">
                    {results.map((course) => (
                      <ResultRow
                        key={`${course.schoolSlug}-${course.courseSlug}`}
                        course={course}
                      />
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}

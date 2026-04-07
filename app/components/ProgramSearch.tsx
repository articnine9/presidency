"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { createPortal } from "react-dom";
import {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
  useLayoutEffect,
} from "react";
import {
  applyUrlForCourse,
  getAllCourses,
  programmeSearchResults,
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

function ResultRow({ course }: { course: CourseSearchItem }) {
  return (
    <li className="rounded-xl border border-gray-200/90 bg-white p-4 shadow-sm ring-1 ring-black/[0.04]">
      <div className="flex flex-col gap-3">
        <div className="min-w-0 shrink-0 space-y-2">
          <div className="flex items-start gap-2">
            <p className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-gray-900 sm:text-sm">
              {course.name}
            </p>
            {course.type ? (
              <span
                className={`shrink-0 self-start text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-md ${typeBadgeClassLight(course.type)}`}
              >
                {course.type}
              </span>
            ) : null}
          </div>
          <p className="text-xs leading-relaxed text-gray-600 line-clamp-2">
            {course.schoolName}
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap items-stretch gap-2 border-t border-gray-100 pt-3 sm:flex-nowrap">
          <Link
            href={course.href}
            className="inline-flex min-h-[38px] min-w-0 flex-1 items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-center text-xs font-medium text-gray-800 transition hover:border-gray-400 hover:bg-gray-50 sm:flex-1 sm:max-w-[50%]"
          >
            View programme
          </Link>
          <Link
            href={applyUrlForCourse(course.name)}
            className="inline-flex min-h-[38px] min-w-0 flex-1 items-center justify-center rounded-lg bg-[#ff8c42] px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-[#e6762f] sm:flex-1 sm:max-w-[50%]"
          >
            Apply
          </Link>
        </div>
      </div>
    </li>
  );
}

function typeBadgeClassLight(type: string): string {
  switch (type) {
    case "UG":
      return "bg-[#0A8F96]/15 text-[#0A8F96]";
    case "PG":
      return "bg-orange-100 text-orange-800";
    case "PhD":
      return "bg-violet-100 text-violet-800";
    case "Diploma":
      return "bg-slate-100 text-slate-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

type DropdownPos = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
};

export function ProgramSearch() {
  const [query, setQuery] = useState("");
  const [level, setLevel] = useState<ProgramLevel>("all");
  const [programmeOpen, setProgrammeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropPos, setDropPos] = useState<DropdownPos>({
    top: 0,
    left: 0,
    width: 360,
    maxHeight: 440,
  });
  const programmeWrapRef = useRef<HTMLDivElement>(null);
  const programmeListRef = useRef<HTMLUListElement>(null);
  const dropdownPanelRef = useRef<HTMLDivElement>(null);

  const allCourses = useMemo(() => getAllCourses(), []);

  const results = useMemo(
    () => programmeSearchResults(allCourses, query, level, 40),
    [allCourses, query, level],
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const updateDropdownPosition = useCallback(() => {
    const wrap = programmeWrapRef.current;
    if (!wrap) return;
    const r = wrap.getBoundingClientRect();
    const minW = 288;
    const maxW = Math.min(typeof window !== "undefined" ? window.innerWidth - 32 : 600, 36 * 16);
    let width = Math.max(r.width, minW);
    width = Math.min(width, maxW);
    let left = r.left;
    const vw = typeof window !== "undefined" ? window.innerWidth : 800;
    const vh = typeof window !== "undefined" ? window.innerHeight : 600;
    if (left + width > vw - 16) left = vw - 16 - width;
    if (left < 16) left = 16;
    const top = r.bottom + 8;
    const maxHeight = Math.max(200, Math.min(440, vh - top - 16));
    setDropPos({ top, left, width, maxHeight });
  }, []);

  useLayoutEffect(() => {
    if (!programmeOpen) return;
    updateDropdownPosition();
    const onMove = () => updateDropdownPosition();
    window.addEventListener("scroll", onMove, true);
    window.addEventListener("resize", onMove);
    return () => {
      window.removeEventListener("scroll", onMove, true);
      window.removeEventListener("resize", onMove);
    };
  }, [programmeOpen, updateDropdownPosition]);

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      const t = e.target as Node;
      if (programmeWrapRef.current?.contains(t)) return;
      if (dropdownPanelRef.current?.contains(t)) return;
      setProgrammeOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (programmeOpen && programmeListRef.current) {
      programmeListRef.current.scrollTop = 0;
    }
  }, [programmeOpen, query, level]);

  const scrollProgrammePanelIntoView = useCallback(() => {
    programmeWrapRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setProgrammeOpen(true);
    scrollProgrammePanelIntoView();
  };

  const dropdownPortal =
    mounted &&
    programmeOpen &&
    typeof document !== "undefined" &&
    createPortal(
      <div
        ref={dropdownPanelRef}
        id="programme-results-dropdown"
        style={{
          position: "fixed",
          top: dropPos.top,
          left: dropPos.left,
          width: dropPos.width,
          maxHeight: dropPos.maxHeight,
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
        className="rounded-2xl border border-gray-200/90 bg-white text-left shadow-[0_16px_48px_rgba(15,30,61,0.22)] ring-1 ring-black/5"
        role="region"
        aria-label="Programme search results"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-white/10 bg-gradient-to-r from-[#1e3a5f] to-[#2a5080] px-4 py-3">
          <p className="text-sm font-semibold tracking-tight text-white">
            Results
          </p>
          <span className="inline-flex min-w-[2rem] items-center justify-center rounded-full bg-white px-2.5 py-1 text-xs font-bold tabular-nums text-[#1e3a5f] shadow-sm">
            {results.length}
          </span>
        </div>
        {results.length === 0 ? (
          <p
            className="px-4 py-8 text-center text-sm text-gray-500"
            role="status"
          >
            No programmes match. Try another keyword or level.
          </p>
        ) : (
          <ul
            ref={programmeListRef}
            className="min-h-0 flex-1 space-y-3 overflow-y-auto scroll-py-2 overscroll-contain bg-[#eef0f4] p-3 [scrollbar-gutter:stable]"
          >
            {results.map((course) => (
              <ResultRow
                key={`${course.schoolSlug}-${course.courseSlug}`}
                course={course}
              />
            ))}
          </ul>
        )}
        <div className="shrink-0 border-t border-gray-200 bg-gray-50 px-3 py-2.5">
          <p className="text-[11px] leading-relaxed text-gray-600">
            <span className="font-semibold text-gray-800">Next on this page:</span>{" "}
            About Presidency, then rankings and accreditation, the schools
            slider, and the full programmes list — scroll the page to explore
            after you choose a programme.
          </p>
        </div>
      </div>,
      document.body,
    );

  return (
    <section
      className="relative w-full min-w-0 overflow-x-clip bg-[#F5F6F8] px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-24"
      aria-labelledby="course-search-heading"
    >
      <div className="max-w-[1400px] mx-auto">
        <form onSubmit={handleSearch}>
          <div className="overflow-visible bg-[#1e3a5f] text-white border border-[#2c5a87] rounded-2xl md:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] p-4 sm:p-6 md:p-8">
            <div className="grid overflow-visible sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:items-end">
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

              <div
                className="relative z-20 min-w-0 overflow-visible sm:min-w-[12rem]"
                ref={programmeWrapRef}
              >
                <label
                  htmlFor="program-combo"
                  className="text-xs md:text-sm text-blue-200"
                >
                  Programme
                </label>
                <input
                  id="program-combo"
                  type="search"
                  autoComplete="off"
                  aria-expanded={programmeOpen}
                  aria-controls="programme-results-dropdown"
                  placeholder="Type to narrow results…"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setProgrammeOpen(true);
                  }}
                  onFocus={() => setProgrammeOpen(true)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setProgrammeOpen(false);
                  }}
                  className="w-full mt-1 bg-white text-black border border-gray-200 rounded-xl px-3 md:px-4 py-2.5 md:py-3 text-sm outline-none focus:ring-2 focus:ring-[#ff8c42]"
                />
                {dropdownPortal}
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

          </div>
        </form>
      </div>
    </section>
  );
}

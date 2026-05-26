"use client";

import { Phone, Mail, Globe, Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { getAllCourses, filterCourses } from "@/lib/course-search";
import type { CourseSearchItem } from "@/lib/course-search";

/* pre-load all courses once (client-side, runs after hydration) */
let _cache: CourseSearchItem[] | null = null;
function getCached() {
  if (!_cache) _cache = getAllCourses();
  return _cache;
}

const TYPE_COLOR: Record<string, string> = {
  UG:      "bg-blue-50 text-blue-600",
  PG:      "bg-purple-50 text-purple-600",
  Diploma: "bg-amber-50 text-amber-600",
};

export function TopBar() {
  const router = useRouter();
  const [query, setQuery]       = useState("");
  const [open, setOpen]         = useState(false);
  const wrapRef                 = useRef<HTMLDivElement>(null);
  const inputRef                = useRef<HTMLInputElement>(null);

  /* ── compute results ── */
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return filterCourses(getCached(), query, "all", { maxSearch: 8 });
  }, [query]);

  /* ── close on outside click ── */
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── keyboard: Escape closes ── */
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (results.length > 0) {
        router.push(results[0].href);
        setQuery("");
        setOpen(false);
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
    setOpen(true);
  }

  function handleSelect(href: string) {
    router.push(href);
    setQuery("");
    setOpen(false);
  }

  function clearSearch() {
    setQuery("");
    setOpen(false);
    inputRef.current?.focus();
  }

  return (
    <div className="hidden md:block bg-[#1e3a5f] text-white text-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-2 flex justify-between items-center">

        {/* LEFT — contact info */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+91 9022092222</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>admission@presidency.international</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-6">

          {/* 🔍 SEARCH */}
          <div ref={wrapRef} className="relative">
            <div className="flex items-center bg-white/10 hover:bg-white/15 transition-colors rounded-md px-2 py-1 gap-1">
              <Search size={14} className="text-white/70 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search programmes…"
                value={query}
                onChange={handleChange}
                onFocus={() => query.trim() && setOpen(true)}
                onKeyDown={onKeyDown}
                className="bg-transparent outline-none px-2 text-white placeholder:text-white/60 text-sm w-[160px] focus:w-[200px] transition-all duration-200"
              />
              {query && (
                <button onClick={clearSearch} className="text-white/60 hover:text-white transition-colors">
                  <X size={13} />
                </button>
              )}
            </div>

            {/* ── DROPDOWN ── */}
            {open && query.trim() && (
              <div className="absolute right-0 top-full mt-2 w-[380px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[9999]">

                {results.length > 0 ? (
                  <>
                    <div className="px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                        Programmes
                      </span>
                      <span className="text-xs text-gray-400">
                        {results.length} result{results.length !== 1 ? "s" : ""}
                      </span>
                    </div>

                    <ul className="max-h-[320px] overflow-y-auto divide-y divide-gray-50">
                      {results.map((item) => (
                        <li key={item.href}>
                          <button
                            onClick={() => handleSelect(item.href)}
                            className="w-full flex items-start gap-3 px-4 py-3 hover:bg-[#F0F9FA] text-left transition-colors group"
                          >
                            {/* type badge */}
                            <span
                              className={`mt-0.5 flex-shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                                TYPE_COLOR[item.type] ?? "bg-gray-100 text-gray-500"
                              }`}
                            >
                              {item.type || "—"}
                            </span>

                            {/* text */}
                            <div className="flex-1 min-w-0">
                              <p className="text-[13px] font-medium text-[#0F1E3D] leading-snug group-hover:text-[#0A8F96] transition-colors truncate">
                                {item.name}
                              </p>
                              <p className="text-[11px] text-gray-400 mt-0.5 truncate">
                                {item.schoolName}
                              </p>
                            </div>

                            <ArrowRight
                              size={14}
                              className="flex-shrink-0 mt-1 text-gray-300 group-hover:text-[#0A8F96] transition-colors"
                            />
                          </button>
                        </li>
                      ))}
                    </ul>

                    {/* footer */}
                    <div className="px-4 py-2.5 border-t border-gray-100 bg-gray-50">
                      <Link
                        href={`/schools/computer-science`}
                        onClick={() => { setQuery(""); setOpen(false); }}
                        className="flex items-center justify-between text-xs text-[#0A8F96] font-medium hover:underline"
                      >
                        Browse all programmes
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <p className="text-sm text-gray-500">
                      No programmes found for{" "}
                      <span className="font-medium text-[#0F1E3D]">"{query}"</span>
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Try searching by school name or degree type
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* 🌍 INTERNATIONAL */}
          <Link
            href="/international/overview"
            className="flex items-center gap-1 hover:underline"
          >
            <Globe size={14} />
            International
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ArrowRight, GraduationCap, BookOpen, Rocket, X } from "lucide-react";
import { H1, H4 } from "@/app/components/Headings";
import { getAllCourses, applyUrlForCourse } from "@/lib/course-search";

/* ─── school display names & order ─── */
const SCHOOL_ORDER = [
  { slug: "computer-science",      label: "Computer Science & Engineering" },
  { slug: "engineering",           label: "Engineering" },
  { slug: "information-science",   label: "Information Science" },
  { slug: "management",            label: "Management" },
  { slug: "commerce",              label: "Commerce" },
  { slug: "design",                label: "Design" },
  { slug: "law",                   label: "Law" },
  { slug: "media",                 label: "Media Studies" },
  { slug: "liberal-arts-science",  label: "Liberal Arts & Sciences" },
  { slug: "health",                label: "Health Sciences" },
];

export default function UGProgrammesPage() {
  const [query, setQuery]           = useState("");
  const [activeSchool, setActiveSchool] = useState("all");

  /* ─── get only UG courses ─── */
  const ugCourses = useMemo(
    () => getAllCourses().filter((c) => c.type === "UG"),
    [],
  );

  /* ─── schools that actually have UG programmes ─── */
  const schools = useMemo(() => {
    const slugsWithUG = new Set(ugCourses.map((c) => c.schoolSlug));
    return [
      { slug: "all", label: "All Schools" },
      ...SCHOOL_ORDER.filter((s) => slugsWithUG.has(s.slug)),
    ];
  }, [ugCourses]);

  /* ─── filtered list ─── */
  const filtered = useMemo(() => {
    let list = ugCourses;
    if (activeSchool !== "all") list = list.filter((c) => c.schoolSlug === activeSchool);
    const q = query.trim().toLowerCase();
    if (q) list = list.filter((c) => c.name.toLowerCase().includes(q) || c.schoolName.toLowerCase().includes(q));
    return list;
  }, [ugCourses, activeSchool, query]);

  /* ─── group by school for "all" view ─── */
  const grouped = useMemo(() => {
    if (activeSchool !== "all") return null;
    const map = new Map<string, { label: string; courses: typeof filtered }>();
    for (const s of SCHOOL_ORDER) {
      const courses = filtered.filter((c) => c.schoolSlug === s.slug);
      if (courses.length) map.set(s.slug, { label: s.label, courses });
    }
    return map;
  }, [filtered, activeSchool]);

  return (
    <div className="min-h-screen bg-white">

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#f5f7fa] py-3">
        <div className="mx-auto flex max-w-[1400px] flex-wrap px-4 text-xs text-gray-600 md:px-6 md:text-sm">
          <span><Link href="/" className="hover:text-[#0A8F96] transition">Home</Link></span>
          <span className="mx-2 text-gray-400">›</span>
          <span>Schools</span>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-[#0A8F96] font-medium">Undergraduate Programmes</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden min-h-[860px] md:min-h-screen">
        {/* Background */}
        <img
          src="/img/degree-program.jpeg"
          alt="Undergraduate Programmes"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Mobile overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C33]/95 via-[#081C33]/55 to-black/20 md:hidden" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[860px] max-w-[1400px] flex-col justify-end px-4 pb-8 pt-28 md:h-full md:min-h-screen md:justify-center md:px-14 md:pb-0">
          <div className="max-w-[560px]">
            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <H1 className="text-white tracking-tight">
                Undergraduate
                <br />
                <span className="italic font-light">Programmes</span>
              </H1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-[520px] text-[13px] leading-8 text-white/80 md:text-base md:leading-relaxed"
            >
              {ugCourses.length}+ undergraduate degrees across 10 schools — from engineering and
              management to design, law, health sciences, and the arts.
            </motion.p>

            {/* Button */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-7">
              <Link
                href="/international/apply"
                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#0097A7] text-sm font-medium text-white transition-all duration-300 hover:bg-[#00b7c9] md:inline-flex md:w-auto md:rounded-md md:px-6"
              >
                HOW TO APPLY <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile Stats */}
          <div className="mt-5 flex flex-col gap-3 md:hidden">
            {[
              { value: `${ugCourses.length}+`, label: "UG Programmes" },
              { value: "10",   label: "Schools" },
              { value: "4 Yr", label: "Avg. Duration" },
              { value: "100%", label: "Placement Support" },
            ].map((stat, index) => {
              const icons = [<BookOpen size={18} />, <GraduationCap size={18} />, <Rocket size={18} />, <BookOpen size={18} />];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/30 bg-white/10 px-4 py-4 backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A8B5]/20 text-[#35C0C8]">
                    {icons[index]}
                  </div>
                  <div>
                    <H4 className="leading-none text-[#D4A843]">{stat.value}</H4>
                    <p className="mt-1 text-[12px] text-white/75">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop Stats */}
          <div className="mt-16 hidden flex-wrap gap-5 md:flex">
            {[
              { value: `${ugCourses.length}+`, label: "UG Programmes" },
              { value: "10",   label: "Schools" },
              { value: "4 Yr", label: "Avg. Duration" },
              { value: "100%", label: "Placement Support" },
            ].map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + index * 0.1 }}
                className="w-[180px] rounded-xl border border-white/20 bg-white/10 px-6 py-7 text-center text-white backdrop-blur-md">
                <H4 className="text-4xl text-[#D4A843]">{stat.value}</H4>
                <p className="mt-2 text-sm text-white/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEARCH + FILTERS ── */}
      <div className="sticky top-[64px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-3 flex flex-col sm:flex-row gap-3 items-start sm:items-center">

          {/* Search */}
          <div className="relative w-full sm:w-72 shrink-0">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search programmes…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-9 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0A8F96] focus:ring-1 focus:ring-[#0A8F96]/20 bg-white"
            />
            {query && (
              <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <X size={14} />
              </button>
            )}
          </div>

          {/* School tabs */}
          <div className="flex gap-2 overflow-x-auto pb-0.5 scrollbar-hide w-full">
            {schools.map((s) => (
              <button
                key={s.slug}
                onClick={() => setActiveSchool(s.slug)}
                className={`shrink-0 px-4 py-2 rounded-lg text-xs transition-all ${
                  activeSchool === s.slug
                    ? "bg-[#0A8F96] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── RESULTS COUNT ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 pt-8 pb-2">
        <p className="text-sm text-gray-500">
          Showing <span className="text-[#0A8F96]">{filtered.length}</span> programme{filtered.length !== 1 ? "s" : ""}
          {activeSchool !== "all" && (
            <span> in <span className="text-[#1e3a5f]">{schools.find((s) => s.slug === activeSchool)?.label}</span></span>
          )}
          {query && <span> matching "<span className="text-[#1e3a5f]">{query}</span>"</span>}
        </p>
      </div>

      {/* ── PROGRAMME CARDS ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-6 pb-20">

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <GraduationCap size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No programmes match your search.</p>
            <button onClick={() => { setQuery(""); setActiveSchool("all"); }} className="mt-4 text-[#0A8F96] text-sm hover:underline">
              Clear filters
            </button>
          </div>
        ) : grouped ? (
          /* Grouped by school */
          <div className="space-y-12">
            {[...grouped.entries()].map(([slug, { label, courses }]) => (
              <div key={slug}>
                {/* School heading */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-1 h-6 rounded-full bg-[#0A8F96]" />
                    <h2 className="text-lg text-[#1e3a5f]">{label}</h2>
                    <span className="text-xs bg-[#0A8F96]/10 text-[#0A8F96] px-2.5 py-1 rounded-full">{courses.length}</span>
                  </div>
                  <Link href={`/schools/${slug}`} className="text-xs text-[#0A8F96] hover:underline flex items-center gap-1">
                    View School <ArrowRight size={12} />
                  </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {courses.map((course) => (
                    <ProgramCard key={`${course.schoolSlug}-${course.courseSlug}`} course={course} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Flat grid for single-school filter */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((course) => (
              <ProgramCard key={`${course.schoolSlug}-${course.courseSlug}`} course={course} />
            ))}
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#0F1E3D] to-[#0D3B5C] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Start Your
            <span className="block text-[#0A8F96] italic">Undergraduate Journey?</span>
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-xl mx-auto">
            Apply now or talk to our admissions team to find the right programme for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/international/apply"
              className="inline-flex items-center justify-center gap-2 bg-[#0A8F96] hover:bg-[#087e84] text-white px-8 py-3.5 rounded-xl transition-all"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-3.5 rounded-xl hover:bg-white/10 transition-all"
            >
              Talk to Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Programme Card ─── */
function ProgramCard({ course }: { course: ReturnType<typeof getAllCourses>[number] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      {/* Top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#0A8F96] to-[#0BB5B5]" />

      <div className="flex flex-col flex-1 p-5">
        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-[#0A8F96]/10 flex items-center justify-center mb-4 text-[#0A8F96]">
          <BookOpen size={18} />
        </div>

        {/* Name */}
        <h3 className="text-[15px] text-[#1e3a5f] leading-snug mb-2 flex-1">
          {course.name}
        </h3>

        {/* School */}
        <p className="text-xs text-gray-400 mb-4">{course.schoolName}</p>

        {/* Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link
            href={course.href}
            className="flex-1 text-center text-xs border border-[#0A8F96] text-[#0A8F96] py-2 rounded-lg hover:bg-[#0A8F96]/10 transition"
          >
            View
          </Link>
          <Link
            href={applyUrlForCourse(course.name)}
            className="flex-1 text-center text-xs bg-[#0A8F96] text-white py-2 rounded-lg hover:bg-[#087e84] transition"
          >
            Apply
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

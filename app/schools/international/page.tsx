"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Globe,
  X,
  Users,
  Award,
  MapPin,
  FileText,
} from "lucide-react";
import { H1, H4 } from "@/app/components/Headings";
import { getAllCourses, applyUrlForCourse } from "@/lib/course-search";

/* ─── school display names & order ─── */
const SCHOOL_ORDER = [
  { slug: "computer-science",     label: "Computer Science & Engineering" },
  { slug: "engineering",          label: "Engineering" },
  { slug: "information-science",  label: "Information Science" },
  { slug: "management",           label: "Management" },
  { slug: "commerce",             label: "Commerce" },
  { slug: "design",               label: "Design" },
  { slug: "law",                  label: "Law" },
  { slug: "media",                label: "Media Studies" },
  { slug: "liberal-arts-science", label: "Liberal Arts & Sciences" },
  { slug: "health",               label: "Health Sciences" },
];

const LEVEL_TABS = [
  { value: "all", label: "All Levels" },
  { value: "UG",  label: "Undergraduate" },
  { value: "PG",  label: "Postgraduate" },
  { value: "PhD", label: "Doctoral" },
];

const WHY_STUDY = [
  {
    icon: <Award size={22} />,
    title: "NAAC A+ Accredited",
    desc: "Recognised by UGC and approved by AICTE — quality assured.",
  },
  {
    icon: <Users size={22} />,
    title: "Diverse Community",
    desc: "Students from 40+ countries on a vibrant multicultural campus.",
  },
  {
    icon: <Globe size={22} />,
    title: "English-Medium Instruction",
    desc: "All programmes taught in English with global industry alignment.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Silicon Valley of India",
    desc: "Bangalore — India's tech hub with unmatched career opportunities.",
  },
  {
    icon: <FileText size={22} />,
    title: "Scholarship Support",
    desc: "Merit-based scholarships available for international students.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "OIA Dedicated Desk",
    desc: "End-to-end visa, accommodation, and arrival support.",
  },
];

export default function InternationalProgrammesPage() {
  const [query,       setQuery]       = useState("");
  const [activeLevel, setActiveLevel] = useState("all");
  const [activeSchool, setActiveSchool] = useState("all");

  /* ─── all courses ─── */
  const allCourses = useMemo(() => getAllCourses(), []);

  /* ─── schools that have at least one course ─── */
  const schools = useMemo(() => {
    const slugs = new Set(allCourses.map((c) => c.schoolSlug));
    return [
      { slug: "all", label: "All Schools" },
      ...SCHOOL_ORDER.filter((s) => slugs.has(s.slug)),
    ];
  }, [allCourses]);

  /* ─── filtered list ─── */
  const filtered = useMemo(() => {
    let list = allCourses;
    if (activeLevel  !== "all") list = list.filter((c) => c.type === activeLevel);
    if (activeSchool !== "all") list = list.filter((c) => c.schoolSlug === activeSchool);
    const q = query.trim().toLowerCase();
    if (q) list = list.filter(
      (c) => c.name.toLowerCase().includes(q) || c.schoolName.toLowerCase().includes(q),
    );
    return list;
  }, [allCourses, activeLevel, activeSchool, query]);

  /* ─── group by school for "all school" view ─── */
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
          <span className="font-medium text-[#0A8F96]">International Programmes</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-[860px] w-full overflow-hidden md:min-h-screen">
        {/* Background */}
        <img
          src="/img/international-students-bg.jpeg"
          alt="International Programmes at Presidency University"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081C33]/95 via-[#081C33]/50 to-black/15 md:hidden" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[860px] max-w-[1400px] flex-col justify-end px-4 pb-8 pt-28 md:h-full md:min-h-screen md:justify-center md:px-14 md:pb-0">
          <div className="max-w-[580px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0A8F96]/40 bg-[#0A8F96]/20 px-4 py-1.5 text-xs text-[#5ee3e3] backdrop-blur-sm"
            >
              <Globe size={13} />
              Open to students from all countries
            </motion.div>

            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
              <H1 className="text-white tracking-tight">
                International
                <br />
                <span className="font-light italic">Programmes</span>
              </H1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 max-w-[520px] text-[13px] leading-8 text-white/80 md:text-base md:leading-relaxed"
            >
              {allCourses.length}+ programmes across 10 schools, fully open to international students.
              Study in Bangalore — India's tech capital — with English-medium instruction,
              merit scholarships, and dedicated OIA support.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-7 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/international/apply"
                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#0097A7] text-sm font-medium text-white transition-all duration-300 hover:bg-[#00b7c9] sm:w-auto sm:px-7"
              >
                HOW TO APPLY <ArrowRight size={16} />
              </Link>
              <Link
                href="/international/overview"
                className="flex h-[52px] w-full items-center justify-center gap-2 rounded-xl border border-white/30 text-sm text-white backdrop-blur-sm transition hover:bg-white/10 sm:w-auto sm:px-7"
              >
                Study in India Guide
              </Link>
            </motion.div>
          </div>

          {/* Mobile Stats */}
          <div className="mt-5 flex flex-col gap-3 md:hidden">
            {[
              { value: `${allCourses.length}+`, label: "Programmes" },
              { value: "10",  label: "Schools" },
              { value: "40+", label: "Countries" },
              { value: "100%", label: "English Medium" },
            ].map((stat, index) => {
              const icons = [<BookOpen size={18} key={0} />, <GraduationCap size={18} key={1} />, <Globe size={18} key={2} />, <Award size={18} key={3} />];
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
              { value: `${allCourses.length}+`, label: "Programmes" },
              { value: "10",  label: "Schools" },
              { value: "40+", label: "Countries" },
              { value: "100%", label: "English Medium" },
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

      {/* ── WHY STUDY HERE ── */}
      <section className="bg-[#f5f9fa] py-14 md:py-20">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#0A8F96]">Why Presidency?</p>
            <h2 className="mt-2 text-2xl text-[#1e3a5f] md:text-3xl">
              Your Global Education Starts Here
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_STUDY.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A8F96]/10 text-[#0A8F96]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#1e3a5f]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <div className="border-b border-gray-100 bg-white py-6">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 md:px-10">
          <div className="flex flex-wrap gap-3">
            <span className="self-center text-xs font-semibold uppercase tracking-wide text-gray-400">Quick Links:</span>
            {[
              { label: "Study in India Overview", href: "/international/overview" },
              { label: "UG Programmes", href: "/international/ug" },
              { label: "PG Programmes", href: "/international/pg" },
              { label: "Research & PhD", href: "/international/phd" },
              { label: "Scholarships", href: "/international/scholarships" },
              { label: "How to Apply", href: "/international/apply" },
              { label: "Contact OIA", href: "/contact" },
              { label: "FAQ", href: "/international/faq" },
            ].map((l, i) => (
              <Link
                key={i}
                href={l.href}
                className="inline-flex items-center gap-1 rounded-full border border-[#0A8F96]/30 bg-[#0A8F96]/5 px-4 py-1.5 text-xs text-[#0A8F96] transition hover:bg-[#0A8F96]/15"
              >
                {l.label} <ArrowRight size={10} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── SEARCH + FILTERS ── */}
      <div className="sticky top-[64px] z-40 border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto max-w-[1400px] px-4 py-3 sm:px-6 md:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

            {/* Search */}
            <div className="relative w-full shrink-0 sm:w-72">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search programmes…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-9 text-sm focus:border-[#0A8F96] focus:outline-none focus:ring-1 focus:ring-[#0A8F96]/20"
              />
              {query && (
                <button onClick={() => setQuery("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Level filter */}
            <div className="flex gap-2 overflow-x-auto pb-0.5">
              {LEVEL_TABS.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setActiveLevel(t.value)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-xs transition-all ${
                    activeLevel === t.value
                      ? "bg-[#1e3a5f] text-white shadow-sm"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* School tabs */}
            <div className="flex gap-2 overflow-x-auto pb-0.5">
              {schools.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => setActiveSchool(s.slug)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-xs transition-all ${
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
      </div>

      {/* ── RESULTS COUNT ── */}
      <div className="mx-auto max-w-[1400px] px-4 pb-2 pt-8 sm:px-6 md:px-10">
        <p className="text-sm text-gray-500">
          Showing <span className="text-[#0A8F96]">{filtered.length}</span> programme{filtered.length !== 1 ? "s" : ""}
          {activeLevel !== "all" && (
            <span> at <span className="text-[#1e3a5f]">{LEVEL_TABS.find((t) => t.value === activeLevel)?.label}</span> level</span>
          )}
          {activeSchool !== "all" && (
            <span> in <span className="text-[#1e3a5f]">{schools.find((s) => s.slug === activeSchool)?.label}</span></span>
          )}
          {query && <span> matching "<span className="text-[#1e3a5f]">{query}</span>"</span>}
        </p>
      </div>

      {/* ── PROGRAMME CARDS ── */}
      <div className="mx-auto max-w-[1400px] px-4 py-6 pb-20 sm:px-6 md:px-10">
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-gray-400">
            <GraduationCap size={40} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg">No programmes match your search.</p>
            <button
              onClick={() => { setQuery(""); setActiveLevel("all"); setActiveSchool("all"); }}
              className="mt-4 text-sm text-[#0A8F96] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : grouped ? (
          /* Grouped by school */
          <div className="space-y-12">
            {[...grouped.entries()].map(([slug, { label, courses }]) => (
              <div key={slug}>
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1 rounded-full bg-[#0A8F96]" />
                    <h2 className="text-lg text-[#1e3a5f]">{label}</h2>
                    <span className="rounded-full bg-[#0A8F96]/10 px-2.5 py-1 text-xs text-[#0A8F96]">{courses.length}</span>
                  </div>
                  <Link href={`/schools/${slug}`} className="flex items-center gap-1 text-xs text-[#0A8F96] hover:underline">
                    View School <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {courses.map((course) => (
                    <ProgramCard key={`${course.schoolSlug}-${course.courseSlug}`} course={course} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Flat grid for single-school filter */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((course) => (
              <ProgramCard key={`${course.schoolSlug}-${course.courseSlug}`} course={course} />
            ))}
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <section className="bg-gradient-to-r from-[#0F1E3D] to-[#0D4F55] px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Globe size={36} className="mx-auto mb-4 text-[#0A8F96]" />
          <h2 className="mb-4 text-3xl text-white md:text-4xl">
            Ready to Study in
            <span className="block italic text-[#0A8F96]">India's Silicon Valley?</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-white/70">
            Our Office of International Affairs (OIA) provides end-to-end support — from
            visa guidance and scholarships to accommodation and campus orientation.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/international/apply"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A8F96] px-8 py-3.5 text-white transition-all hover:bg-[#087e84]"
            >
              Apply Now <ArrowRight size={18} />
            </Link>
            <Link
              href="/international/overview"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-white transition-all hover:bg-white/10"
            >
              Learn More About OIA
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── Programme Card ─── */
function ProgramCard({ course }: { course: ReturnType<typeof getAllCourses>[number] }) {
  const levelColor: Record<string, string> = {
    UG:      "from-[#0A8F96] to-[#0BB5B5]",
    PG:      "from-[#D4A843] to-[#e8c06a]",
    PhD:     "from-[#6b4f9a] to-[#9370c8]",
    Diploma: "from-[#c45c2d] to-[#e07840]",
  };
  const accentColor = levelColor[course.type] ?? "from-[#0A8F96] to-[#0BB5B5]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
    >
      {/* Top accent — colour-coded by level */}
      <div className={`h-1 w-full bg-gradient-to-r ${accentColor}`} />

      <div className="flex flex-1 flex-col p-5">
        {/* Level badge */}
        <span className={`mb-3 self-start rounded-md bg-gradient-to-r ${accentColor} px-2 py-0.5 text-[10px] font-semibold text-white`}>
          {course.type}
        </span>

        {/* Name */}
        <h3 className="mb-2 flex-1 text-[15px] leading-snug text-[#1e3a5f]">
          {course.name}
        </h3>

        {/* School */}
        <p className="mb-4 text-xs text-gray-400">{course.schoolName}</p>

        {/* Buttons */}
        <div className="mt-auto flex gap-2">
          <Link
            href={course.href}
            className="flex-1 rounded-lg border border-[#0A8F96] py-2 text-center text-xs text-[#0A8F96] transition hover:bg-[#0A8F96]/10"
          >
            View
          </Link>
          <Link
            href={applyUrlForCourse(course.name)}
            className="flex-1 rounded-lg bg-[#0A8F96] py-2 text-center text-xs text-white transition hover:bg-[#087e84]"
          >
            Apply
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

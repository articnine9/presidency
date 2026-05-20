"use client";

import Link from "next/link";
import {
  BookOpen,
  Cpu,
  Database,
  Shield,
  Brain,
  Network,
  Code,
  ArrowRight,
} from "lucide-react";

/* ---------------- TYPES ---------------- */

type Program = {
  slug: string;
  name: string;
  duration: string;
  type: string;
  label?: string;
};

type Section = {
  type: string;
  title: string;
  subtitle?: string;
  labels?: string[];
};

type ProgramListProps = {
  programs: Program[];
  slug: string;
  sections: Section[];
};

/* ---------------- COMPONENT ---------------- */

export default function ProgramList({
  programs,
  slug,
  sections,
}: ProgramListProps) {
  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6 space-y-12">
        {sections.map((section) => {
          // Filter programs dynamically
          const items = programs.filter((p) => {
            if (section.type === "PhD") {
              return p.type === "PhD" || p.type === "Diploma";
            }
            return p.type === section.type;
          });

          if (!items.length) return null;

          return (
            <div key={section.type}>
              {/* TITLE */}
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-5">
                {section.title}
              </h2>

              {/* SUBTITLE */}
              {section.subtitle && (
                <p className="text-xl text-gray-500 mb-10">
                  {section.subtitle}
                </p>
              )}

              {/* CONTENT */}
              {/* {section.type === "PhD" ? (
                <div className="grid md:grid-cols-2 gap-4">
                  {items.map((program) => (
                    <Link
                      key={program.slug}
                      href={`/schools/${slug}/${program.slug}`}
                      className="bg-[#e5f0f2] hover:bg-[#E9ECEF] border border-gray-200 rounded-lg p-4 text-sm hover:shadow-sm transition"
                    >
                      <p className="text-lg font-medium text-gray-800">
                        {program.name}
                      </p>
                      <p className="text-gray-500 text-base mt-1">
                        {program.duration}
                      </p>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {items.map((program) => (
                    <ProgramRow
                      key={program.slug}
                      program={program}
                      slug={slug}
                    />
                  ))}
                </div>
              )} */}
              {/* CONTENT */}
              {section.labels && section.labels.length > 0 ? (
                <div className="space-y-8">
                  {section.labels.map((label) => {
                    const labelPrograms = items.filter(
                      (p) => p.label === label,
                    );

                    if (!labelPrograms.length) return null;

                    return (
                      <div key={label}>
                        {/* LABEL TITLE */}
                        <p className="text-lg font-medium text-gray-800 mb-5">
                          {label}
                        </p>

                        {/* PROGRAM LIST */}
                        {section.type === "PhD" ? (
                          <div className="grid md:grid-cols-2 gap-4">
                            {labelPrograms.map((program) => (
                              <Link
                                key={program.slug}
                                href={`/schools/${slug}/${program.slug}`}
                                className="bg-[#e5f0f2] hover:bg-[#E9ECEF] border border-gray-200 rounded-lg p-4 text-sm hover:shadow-sm transition"
                              >
                                <p className="text-lg font-medium text-gray-800">
                                  {program.name}
                                </p>
                                <p className="text-gray-500 text-base mt-1">
                                  {program.duration}
                                </p>
                              </Link>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-2 mb-12">
                            {labelPrograms.map((program) => (
                              <ProgramRow
                                key={program.slug}
                                program={program}
                                slug={slug}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                // ✅ OLD UI (NO LABELS)
                <>
                  {section.type === "PhD" ? (
                    <div className="grid md:grid-cols-2 gap-4">
                      {items.map((program) => (
                        <Link
                          key={program.slug}
                          href={`/schools/${slug}/${program.slug}`}
                          className="bg-[#e5f0f2] hover:bg-[#E9ECEF] border border-gray-200 rounded-lg p-4 text-sm hover:shadow-sm transition"
                        >
                          <p className="text-lg font-medium text-gray-800">
                            {program.name}
                          </p>
                          <p className="text-gray-500 text-base mt-1">
                            {program.duration}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {items.map((program) => (
                        <ProgramRow
                          key={program.slug}
                          program={program}
                          slug={slug}
                        />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
        <div className="bg-gradient-to-r from-[#0F1E3D] to-[#0D3B5C] rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif text-white">
              Your Next Move{" "}
              <span className="text-teal-400 italic">Awaits</span>
            </h2>

            <p className="text-gray-300 mt-2 text-sm md:text-base">
              Begin an extraordinary journey at Presidency University,
              Bengaluru.
            </p>
          </div>

          {/* Button */}
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            APPLY NOW →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ROW COMPONENT ---------------- */

function ProgramRow({ program, slug }: { program: Program; slug: string }) {
  return (
    <Link
      href={`/schools/${slug}/${program.slug}`}
      className="
        group
        flex items-center justify-between
        rounded-2xl
        bg-[#DDE6E7]
        px-5 py-5
        transition-all duration-300
        hover:bg-[#d4dfe0]
      "
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        {/* ICON BOX */}
        <div
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            bg-white
            shadow-sm
          "
        >
          {getProgramIcon(program.name)}
        </div>

        {/* TEXT */}
        <div>
          <h3 className="text-[15px] font-semibold text-[#183153]">
            {program.name}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            {program.duration} . Full-Time
          </p>
        </div>
      </div>

      {/* RIGHT ARROW */}
      <div
        className="
    text-[#0097A7]
    transition-transform duration-300
    group-hover:translate-x-1
  "
      >
        <ArrowRight size={20} strokeWidth={2.2} />
      </div>
    </Link>
  );
}

/* ---------------- ICON LOGIC ---------------- */

function getProgramIcon(name: string) {
  const lower = name.toLowerCase();

  if (lower.includes("ai") || lower.includes("ml"))
    return <Brain size={16} className="text-[#1E3A5F]" />;

  if (lower.includes("data"))
    return <Database size={16} className="text-[#1E3A5F]" />;

  if (lower.includes("cyber"))
    return <Shield size={16} className="text-[#1E3A5F]" />;

  if (lower.includes("iot") || lower.includes("network"))
    return <Network size={16} className="text-[#1E3A5F]" />;

  if (lower.includes("devops") || lower.includes("cloud"))
    return <Cpu size={16} className="text-[#1E3A5F]" />;

  if (lower.includes("engineering") || lower.includes("cse"))
    return <Code size={16} className="text-[#1E3A5F]" />;

  return <BookOpen size={16} className="text-[#1E3A5F]" />;
}

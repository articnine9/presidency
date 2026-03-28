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
      </div>
    </section>
  );
}

/* ---------------- ROW COMPONENT ---------------- */

function ProgramRow({ program, slug }: { program: Program; slug: string }) {
  return (
    <Link
      href={`/schools/${slug}/${program.slug}`}
      className="flex items-center justify-between bg-[#e5f0f2] hover:bg-[#E9ECEF] px-4 py-3 rounded-md transition"
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* ICON */}
        <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center shadow-sm">
          {getProgramIcon(program.name)}
        </div>

        <span className="text-lg font-medium text-gray-800">
          {program.name}
        </span>
      </div>

      {/* RIGHT BADGE */}
      <span className="text-lg bg-white border border-gray-200 px-3 py-1 rounded-lg text-gray-600">
        {program.duration}
      </span>
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

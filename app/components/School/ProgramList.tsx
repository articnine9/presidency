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
type Program = {
  slug: string;
  name: string;
  duration: string;
  type: string;
};

type ProgramListProps = {
  programs: Program[];
  slug: string;
};

export default function ProgramList({ programs, slug }: ProgramListProps) {
  // Group programs
  const grouped = {
    UG: programs.filter((p) => p.type === "UG"),
    PG: programs.filter((p) => p.type === "PG"),
    PhD: programs.filter((p) => p.type === "PhD" || p.type === "Diploma"),
  };

  return (
    <section className="py-16 bg-[#F6F7FB]">
      <div className="max-w-[1400px] mx-auto px-6 space-y-10">
        {/* UG */}
        {grouped.UG.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
              Undergraduate Programmes
            </h2>
            <p className="text-xl text-gray-500 mb-10">
              B.Tech — 4-Year Full-Time
            </p>

            <div className="space-y-2">
              {grouped.UG.map((program) => (
                <ProgramRow key={program.slug} program={program} slug={slug} />
              ))}
            </div>
          </div>
        )}

        {/* PG */}
        {grouped.PG.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
              Postgraduate Programmes
            </h2>
            <p className="text-xl text-gray-500 mb-10">
              M.Tech — 2-Year Full-Time
            </p>

            <div className="space-y-2">
              {grouped.PG.map((program) => (
                <ProgramRow key={program.slug} program={program} slug={slug} />
              ))}
            </div>
          </div>
        )}

        {/* Research */}
        {grouped.PhD.length > 0 && (
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-10">
              Research & Diploma
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {grouped.PhD.map((program) => (
                <Link
                  key={program.slug}
                  href={`/schools/${slug}/${program.slug}`}
                  className=" bg-[#e5f0f2] hover:bg-[#E9ECEF] border border-gray-200 rounded-lg p-4 text-sm hover:shadow-sm"
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
          </div>
        )}
      </div>
    </section>
  );
}

function ProgramRow({ program, slug }: any) {
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
      <span className="text-lg bg-white border border-gray-200 px-3 py-1 rounded-full text-gray-600">
        {program.duration}
      </span>
    </Link>
  );
}
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

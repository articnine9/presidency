import schoolsData from "@/data/schools.json";

export type CourseSearchItem = {
  schoolSlug: string;
  schoolName: string;
  courseSlug: string;
  name: string;
  type: string;
  href: string;
};

type RawProgram = {
  slug?: string;
  name?: string;
  type?: string;
};

function isProgramRecord(
  p: unknown,
): p is RawProgram & { slug: string; name: string } {
  return (
    typeof p === "object" &&
    p !== null &&
    "slug" in p &&
    "name" in p &&
    typeof (p as RawProgram).slug === "string" &&
    typeof (p as RawProgram).name === "string"
  );
}

export type ProgramLevel = "all" | "UG" | "PG" | "PhD" | "Diploma";

export function getAllCourses(): CourseSearchItem[] {
  const out: CourseSearchItem[] = [];
  const seen = new Set<string>();

  for (const school of schoolsData.schools) {
    if (!school.programs || !Array.isArray(school.programs)) continue;
    for (const p of school.programs) {
      if (!isProgramRecord(p)) continue;
      const key = `${school.slug}/${p.slug}`;
      if (seen.has(key)) continue;
      seen.add(key);
      out.push({
        schoolSlug: school.slug,
        schoolName: school.name,
        courseSlug: p.slug,
        name: p.name,
        type: p.type ?? "",
        href: `/schools/${school.slug}/${p.slug}`,
      });
    }
  }
  return out;
}

export function filterCourses(
  courses: CourseSearchItem[],
  query: string,
  level: ProgramLevel,
  opts?: { maxSearch?: number },
): CourseSearchItem[] {
  const maxSearch = opts?.maxSearch ?? 40;
  let list = courses;
  if (level !== "all") {
    list = list.filter((c) => c.type === level);
  }
  const q = query.trim().toLowerCase();
  if (!q) {
    return [];
  }
  return list
    .filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.schoolName.toLowerCase().includes(q) ||
        c.courseSlug.toLowerCase().includes(q.replace(/\s+/g, "-")),
    )
    .slice(0, maxSearch);
}

export function applyUrlForCourse(courseName: string): string {
  const params = new URLSearchParams();
  params.set("program", courseName);
  return `/international/apply?${params.toString()}`;
}

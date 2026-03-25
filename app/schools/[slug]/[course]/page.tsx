import data from "@/data/schools.json";
import { notFound } from "next/navigation";

// Components
import CourseHero from "@/app/components/Course/CourseHero";
import CourseQuickBar from "@/app/components/Course/CourseQuickBar";
import CourseOverview from "@/app/components/Course/CourseOverview";
import CourseTabs from "@/app/components/Course/CourseTabs"; // ✅ NEW
import CourseUSP from "@/app/components/Course/CourseUSP";
import CourseCareers from "@/app/components/Course/CourseCareers";
import CourseFAQ from "@/app/components/Course/CourseFAQ";
import CourseCTA from "@/app/components/Course/CourseCTA";
import CourseCurriculum from "@/app/components/Course/CourseCurriculum";
import CourseOutcomes from "@/app/components/Course/CourseOutcomes";

type Params = {
  slug: string;
  course: string;
};

export default async function CoursePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug, course } = await params;

  const school = data.schools.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!school) return notFound();

  const selectedCourse = school.programs.find(
    (p) => p.slug.toLowerCase() === course.toLowerCase(),
  );

  if (!selectedCourse) return notFound();

  return (
    <main>
      {/* 🔥 HERO */}
      <CourseHero data={selectedCourse} school={school} />

      {/* QUICK INFO */}
      {/* <CourseQuickBar data={selectedCourse} school={school} /> */}

      {/* OVERVIEW */}
      <CourseOverview data={selectedCourse} />
      <CourseCurriculum data={selectedCourse} />
      <CourseOutcomes data={selectedCourse} />
      {/* 🔥 TABS (NEW SECTION) */}
      {/* <CourseTabs data={selectedCourse} /> */}

      {/* USP */}
      <CourseUSP data={selectedCourse} />

      {/* CAREERS */}
      <CourseCareers data={selectedCourse} />

      {/* FAQ */}
      <CourseFAQ data={selectedCourse} />
      <CourseCTA />
    </main>
  );
}

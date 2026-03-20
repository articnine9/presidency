import data from "@/data/schools.json";
import { notFound } from "next/navigation";

// Components
import SchoolHero from "@/app/components/School/SchoolHero";
import SchoolAbout from "@/app/components/School/SchoolAbout";
import VisionMissionSection from "@/app/components/School/VisionMissionSection";
import SchoolProgramsPreview from "@/app/components/School/SchoolProgramsPreview";
import SchoolProgramsTable from "@/app/components/School/SchoolProgramsTable";
import ProgramList from "@/app/components/School/ProgramList";
import SchoolFAQ from "@/app/components/School/SchoolFAQ";
// import SchoolCTA from "@/app/components/School/SchoolCTA";

type Params = {
  slug: string;
};

export default async function SchoolPage({
  params,
}: {
  params: Promise<Params>;
}) {
  // ✅ unwrap params (Next.js 15 fix)
  const { slug } = await params;

  // ✅ find school
  const school = data.schools.find(
    (s) => s.slug.toLowerCase() === slug.toLowerCase(),
  );

  if (!school) return notFound();

  return (
    <main className="bg-white">
      {/* 🔥 HERO */}
      {school.hero && <SchoolHero data={school.hero} />}

      {/* 🏫 ABOUT */}
      {school.about && <SchoolAbout data={school.about as any} />}
      {school.visionMission && (
        <VisionMissionSection data={school.visionMission} />
      )}
      {/* 🎓 PROGRAM PREVIEW */}
      {/* {school.programPreview && (
        <SchoolProgramsPreview data={school.programPreview} />
      )} */}

      {/* 📊 PROGRAM TABLE */}
      {/* {school.programTable && (
        <SchoolProgramsTable data={school.programTable} />
      )} */}

      {/* 📚 ALL PROGRAMS */}
      {school.programs?.length > 0 && (
        <ProgramList programs={school.programs} slug={school.slug} />
      )}

      {/* ❓ FAQ (future) */}
      {school.faq && <SchoolFAQ data={school} />}

      {/* 🚀 CTA (future) */}
      {/* {school.cta && <SchoolCTA data={school.cta} />} */}
    </main>
  );
}

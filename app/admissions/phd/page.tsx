import schoolsData from "@/data/schools-eng.json";
import PhDHero        from "./components/PhDHero";
import PhDOverview    from "./components/PhDOverview";
import PhDSchools     from "./components/PhDSchools";
import PhDEligibility from "./components/PhDEligibility";
import PhDProcess     from "./components/PhDProcess";
import PhDSupport     from "./components/PhDSupport";
import PhDApplyForm   from "./components/PhDApplyForm";

/* Pull every school that has a phdSummary */
const schools = (schoolsData.schools as any[])
  .filter((s) => !!s.phdSummary)
  .map((s) => ({
    name:       s.name,
    slug:       s.slug,
    phdSummary: s.phdSummary,
  }));

export default function PhDAdmissionsPage() {
  return (
    <main className="bg-white">
      <PhDHero />
      <PhDOverview />
      <PhDSchools schools={schools} />
      <PhDEligibility />
      <PhDProcess />
      <PhDSupport />
      <PhDApplyForm />
    </main>
  );
}

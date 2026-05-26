/**
 * restructure-phd.js
 *
 * For each school in data/schools.json:
 *   1. Collects all PhD programs and builds a compact `phdSummary` object.
 *   2. Removes those PhD programs from `programs[]`.
 *   3. Removes the PhD entry from `programSections[]`.
 *   4. Writes the result back to schools.json AND copies to schools-eng.json.
 */

const fs   = require('fs');
const path = require('path');

const SRC  = path.join(__dirname, 'data/schools.json');
const DEST = path.join(__dirname, 'data/schools-eng.json');
const data = JSON.parse(fs.readFileSync(SRC, 'utf8'));

/* ── school-level research area overrides (used if highlights are missing) ─ */
const RESEARCH_AREAS = {
  'computer-science':    ['Artificial Intelligence', 'Machine Learning', 'Cyber Security', 'Data Science', 'Cloud Computing', 'Blockchain'],
  'engineering':         ['Electronics & Communication', 'Mechanical Systems', 'Civil Infrastructure', 'Petroleum Engineering', 'Renewable Energy', 'Smart Systems'],
  'information-science': ['Data Science', 'Cloud Computing', 'Database Systems', 'Software Engineering', 'AI & ML', 'Network Security'],
  'management':          ['Strategic Management', 'Marketing Analytics', 'Financial Management', 'HR & OB', 'Operations Research', 'Business Analytics'],
  'commerce':            ['Accounting & Finance', 'Taxation', 'Corporate Governance', 'Auditing', 'Financial Markets', 'Business Economics'],
  'design':              ['Communication Design', 'Product Design', 'UX & Interaction Design', 'Fashion & Textiles', 'Sustainable Design', 'Design Theory'],
  'law':                 ['Corporate Law', 'Intellectual Property', 'Constitutional Law', 'International Law', 'Criminal Justice', 'Legal Theory'],
  'media':               ['Journalism Studies', 'Digital Media', 'Film & Media Theory', 'Advertising', 'AR/VR Storytelling', 'Media Ethics'],
  'liberal-arts':        ['Political Science', 'Sociology', 'History', 'Psychology', 'International Relations', 'Cultural Studies'],
  'health':              ['Physiotherapy', 'Nursing Sciences', 'Occupational Therapy', 'Medical Lab Technology', 'Healthcare Management', 'Rehabilitation Science'],
};

/* ── default eligibility text ── */
const DEFAULT_ELIGIBILITY =
  "Master's degree (or equivalent) with minimum 55% aggregate marks. Candidates must clear the university's entrance examination and research aptitude interview.";

let schoolsProcessed = 0;
let programsRemoved  = 0;

data.schools.forEach(school => {
  const phdPrograms = school.programs.filter(p => p.type === 'PhD');
  if (!phdPrograms.length) {
    console.log(`  ⚠️  No PhD programs found for: ${school.slug}`);
    return;
  }

  const firstPhD = phdPrograms[0];

  /* ── description: prefer hero.description, then overview[0] ── */
  let description = '';
  if (firstPhD.hero && firstPhD.hero.description) {
    description = firstPhD.hero.description.trim();
  } else if (Array.isArray(firstPhD.overview) && firstPhD.overview.length) {
    description = firstPhD.overview[0].trim();
  }
  if (!description) {
    description = `Pursue original research under expert faculty mentorship at Presidency University. Our doctoral programme provides rigorous academic training, state-of-the-art facilities, and an active research community to help scholars make meaningful contributions to their fields.`;
  }

  /* ── research areas: collect from highlights across all PhD programs ── */
  let researchAreas = [];
  phdPrograms.forEach(p => {
    if (Array.isArray(p.highlights)) {
      p.highlights.forEach(h => {
        if (h && h.title && !researchAreas.includes(h.title)) {
          researchAreas.push(h.title);
        }
      });
    }
  });
  if (researchAreas.length < 3) {
    researchAreas = RESEARCH_AREAS[school.slug] || researchAreas;
  }
  researchAreas = researchAreas.slice(0, 8); // cap at 8

  /* ── eligibility ── */
  let eligibility = DEFAULT_ELIGIBILITY;
  if (firstPhD.eligibility && firstPhD.eligibility.description) {
    // Only use if it's a proper PhD eligibility statement (not an UG copy-paste)
    const raw = firstPhD.eligibility.description;
    if (raw.toLowerCase().includes("master") || raw.toLowerCase().includes("pg") || raw.toLowerCase().includes("postgrad")) {
      eligibility = raw.trim();
    }
  }

  /* ── program names list ── */
  const programNames = phdPrograms.map(p => p.name);

  /* ── build phdSummary ── */
  school.phdSummary = {
    title:        "Ph.D. Research Programme",
    degree:       "Doctor of Philosophy",
    duration:     "3–5 Years",
    description,
    programmes:   programNames,
    researchAreas,
    eligibility,
    applyHref:    "/admissions/phd",
  };

  /* ── remove PhD programs from programs[] ── */
  const before = school.programs.length;
  school.programs = school.programs.filter(p => p.type !== 'PhD');
  const removed = before - school.programs.length;
  programsRemoved += removed;

  /* ── remove PhD entry from programSections[] ── */
  if (Array.isArray(school.programSections)) {
    school.programSections = school.programSections.filter(s => s.type !== 'PhD');
  }

  schoolsProcessed++;
  console.log(`✅ ${school.name}: removed ${removed} PhD program(s), added phdSummary`);
});

/* ── write both files ── */
const json = JSON.stringify(data, null, 2);
fs.writeFileSync(SRC,  json, 'utf8');
fs.writeFileSync(DEST, json, 'utf8');

console.log(`\n✅ Done.`);
console.log(`   Schools processed : ${schoolsProcessed}`);
console.log(`   PhD programs removed: ${programsRemoved}`);
console.log(`💾 Saved: data/schools.json + data/schools-eng.json`);

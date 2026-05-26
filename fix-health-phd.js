const fs   = require('fs');
const path = require('path');

const SRC  = path.join(__dirname, 'data/schools.json');
const DEST = path.join(__dirname, 'data/schools-eng.json');
const data = JSON.parse(fs.readFileSync(SRC, 'utf8'));

const health = data.schools.find(s => s.slug === 'health');
if (!health) { console.error('Health school not found'); process.exit(1); }

// Find PhD/Doctoral programs
const phdPrograms = health.programs.filter(p => p.type === 'PhD' || p.type === 'Doctoral' || p.slug.startsWith('phd-'));
console.log('Found PhD/Doctoral programs:', phdPrograms.map(p => p.slug));

if (!phdPrograms.length) { console.log('Nothing to do'); process.exit(0); }

const firstPhD = phdPrograms[0];

const description = (firstPhD.hero && firstPhD.hero.description)
  ? firstPhD.hero.description.trim()
  : 'Pursue original research in health sciences under expert clinical faculty mentorship. Our doctoral programme provides rigorous academic training, clinical research infrastructure, and active partnerships with leading healthcare institutions.';

const researchAreas = [
  'Physiotherapy & Rehabilitation',
  'Nursing Sciences',
  'Occupational Therapy',
  'Medical Laboratory Science',
  'Clinical Health Research',
  'Healthcare Management',
];

health.phdSummary = {
  title:        'Ph.D. Research Programme',
  degree:       'Doctor of Philosophy',
  duration:     '3–5 Years',
  description,
  programmes:   phdPrograms.map(p => p.name),
  researchAreas,
  eligibility:  "Master's degree in a relevant health science discipline with minimum 55% marks. Candidates must clear the university's entrance examination and research aptitude interview.",
  applyHref:    '/admissions/phd',
};

health.programs = health.programs.filter(p => p.type !== 'PhD' && p.type !== 'Doctoral' && !p.slug.startsWith('phd-'));

if (Array.isArray(health.programSections)) {
  health.programSections = health.programSections.filter(s => s.type !== 'PhD' && s.type !== 'Doctoral');
}

const json = JSON.stringify(data, null, 2);
fs.writeFileSync(SRC,  json, 'utf8');
fs.writeFileSync(DEST, json, 'utf8');

console.log('✅ Health school PhD fixed');
console.log('💾 Saved both files');

const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(__dirname, 'data/schools.json');
const data = JSON.parse(fs.readFileSync(schoolsPath, 'utf8'));

// Function to create sections based on program types in a school
function createProgramSections(programs) {
  const types = new Set();
  programs.forEach(p => types.add(p.type));

  const sections = [];

  // Order: UG, PG, PhD
  if (types.has('UG')) {
    sections.push({
      type: 'UG',
      title: 'Undergraduate Programmes',
      subtitle: 'Build strong foundations in your field of interest'
    });
  }

  if (types.has('PG')) {
    sections.push({
      type: 'PG',
      title: 'Postgraduate Programmes',
      subtitle: 'Advance your expertise with specialized studies'
    });
  }

  if (types.has('PhD')) {
    sections.push({
      type: 'PhD',
      title: 'Doctoral & Diploma Programmes',
      subtitle: 'Pursue research and specialized professional training'
    });
  }

  return sections;
}

// Add programSections to all schools
let schoolsUpdated = 0;
data.schools.forEach(school => {
  if (!school.programSections || school.programSections.length === 0) {
    school.programSections = createProgramSections(school.programs);
    schoolsUpdated++;
    console.log(`✅ Added programSections to ${school.name}`);
  }
});

// Write back to file
fs.writeFileSync(schoolsPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`\n✅ Successfully added programSections to ${schoolsUpdated} schools`);
console.log(`💾 Updated: data/schools.json`);

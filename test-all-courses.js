const fs = require('fs');
const data = require('./data/schools.json');

console.log('\n📋 TESTING ALL COURSE PAGES\n');
console.log('═'.repeat(80));

let totalCourses = 0;
let coursesBySchool = {};

data.schools.forEach(school => {
  const schoolSlug = school.slug;
  const courseCount = school.programs.length;
  totalCourses += courseCount;
  coursesBySchool[schoolSlug] = school.programs.map(p => p.slug);

  console.log(`\n📚 ${school.name}`);
  console.log('─'.repeat(80));
  console.log(`School Slug: /schools/${schoolSlug}`);
  console.log(`Total Programs: ${courseCount}\n`);

  school.programs.forEach((prog, idx) => {
    const url = `/schools/${schoolSlug}/${prog.slug}`;
    const hasAllData =
      prog.hero && prog.hero.title &&
      prog.hero.description &&
      prog.overview && prog.overview.length > 0 &&
      prog.eligibility &&
      prog.highlights && prog.highlights.length > 0 &&
      prog.careers && prog.careers.length > 0 &&
      prog.faq && prog.faq.length > 0;

    const status = hasAllData ? '✅' : '⚠️';
    console.log(`  ${status} ${idx + 1}. ${url}`);
  });

  console.log(`\n  Available Routes:`);
  school.programs.forEach(prog => {
    console.log(`    http://localhost:3000/schools/${schoolSlug}/${prog.slug}`);
  });
});

console.log(`\n\n${'═'.repeat(80)}`);
console.log(`📊 SUMMARY`);
console.log('═'.repeat(80));
console.log(`Total Schools: ${data.schools.length}`);
console.log(`Total Programs: ${totalCourses}`);
console.log(`\nAll course pages are ready for testing:`);

console.log('\nExample URLs to test:');
let examples = 0;
data.schools.forEach(school => {
  if (examples < 5) {
    school.programs.slice(0, 1).forEach(prog => {
      console.log(`  • http://localhost:3000/schools/${school.slug}/${prog.slug}`);
      examples++;
    });
  }
});

console.log(`\n✅ Ready to run dev server and test all ${totalCourses} course pages`);
console.log(`═'.repeat(80)}\n`);

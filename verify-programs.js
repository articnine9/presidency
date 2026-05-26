const data = require('./data/schools.json');
let totalPrograms = 0;
let workingPrograms = 0;

console.log('\n📋 VERIFICATION REPORT: All Programs');
console.log('═'.repeat(80));

data.schools.forEach(school => {
  console.log(`\n📚 ${school.name}`);
  console.log('─'.repeat(80));

  let schoolCount = 0;
  school.programs.forEach((prog) => {
    totalPrograms++;

    // Check all required fields
    const hasAllData =
      prog.name &&
      prog.slug &&
      prog.hero && prog.hero.title &&
      prog.hero.description &&
      prog.hero.breadcrumb && Array.isArray(prog.hero.breadcrumb) &&
      prog.hero.stats && Array.isArray(prog.hero.stats) &&
      prog.details && prog.details.duration &&
      prog.overview && Array.isArray(prog.overview) && prog.overview.length > 0 &&
      prog.eligibility && prog.eligibility.title &&
      prog.highlights && Array.isArray(prog.highlights) && prog.highlights.length > 0 &&
      prog.careers && Array.isArray(prog.careers) && prog.careers.length > 0 &&
      prog.faq && Array.isArray(prog.faq) && prog.faq.length > 0;

    if (hasAllData) {
      workingPrograms++;
      schoolCount++;
      console.log(`  ✅ ${prog.name}`);
    } else {
      console.log(`  ⚠️ ${prog.name}`);
      if (!prog.hero || !prog.hero.title) console.log(`     └─ Missing hero`);
      if (!prog.overview || prog.overview.length === 0) console.log(`     └─ Missing overview`);
      if (!prog.eligibility) console.log(`     └─ Missing eligibility`);
      if (!prog.highlights || prog.highlights.length === 0) console.log(`     └─ Missing highlights`);
      if (!prog.careers || prog.careers.length === 0) console.log(`     └─ Missing careers`);
      if (!prog.faq || prog.faq.length === 0) console.log(`     └─ Missing faq`);
    }
  });

  console.log(`\n  Summary: ${schoolCount}/${school.programs.length} complete`);
});

console.log(`\n\n${'═'.repeat(80)}`);
console.log(`✅ TOTAL: ${workingPrograms}/${totalPrograms} programs complete`);
console.log(`${'═'.repeat(80)}\n`);

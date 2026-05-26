const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(__dirname, 'data/schools.json');
const data = JSON.parse(fs.readFileSync(schoolsPath, 'utf8'));

// For each school, provide meaningful string-based overview paragraphs
const overviewMap = {
  'computer-science': [
    'The School of Computer Science & Engineering offers industry-aligned programmes that blend theoretical foundations with hands-on application. Students gain deep expertise in algorithms, software engineering, and emerging technologies.',
    'With state-of-the-art labs and partnerships with leading tech companies, graduates are prepared for careers in AI, cloud computing, cybersecurity, and beyond. Our curriculum is continuously updated to match the evolving demands of the global tech industry.',
  ],
  'engineering': [
    'The School of Engineering delivers rigorous technical education across a broad range of disciplines including Electronics, Mechanical, Civil, and Petroleum Engineering. Our programmes emphasize design thinking, problem-solving, and real-world application.',
    'Students benefit from advanced laboratories, industry internships, and research collaborations that prepare them for impactful careers in core engineering and emerging sectors such as renewable energy and smart infrastructure.',
  ],
  'information-science': [
    'The School of Information Science prepares students for the data-driven future through programmes in BCA, BCA AI/ML, BCA Data Science, and MCA. The curriculum combines software skills with analytical thinking.',
    'Students gain expertise in database management, cloud technologies, and software architecture through project-based learning and industry partnerships with leading IT organizations.',
  ],
  'management': [
    'The School of Management offers dynamic programmes in business administration, MBA, and specialized management tracks. Students develop strategic thinking, leadership ability, and a global business mindset.',
    'Through case studies, industry projects, and international exposure, students are equipped to lead organizations, drive innovation, and excel in competitive corporate environments.',
  ],
  'commerce': [
    'The School of Commerce provides comprehensive education in accounting, finance, taxation, and business economics. Students may pursue integrated tracks with CA, ACCA, CMA, and other professional qualifications.',
    'Our graduates are equipped with practical financial skills and theoretical knowledge to excel as chartered accountants, financial analysts, auditors, and corporate finance professionals.',
  ],
  'design': [
    'The School of Design nurtures creative talent through programmes spanning Communication Design, Fashion Design, Product Design, Game Design, and Fine Arts. Students learn to solve complex problems through design thinking.',
    'Equipped with industry-standard tools and mentored by accomplished designers, students build strong portfolios and develop the creative confidence to lead in studios, agencies, and enterprises worldwide.',
  ],
  'law': [
    'The School of Law offers integrated five-year programmes (BA LLB, BBA LLB) and postgraduate degrees (LL.M) designed to develop well-rounded legal professionals with strong advocacy and analytical skills.',
    'Students engage in moot court competitions, internships at law firms and courts, and research projects that provide real-world exposure to legal practice across corporate, criminal, and public interest law.',
  ],
  'media': [
    'The School of Media Studies offers diverse programmes in Journalism, Mass Communication, Film Production, Digital Storytelling, and AR/VR Media. Students are trained in both traditional and emerging media formats.',
    'State-of-the-art production studios, digital editing suites, and partnerships with leading media houses provide students with hands-on experience and the professional network to launch their media careers.',
  ],
  'liberal-arts': [
    'The School of Liberal Arts & Sciences offers an interdisciplinary education that cultivates critical thinking, cultural awareness, and strong communication skills. Students explore subjects spanning humanities, social sciences, and natural sciences.',
    'Graduates are well-positioned for careers in civil services, policy research, education, NGOs, and the corporate sector — fields that value the versatile, analytical mindset that a liberal arts education develops.',
  ],
  'health': [
    'The School of Health Sciences trains the next generation of healthcare professionals through programmes in Physiotherapy, Nursing, Occupational Therapy, and Medical Laboratory Technology. The curriculum combines clinical training with evidence-based practice.',
    'Students gain extensive hands-on experience at affiliated hospitals and healthcare facilities, developing the competency and compassion needed to provide high-quality patient care and advance health outcomes.',
  ],
};

// Per-program overrides for common program types
function getProgramOverview(program, schoolSlug) {
  const schoolOverview = overviewMap[schoolSlug];
  if (!schoolOverview) return overviewMap['computer-science'];

  // Customize first paragraph to mention the specific program name
  return [
    `The ${program.name} programme at Presidency University offers a comprehensive curriculum designed to build strong foundations and industry-relevant skills. Students gain both theoretical knowledge and practical expertise through project-based learning and industry engagement.`,
    schoolOverview[1],
  ];
}

let fixed = 0;
data.schools.forEach(school => {
  school.programs.forEach(program => {
    // Check if overview is array of objects (wrong format)
    const needsFix = !program.overview ||
      !Array.isArray(program.overview) ||
      program.overview.length === 0 ||
      (program.overview.length > 0 && typeof program.overview[0] === 'object');

    if (needsFix) {
      program.overview = getProgramOverview(program, school.slug);
      fixed++;
    }
  });
});

fs.writeFileSync(schoolsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅ Fixed overview format for ${fixed} programs`);
console.log(`💾 Updated: data/schools.json`);

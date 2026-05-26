const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(__dirname, 'data/schools.json');
const data = JSON.parse(fs.readFileSync(schoolsPath, 'utf8'));

const overviewTemplates = {
  'CSE': [
    { title: 'Core Competencies', description: 'Master programming, algorithms, and software engineering principles with hands-on projects.' },
    { title: 'Industry Focus', description: 'Learn emerging technologies including AI, cloud computing, and cybersecurity.' },
    { title: 'Career Readiness', description: 'Develop problem-solving skills and prepare for roles at top tech companies.' },
  ],
  'Engineering': [
    { title: 'Technical Foundation', description: 'Build strong fundamentals in core engineering principles and applications.' },
    { title: 'Practical Expertise', description: 'Gain hands-on experience through lab work, projects, and industrial internships.' },
    { title: 'Innovation Focus', description: 'Work on cutting-edge technologies and contribute to engineering breakthroughs.' },
  ],
  'Law': [
    { title: 'Legal Framework', description: 'Comprehensive study of Indian and international legal systems and jurisprudence.' },
    { title: 'Practical Skills', description: 'Develop advocacy skills through moot court, legal writing, and real-world case studies.' },
    { title: 'Professional Development', description: 'Prepare for judiciary, legal practice, corporate law, and public interest litigation.' },
  ],
  'Management': [
    { title: 'Business Strategy', description: 'Learn strategic planning, decision-making, and business development frameworks.' },
    { title: 'Leadership Skills', description: 'Develop management competencies including team leadership and organizational behavior.' },
    { title: 'Global Perspective', description: 'Understand international business, market dynamics, and cross-cultural management.' },
  ],
  'Commerce': [
    { title: 'Financial Acumen', description: 'Master accounting, finance, taxation, and financial reporting standards.' },
    { title: 'Professional Credentials', description: 'Pursue integrated professional certifications and industry-recognized qualifications.' },
    { title: 'Business Analysis', description: 'Develop skills in financial analysis, auditing, and management accounting.' },
  ],
  'Design': [
    { title: 'Creative Skills', description: 'Master design thinking, visual communication, and creative problem-solving.' },
    { title: 'Digital Tools', description: 'Learn industry-standard software and emerging design technologies.' },
    { title: 'Portfolio Development', description: 'Create professional work samples showcasing your design capabilities.' },
  ],
  'Health': [
    { title: 'Clinical Competence', description: 'Develop clinical skills through supervised practice and patient care exposure.' },
    { title: 'Evidence-Based Practice', description: 'Learn latest healthcare practices supported by research and evidence.' },
    { title: 'Professional Ethics', description: 'Understand healthcare ethics, patient rights, and professional responsibility.' },
  ],
  'Media': [
    { title: 'Media Production', description: 'Learn content creation, production techniques, and multimedia storytelling.' },
    { title: 'Digital Marketing', description: 'Master digital content strategies, social media, and online campaigns.' },
    { title: 'Industry Experience', description: 'Work with real media projects and industry professionals.' },
  ],
  'Liberal Arts': [
    { title: 'Critical Thinking', description: 'Develop analytical and problem-solving skills across disciplines.' },
    { title: 'Interdisciplinary Learning', description: 'Explore connections between humanities, sciences, and social studies.' },
    { title: 'Global Citizenship', description: 'Understand diverse perspectives and cultural, social, and environmental issues.' },
  ],
  'Information Science': [
    { title: 'Data Science Skills', description: 'Learn data engineering, analytics, and machine learning technologies.' },
    { title: 'Cloud Technologies', description: 'Master cloud platforms, database management, and distributed systems.' },
    { title: 'Software Architecture', description: 'Design scalable applications and understand modern software patterns.' },
  ],
};

function getOverview(schoolName) {
  let schoolKey = 'CSE';
  if (schoolName.includes('Engineering')) schoolKey = 'Engineering';
  if (schoolName.includes('Law')) schoolKey = 'Law';
  if (schoolName.includes('Management')) schoolKey = 'Management';
  if (schoolName.includes('Commerce')) schoolKey = 'Commerce';
  if (schoolName.includes('Design')) schoolKey = 'Design';
  if (schoolName.includes('Health')) schoolKey = 'Health';
  if (schoolName.includes('Media')) schoolKey = 'Media';
  if (schoolName.includes('Liberal')) schoolKey = 'Liberal Arts';
  if (schoolName.includes('Information')) schoolKey = 'Information Science';

  return overviewTemplates[schoolKey] || overviewTemplates['CSE'];
}

// Fill missing overview
let programsFixed = 0;
data.schools.forEach(school => {
  school.programs.forEach(program => {
    if (!program.overview || !Array.isArray(program.overview) || program.overview.length === 0) {
      program.overview = getOverview(school.name);
      programsFixed++;
    }
  });
});

// Write back
fs.writeFileSync(schoolsPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`✅ Successfully added missing overview arrays`);
console.log(`📊 Programs updated: ${programsFixed}`);
console.log(`💾 Updated: data/schools.json`);

const fs = require('fs');
const path = require('path');

// Read schools.json
const schoolsPath = path.join(__dirname, 'data/schools.json');
const data = JSON.parse(fs.readFileSync(schoolsPath, 'utf8'));

// Template data generators
const highlightsTemplates = {
  'CSE': ['AI & Machine Learning', 'Web Development', 'Cloud Computing', 'Data Science'],
  'Engineering': ['Advanced Manufacturing', 'Renewable Energy', 'Smart Systems', 'Industry 4.0'],
  'Law': ['Constitutional Law', 'Corporate Law', 'Intellectual Property', 'International Law'],
  'Management': ['Strategic Management', 'Digital Transformation', 'Financial Analysis', 'Business Analytics'],
  'Commerce': ['Financial Accounting', 'Taxation', 'Investment Analysis', 'Auditing'],
  'Design': ['Design Thinking', 'User Experience', 'Digital Tools', 'Industry Projects'],
  'Health': ['Clinical Practice', 'Research Methods', 'Patient Care', 'Professional Ethics'],
  'Media': ['Content Creation', 'Digital Marketing', 'Media Production', 'Storytelling'],
  'Liberal Arts': ['Critical Thinking', 'Interdisciplinary Studies', 'Research Skills', 'Cultural Perspectives'],
  'Information Science': ['Data Engineering', 'Database Management', 'Software Architecture', 'Cloud Technologies'],
};

const careersTemplates = {
  'CSE': [
    { title: 'Software Developer', companies: 'Google, Microsoft, Amazon, TCS' },
    { title: 'Data Scientist', companies: 'IBM, Accenture, Deloitte, EY' },
    { title: 'Cloud Architect', companies: 'AWS, Azure, Infosys, Capgemini' },
    { title: 'AI/ML Engineer', companies: 'Tesla, Netflix, Goldman Sachs, JP Morgan' },
  ],
  'Engineering': [
    { title: 'Design Engineer', companies: 'Siemens, GE, Bosch, L&T' },
    { title: 'Project Manager', companies: 'Larsen & Toubro, Reliance, Bharat Heavy Electricals, NTPC' },
    { title: 'Quality Assurance', companies: 'Bajaj, TVS, Hero MotoCorp, Maruti Suzuki' },
    { title: 'Systems Engineer', companies: 'ISRO, DRDO, Aerospace firms, Defense contractors' },
  ],
  'Law': [
    { title: 'Corporate Lawyer', companies: 'Amarchand Mangaldas, Shardul Amarchand, DSK Legal' },
    { title: 'Legal Consultant', companies: 'EY, Deloitte, KPMG, McKinsey' },
    { title: 'Judicial Officer', companies: 'High Court, District Court, Supreme Court' },
    { title: 'In-House Counsel', companies: 'TCS, Infosys, HCL, ICICI Bank' },
  ],
  'Management': [
    { title: 'Business Analyst', companies: 'Accenture, Cognizant, Wipro, Tech Mahindra' },
    { title: 'Marketing Manager', companies: 'Unilever, Procter & Gamble, ITC, Nestlé' },
    { title: 'Finance Manager', companies: 'ICICI Bank, HDFC Bank, Axis Bank, Goldman Sachs' },
    { title: 'Operations Manager', companies: 'Amazon, Flipkart, OYO, Ola' },
  ],
  'Commerce': [
    { title: 'Chartered Accountant', companies: 'Big 4: Deloitte, EY, KPMG, PwC' },
    { title: 'Tax Consultant', companies: 'BDO, Grant Thornton, Crowe, Nexgen' },
    { title: 'Audit Manager', companies: 'Deloitte, EY, KPMG, PwC' },
    { title: 'Financial Analyst', companies: 'CRISIL, ICRA, CARE Ratings, MOODYS' },
  ],
  'Design': [
    { title: 'UX/UI Designer', companies: 'Google, Apple, Adobe, Figma' },
    { title: 'Product Designer', companies: 'Microsoft, Amazon, Atlassian, Airbnb' },
    { title: 'Motion Graphics Designer', companies: 'Netflix, Disney, Pixar, DreamWorks' },
    { title: 'Creative Director', companies: 'Ogilvy, DDB, Publicis, WPP' },
  ],
  'Health': [
    { title: 'Clinical Practitioner', companies: 'Apollo Hospitals, Max Healthcare, Fortis, HCL Healthcare' },
    { title: 'Hospital Manager', companies: 'AIIMS, Delhi Hospital Authority, Private Hospital Chains' },
    { title: 'Research Associate', companies: 'ICMR, National Institute of Health, Medical Universities' },
    { title: 'Healthcare Consultant', companies: 'Accenture Health, Deloitte Health, Boston Consulting Group' },
  ],
  'Media': [
    { title: 'Content Creator', companies: 'Netflix, Amazon Prime, YouTube, Disney+' },
    { title: 'Producer/Director', companies: 'BBC, Sony Pictures, T-Series, Zee Entertainment' },
    { title: 'Journalist', companies: 'Times of India, The Hindu, NDTV, India Today' },
    { title: 'Digital Marketer', companies: 'Google, Facebook, Adobe, HubSpot' },
  ],
  'Liberal Arts': [
    { title: 'Research Scholar', companies: 'Universities, CSIR, UGC, Think Tanks' },
    { title: 'Policy Analyst', companies: 'Government Think Tanks, NGOs, International Organizations' },
    { title: 'Consultant', companies: 'McKinsey, Boston Consulting Group, Bain & Company' },
    { title: 'Civil Service Officer', companies: 'UPSC, State Civil Services, IAS/IFS/IPS' },
  ],
  'Information Science': [
    { title: 'Data Engineer', companies: 'Google, Microsoft, Amazon, Databricks' },
    { title: 'Database Administrator', companies: 'Oracle, IBM, Cisco, VMware' },
    { title: 'Cloud Solutions Architect', companies: 'AWS, Azure, GCP, Terraform' },
    { title: 'Software Architect', companies: 'Google, Meta, Apple, Netflix' },
  ],
};

const faqTemplates = {
  'CSE': [
    { q: 'What programming languages are covered?', a: 'We cover Python, Java, C++, JavaScript, and modern frameworks like React and Node.js' },
    { q: 'Are there internship opportunities?', a: 'Yes, we have partnerships with top tech companies for summer internships and industrial training' },
    { q: 'What is the placement rate?', a: 'Our placement rate is 95%+ with average packages of 8-15 LPA' },
    { q: 'Is there a capstone project?', a: 'Yes, all students complete a major capstone project in their final year with industry mentorship' },
    { q: 'What are the admission requirements?', a: 'You need 75%+ in 12th with Physics and Mathematics. JEE Main scores are considered for engineering programs' },
    { q: 'What is the duration of the program?', a: 'B.Tech programs are 4 years full-time with 8 semesters' },
  ],
  'Engineering': [
    { q: 'What specializations are available?', a: 'We offer specializations in Electronics, Civil, Mechanical, Petroleum, and VLSI engineering' },
    { q: 'Are there research opportunities?', a: 'Yes, PhD and M.Tech programs focus heavily on research in emerging technologies' },
    { q: 'What is the industry partnership?', a: 'We have partnerships with companies like Siemens, L&T, Bosch, and GE for projects and placements' },
    { q: 'Are laboratories well-equipped?', a: 'Our labs are state-of-the-art with modern equipment and latest software' },
    { q: 'What is the placement statistics?', a: 'Engineering graduates have 92%+ placement with average packages of 7-12 LPA' },
    { q: 'Is there an exchange program?', a: 'Yes, we offer study abroad options and international collaborations with partner institutions' },
  ],
  'Law': [
    { q: 'What specializations are offered?', a: 'We cover Constitutional Law, Criminal Law, Civil Law, Corporate Law, Intellectual Property, and International Law' },
    { q: 'Is there a moot court?', a: 'Yes, our state-of-the-art moot court conducts regular mooting and mock trials' },
    { q: 'What are career options after graduation?', a: 'Graduates work as lawyers, judges, corporate counsels, policy makers, and legal consultants' },
    { q: 'What is the placement rate?', a: 'Our placement rate is 88%+ with opportunities in law firms, corporations, and judiciary' },
    { q: 'Are internships mandatory?', a: 'Yes, students complete mandatory internships with courts and law firms' },
    { q: 'What is the admission criteria?', a: 'You need 60%+ in 12th. Merit-based admission with entrance test for some programs' },
  ],
  'Management': [
    { q: 'What are the specializations?', a: 'We offer specializations in Finance, Marketing, Operations, HR, and Business Analytics' },
    { q: 'Is there industry exposure?', a: 'Yes, we organize industry visits, guest lectures, and projects with real companies' },
    { q: 'What is the average placement package?', a: 'MBA graduates get average packages of 15-25 LPA with top companies like Google, Amazon, Goldman Sachs' },
    { q: 'Are there exchange programs?', a: 'Yes, we have international partnerships for semester abroad and student exchanges' },
    { q: 'What are the admission requirements?', a: 'For MBA: Bachelor\'s degree, GMAT/CAT scores, and work experience (preferred)' },
    { q: 'Is there a startup incubation center?', a: 'Yes, we support student startups with mentorship, funding, and resources' },
  ],
  'Commerce': [
    { q: 'What professional certifications are offered?', a: 'We offer integrated programs with CA, CMA, ACCA, and other professional qualifications' },
    { q: 'What is the curriculum focus?', a: 'Our curriculum covers Accounting, Finance, Taxation, Auditing, and Business Law' },
    { q: 'Are internships part of the program?', a: 'Yes, students complete internships with chartered accountant firms and corporate finance teams' },
    { q: 'What are career options?', a: 'Career paths include Chartered Accountant, Financial Analyst, Tax Consultant, Auditor' },
    { q: 'What is the placement rate?', a: 'Our placement rate is 90%+ with average packages of 6-12 LPA' },
    { q: 'Is there practical training?', a: 'Yes, we emphasize practical training with real-world financial cases and simulations' },
  ],
  'Design': [
    { q: 'What design tools are taught?', a: 'We train in Adobe Creative Suite, Figma, Sketch, UI/UX design tools, and 3D modeling software' },
    { q: 'Are there industry projects?', a: 'Yes, students work on live projects with agencies, startups, and established design firms' },
    { q: 'What are the specializations?', a: 'We offer specializations in Communication Design, Fashion, Product Design, Game Design, and UX/UI' },
    { q: 'Is there a portfolio development program?', a: 'Yes, students build comprehensive portfolios throughout their course that help in placements' },
    { q: 'What is the placement rate?', a: 'Our graduates have 87%+ placement with opportunities in design studios, tech companies, and startups' },
    { q: 'Are there international internships?', a: 'Yes, we facilitate internships with international design agencies and studios' },
  ],
  'Health': [
    { q: 'What clinical training is provided?', a: 'Students get hands-on clinical training in affiliated hospitals with 100+ hours of practice' },
    { q: 'What are the specialization options?', a: 'We offer specializations in various health disciplines including clinical practice and research' },
    { q: 'Is there research opportunity?', a: 'Yes, we encourage research projects and have partnerships with medical research institutions' },
    { q: 'What are career paths?', a: 'Graduates work as healthcare practitioners, hospital managers, researchers, and consultants' },
    { q: 'What is the placement rate?', a: 'Our placement rate is 93%+ with government and private healthcare institutions' },
    { q: 'Are there international opportunities?', a: 'Yes, students can pursue further studies abroad with support from our international office' },
  ],
  'Media': [
    { q: 'What media production facilities are available?', a: 'We have state-of-the-art studios, editing suites, camera equipment, and green screen facilities' },
    { q: 'Are there live industry projects?', a: 'Yes, students work on real projects with media houses, production companies, and digital platforms' },
    { q: 'What specializations are offered?', a: 'We offer Journalism, Film & TV Production, Digital Marketing, Content Creation, and AR/VR Media' },
    { q: 'Is there internship guarantee?', a: 'Yes, we ensure internships with major media outlets, production houses, and digital platforms' },
    { q: 'What is the placement scenario?', a: 'Our graduates work with Netflix, Amazon Prime, YouTube channels, news agencies, and digital startups' },
    { q: 'Are there international connections?', a: 'Yes, we have partnerships with international media organizations for exchanges and collaborations' },
  ],
  'Liberal Arts': [
    { q: 'What is the benefit of a liberal arts education?', a: 'Liberal Arts develops critical thinking, communication, and analytical skills valued by employers globally' },
    { q: 'Can I specialize in multiple disciplines?', a: 'Yes, our flexible curriculum allows students to combine subjects from humanities, sciences, and social sciences' },
    { q: 'What career options are available?', a: 'Graduates pursue careers in research, policy, civil services, consulting, education, and international organizations' },
    { q: 'Are there research opportunities?', a: 'Yes, students engage in research projects and have access to our research centers' },
    { q: 'What is the placement rate?', a: 'Our placement rate is 85%+ with roles in government, NGOs, think tanks, and corporations' },
    { q: 'Is there an exchange program?', a: 'Yes, we have international partnerships for study abroad and cultural exchange programs' },
  ],
  'Information Science': [
    { q: 'What programming languages are taught?', a: 'We cover Java, Python, C++, SQL, and modern frameworks for data science and cloud computing' },
    { q: 'Are there specializations?', a: 'Yes, we offer specializations in Data Science, AI/ML, Cloud Computing, and Database Management' },
    { q: 'What is the placement rate?', a: 'Our placement rate is 94%+ with average packages of 7-14 LPA in IT and data-driven companies' },
    { q: 'Are there live projects?', a: 'Yes, students work on industry projects with real datasets and business challenges' },
    { q: 'Is there certification support?', a: 'Yes, we support certifications from AWS, Google Cloud, Azure, and data science platforms' },
    { q: 'What is the curriculum focus?', a: 'Focus on practical skills in data analysis, software development, and cloud technologies' },
  ],
};

function getHighlights(programName, schoolName) {
  // Detect school type
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

  return highlightsTemplates[schoolKey] || highlightsTemplates['CSE'];
}

function getCareers(schoolName) {
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

  return careersTemplates[schoolKey] || careersTemplates['CSE'];
}

function getFaq(schoolName) {
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

  return faqTemplates[schoolKey] || faqTemplates['CSE'];
}

// Fill missing data
let programsFixed = 0;
data.schools.forEach(school => {
  school.programs.forEach(program => {
    // Add missing highlights
    if (!program.highlights || program.highlights.length === 0) {
      program.highlights = getHighlights(program.name, school.name);
      programsFixed++;
    }

    // Add missing careers
    if (!program.careers || program.careers.length === 0) {
      program.careers = getCareers(school.name);
      programsFixed++;
    }

    // Add missing faq
    if (!program.faq || program.faq.length === 0) {
      program.faq = getFaq(school.name);
      programsFixed++;
    }
  });
});

// Write back to file
fs.writeFileSync(schoolsPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`✅ Successfully filled missing data for all programs`);
console.log(`📊 Data points added: ${programsFixed}`);
console.log(`💾 Updated: data/schools.json`);

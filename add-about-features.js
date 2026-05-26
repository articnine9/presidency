const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(__dirname, 'data/schools.json');
const data = JSON.parse(fs.readFileSync(schoolsPath, 'utf8'));

const schoolFeatures = {
  'computer-science': {
    image: 'img/cse.png',
    features: [
      { title: 'AI & Machine Learning', description: 'Cutting-edge specialisations in AI, deep learning, and intelligent systems.' },
      { title: 'Cloud Computing', description: 'AWS, Azure, and GCP integrated into coursework with hands-on labs.' },
      { title: 'Industry Mentorship', description: 'Mentors from Google, Microsoft, and Amazon guide students year-round.' },
      { title: 'Research Ecosystem', description: 'Active research groups publishing in top-tier international conferences.' },
      { title: 'Newest Research', description: 'Access to cutting-edge journals, R&D labs, and live project environments.' },
      { title: 'Global Exposure', description: 'Study abroad opportunities and international hackathon participation.' },
    ],
  },
  'engineering': {
    image: 'img/school-eng.png',
    features: [
      { title: 'Advanced Laboratories', description: 'State-of-the-art labs for ECE, Mechanical, Civil and Petroleum disciplines.' },
      { title: 'Industry Projects', description: 'Live projects with Siemens, L&T, Bosch, and ONGC through the year.' },
      { title: 'Research Centres', description: 'Dedicated research cells with faculty support for publications and patents.' },
      { title: 'GATE Preparation', description: 'Structured coaching for GATE and PSU recruitment examinations.' },
      { title: 'Expert Faculty', description: 'Faculty with deep industry and academic experience across disciplines.' },
      { title: 'Sustainability Focus', description: 'Curriculum incorporating green engineering, renewables, and smart systems.' },
    ],
  },
  'information-science': {
    image: 'img/cse.png',
    features: [
      { title: 'Cloud Computing', description: 'Deep training in AWS, Azure, GCP and cloud-native development.' },
      { title: 'Industry Mentorship', description: 'Senior professionals from top IT firms mentor students every semester.' },
      { title: 'Newest Research', description: 'Students engage with cutting-edge data science and AI research.' },
      { title: 'Research Ecosystem', description: 'Collaborative research in databases, algorithms, and ML pipelines.' },
      { title: 'Global Certifications', description: 'Integrated pathways to earn internationally recognised IT credentials.' },
      { title: 'Career Pathways', description: 'Structured placement support with leading tech and data companies.' },
    ],
  },
  'management': {
    image: 'img/mang.png',
    features: [
      { title: 'Case-Based Learning', description: 'Harvard-style case studies and business simulations every semester.' },
      { title: 'Industry Immersion', description: 'Corporate visits, live projects, and guest CEO lectures throughout the year.' },
      { title: 'Global Business', description: 'International exposure through exchange programmes and global case studies.' },
      { title: 'Leadership Labs', description: 'Dedicated leadership and personality development sessions.' },
      { title: 'Startup Incubator', description: 'On-campus incubator with funding support for student entrepreneurs.' },
      { title: 'Placement Network', description: 'Active recruiter network spanning consulting, banking, and tech sectors.' },
    ],
  },
  'commerce': {
    image: 'img/mang.png',
    features: [
      { title: 'CA Integration', description: 'Dedicated B.Com + CA Foundation programme for aspiring chartered accountants.' },
      { title: 'ACCA & CMA Tracks', description: 'Integrated international professional qualifications within the degree.' },
      { title: 'Expert Faculty', description: 'Taught by practising CAs, CMAs, and corporate finance professionals.' },
      { title: 'Practical Training', description: 'Real financial data, ERP systems, and audit tools used in coursework.' },
      { title: 'Big 4 Placements', description: 'Consistent placements at Deloitte, EY, KPMG, and PwC every year.' },
      { title: 'Financial Analytics', description: 'Data analytics and fintech modules integrated into commerce degrees.' },
    ],
  },
  'design': {
    image: 'img/media.png',
    features: [
      { title: 'Design Studios', description: 'Professional-grade studios with 3D printing, fabrication, and digital tools.' },
      { title: 'Portfolio Focus', description: 'Every semester builds a professional-grade portfolio for job applications.' },
      { title: 'Live Briefs', description: 'Real client briefs and industry projects throughout the programme.' },
      { title: 'Digital Tools', description: 'Adobe Creative Suite, Figma, Sketch, and emerging design technologies.' },
      { title: 'Global Competitions', description: 'Students participate in national and international design competitions.' },
      { title: 'Creative Network', description: 'Alumni in top studios, tech companies, and fashion houses worldwide.' },
    ],
  },
  'law': {
    image: 'img/law.png',
    features: [
      { title: 'Moot Court', description: 'State-of-the-art moot court for regular advocacy and mock trial practice.' },
      { title: 'Legal Internships', description: 'Mandatory internships at top law firms, courts, and corporates.' },
      { title: 'Judicial Faculty', description: 'Retired judges and senior advocates on the teaching panel.' },
      { title: 'Legal Research', description: 'Access to Westlaw, Manupatra, and SCC Online legal databases.' },
      { title: 'Specialisations', description: 'Electives spanning corporate, IP, criminal, and international law.' },
      { title: 'Bar & Judiciary Prep', description: 'Dedicated coaching for bar exams and judicial services examinations.' },
    ],
  },
  'media': {
    image: 'img/media.png',
    features: [
      { title: 'Production Studios', description: 'Fully equipped TV studios, editing suites, and audio recording rooms.' },
      { title: 'Live Media Projects', description: 'Students produce real news bulletins, short films, and podcasts.' },
      { title: 'Industry Mentors', description: 'Practising journalists, filmmakers, and digital creators as mentors.' },
      { title: 'AR/VR Media', description: 'Specialised training in immersive media and next-gen storytelling tools.' },
      { title: 'Digital Marketing', description: 'Social media strategy, SEO, and digital advertising modules.' },
      { title: 'Media Internships', description: 'Placement partnerships with leading news, OTT, and ad agencies.' },
    ],
  },
  'liberal-arts': {
    image: 'img/law.png',
    features: [
      { title: 'Interdisciplinary Learning', description: 'Combine humanities, social sciences, and sciences into a unique degree.' },
      { title: 'Critical Thinking', description: 'Debate, seminar, and writing-intensive courses build analytical depth.' },
      { title: 'Civil Services Prep', description: 'Strong foundation for UPSC and state civil service examinations.' },
      { title: 'Research Pathways', description: 'Mentored research projects and opportunities for publication.' },
      { title: 'Global Citizenship', description: 'Coursework on international relations and cross-cultural communication.' },
      { title: 'Diverse Careers', description: 'Graduates enter policy, NGOs, education, media, and corporate sectors.' },
    ],
  },
  'health': {
    image: 'img/cse.png',
    features: [
      { title: 'Clinical Training', description: 'Hundreds of hours at affiliated hospitals and rehabilitation centres.' },
      { title: 'Evidence-Based Practice', description: 'Curriculum aligned with the latest global healthcare protocols.' },
      { title: 'Expert Clinicians', description: 'Faculty with active clinical practice bring real-world insight.' },
      { title: 'Patient Care Skills', description: 'Hands-on training in patient communication and compassionate care.' },
      { title: 'Global Opportunities', description: 'Qualifications recognised for healthcare roles in UK, Canada, Australia.' },
      { title: 'Research Partnerships', description: 'Collaborations with ICMR, AIIMS, and medical research institutes.' },
    ],
  },
};

let updated = 0;
data.schools.forEach(school => {
  const template = schoolFeatures[school.slug];
  if (template) {
    school.about.image = template.image;
    school.about.features = template.features;
    updated++;
    console.log(`✅ Updated ${school.name}`);
  } else {
    console.log(`⚠️  No template for: ${school.slug}`);
  }
});

fs.writeFileSync(schoolsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`\n✅ Added features + image to ${updated} schools`);

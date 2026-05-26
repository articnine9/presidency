const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(__dirname, 'data/schools.json');
const data = JSON.parse(fs.readFileSync(schoolsPath, 'utf8'));

// Careers in correct format: { category, roles[] }
const careersMap = {
  'CSE': [
    {
      category: 'Software & Web Development',
      roles: [
        'Software Engineer at Google, Microsoft, Amazon',
        'Full Stack Developer at startups and product companies',
        'Backend Developer at Infosys, TCS, Wipro',
        'Mobile App Developer at Flipkart, Ola, Swiggy',
      ]
    },
    {
      category: 'Artificial Intelligence & Data Science',
      roles: [
        'Data Scientist at IBM, Accenture, Deloitte',
        'AI/ML Engineer at Tesla, NVIDIA, OpenAI',
        'Data Analyst at Zomato, PayTM, Razorpay',
        'Research Engineer at ISRO, DRDO, R&D labs',
      ]
    },
    {
      category: 'Cybersecurity & Cloud',
      roles: [
        'Cloud Architect at AWS, Azure, Google Cloud',
        'Cybersecurity Analyst at EY, KPMG, Palo Alto',
        'DevOps Engineer at Atlassian, HashiCorp, GitLab',
        'Network Security Engineer at Cisco, Juniper Networks',
      ]
    },
    {
      category: 'Entrepreneurship & Research',
      roles: [
        'Tech Founder/Co-Founder at startups',
        'Product Manager at top tech companies',
        'Research Scientist at academic institutions',
        'Technical Consultant at management consulting firms',
      ]
    }
  ],
  'Engineering': [
    {
      category: 'Core Engineering & Design',
      roles: [
        'Design Engineer at Siemens, Bosch, Honeywell',
        'R&D Engineer at ISRO, DRDO, HAL',
        'Structural Engineer at L&T, Shapoorji Pallonji',
        'Electrical Systems Engineer at ABB, Schneider Electric',
      ]
    },
    {
      category: 'Project Management & Consulting',
      roles: [
        'Project Manager at Larsen & Toubro, Tata Projects',
        'Construction Manager at Gammon India, DLF',
        'Operations Manager at NTPC, BHEL, ONGC',
        'Technical Consultant at McKinsey, Bain',
      ]
    },
    {
      category: 'Manufacturing & Quality',
      roles: [
        'Quality Assurance Engineer at Maruti Suzuki, Bajaj',
        'Production Engineer at TVS Motors, Hero MotoCorp',
        'Process Engineer at Reliance Industries, IOCL',
        'Automation Engineer at Rockwell, Mitsubishi Electric',
      ]
    },
    {
      category: 'Government & Public Sector',
      roles: [
        'GATE-qualified roles at PSUs like ONGC, IOCL, NTPC',
        'IES (Indian Engineering Services) officer',
        'Defense Research at DRDO, ADE, DRDL',
        'Civil Services with engineering background',
      ]
    }
  ],
  'Law': [
    {
      category: 'Legal Practice & Advocacy',
      roles: [
        'Advocate at High Courts and Supreme Court',
        'Partner at top law firms: AZB, Shardul Amarchand',
        'Criminal Defense Lawyer at district courts',
        'Civil Litigation Specialist',
      ]
    },
    {
      category: 'Corporate & In-House Law',
      roles: [
        'In-House Counsel at TCS, Infosys, HDFC Bank',
        'Corporate Lawyer at EY, Deloitte, KPMG',
        'M&A Legal Advisor at investment banks',
        'Compliance Officer at financial institutions',
      ]
    },
    {
      category: 'Judiciary & Public Sector',
      roles: [
        'Civil Judge (Junior Division) via judicial exams',
        'District Judge after experience',
        'Public Prosecutor for state or central government',
        'Legal Advisor at government ministries',
      ]
    },
    {
      category: 'Policy, Research & Academia',
      roles: [
        'Policy Analyst at think tanks and NGOs',
        'Legal Researcher at law schools and institutes',
        'Professor/Lecturer in Law colleges',
        'International Law Specialist at UN or embassies',
      ]
    }
  ],
  'Management': [
    {
      category: 'Business Strategy & Consulting',
      roles: [
        'Management Consultant at McKinsey, BCG, Bain',
        'Business Analyst at Accenture, Deloitte, EY',
        'Strategy Manager at Tata Group, Mahindra',
        'Corporate Planning Manager at MNCs',
      ]
    },
    {
      category: 'Marketing & Brand Management',
      roles: [
        'Marketing Manager at Unilever, P&G, ITC',
        'Brand Manager at Nestlé, HUL, Dabur',
        'Digital Marketing Head at startups',
        'Product Marketing Manager at tech companies',
      ]
    },
    {
      category: 'Finance & Banking',
      roles: [
        'Investment Banker at Goldman Sachs, Morgan Stanley',
        'Finance Manager at ICICI Bank, HDFC Bank',
        'Portfolio Manager at mutual fund companies',
        'CFO track at mid to large enterprises',
      ]
    },
    {
      category: 'Operations & Entrepreneurship',
      roles: [
        'Operations Manager at Amazon, Flipkart, Zomato',
        'Supply Chain Manager at Tata Motors, Maruti',
        'Startup Founder with MBA background',
        'General Manager at hotel or hospitality chains',
      ]
    }
  ],
  'Commerce': [
    {
      category: 'Accounting & Taxation',
      roles: [
        'Chartered Accountant at Big 4: Deloitte, EY, KPMG, PwC',
        'Tax Consultant at BDO, Grant Thornton',
        'GST Specialist at mid-size firms',
        'Internal Auditor at corporate companies',
      ]
    },
    {
      category: 'Finance & Investment',
      roles: [
        'Financial Analyst at CRISIL, ICRA, CARE Ratings',
        'Investment Analyst at mutual funds, hedge funds',
        'Equity Research Analyst at brokerage firms',
        'Treasury Manager at banks and NBFCs',
      ]
    },
    {
      category: 'Banking & Financial Services',
      roles: [
        'Branch Manager at public and private sector banks',
        'Credit Analyst at ICICI, Axis, Kotak Mahindra',
        'Risk Manager at RBI-regulated institutions',
        'Relationship Manager at wealth management firms',
      ]
    },
    {
      category: 'Corporate & Entrepreneurship',
      roles: [
        'CFO or Finance Director at growing companies',
        'Business Controller at MNC subsidiaries',
        'Cost Accountant at manufacturing firms',
        'Entrepreneur in financial advisory services',
      ]
    }
  ],
  'Design': [
    {
      category: 'UX/UI & Digital Design',
      roles: [
        'UX Designer at Google, Apple, Microsoft',
        'UI Designer at product startups and agencies',
        'Interaction Designer at Zomato, Swiggy, PayTM',
        'Product Designer at tech companies worldwide',
      ]
    },
    {
      category: 'Branding & Communication',
      roles: [
        'Brand Designer at Ogilvy, DDB, WPP agencies',
        'Visual Designer at advertising firms',
        'Art Director at publishing houses and media',
        'Creative Director at design studios',
      ]
    },
    {
      category: 'Fashion & Product Design',
      roles: [
        'Fashion Designer at clothing brands and studios',
        'Textile Designer at fabric and garment companies',
        'Industrial/Product Designer at manufacturing firms',
        'Interior/Space Designer at architecture studios',
      ]
    },
    {
      category: 'Animation & Media',
      roles: [
        'Motion Graphics Designer at Netflix, Disney, Zee',
        'Game Designer at gaming companies',
        'VFX Artist at film production studios',
        'Multimedia Developer at education tech companies',
      ]
    }
  ],
  'Health': [
    {
      category: 'Clinical Practice',
      roles: [
        'Physiotherapist at Apollo, Fortis, Max Healthcare',
        'Nurse Practitioner at government and private hospitals',
        'Occupational Therapist at rehabilitation centers',
        'Medical Laboratory Technologist at diagnostic labs',
      ]
    },
    {
      category: 'Hospital Administration & Management',
      roles: [
        'Hospital Manager at large hospital chains',
        'Healthcare Operations Manager at clinic networks',
        'Clinical Quality Manager at accredited hospitals',
        'Health Services Administrator at insurance companies',
      ]
    },
    {
      category: 'Research & Academia',
      roles: [
        'Clinical Researcher at ICMR, AIIMS, NIH',
        'Health Sciences Lecturer at nursing and allied health colleges',
        'Clinical Trial Coordinator at pharma companies',
        'Public Health Researcher at WHO, UNICEF',
      ]
    },
    {
      category: 'Allied Health & Specialty',
      roles: [
        'Sports Physiotherapist at sports teams and academies',
        'Pediatric Nurse Specialist at children\'s hospitals',
        'Geriatric Occupational Therapist at elder care centers',
        'Healthcare Consultant at Deloitte, Accenture Health',
      ]
    }
  ],
  'Media': [
    {
      category: 'Journalism & News Media',
      roles: [
        'Journalist/Reporter at Times of India, The Hindu, NDTV',
        'News Anchor at TV channels like CNN-News18, Republic',
        'Content Editor at online news platforms',
        'Investigative Journalist at national publications',
      ]
    },
    {
      category: 'Film, TV & Digital Production',
      roles: [
        'Film Director/Producer at production houses',
        'Content Creator at Netflix, Amazon Prime, Hotstar',
        'Video Producer at YouTube channels and OTT platforms',
        'Cinematographer at advertising and documentary studios',
      ]
    },
    {
      category: 'Digital Marketing & Content',
      roles: [
        'Social Media Manager at brands and agencies',
        'Digital Marketing Strategist at Google, Meta, HubSpot',
        'Content Writer/Blogger at media companies',
        'SEO Specialist at digital marketing firms',
      ]
    },
    {
      category: 'Advertising & PR',
      roles: [
        'Advertising Copywriter at Ogilvy, DDB, Leo Burnett',
        'Public Relations Manager at corporate companies',
        'Brand Strategist at integrated communications agencies',
        'Media Planner at advertising networks',
      ]
    }
  ],
  'Liberal Arts': [
    {
      category: 'Civil Services & Policy',
      roles: [
        'IAS/IPS/IFS Officer via UPSC Civil Services Exam',
        'Policy Analyst at government ministries',
        'Research Associate at think tanks: ORF, CPR, IDFC',
        'Foreign Affairs Specialist at Ministry of External Affairs',
      ]
    },
    {
      category: 'Education & Research',
      roles: [
        'Lecturer/Professor at universities and colleges',
        'Academic Researcher at UGC-funded institutions',
        'Curriculum Developer at education organizations',
        'Education Consultant at international schools',
      ]
    },
    {
      category: 'Social Sector & NGOs',
      roles: [
        'Program Manager at national and international NGOs',
        'Development Sector Professional at UNDP, World Bank',
        'CSR Manager at large corporations',
        'Community Outreach Specialist at foundations',
      ]
    },
    {
      category: 'Corporate & Consulting',
      roles: [
        'Management Consultant at McKinsey, BCG (Liberal Arts track)',
        'HR Manager leveraging psychology background',
        'Communications Specialist at PR firms',
        'Market Researcher at consumer goods companies',
      ]
    }
  ],
  'Information Science': [
    {
      category: 'Data & Analytics',
      roles: [
        'Data Engineer at Google, Microsoft, Databricks',
        'Business Intelligence Developer at Tableau, Power BI',
        'Data Analyst at e-commerce and fintech companies',
        'Database Administrator at Oracle, SAP, IBM',
      ]
    },
    {
      category: 'Cloud & DevOps',
      roles: [
        'Cloud Solutions Architect at AWS, Azure, GCP',
        'DevOps Engineer at Atlassian, GitLab, Harness',
        'Platform Engineer at product-based companies',
        'Site Reliability Engineer at Google, Meta, Amazon',
      ]
    },
    {
      category: 'Software Development',
      roles: [
        'Full Stack Developer at IT services companies',
        'Software Architect at mid to large enterprises',
        'Application Developer at startups',
        'Backend Engineer at fintech and health tech firms',
      ]
    },
    {
      category: 'IT Consulting & Management',
      roles: [
        'IT Consultant at Accenture, Capgemini, Cognizant',
        'Systems Analyst at banking and insurance companies',
        'Technology Manager at large enterprises',
        'Digital Transformation Lead at legacy industries',
      ]
    }
  ],
};

function getCareers(schoolName) {
  if (schoolName.includes('Computer Science')) return careersMap['CSE'];
  if (schoolName.includes('Engineering')) return careersMap['Engineering'];
  if (schoolName.includes('Law')) return careersMap['Law'];
  if (schoolName.includes('Management')) return careersMap['Management'];
  if (schoolName.includes('Commerce')) return careersMap['Commerce'];
  if (schoolName.includes('Design')) return careersMap['Design'];
  if (schoolName.includes('Health')) return careersMap['Health'];
  if (schoolName.includes('Media')) return careersMap['Media'];
  if (schoolName.includes('Liberal')) return careersMap['Liberal Arts'];
  if (schoolName.includes('Information')) return careersMap['Information Science'];
  return careersMap['CSE'];
}

// Fix all careers to correct format
let fixed = 0;
data.schools.forEach(school => {
  const correctCareers = getCareers(school.name);
  school.programs.forEach(program => {
    // Replace careers with correctly structured data
    program.careers = correctCareers;
    fixed++;
  });
});

fs.writeFileSync(schoolsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅ Fixed careers format for ${fixed} programs`);
console.log(`💾 Updated: data/schools.json`);

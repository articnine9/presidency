const fs = require('fs');
const path = require('path');

const schoolsPath = path.join(__dirname, 'data/schools.json');
const data = JSON.parse(fs.readFileSync(schoolsPath, 'utf8'));

// Comprehensive { title, description } highlights per school
const highlightsMap = {

  'computer-science': [
    { title: 'Comprehensive Core Curriculum', description: 'Covers the full spectrum of computer science — programming, data structures, AI, ML, cybersecurity, cloud computing, IoT, and blockchain — with regular updates to reflect global industry trends.' },
    { title: 'Innovation-Driven Culture', description: 'Hackathons, coding competitions, and project-based learning provide platforms to transform concepts into tangible solutions and build an entrepreneurial mindset.' },
    { title: 'Industry Expert Faculty', description: 'Faculty members bring real-world experience from active industry consulting, offering mentorship and insights that extend well beyond academic theory.' },
    { title: 'Global Internship & Exchange', description: 'International internship placements and study-abroad partnerships broaden professional networks and enhance career mobility across global markets.' },
    { title: 'Professional Certifications', description: 'Earn industry-recognised credentials alongside your degree, including AWS, Google Cloud, Microsoft Azure, and other globally valued certifications.' },
    { title: 'Bengaluru Tech Ecosystem', description: 'Study in India\'s technology capital — home to thousands of multinational tech firms, start-ups, and R&D centres — with direct access to internship and employment pipelines.' },
    { title: 'Strong Placement Track Record', description: 'Graduates are recruited by leading organisations including major IT companies, product firms, start-ups, and consulting organisations through dedicated placement drives.' },
    { title: 'Research & Publication Pathways', description: 'Faculty-guided research projects with opportunities for peer-reviewed publications and patent filings in emerging technology areas.' },
  ],

  'engineering': [
    { title: 'Advanced Laboratory Infrastructure', description: 'Access state-of-the-art labs equipped with modern instruments for electronics, mechanical testing, civil simulation, and petroleum analysis.' },
    { title: 'Industry-Integrated Curriculum', description: 'Curriculum co-designed with industry partners ensures students learn skills that are directly applicable in engineering firms, manufacturing plants, and R&D departments.' },
    { title: 'Mandatory Industrial Training', description: 'Every student undergoes structured industrial training and internships, gaining real-world exposure to engineering processes, project management, and professional practices.' },
    { title: 'Research & Innovation Centres', description: 'Dedicated research cells and innovation labs support student-led projects, giving opportunities for patents, publications, and startup ideation in technical domains.' },
    { title: 'Government & PSU Placement Support', description: 'Strong coaching and preparation support for GATE, IES, and PSU recruitment exams — opening pathways to prestigious roles at ISRO, DRDO, ONGC, NTPC, and BHEL.' },
    { title: 'Interdisciplinary Learning', description: 'Cross-disciplinary electives allow engineering students to complement their core expertise with management, data science, or design thinking skills.' },
  ],

  'information-science': [
    { title: 'Future-Ready Data Science Skills', description: 'Gain expertise in Python, SQL, machine learning, and cloud platforms that are the backbone of modern data-driven businesses worldwide.' },
    { title: 'Cloud & Platform Certifications', description: 'Students are guided toward AWS, GCP, Azure, and database certifications, adding internationally recognised credentials to their professional profile.' },
    { title: 'Hands-On Project Learning', description: 'Real-world datasets and industry-inspired capstone projects ensure students graduate with a strong portfolio of work that impresses top employers.' },
    { title: 'Expert & Visiting Faculty', description: 'Learn from seasoned professionals who combine academic rigor with industry insight, providing a balanced education that bridges theory and application.' },
    { title: 'High Industry Demand', description: 'Data and information science graduates are among the most sought-after professionals globally, with career opportunities in every sector of the economy.' },
    { title: 'Pathway to Higher Studies', description: 'Strong foundational training prepares students for postgraduate programmes and research opportunities at leading universities in India and abroad.' },
  ],

  'management': [
    { title: 'Case-Based & Experiential Learning', description: 'Curriculum built around real business cases, simulations, and live projects ensures students develop practical problem-solving and decision-making skills.' },
    { title: 'Leadership Development Programme', description: 'Structured leadership training, personality development sessions, and executive mentoring prepare students to confidently lead teams and organisations.' },
    { title: 'Industry Immersion', description: 'Regular industry visits, corporate guest lectures, and live consulting assignments keep students connected to real business environments throughout the programme.' },
    { title: 'Strong MBA Placement Network', description: 'A wide alumni network and active placement cell connects students with top recruiters in consulting, finance, marketing, and operations from day one.' },
    { title: 'International Business Exposure', description: 'Global case studies, international faculty collaborations, and optional study-abroad exchanges develop a truly global business perspective.' },
    { title: 'Entrepreneurship & Start-Up Support', description: 'An on-campus incubator with mentorship, funding guidance, and networking events supports students who aspire to build their own ventures.' },
  ],

  'commerce': [
    { title: 'Professional Qualification Integration', description: 'Unique programmes integrating CA Foundation, ACCA, CMA (US), and other professional certifications alongside the B.Com degree — saving time and enhancing career readiness.' },
    { title: 'Expert Chartered Accountant Faculty', description: 'Taught by practising CAs, CMAs, and industry finance professionals who bring current taxation laws, audit practices, and financial regulations into the classroom.' },
    { title: 'Practical Financial Training', description: 'Hands-on training with real financial data, accounting software, ERP systems, and audit tools prepares students for immediate corporate and professional practice.' },
    { title: 'Strong Big 4 Placement Record', description: 'A proven record of placements at Deloitte, EY, KPMG, PwC, and other top accounting and financial services firms across India.' },
    { title: 'Industry-Relevant Curriculum', description: 'Curriculum aligned with the latest GST framework, IFRS standards, corporate governance norms, and financial analytics tools.' },
    { title: 'Research & Higher Education Pathways', description: 'Excellent preparation for MBA Finance, M.Com, CA Final, and research programmes at leading business schools and universities globally.' },
  ],

  'design': [
    { title: 'Industry-Standard Design Studios', description: 'Access professional-grade design studios, fabrication labs, 3D printing facilities, and digital media suites that mirror real design workplaces.' },
    { title: 'Portfolio-First Education', description: 'Every semester contributes to a professional-quality portfolio. Graduates enter the job market with documented work that speaks louder than grades alone.' },
    { title: 'Cross-Disciplinary Design Thinking', description: 'Programmes blend creativity with technology, psychology, business, and sustainability — training designers who can think broadly and solve complex, human-centred problems.' },
    { title: 'Live Client Projects', description: 'Real briefs from industry partners give students experience of delivering design solutions under professional constraints, timelines, and feedback cycles.' },
    { title: 'Global Design Exposure', description: 'International design workshops, visiting faculty from renowned global institutions, and awareness of world design trends prepare students for international careers.' },
    { title: 'Strong Creative Industry Network', description: 'Active alumni in advertising, UX/UI, fashion, gaming, and film production open doors for internships, mentorships, and entry-level placements across the creative industries.' },
  ],

  'law': [
    { title: 'State-of-the-Art Moot Court', description: 'Regular moot court competitions and mock trials sharpen advocacy, argument construction, and courtroom presence — skills that define successful legal practitioners.' },
    { title: 'Experienced Legal Faculty', description: 'Faculty comprising senior advocates, retired judges, and legal academics bring a wealth of courtroom and scholarly experience into the teaching environment.' },
    { title: 'Mandatory Internship Programme', description: 'Structured internships at law firms, courts, and corporate legal departments ensure students gain real-world exposure to legal practice before graduation.' },
    { title: 'Comprehensive Legal Research Training', description: 'Training in advanced legal research methods, Westlaw, Manupatra, and SCC Online databases prepares students for rigorous academic and professional legal writing.' },
    { title: 'Diverse Specialisation Tracks', description: 'Electives across corporate law, intellectual property, international law, and criminal law allow students to tailor their legal education to their career ambitions.' },
    { title: 'Career Support for Bar & Judiciary', description: 'Dedicated coaching and guidance for bar exams, judicial services, and higher studies at leading national law schools and international universities.' },
  ],

  'media': [
    { title: 'Professional-Grade Production Studios', description: 'Fully equipped TV studios, digital editing suites, radio stations, photography darkrooms, and green screen facilities offer a real media production environment.' },
    { title: 'Live Media Projects', description: 'Students produce actual news bulletins, short films, digital campaigns, and editorial content — building professional-grade portfolios while still studying.' },
    { title: 'Industry Mentors & Guest Lecturers', description: 'Practising journalists, filmmakers, media executives, and digital creators regularly engage with students, offering insights from the front lines of the media industry.' },
    { title: 'Digital & Emerging Media Focus', description: 'Curriculum covering AR/VR storytelling, podcast production, social media strategy, and OTT content creation ensures students are ready for the evolving media landscape.' },
    { title: 'National & International Media Internships', description: 'Partnership placements at leading news organisations, production houses, advertising agencies, and digital platforms across India and internationally.' },
    { title: 'Journalism Ethics & Media Law', description: 'Strong emphasis on responsible journalism, media law, editorial standards, and ethical content creation — preparing students to be credible and principled media professionals.' },
  ],

  'liberal-arts': [
    { title: 'Interdisciplinary Flexibility', description: 'Design your own intellectual journey by combining subjects from humanities, social sciences, and natural sciences — building a uniquely versatile skill set.' },
    { title: 'Critical Thinking & Analytical Skills', description: 'Rigorous seminars, debates, research projects, and writing-intensive courses develop the analytical depth and clarity of expression valued by global employers.' },
    { title: 'Research & Publication Opportunities', description: 'Faculty-mentored research projects, journal publications, and conference presentations provide students with early exposure to academic and applied research.' },
    { title: 'Civil Services Preparation', description: 'A broad foundation in history, polity, economics, and social science provides an outstanding preparation for UPSC and state civil service examinations.' },
    { title: 'Global Citizenship & Cultural Awareness', description: 'Coursework on world history, cross-cultural communication, and international relations develops the perspectives essential for careers in global organisations and diplomacy.' },
    { title: 'Diverse & High-Impact Career Outcomes', description: 'Graduates pursue careers in civil services, NGOs, research institutions, media, education, consulting, and international organisations — sectors that value depth of thinking.' },
  ],

  'health': [
    { title: 'Extensive Clinical Training', description: 'Hundreds of supervised clinical hours at affiliated hospitals and healthcare facilities ensure students are practice-ready long before they graduate.' },
    { title: 'Evidence-Based Healthcare Education', description: 'Curriculum grounded in the latest clinical research, treatment protocols, and healthcare technologies keeps students aligned with global standards of patient care.' },
    { title: 'Empathetic, Patient-Centred Approach', description: 'Training in communication, empathy, and ethical healthcare practice prepares students to build trust with patients and work compassionately in diverse healthcare settings.' },
    { title: 'Experienced Clinical Faculty', description: 'Faculty with active clinical practice bring current, real-world medical knowledge into every lecture, ensuring education remains grounded in what actually happens in the field.' },
    { title: 'High Employability in Growing Sector', description: 'Healthcare is among the fastest-growing global sectors. Our graduates are consistently placed at leading hospitals, rehabilitation centres, and research institutions.' },
    { title: 'Pathway to International Healthcare Careers', description: 'Recognised qualifications and strong clinical training open pathways to healthcare roles and further studies in the UK, Canada, Australia, and the Middle East.' },
  ],
};

let fixed = 0;
let alreadyGood = 0;

data.schools.forEach(school => {
  const correctHighlights = highlightsMap[school.slug];
  if (!correctHighlights) {
    console.log(`⚠️  No highlights template for: ${school.slug}`);
    return;
  }

  school.programs.forEach(program => {
    const h = program.highlights;
    const isStringArray = Array.isArray(h) && h.length > 0 && typeof h[0] === 'string';
    const isEmpty = !h || h.length === 0;

    if (isStringArray || isEmpty) {
      program.highlights = correctHighlights;
      fixed++;
    } else {
      alreadyGood++;
    }
  });
});

fs.writeFileSync(schoolsPath, JSON.stringify(data, null, 2), 'utf8');
console.log(`✅ Fixed highlights for ${fixed} programs`);
console.log(`✓  Already correct: ${alreadyGood} programs`);
console.log(`💾 Updated: data/schools.json`);

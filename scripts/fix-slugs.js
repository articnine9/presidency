// scripts/fix-slugs.js  — one-time slug fix script
const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "..", "data");
const SRC = path.join(DATA_DIR, "schools.json");
const data = JSON.parse(fs.readFileSync(SRC, "utf-8"));

// ── 1. Program slug renames per school ──────────────────────────────────────
const slugRenames = {
  engineering: {
    "btech-mechanical-engineerin": "btech-mechanical-engineering",
    "btech-buliding-construction-technology":
      "mtech-buliding-construction-technology",
  },
  management: {
    "bba-aviation": "bba-aviation-management",
    "bba-hospitality": "bba-hospitality-management",
    "mba-finance": "mba",
    "mba-marketing": "mba-marketing-finance",
  },
  commerce: {
    "bcom-banking-finance": "bcom-banking-and-finance",
    "bcom-corporate-tax": "bcom-corporate-accounting-and-taxation",
    "bcom-cma": "bcom-corporate-accounting-integrated-cma-us",
  },
  design: {
    "bdes-communication": "bdes-communication-design",
    "bdes-fashion": "bdes-fashion-design",
    "bdes-product": "bdes-product-design",
    "bdes-space": "bdes-space-design",
    "bsc-multimedia": "bsc-multimedia-and-animation",
    "bdes-game": "bdes-game-design",
  },
  media: {
    "ba-jmc-journalism": "ba-journalism-communication-general",
    "ba-jmc-digital-marketing": "ba-jmc-digital-marketing-advertising",
    "ba-jmc-film": "ba-jmc-film-television-digital-production",
    "ba-jmc-ar-vr": "ba-jmc-immersivemedia-ar-vr-interactive-storytelling",
    "ba-jmc-content": "ba-jmc-digital-storytelling-content-creation",
    "ma-jmc": "ma-journalism-mass-communication",
    "pg-diploma-film": "post-graduate-diploma-film-making",
  },
  "liberal-arts": {
    "ba-psychology": "ba-psychology-economics",
    "ba-english": "ba-english-history",
    "ba-political-science": "ba-history-political-science",
    "ba-economics": "ba-political-science-economics",
    "ba-sociology": "ba-communication-media",
    "ba-performing-arts-dance": "ba-arts-classicaldance-psychology",
    "ba-performing-arts-music": "ba-arts-classicalmusic-psychology",
    "ba-performing-arts-western":
      "ba-performing-arts-western-music-instrumental-english",
    "ba-performing-arts-theatre": "ba-theatre-studies-psychology",
    "msc-psychology":
      "msc-psychology-child-clinical-counselling-industrial-psychology",
    "ma-english":
      "ma-english-digital-humanities-cultural-Studies-creative-writing-educational-leadership",
  },
};

// ── 2. New MBA / Diploma programs for Management ─────────────────────────────
const newMgmtPrograms = [
  {
    slug: "mba-banking-finance-management",
    name: "MBA (Banking and Finance Management)",
    duration: "2 Years",
    type: "PG",
    degree: "Master of Business Administration",
    hero: {
      title: { normal: "MBA Banking and", italic: "Finance Management" },
      description:
        "Master banking operations and financial management with a specialised MBA designed for the modern financial industry.",
      breadcrumb: ["Home", "Schools", "School of Management", "MBA Banking Finance Management"],
      stats: [
        { label: "Duration", value: "2 Yr" },
        { label: "Semesters", value: "4" },
        { label: "Core Programme", value: "MBA" },
      ],
    },
    details: { duration: "2 Years Full-Time", campus: "Bengaluru, India", school: "School of Management" },
    overview: [
      "The MBA in Banking and Finance Management prepares students for leadership roles in banking, financial services, and investment sectors.",
      "The programme covers financial analysis, banking operations, risk management, corporate finance, and regulatory frameworks with strong industry engagement.",
    ],
    eligibility: {
      title: "Eligibility Criteria",
      description: "Candidates must have a bachelor's degree with minimum 50% marks from a recognised university.",
      note: "Eligibility may vary for international students.",
    },
    highlights: [
      { title: "Banking & Finance Focus", description: "Specialised curriculum covering banking regulations, risk management, and financial instruments." },
      { title: "Industry Exposure", description: "Live projects and internships with leading banks and financial institutions." },
    ],
    careers: [
      { category: "Banking & Finance", roles: ["Bank Manager", "Financial Analyst", "Investment Banker", "Risk Manager", "Credit Officer"] },
    ],
    faq: [
      { q: "What is the eligibility?", a: "A bachelor's degree with minimum 50% marks is required." },
      { q: "Are placements available?", a: "Yes, the university has strong ties with banking and financial institutions." },
    ],
    cta: { title: "Advance Your Finance Career", subtitle: "Join Presidency University's MBA in Banking and Finance Management.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "mba-digital-marketing",
    name: "MBA (Digital Marketing)",
    duration: "2 Years",
    type: "PG",
    degree: "Master of Business Administration",
    hero: {
      title: { normal: "MBA", italic: "Digital Marketing" },
      description: "Lead digital marketing strategy with an MBA combining business fundamentals and cutting-edge digital marketing expertise.",
      breadcrumb: ["Home", "Schools", "School of Management", "MBA Digital Marketing"],
      stats: [
        { label: "Duration", value: "2 Yr" },
        { label: "Semesters", value: "4" },
        { label: "Core Programme", value: "MBA" },
      ],
    },
    details: { duration: "2 Years Full-Time", campus: "Bengaluru, India", school: "School of Management" },
    overview: [
      "The MBA in Digital Marketing equips students with advanced skills in digital strategy, data-driven marketing, and brand management.",
      "Students learn SEO, SEM, social media marketing, content strategy, and analytics tools to lead marketing functions in modern organisations.",
    ],
    eligibility: {
      title: "Eligibility Criteria",
      description: "Candidates must have a bachelor's degree with minimum 50% marks from a recognised university.",
      note: "Eligibility may vary for international students.",
    },
    highlights: [
      { title: "Digital Strategy & Analytics", description: "Master digital marketing channels, campaign management, and data analytics for business growth." },
      { title: "Industry Tools", description: "Hands-on training with Google Ads, Meta Business Suite, HubSpot, and analytics platforms." },
    ],
    careers: [
      { category: "Digital Marketing", roles: ["Digital Marketing Manager", "SEO Specialist", "Content Strategist", "Brand Manager", "Growth Hacker"] },
    ],
    faq: [
      { q: "What is the eligibility?", a: "A bachelor's degree with minimum 50% marks is required." },
      { q: "What tools will I learn?", a: "Google Analytics, SEMrush, HubSpot, Meta Ads Manager and more." },
    ],
    cta: { title: "Lead the Digital Revolution", subtitle: "Build your career in digital marketing with our specialised MBA.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "mba-business-analytics",
    name: "MBA (Business Analytics)",
    duration: "2 Years",
    type: "PG",
    degree: "Master of Business Administration",
    hero: {
      title: { normal: "MBA", italic: "Business Analytics" },
      description: "Transform data into business insights with an MBA combining management expertise and advanced analytics skills.",
      breadcrumb: ["Home", "Schools", "School of Management", "MBA Business Analytics"],
      stats: [
        { label: "Duration", value: "2 Yr" },
        { label: "Semesters", value: "4" },
        { label: "Core Programme", value: "MBA" },
      ],
    },
    details: { duration: "2 Years Full-Time", campus: "Bengaluru, India", school: "School of Management" },
    overview: [
      "The MBA in Business Analytics develops professionals who can harness data to drive strategic business decisions.",
      "The programme combines MBA fundamentals with data science, statistical modelling, machine learning applications, and business intelligence tools.",
    ],
    eligibility: {
      title: "Eligibility Criteria",
      description: "Candidates must have a bachelor's degree with minimum 50% marks from a recognised university.",
      note: "Eligibility may vary for international students.",
    },
    highlights: [
      { title: "Data-Driven Decision Making", description: "Learn to extract actionable insights from complex datasets using advanced analytical tools." },
      { title: "Business Intelligence Tools", description: "Hands-on experience with Tableau, Power BI, Python, R, and SQL for business analysis." },
    ],
    careers: [
      { category: "Analytics & Data", roles: ["Business Analyst", "Data Analyst", "Analytics Manager", "Strategy Consultant", "BI Developer"] },
    ],
    faq: [
      { q: "What is the eligibility?", a: "A bachelor's degree with minimum 50% marks is required." },
      { q: "What programming skills are taught?", a: "Python, R, and SQL are core components of the analytics curriculum." },
    ],
    cta: { title: "Become a Data-Driven Leader", subtitle: "Master business analytics with our industry-aligned MBA programme.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "pg-diploma-public-administration",
    name: "Post Graduate Diploma in Public Administration",
    duration: "1 Year",
    type: "Diploma",
    degree: "Post Graduate Diploma",
    hero: {
      title: { normal: "PG Diploma in", italic: "Public Administration" },
      description: "Build a career in governance and public service with our Post Graduate Diploma in Public Administration.",
      breadcrumb: ["Home", "Schools", "School of Management", "PG Diploma Public Administration"],
      stats: [
        { label: "Duration", value: "1 Yr" },
        { label: "Semesters", value: "2" },
        { label: "Core Programme", value: "Diploma" },
      ],
    },
    details: { duration: "1 Year Full-Time", campus: "Bengaluru, India", school: "School of Management" },
    overview: [
      "The Post Graduate Diploma in Public Administration provides a thorough grounding in governance, public policy, and administrative systems.",
      "The programme prepares students for roles in government, public sector undertakings, NGOs, and international organisations.",
    ],
    eligibility: {
      title: "Eligibility Criteria",
      description: "Candidates must have a bachelor's degree with minimum 50% marks from a recognised university.",
      note: "Eligibility may vary for international students.",
    },
    highlights: [
      { title: "Public Policy & Governance", description: "Comprehensive study of governance frameworks, public policy design, and administrative processes." },
      { title: "NGO & Government Exposure", description: "Industry interactions with government officials and NGO representatives." },
    ],
    careers: [
      { category: "Public Sector", roles: ["Government Officer", "Policy Analyst", "NGO Programme Manager", "Public Relations Officer", "Administrative Officer"] },
    ],
    faq: [
      { q: "What is the eligibility?", a: "A bachelor's degree with minimum 50% marks is required." },
      { q: "Is this a recognised qualification?", a: "Yes, the diploma is awarded by Presidency University, a UGC-recognised institution." },
    ],
    cta: { title: "Serve the Public Good", subtitle: "Build a rewarding career in governance and public administration.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
];

// ── 3. New programs for Liberal Arts ─────────────────────────────────────────
const newLAPrograms = [
  {
    slug: "ba-psychology-english",
    name: "B.A. (Psychology, English)",
    duration: "3 Years", type: "UG", degree: "Bachelor of Arts",
    hero: { title: { normal: "B.A. Psychology,", italic: "English" }, description: "Explore the intersection of human behaviour and literary expression in this unique interdisciplinary programme.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "BA Psychology English"], stats: [{ label: "Duration", value: "3 Yr" }, { label: "Semesters", value: "6" }, { label: "Core Programme", value: "BA" }] },
    details: { duration: "3 Years Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The B.A. in Psychology and English offers an interdisciplinary study of human behaviour, literary analysis, and communication.", "Students develop strong analytical, writing, and critical thinking skills applicable across education, counselling, media, and corporate sectors."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10+2 with any stream and minimum 45% marks.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Interdisciplinary Learning", description: "Combines psychology principles with literary studies for a holistic arts education." }, { title: "Communication Skills", description: "Develop advanced writing, analytical and verbal communication skills." }],
    careers: [{ category: "Arts & Education", roles: ["Counsellor", "Content Writer", "Editor", "Teacher", "HR Executive"] }],
    faq: [{ q: "What is the eligibility?", a: "10+2 with any stream and minimum 45% marks." }, { q: "What careers can I pursue?", a: "Counselling, content writing, education, HR, and media." }],
    cta: { title: "Explore Arts & Psychology", subtitle: "Build a versatile career combining psychology and English studies.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "ba-english-political-science",
    name: "B.A. (English & Political Science)",
    duration: "3 Years", type: "UG", degree: "Bachelor of Arts",
    hero: { title: { normal: "B.A. English &", italic: "Political Science" }, description: "Combine the power of language and political thought in this dynamic arts programme.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "BA English Political Science"], stats: [{ label: "Duration", value: "3 Yr" }, { label: "Semesters", value: "6" }, { label: "Core Programme", value: "BA" }] },
    details: { duration: "3 Years Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The B.A. in English and Political Science develops critical thinkers equipped for careers in journalism, policy, law, and public service.", "Students gain expertise in political theory, governance, literary analysis, and communication."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10+2 with any stream and minimum 45% marks.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Political Theory & Literature", description: "Combined study of political systems and English literature for well-rounded arts graduates." }, { title: "Communication & Analysis", description: "Strong emphasis on research, debate, and written communication skills." }],
    careers: [{ category: "Arts & Policy", roles: ["Journalist", "Policy Researcher", "Teacher", "Civil Servant", "Content Creator"] }],
    faq: [{ q: "What is the eligibility?", a: "10+2 with any stream and minimum 45% marks." }, { q: "Can I pursue law after this?", a: "Yes, graduates commonly pursue law programmes or civil services." }],
    cta: { title: "Shape Policy Through Language", subtitle: "Develop critical thinking and communication skills for a career in public life.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "ba-arts-classicaldance-english",
    name: "B.A. (Performing Arts - Classical Dance, English)",
    duration: "3 Years", type: "UG", degree: "Bachelor of Arts",
    hero: { title: { normal: "B.A. Classical Dance", italic: "& English" }, description: "Blend the grace of classical dance with the richness of English literature in this distinctive performing arts programme.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "BA Classical Dance English"], stats: [{ label: "Duration", value: "3 Yr" }, { label: "Semesters", value: "6" }, { label: "Core Programme", value: "BA" }] },
    details: { duration: "3 Years Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The B.A. in Performing Arts combining Classical Dance and English offers a unique blend of artistic training and literary scholarship.", "Students develop performance skills in classical dance forms alongside English literature, cultural studies, and communication."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10+2 with any stream and minimum 45% marks. Prior dance training is preferred.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Classical Dance Training", description: "Structured training in Indian classical dance forms by experienced faculty and guest artists." }, { title: "English & Cultural Studies", description: "Literary analysis and cultural studies complement the performing arts curriculum." }],
    careers: [{ category: "Performing Arts", roles: ["Classical Dancer", "Dance Teacher", "Cultural Programme Manager", "Content Creator", "Arts Administrator"] }],
    faq: [{ q: "What is the eligibility?", a: "10+2 with any stream. Prior dance experience is preferred but not mandatory." }, { q: "Which dance forms are taught?", a: "The programme covers major Indian classical dance traditions." }],
    cta: { title: "Express Through Art & Language", subtitle: "Pursue a career in performing arts with a strong literary foundation.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "ba-performing-arts-western-music-instrumental-psychology",
    name: "B.A. (Performing Arts - Western Music - Instrumental, Psychology)",
    duration: "3 Years", type: "UG", degree: "Bachelor of Arts",
    hero: { title: { normal: "B.A. Western Music", italic: "& Psychology" }, description: "Explore the profound connection between music and the human mind in this unique interdisciplinary programme.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "BA Western Music Psychology"], stats: [{ label: "Duration", value: "3 Yr" }, { label: "Semesters", value: "6" }, { label: "Core Programme", value: "BA" }] },
    details: { duration: "3 Years Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The B.A. in Performing Arts combining Western Music (Instrumental) with Psychology offers an interdisciplinary education in music and human behaviour.", "Students develop instrumental performance skills alongside psychological insights into creativity, performance anxiety, and musical cognition."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10+2 with any stream and minimum 45% marks. Prior music training is preferred.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Western Music Training", description: "Instrumental music training in Western classical and contemporary styles with expert faculty." }, { title: "Psychology of Music", description: "Study music cognition, performance psychology, and the therapeutic applications of music." }],
    careers: [{ category: "Music & Psychology", roles: ["Music Therapist", "Performer", "Music Teacher", "Music Producer", "Arts Counsellor"] }],
    faq: [{ q: "What instruments are supported?", a: "Piano, guitar, violin, and other Western instruments are offered." }, { q: "Can I pursue music therapy?", a: "Yes, the psychology component prepares students for music therapy and counselling careers." }],
    cta: { title: "Unite Music & Mind", subtitle: "Build a unique career at the intersection of performing arts and psychology.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "ba-theatre-studies-english",
    name: "B.A. (Theatre Studies, English)",
    duration: "3 Years", type: "UG", degree: "Bachelor of Arts",
    hero: { title: { normal: "B.A. Theatre Studies", italic: "& English" }, description: "Combine the art of theatre with the depth of English literature in this dynamic performing arts programme.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "BA Theatre Studies English"], stats: [{ label: "Duration", value: "3 Yr" }, { label: "Semesters", value: "6" }, { label: "Core Programme", value: "BA" }] },
    details: { duration: "3 Years Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The B.A. in Theatre Studies and English combines practical theatre training with the study of dramatic literature and literary theory.", "Students develop skills in acting, directing, and dramatic writing while building deep literary knowledge through English studies."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10+2 with any stream and minimum 45% marks.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Theatre Practice & Theory", description: "Hands-on theatre production experience combined with study of dramatic literature across cultures." }, { title: "Literary Analysis", description: "Deep engagement with English literary texts, playwrights, and performance criticism." }],
    careers: [{ category: "Theatre & Arts", roles: ["Actor", "Director", "Playwright", "Dramaturge", "Arts Educator", "Content Writer"] }],
    faq: [{ q: "What is the eligibility?", a: "10+2 with any stream and minimum 45% marks." }, { q: "Will I get stage performance opportunities?", a: "Yes, regular productions, workshops, and performances are integral to the programme." }],
    cta: { title: "Step onto the Stage", subtitle: "Build a creative career in theatre and literary arts.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "diploma-bharatanatyam", name: "Diploma in Bharatanatyam",
    duration: "1 Year", type: "Diploma", degree: "Diploma",
    hero: { title: { normal: "Diploma in", italic: "Bharatanatyam" }, description: "Master the ancient art of Bharatanatyam with structured classical dance training at Presidency University.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "Diploma Bharatanatyam"], stats: [{ label: "Duration", value: "1 Yr" }, { label: "Semesters", value: "2" }, { label: "Core Programme", value: "Diploma" }] },
    details: { duration: "1 Year Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The Diploma in Bharatanatyam provides structured training in one of India's oldest classical dance forms under expert faculty guidance.", "Students learn adavus, abhinaya, jathis, and full compositions alongside the history and theory of the art form."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10th standard. Prior dance experience is preferred.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Classical Dance Foundation", description: "Comprehensive Bharatanatyam training from basics to advanced compositions with certified faculty." }, { title: "Theory & History", description: "Study the history, mythology, and cultural context of Bharatanatyam." }],
    careers: [{ category: "Performing Arts", roles: ["Classical Dancer", "Dance Teacher", "Choreographer", "Cultural Ambassador", "Arts Educator"] }],
    faq: [{ q: "Do I need prior experience?", a: "Prior dance experience is preferred but motivated beginners are also considered." }, { q: "Is the diploma recognised?", a: "Yes, awarded by Presidency University, a UGC-recognised institution." }],
    cta: { title: "Embrace Classical Heritage", subtitle: "Begin your journey in Bharatanatyam with expert guidance.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "diploma-kathak", name: "Diploma in Kathak",
    duration: "1 Year", type: "Diploma", degree: "Diploma",
    hero: { title: { normal: "Diploma in", italic: "Kathak" }, description: "Immerse yourself in the graceful rhythms and storytelling of Kathak under expert classical dance faculty.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "Diploma Kathak"], stats: [{ label: "Duration", value: "1 Yr" }, { label: "Semesters", value: "2" }, { label: "Core Programme", value: "Diploma" }] },
    details: { duration: "1 Year Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The Diploma in Kathak offers training in this expressive North Indian classical dance form known for its intricate footwork, spins, and expressive storytelling.", "Students learn tatkaar, chakkar, abhinaya, and compositions from authentic Lucknow and Jaipur gharanas."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10th standard. Prior dance experience is preferred.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Authentic Gharana Training", description: "Training rooted in authentic Lucknow and Jaipur Kathak traditions with certified practitioners." }, { title: "Rhythmic & Expressive Training", description: "Develop mastery of complex taal structures, footwork, and expressive abhinaya." }],
    careers: [{ category: "Performing Arts", roles: ["Kathak Dancer", "Dance Teacher", "Choreographer", "Cultural Performer", "Arts Educator"] }],
    faq: [{ q: "Do I need prior experience?", a: "Prior dance experience is preferred but motivated beginners are considered." }, { q: "Which gharana style is taught?", a: "Both Lucknow and Jaipur gharana styles are introduced." }],
    cta: { title: "Dance to Ancient Rhythms", subtitle: "Master Kathak with structured classical training at Presidency University.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "diploma-kuchipudi", name: "Diploma in Kuchipudi",
    duration: "1 Year", type: "Diploma", degree: "Diploma",
    hero: { title: { normal: "Diploma in", italic: "Kuchipudi" }, description: "Discover the vibrant energy and expressiveness of Kuchipudi classical dance at Presidency University.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "Diploma Kuchipudi"], stats: [{ label: "Duration", value: "1 Yr" }, { label: "Semesters", value: "2" }, { label: "Core Programme", value: "Diploma" }] },
    details: { duration: "1 Year Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The Diploma in Kuchipudi introduces students to this dynamic classical dance-drama form from Andhra Pradesh, combining vigorous dance with expressive mime.", "Students learn the characteristic techniques of Kuchipudi including jatis, shabdams, and the distinctive dance-drama tradition."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10th standard. Prior dance experience is preferred.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Dance-Drama Tradition", description: "Training in the unique Kuchipudi dance-drama tradition combining dance, music, and theatre." }, { title: "Technical Proficiency", description: "Develop the characteristic vigour, expressiveness, and technical precision of Kuchipudi." }],
    careers: [{ category: "Performing Arts", roles: ["Kuchipudi Dancer", "Dance Teacher", "Cultural Performer", "Choreographer", "Arts Administrator"] }],
    faq: [{ q: "Do I need prior experience?", a: "Prior dance experience is preferred but motivated beginners are considered." }, { q: "Is Kuchipudi difficult to learn?", a: "Like all classical dance forms, it requires dedication. The programme provides structured guidance." }],
    cta: { title: "Embrace Classical Dance Drama", subtitle: "Learn Kuchipudi with expert guidance at Presidency University.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
  {
    slug: "diploma-mohiniyattam", name: "Diploma in Mohiniyattam",
    duration: "1 Year", type: "Diploma", degree: "Diploma",
    hero: { title: { normal: "Diploma in", italic: "Mohiniyattam" }, description: "Discover the lyrical grace and expressive beauty of Mohiniyattam, the dance of the enchantress, at Presidency University.", breadcrumb: ["Home", "Schools", "School of Liberal Arts & Sciences", "Diploma Mohiniyattam"], stats: [{ label: "Duration", value: "1 Yr" }, { label: "Semesters", value: "2" }, { label: "Core Programme", value: "Diploma" }] },
    details: { duration: "1 Year Full-Time", campus: "Bengaluru, India", school: "School of Liberal Arts & Sciences" },
    overview: ["The Diploma in Mohiniyattam introduces students to this lyrical classical dance form from Kerala, known for its graceful, swaying movements and feminine expressiveness.", "Students learn the fundamental adavus, cholkettu, varnam, and padam of Mohiniyattam under qualified classical dance faculty."],
    eligibility: { title: "Eligibility Criteria", description: "Candidates must have completed 10th standard. Prior dance experience is preferred.", note: "Eligibility may vary for international students." },
    highlights: [{ title: "Graceful Classical Tradition", description: "Training in Mohiniyattam's distinctive lyrical style, expressive abhinaya, and traditional repertoire." }, { title: "Kerala Heritage", description: "Study the cultural and historical roots of Mohiniyattam within the Kerala performing arts tradition." }],
    careers: [{ category: "Performing Arts", roles: ["Mohiniyattam Dancer", "Dance Teacher", "Cultural Performer", "Choreographer", "Arts Educator"] }],
    faq: [{ q: "Do I need prior experience?", a: "Prior dance experience is preferred but motivated beginners are considered." }, { q: "What makes Mohiniyattam unique?", a: "Its swaying, graceful movements and strong emphasis on facial expression and narrative distinguish it." }],
    cta: { title: "Move with Graceful Elegance", subtitle: "Learn the art of Mohiniyattam at Presidency University.", button: "Apply Now" },
    tabs: { curriculum: [], outcomes: { PEOs: [], POs: [], PSOs: [] } },
  },
];

// ── Apply all transformations ────────────────────────────────────────────────
data.schools = data.schools.map((school) => {
  // Apply program slug renames
  const renames = slugRenames[school.slug] || {};
  school.programs = (school.programs || []).map((prog) => {
    if (renames[prog.slug]) prog.slug = renames[prog.slug];
    return prog;
  });

  // Add new management programs
  if (school.slug === "management") {
    school.programs.push(...newMgmtPrograms);
  }

  // Liberal arts: rename school slug + add new programs
  if (school.slug === "liberal-arts") {
    school.slug = "liberal-arts-science";
    school.programs.push(...newLAPrograms);
  }

  return school;
});

// ── Write both JSON files ────────────────────────────────────────────────────
const output = JSON.stringify(data, null, 2);
fs.writeFileSync(path.join(DATA_DIR, "schools.json"), output, "utf-8");
fs.writeFileSync(path.join(DATA_DIR, "schools-eng.json"), output, "utf-8");

// ── Verify ───────────────────────────────────────────────────────────────────
const d2 = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "schools.json"), "utf-8"));
let total = 0;
d2.schools.forEach((s) => {
  console.log(`\n${s.slug} (${s.programs.length} programs)`);
  s.programs.forEach((p) => console.log(`  ${p.slug}`));
  total += s.programs.length;
});
console.log(`\nTotal programs: ${total}`);

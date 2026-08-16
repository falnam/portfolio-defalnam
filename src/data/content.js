// ---------------------------------------------------------------------------
// Single source of truth for all copy on the site.
// Edit values here — no need to touch component files to update content.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Ade Fatkhul Anam',
  role: 'Creative Technologist',
  fullTitle:
    'Creative Technologist | UI/UX Designer | Social Media Specialist | Photographer & Videographer',
  location: 'Purwokerto, Jawa Tengah, Indonesia',
  email: 'ade.falnam@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adefatkhulanam',
  linkedinLabel: 'linkedin.com/in/adefatkhulanam',
  instagram: 'https://www.instagram.com/defalnam/',
  cvUrl: 'https://drive.google.com/file/d/1ace_KZufmYuvD3SGnOTZbOhf6My25Hr2/view?usp=sharing',
  photo: '/images/profile.png',
}

export const nav = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
]

export const hero = {
  eyebrow: 'Creative Technologist',
  headline: [
    { text: 'Building interfaces and visual stories', accent: false },
    { text: ' worth', accent: true },
    { text: ' experiencing.', accent: false },
  ],
  subheadline: 'Creative Media · UI/UX · Photography & Videography',
  paragraph:
    'I bridge software engineering logic with creative aesthetics. I craft intuitive UI/UX designs, dynamic videography, and compelling photography.',
  ctaPrimary: { label: 'View My Portfolio', href: '/#work' },
  ctaSecondary: { label: 'Download CV', href: profile.cvUrl },
}

export const skillCollage = [
  { tag: '⊕', label: 'UI/UX · F/2.8', tone: 'navy' },
  { tag: '⊕', label: 'Photography · ISO 400', tone: 'terracotta' },
  { tag: '⊕', label: 'Frontend · Dev', tone: 'clayblue' },
  { tag: '⊕', label: 'Videography · ISO 400', tone: 'sage' },
]

export const stats = [
  { value: '15+', label: 'Creative Projects' },
  { value: '5+', label: 'UI/UX Prototypes' },
  { value: '5+', label: 'Event Brandings' },
  { value: '2026', label: 'SE Graduate' },
]

export const approach = {
  eyebrow: '01 / 04 — Process Section',
  headline: [
    { text: 'A ', accent: false },
    { text: 'Structured Process.', accent: true },
  ],
  phases: [
    {
      no: 'Phase 01',
      title: 'Research & Concept',
      description:
        'Understanding the target audience and technical constraints before visual exploration. This ensures the creative output aligns perfectly with practical engineering needs.',
      dark: false,
    },
    {
      no: 'Phase 02',
      title: 'Design & Production',
      description:
        'Developing interactive Figma prototypes alongside high-quality photo and video assets. This stage combines precision in UI/UX with dynamic visual storytelling.',
      dark: true,
    },
    {
      no: 'Phase 03',
      title: 'Execution & Iteration',
      description:
        'Delivering finalized assets that are ready for implementation or social media distribution. Feedback is continuously utilized to refine and elevate the final product.',
      dark: false,
    },
  ],
}

export const skills = {
  eyebrow: 'Skills',
  headline: [
    { text: 'Cross-Disciplinary ', accent: false },
    { text: 'Expertise.', accent: true },
  ],
  featured: {
    icon: '⊕',
    title: 'Video Production & Creative Content',
    description:
      'Creative video production, cinematography, color grading, and high-quality digital content creation.',
  },
  grid: [
    {
      no: '01',
      title: 'UI/UX & Prototyping',
      description: 'Designing user-centric interfaces and complex interactive prototypes in Figma. My software engineering background ensures all designs are highly developer-friendly.',
    },
    {
      no: '02',
      title: 'Videography & Editing',
      description: 'Producing dynamic video content and mockups optimized for modern platforms like Reels. I focus on engaging storytelling combined with advanced editing techniques.',
    },
    {
      no: '03',
      title: 'Photography & Visual Design',
      description: 'Creating striking visual identities, event posters, and detailed photo manipulation. Expertise includes advanced color grading and AI-driven image enhancements.',
    },
    {
      no: '04',
      title: 'Quality Assurance & Tech',
      description: 'Ensuring digital products are thoroughly tested and structurally sound. I apply systematic QA principles to both code and design deliverables.',
    },
  ],
}

// -----------------------------------------------------------------------
// Selected Work — treat this array like a CMS collection list.
// Fields: thumbnail, title, category, description, client, year, link, order
// Drop a new object in to add a project; delete one to remove it.
// -----------------------------------------------------------------------
export const workItems = [
  {
    id: 'sobat-berbagi',
    thumbnail: '/images/work/sobatberbagi.png',
    gallery: [],
    title: 'Sobat Berbagi — Mobile Apps',
    category: 'UI/UX Design',
    description:
      'Designing the Sobat Berbagi mobile application was a journey in bridging technology with human empathy.',
    longDescription:
      'The primary challenge was to create a digital philanthropy platform that felt secure, transparent, and effortlessly accessible to a wide demographic. I focused on streamlining the donation flow by mapping out clear, intuitive user journeys that eliminate friction from the moment a user browses a campaign to the final transaction. By prioritizing a clean visual hierarchy and reassuring feedback loops, I ensured that the interface not only looked modern but also actively fostered trust and encouraged continuous charitable engagement.',
    role: 'UI/UX Designer',
    tools: ['Figma', 'FigJam', 'Katalon (User Testing)'],
    client: 'Sobat Berbagi',
    year: 2025,
    link: 'https://www.figma.com/design/A0VFOvx6kNR17684H9JmvS/The-Barack?node-id=3065-1352&t=FppB02aCtnwnGA4I-1',
    order: 1,
  },
  {
    id: 'smk-tamtama',
    thumbnail: '/images/work/tamtama.jpg',
    gallery: [],
    title: 'Smart Attendance — SMK Tamtama 1 Sidareja',
    category: 'UI/UX Design',
    description:
      'For SMK Tamtama 1 Sidareja, the goal was to modernize the daily administrative workflow by integrating advanced tracking technologies into a seamless user experience.',
    longDescription:
      'I developed a comprehensive interface for a teacher attendance system powered by real-time face recognition and precise geofencing capabilities. The design challenge lay in translating complex biometric and location data into a straightforward, mobile-friendly dashboard that educators could use without any technical hurdles. The resulting UI successfully balanced robust backend functionality with a crisp, user-centric frontend, ultimately making daily academic operations highly efficient and strictly accountable.',
    role: 'User Interface Designer',
    tools: ['Figma', 'FigJam', 'Katalon (User Testing)'],
    client: 'SMK Tamtama 1 Sidareja',
    year: 2025,
    link: 'https://www.figma.com/proto/Gr1JnvvdiqGFZOtiQ3V7Ue/SMK-TAMTAMA-MOBILE-APP?node-id=1-7186&t=9hUWMz0e3DtOzsTp-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A7186',
    order: 2,
  },
  {
    id: 'aws-cloud-club-identity',
    thumbnail: '/images/work/awscc.png',
    gallery: [],
    title: 'AWS Cloud Club — Visual Identity',
    category: 'Branding & Graphics',
    description:
      'Developing a comprehensive visual identity and dynamic graphic asset system for the AWS Cloud Club Indonesia community.',
    longDescription:
      'As the Head of Creative and Graphics, I was entrusted with engineering a cohesive visual identity system from the ground up. By meticulously defining the core color palettes, typography guidelines, and highly versatile templates for social media and event materials, I established a strong visual standard. This strategic approach ensured that every piece of community communication remained visually consistent, highly engaging, and instantly recognizable across all digital touchpoints.',
    role: 'Head of Creative and Graphics',
    tools: ['Figma', 'Adobe Illustrator', 'Canva'],
    client: 'AWS Cloud Club Indonesia',
    year: 2025,
    link: 'https://www.instagram.com/awscloudclub.id/',
    order: 3,
  },
  {
    id: 'gdgoc-campaign',
    thumbnail: '/images/work/gdg.png',
    gallery: [],
    title: 'GDGoC — Content Campaign',
    category: 'Social Media',
    description:
      'Crafting comprehensive content strategies and engaging visual campaigns for Google Developer Groups on Campus.',
    longDescription:
      'As the Creative Head, I orchestrated the content calendar and visual strategy for recruitment campaigns and community events at GDGoC Telkom University Purwokerto. My primary focus was to ensure that every piece of published content actively drove community growth while strictly adhering to the global brand guidelines of Google Developer Groups. This strategic alignment maximized audience engagement and maintained a highly professional, globally recognized community identity.',
    role: 'Creative Head',
    tools: ['Figma', 'Adobe Photoshop', 'Instagram Insights'],
    client: 'GDGoC Telkom University Purwokerto',
    year: 2025,
    link: 'https://www.instagram.com/gdgoctelkomunivpwt/',
    order: 4,
  },
  {
    id: 'event-documentation',
    thumbnail: '/images/work/eventdoc.jpg',
    gallery: [
      '/images/gallery/eventdoc-1.jpg',
      '/images/gallery/eventdoc-2.jpg',
      '/images/gallery/eventdoc-3.jpg',
      '/images/gallery/eventdoc-4.jpg',
      '/images/gallery/eventdoc-5.jpg',
    ],
    title: 'Corporate Events — Brother Indonesia & Telkom University',
    category: 'Photography',
    description:
      'Visual documentation for high-profile corporate environments requires a keen eye for detail and the ability to capture fleeting moments of professional significance.',
    longDescription:
      'I had the privilege of leading the photography for major events involving prominent entities like Brother Indonesia, national banking institutions, and Telkom University. My approach was rooted in candid storytelling, focusing on capturing authentic professional interactions, key milestone announcements, and the overall dynamic atmosphere of the venues. Through sharp visual composition and meticulous post-processing, I delivered a comprehensive portfolio of images that perfectly encapsulated the prestige and corporate identity of the hosting organizations.',
    role: 'Photographer, Videographer & Editor',
    tools: ['Lightroom', 'Adobe Photoshop', 'Sony A7III', 'ZEISS Lens'],
    client: 'Telkom University & Brother Indonesia',
    year: 2025,
    link: '#',
    order: 5,
  },
  {
    id: 'sesi-foto',
    thumbnail: '/images/work/GSA.png',
    gallery: [],
    title: 'Tech & Product Showcases — GSA & IoT Solutions',
    category: 'Videography and Creative Direction',
    description:
      'Translating complex technical innovations into compelling visual stories was the core objective behind my videography work for the Google Student Ambassadors and various tech showcases at Telkom University.',
    longDescription:
      'I produced dynamic promotional videos and highlight reels specifically tailored for cutting-edge IoT and software products. By combining cinematic visual techniques with highly structured narrative editing workflows, I was able to break down intricate technical features into engaging content. This creative direction effectively communicated the unique value propositions of the software and hardware products to a broader, non-technical audience, driving interest and engagement across digital platforms.',
    role: 'Videography',
    tools: ['Mirrorless Camera', 'Adobe Lightroom'],
    client: 'Google Student Ambassador, Telkom University Staff',
    year: 2026,
    link: 'https://drive.google.com/drive/folders/1WKDwd3AXzg60YiYNKGcuUvsTnDOzc9Nu?usp=drive_link',
    order: 6,
  },
]

export const workSection = {
  eyebrow: '02 / 04 — Selected Work',
  headline: [
    { text: 'Works I have ', accent: false },
    { text: 'created.', accent: true },
  ],
  description: 'A collection of design, video, and development projects I have worked on.',
}

// -----------------------------------------------------------------------
// Experience — mirrors the LinkedIn resume, most recent first.
// -----------------------------------------------------------------------
export const experienceSection = {
  eyebrow: '03 / 04 — Experience',
  headline: [
    { text: 'Professional ', accent: false },
    { text: 'Journey.', accent: true },
  ],
}

export const experience = [
  {
    role: 'Campus Ambassador',
    org: 'Telkom University',
    period: 'Okt 2024 — Jul 2026',
    location: 'Indonesia',
  },
  {
    role: 'User Interface Designer',
    org: 'Sobat Berbagi',
    period: 'Jun 2025 — Des 2025',
    location: 'Indonesia',
  },
  {
    role: 'Social Media Marketing Specialist',
    org: 'Upcolab',
    period: 'Agu 2025 — Okt 2025',
    location: 'Indonesia',
  },
  {
    role: 'Head of Creative and Graphics',
    org: 'AWS Cloud Club Indonesia',
    period: 'Sep 2024 — Sep 2025',
    location: 'Purwokerto, Jawa Tengah, Indonesia',
  },
  {
    role: 'Head of Media and Creatives',
    org: 'Google Developer Groups on Campus — Telkom University Purwokerto',
    period: 'Sep 2024 — Sep 2025',
    location: 'Indonesia',
  },
  {
    role: 'Software Programmer',
    org: 'CV Jenderal Solusi Digital',
    period: 'Jun 2025 — Jul 2025',
    location: 'Purwokerto, Jawa Tengah, Indonesia',
    note: 'Mobile Programmer with Flutter',
  },
]

export const educationSection = {
  eyebrow: '04 / 04 — Background',
  headline: [
    { text: 'Education & ', accent: false },
    { text: 'Milestones.', accent: true },
  ],
}

export const education = [
  {
    school: 'Telkom University',
    program: 'Bachelor of Software Engineering',
    period: 'August 2022 — December 2026',
  },
]

export const certifications = [
  {
    title: 'Pengenalan Metaverse (Metaverse 101)',
    issuer: 'Thematic Academy',
    type: 'Certification',
  },
  {
    title: 'Winner — 2022 Aperti BUMN Scholarship',
    issuer: 'Aperti BUMN',
    type: 'Award',
  },
  {
    title: 'Rank 2, Parallel Competency — Computer & Network Engineering',
    issuer: 'Expertise Competency',
    type: 'Award',
  },
]

export const cta = {
  headline: [
    { text: "Let's build something ", accent: false },
    { text: 'worth looking at.', accent: true },
  ],
  buttonLabel: 'Get In Touch',
  buttonHref: `mailto:${profile.email}`,
}

export const footer = {
  tagline: 'Building Harmony.',
  navGroups: [
    {
      title: 'Navigate',
      links: nav,
    },
    {
      title: 'Contact',
      links: [
        { label: profile.email, href: `mailto:${profile.email}` },
        { label: profile.linkedinLabel, href: profile.linkedin },
      ],
    },
  ],
  year: 2026,
}
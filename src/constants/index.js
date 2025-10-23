import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  disasterReady,
  mongodb,
  git,
  figma,
  resumeAnalyzer,
  CamCon,
  codespirit,
  docker,
  threejs,
  collegeportfolio,
  noor,
  python,
  java,
  nginx,
  redis,
  ubuntu,
  postgresql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Hackthon Enthusiast && Technology Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Nginx",
    icon: nginx,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "Code Spirit ( Open Source Project )",
    icon: creator,
    iconBg: "#383E56",
    date: "Mar 2025 - May 2025",
    points: [
      "Developing and maintaining backend using Node js and MongoDb and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing Secure Backend and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Self-Employed",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jun 2025 - Oct 2025",
    points: [
      "Developing and maintaining Camcon web Application using Mern with other frontend related technologies.",
      "Self Full functional project with implementing Frontend and Backend Both.",
      "Implementing responsive design and ensuring Rest Api with protected routes and multiple Dashboard.",
    ],
  },
  {
    title: "Mern Stack With AI Implementation Developer",
    company_name: "Self-Employed",
    icon: creator,
    iconBg: "#383E56",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js with Pre-Trained AI Model.",
      "Implementing simple Ui with AI Integration for better user experience.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Piyush  proved me wrong.",
    name: "Sweety Kaur",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Piyush does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Code Spirit ",
    description:
      "Web-based platform that allows users to search about hackthon , Hackthon teams , Tech Events with Quizze.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: codespirit,
    source_code_link: "https://github.com/piyushsingh24/",
    live_link: "https://www.codespirit.in/",
  },
  {
    name: "CamCon",
    description:
      "Developed a MERN stack platform to connect college seniors with aspiring students. students can interact with seniors and make informed admission decisions",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "farmer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: CamCon,
    source_code_link: "https://github.com/piyushsingh24/CamCon",
    live_link: "https://camcon-frontend.onrender.com/",
  },
  {
    name: "Ai Resume Analyzer",
    description:
      "Ai Resume Analyzer It will give you your Ats Score with featured information where actaully you need to improve into your resume.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini tools kit",
        color: "green-text-gradient",
      },
    ],
    image: resumeAnalyzer,
    source_code_link: "https://github.com/piyushsingh24/Resume-analyser",
    live_link: "https://inquisitive-semolina-e0a109.netlify.app/",
  },
  {
    name: "Disaster Ready",
    description:
      "Learn about the top 10 natural disasters and discover essential safety measures for your home, school, office, and outdoor activities. Test your knowledge with our interactive preparedness quiz.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
    ],
    image: disasterReady,
    source_code_link: "https://github.com/piyushsingh24/SIH_2025_internal_Round_submission",
    live_link: "https://disaster-ready-bg6b.vercel.app/",
  },
  {
    name: "College Portfolio",
    description:
      "Ensure better Education for Better World",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwinds",
        color: "green-text-gradient",
      },
      {
        name: "Web3-from",
        color: "pink-text-gradient",
      },
    ],
    image: collegeportfolio,
    source_code_link: "https://github.com/piyushsingh24/College-portfolio",
    live_link: "https://college-portfolio-psi.vercel.app/",
  },
  {
    name: "Ai Jaris",
    description:
      "Web based AI platform to communicate with AI model for better learning and development learning while communicating with Ai model .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwinds",
        color: "green-text-gradient",
      },
      {
        name: "gemini-tools-kit",
        color: "pink-text-gradient",
      },
    ],
    image: noor,
    source_code_link: "https://github.com/piyushsingh24/Jarvis",
    live_link: "https://jarvis-sigma-eight.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };

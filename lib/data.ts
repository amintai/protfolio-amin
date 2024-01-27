import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiAmazonaws,
  SiSupabase,
  SiFirebase,
  SiRedux,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiMui,
  SiPrisma,
  SiFlutter,
  SiHeroku,
  SiTailwindcss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

export const skills = [
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiTypescript,
    text: "TypeScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiRedux,
    text: "Redux",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },
  {
    icon: SiNodedotjs,
    text: "Node",
  },
  {
    icon: SiExpress,
    text: "Express",
  },
  {
    icon: SiMongodb,
    text: "MongoDB",
  },
  {
    icon: SiAmazonaws,
    text: "AWS",
  },
  {
    icon: SiHeroku,
    text: "Heroku",
  },
  {
    icon: SiSupabase,
    text: "Supabase",
  },
  {
    icon: SiFirebase,
    text: "Firebase",
  },
  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },
  {
    icon: SiPrisma,
    text: "Prisma",
  },
  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },
  {
    icon: SiMui,
    text: "MUI",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "1000Farmacie",
    description: "JavaScript, Next JS, React Bootstrap, AWS, Git/Github, Stripe, Ruby on Rails, MySql",
    link: "https://www.1000farmacie.it/",
  },
  {
    title: "Diamond ERP ",
    description: "React, Redux, AntD, Formik, TypeScript, Python, Django, PostgresSql",
    link: "https://github.com/",
  },
  {
    title: "Project 3",
    description: "Give a short description about project 3",
    link: "https://github.com/",
  },
  {
    title: "Project 4",
    description: "Give a short description about project 4",
    link: "https://github.com/",
  },
  {
    title: "Project 5",
    description: "Give a short description about project 5",
    link: "https://github.com/",
  },
  {
    title: "Project 6",
    description: "Give a short description about project 6",
    link: "https://github.com/",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Tntra",
    logo: "https://www.tntra.io/img/logo_black.svg",
    position: "Assosicate Software Engineer",
    description: `Understanding the business logic to deliver the technical
    requirements and debugging ﬁxing bugs.
    Improved existing project’s performance by 30% for mobile
    devices by implementing various optimization techniques in Next
    JS, enhancing page and rendering speed for optimal performance.
    Engaged in multiple projects, aiding colleagues in debugging and
    identifying root causes, actively contributing to the enhancement
    of existing code bases.`,
    years: "Oct, 2021 - May, 2023",
  },
  {
    company: "Tntra",
    logo: "https://www.tntra.io/img/logo_black.svg",
    position: "Software Engineer L2",
    description: `Collaborated closely with stakeholders and Product Owner teams,
    contributing to estimating, strategizing approaches, and solving
    intricate business challenges.
    Developed reusable UI components, including Editable Grids,
    Paginate Dropdowns, and S3 Bucket Image Upload components,
    for a custom ERP solution which reduces the Overall
    Development Eﬀorts by 100%.
    Improvised the performance of an existing React Application by
    Implementing Various Optimization Techniques.
    Provided guidance, solutions, and debugging assistance while
    reviewing PRs and monitoring the codebase for optimal
    performance.`,
    years: "Jun, 2023 - Present",
  },
  {
    company: "Babaria Institute Of Technology",
    logo: "/company-logo.png",
    position: "Student",
    description: `Programming: Proficient in Python, [Other Languages]
    OOPs Concepts: Strong understanding and practical application
    Engineering Practices: Hands-on experience in real-world scenarios
    Networking and OS: In-depth knowledge of computer networks and operating systems
    Android Development: Skills in mobile app development
    `,
    years: "Aug, 2017 - Sep, 2021",
  },
];

export const aboutYou = {
  name: "Amin Tai",
  description:
    "👋 Hi, I'm Amin. Frontend Developer. I'm passionate about Building side projects, solving problemsl. I've been working with JavaScript and It's frameworks from mostly React and React Native.",
  yearsOfExperience: "2.5 years",
  location: "Vadodara, India",
  email: "amintai157@gmail.com",
  mobile: '+91 8141759119',
  github: 'https://github.com/amintai',
  linkedIn: 'https://www.linkedin.com/in/amintai'
};

export const logoText = "@amin";

export const marketingHeadlines = {
  mainHeadline: "Hi, I'm Amin Tai, React and React Native Developer",
  subHeadline: "I have 2.5 years of experience in JavaScript and it's Framworks.",
};

export const websiteMetadata = {
  title: "Amin Tai | Software Engineer",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};

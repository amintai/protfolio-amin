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
    title: "Ecommarce Pharmacy Store",
    description: "Tech Stack: JavaScript, Next JS, React Bootstrap, AWS, Git/Github, Stripe, Ruby on Rails, MySql",
    link: "https://github.com/",
  },
  {
    title: "ERP Solution",
    description: "Tech Stack: React, Redux, AntD, Formik, TypeScript, Python, Django, PostgresSql",
    link: "https://github.com/",
  },
  {
    title: "Infonoblehse",
    description: "Infonoblehse is Empowering a Sustainable Future Elevate workplace well-being, safety, and efficiency with our comprehensive solutions in Environmental Health, Fire Safety, and HR Payrolls.",
    link: "https://infonoblehse.vercel.app/",
  },
  {
    title: "Realtime Chat Application",
    description: "Tech Stack: React, Node JS, Web Sockets, Socket.io, MongoDb, Express",
    link: "https://amin-node-chat-app.herokuapp.com/",
  },
  {
    title: "Pokedex",
    description: "Tech Stack: React, Redux, React Native, Open APIs, Axios",
    link: "https://github.com/",
  }
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export interface Blogs {
  title: string,
  description: string,
  link: string,
  logo: string,
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
    years: "Oct, 2021- 2023",
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
    description: `Programming: Proficient JavaScript, Java, Python etc.
    OOPs Concepts: Strong understanding and practical application
    Engineering Practices: Hands-on experience in real-world scenarios
    Networking and OS: In-depth knowledge of computer networks and operating systems
    Android Development: Skills in mobile app development
    `,
    years: "2017-2021",
  },
];

export const blogs:Blogs[] = [
  {
    title: 'Destucturing and Rest Operator in JS',
    description: 'Object destructuring is a new syntax introduced in ES6, which allows for the creation of variables by extracting an object’s properties in a simplified way. This can be particularly useful when working with frameworks and libraries such as Angular, React, or Vue, where you will be using a lot of syntax for destructuring array of objects. ',
    link: 'https://www.tntra.io/blog/destructuring-resting-and-spread-operators-in-javascript/',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433',
  },
]

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
  mainHeadline: "Hi, I'm Amin Tai, Passionate Frontend Developer Expert in React",
  subHeadline: "I have 2.5 years of experience in JavaScript and it's Framworks.",
};

export const websiteMetadata = {
  title: "Amin Tai | Software Engineer",
  description: "👋 Hey, Random Person here. Welcome to my portflio/blog.",
};

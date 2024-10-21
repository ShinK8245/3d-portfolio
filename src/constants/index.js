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
  redux,
  tailwind,
  nodejs,
  nextjs,
  git,
  figma,
  github,
  facil,
  artemisvision,
  chainimperium,
  reboot,
  artemis,
  chain,
  flipmatch,
  threejs,
  twistagram,
  calculator,
  todolist,
  facilpay,
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
    title: "Full-stack Developer",
    icon: web,
  },
  {
    title: "Modern JS Developer",
    icon: mobile,
  },
  {
    title: "UI Focused Developer",
    icon: backend,
  },
  {
    title: "React Engineer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "NextJS",
    icon: nextjs,
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
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "ArtemisVision",
    icon: artemisvision,
    iconBg: "#383E56",
    date: "May 2018 - Sep 2019",
    points: [
      "Developed modular React.js components, reducing new feature dev cycles by 25%.",
      "Integrated Redux to manage complex state, cutting state-related bugs by 20%.",
      "Improved backend data flow by revamping Java services, reducing latency by 15%",
      "Enhanced application stability through debugging and efficient root cause analysis.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Chain Imperium",
    icon: chainimperium,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Oct 2021",
    points: [
      "Developed RESTful APIs with Node.js/Express, cutting inter-service latency by 30%.",
      "Integrated GraphQL for optimized data fetching, reducing over-fetching by 25%.",
      "Improved Java microservices (Spring Boot), boosting data processing efficiency by 20%",
      "Collaborated on CI/CD pipelines in AWS, streamlining cloud-based deployments.",
    ],
  },
  {
    title: "Sr.Software Engineer",
    company_name: "FacilPAY",
    icon: facil,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - July 2024",
    points: [
      "Led frontend development of a real-time payment platform with React.js/Next.js, cutting page load times by 20% for 500,000+ users.",
      "Built real-time messaging services with GraphQL/REST APIs, reducing transaction response times by 15%.",
      "Developed Java microservices (Spring Boot) to ensure secure, high-availability transaction processing.",
      "Optimized database queries with Python, improving response times by 25% for payment trend insights.",
    ],
  },
  {
    title: "Software Engineer III",
    company_name: "JPMorgan Chase & Co",
    icon: reboot,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Delivered secure, scalable features, optimizing user experience and compliance.",
      "Built static content API with GraphQL, improving content delivery and performance.",
      "mproved code quality with Cypress/Jest testing, reducing post-release bugsy.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shin, a passionate web development learner who collaborates closely with cohorts. Thankful for his dedication!",
    name: "Muradil Erkin",
    designation: "CEO",
    company: "re:boot",
    image:
      "https://media.licdn.com/dms/image/C5603AQHamVu8N0DOKg/profile-displayphoto-shrink_800_800/0/1656545488630?e=1717632000&v=beta&t=vsyCTQ3OW4F_GqpMj24z-AHE8nynKta1JfZKimyNfTo",
  },

  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Shin proved me wrong.",
    name: "Dean Kim",
    designation: "CEO",
    company: "Chain Imperium",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHg3_auetkmVQ/profile-displayphoto-shrink_800_800/0/1682085742692?e=1717632000&v=beta&t=kOqWGa_AJXOJPfu9kz1qbewOllHKdMUBfH8z8hwWTEU",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Shin does.",
    name: "Danny Nunez",
    designation: "CEO",
    company: "Artemis Vision",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXPESXrqEMzNmDHgVcBRK3qKNCy0qXQ3F-VDxorr9h3A&s",
  },
];

const projects = [
  {
    name: "Artemis Vision",
    description:
      "Artemis Vision is a Web application where artists, musicians, and fans meet to create, share, and sell special digital art and music called NFTs.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "adobeXD",
        color: "green-text-gradient",
      },
      {
        name: "sketch",
        color: "pink-text-gradient",
      },
    ],
    image: artemis,
    source_code_link: "https://artemisvision.io/",
  },
  {
    name: "Chain Imperium",
    description:
      "Chain Imperium is a website that helps build blockchain technology, create digital contracts, start NFT marketplaces, and make virtual worlds called Metaverses.",
    tags: [
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: chain,
    source_code_link: "https://www.chainimperium.com/",
  },
  {
    name: "facilPay",
    description:
      "The Facil App lets users easily chat and pay each other using a built-in digital wallet. It aims to make using digital money and blockchain simple and part of everyday life.",
    tags: [
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: facilpay,
    source_code_link: "https://www.facilpay.io/",
  },

  {
    name: "ToDo app",
    description:
      "This app is built with React to help you easily organize and prioritize tasks. Its simple design and intuitive controls make managing your to-dos effortless and efficient.",

    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://todolist.skim-dev.com/",
  },
  {
    name: "Flip Match",
    description:
      "Play Flip Match, a fun game where you match hidden pictures. It's simple, with different grid sizes like 4x4 to 8x8, great for improving memory and speed.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: flipmatch,
    source_code_link: "https://flipmatch.skim-dev.com/",
  },
  {
    name: "Twistagram",
    description:
      "TwistaGram blends Twitter's quick posts with Instagram's visuals, making sharing easy and fun. Designed for mobile-friendly.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "mui",
        color: "green-text-gradient",
      },
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "nextauth.js",
        color: "orange-text-gradient",
      },
      {
        name: "tRPC",
        color: "pink-text-gradient",
      },
      {
        name: "planetscale",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
    ],
    image: twistagram,
    source_code_link: "https://twistagram.re-boot.us/",
  },

  // {
  //   name: "E-commerce: Bazaar",
  //   description:
  //     "Chain Imperium is a website that helps build blockchain technology, create digital contracts, start NFT marketplaces, and make virtual worlds called Metaverses.",
  //   tags: [
  //     {
  //       name: "figma",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "sketch",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: chain,
  //   source_code_link: "https://www.chainimperium.com/",
  // },
  // {
  //   name: "AI meal-kit app",
  //   description:
  //     "Chain Imperium is a website that offers services like building blockchain systems, creating smart contracts, setting up NFT marketplaces, and developing virtual worlds known as Metaverses.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: flipmatch,
  //   source_code_link: "https://github.com/",
  // },
  {
    name: "Calculator",
    description:
      "This web calculator offers simple arithmetic operations like add, subtract, multiply, divide, percentages, and sign changes, all within a user-friendly design.",

    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: calculator,
    source_code_link: "https://calculator.skim-dev.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

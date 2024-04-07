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
    title: "UI Designer",
    company_name: "ArtemisVision",
    icon: artemisvision,
    iconBg: "#383E56",
    date: "Nov 2022 - Mar 2023",
    points: [
      "Creating user-friendly web apps using React.js and other tools, matching the product's vision.",
      "Working with product managers, developers, and designers to turn ideas into real products.",
      "Making designs that work smoothly on all devices and follow the newest UI trends.",
      "Taking part in design meetings to give and get feedback, improving the look and feel of the product.",
    ],
  },
  {
    title: "UI Designer/Frontend Developer",
    company_name: "Chain Imperium",
    icon: chainimperium,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Nov 2023",
    points: [
      "Creating engaging and user-friendly interfaces for web applications, focusing on design principles that ensure a smooth user experience.",
      "Working with product managers, developers, and designers in a collaborative environment to deliver high-quality products.",
      "Designing adaptable interfaces that ensure a consistent user experience across different devices and browsers, while also contributing to front-end development tasks.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "re:boot",
    icon: reboot,
    iconBg: "#383E56",
    date: "Dec 2023 - Present",
    points: [
      "Developing web apps from start to finish with React.js, Next.js, TypeScript, Redux, from design to launch.",
      "Creating visually appealing, responsive sites with Tailwind CSS, Bootstrap, Material UI, ensuring great user experience.",
      "Working closely with designers, product managers for high-quality web solutions, focusing on communication, teamwork.",
      "Ensuring websites run smoothly on all browsers, devices, improving code with reviews, using Git, GitHub for collaboration.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "facilPAY",
    icon: facil,
    iconBg: "#E6DEDD",
    date: "Feb 2024 - Present",
    points: [
      "Developing and maintaining front-end aspects of web applications with React.js and complementary technologies.",
      "Working in collaboration with designers, product managers, and fellow developers to produce superior front-end products.",
      "Ensuring responsive design and compatibility across various browsers for optimal user interface.",
      "Engaging in code review processes, offering and receiving constructive feedback to enhance front-end development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Shin, a passionate web development learner who collaborates closely with us. Thankful for his dedication!",
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
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "sketch",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chain,
    source_code_link: "https://www.chainimperium.com/",
  },
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
    source_code_link: "https://github.com/ShinK8245/calculator",
  },
  {
    name: "ToDo List app",
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
    source_code_link: "https://github.com/ShinK8245/To-do-List",
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
    source_code_link: "https://github.com/ShinK8245/matching-card",
  },
  {
    name: "Twistagram",
    description:
      "TwistaGram blends Twitter's quick posts with Instagram's visuals, making sharing easy and fun. It's fully mobile-friendly, so you can connect on the go. Simple, fast, social.",
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
        name: "planescale",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
    ],
    image: twistagram,
    source_code_link: "https://github.com/Re-boot-Coding-Bootcamp/TwistaGram",
  },
  {
    name: "re:boot Bazaar",
    description:
      "Chain Imperium is a website that helps build blockchain technology, create digital contracts, start NFT marketplaces, and make virtual worlds called Metaverses.",
    tags: [
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "sketch",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chain,
    source_code_link: "https://www.chainimperium.com/",
  },
  {
    name: "AI meal-kit app",
    description:
      "Chain Imperium is a website that offers services like building blockchain systems, creating smart contracts, setting up NFT marketplaces, and developing virtual worlds known as Metaverses.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: flipmatch,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

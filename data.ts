export type Project = {
  id: number;
  bg_image?: string;
  img1: string;
  img2: string;
  img3?: string;
  img4?: string;
  title: string;
  subtitle: string;
  brief: string;
  href?: string;
  link?: string;
  videoUrl: string;
  description: string;
  about?: string;
  isAndroid?: boolean;
  slug: string;
  framework?: string;
  database?: string;
  ORM?: string;
  styling?: string;
  category?: string;
  type?: string;
  others?: string;
  pictures?: string[];
  howtos?: string[];
  withStripe?: boolean;
  withLiveKit?: boolean;
  forsale?: boolean;
  inProgress?: boolean;
};

export type Projects = Project[];

export const data: Projects = [
  // Duolingo
  {
    id: 1,
    bg_image: "/14.jpg",
    img1: "/duolingo/1.png",
    img2: "/duolingo/2.png",
    img3: "/duolingo/3.png",
    img4: "/duolingo/4.png",
    title: "Langling - Duolingo inspired sass language learning app clone",
    subtitle: "Language Learning App Clone",
    brief:
      "A Duolingo-inspired language learning app built with Next.js 13 that offers interactive lessons, progress tracking, and gamification features.",
    href: "/1",
    link: "https://langling.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This project is a full-stack clone of the popular language learning platform Duolingo, developed using Next.js 13 for its server-rendered capabilities and optimized performance. The app provides users with interactive lessons in multiple languages, utilizing Drizzle ORM and Neon DB for efficient data handling. It incorporates ElevenLabs AI for generating language exercises, creating a personalized learning experience. Users can engage in speaking, listening, and writing exercises with gamified elements such as points, levels, and streaks. The app also includes a comprehensive progress tracking dashboard, allowing users to monitor their learning journey and adjust goals accordingly.",
    slug: "dualingo-clone-project",
    withStripe: true,
    framework: "Next js, React js.",
    database: "Neon DB",
    ORM: "Drizzle",
    styling: "Css, Tailwind",
    category: "Language learning",
    type: "Clone",
    others: "Stripe, Elevenlabs",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/driz.png",
      // "/img/tss.svg",
      "/img/neon.png",
      "/img/elev.svg",
    ],
    howtos: [
      "Sign up for a new account using your email address or a social media login. This will allow you to track your progress and access personalized lessons. ",
      "Select the language you want to learn from the available options. You can start with the basics or take a placement test to find your level. ",
      "Begin with interactive lessons that include speaking, listening, and writing exercises. Earn points and unlock new levels as you complete each lesson. ",
      "Customize your learning experience by setting daily or weekly goals. The app will send reminders to help you stay on track and maintain your learning streak. ",
      "Visit the dashboard to view your learning history, achievements, and progress over time. Use this information to identify areas for improvement and adjust your learning strategy.",
    ],
  },
  // Soonest
  {
    id: 5,
    bg_image: "/18.png",
    img1: "/soonest/1.png",
    img2: "/soonest/2.png",
    img3: "/soonest/3.png",
    img4: "/soonest/4.png",
    title: "Soonest - Modern Real Estate Platform",
    subtitle: "Real Estate web application",
    brief:
      "Soonest is a full-featured real estate platform built using the MERN stack and other technologies",
    href: "/1",
    link: "https://soonest-test.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This is a full-featured real estate platform built with the MERN stack, leveraging Redux for state management. It allows users to explore and search for properties based on their specific needs. Registered users can upgrade to agent accounts to list and manage properties, ensuring a seamless experience for both buyers and sellers. The platform offers a responsive and user-friendly interface, making property discovery and management efficient and intuitive.",
    slug: "soonest-real-estate",
    withStripe: false,
    framework: "React js.",
    database: "MongoDB",
    ORM: "Mongoose",
    styling: "Sass, Css",
    category: "Utility",
    type: "Real estate",
    pictures: [
      "/img/react.svg",
      "/img/type.svg",
      "/img/sass.svg",
      "/img/css.svg",
      "/img/mgse.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Users sign up by providing their name, email, password, and other details. After registering, they log in using their credentials to access the platform. ",
      "Users can browse the homepage for featured properties or use filters (location, price, property type, etc.) to refine their search. Clicking on a property opens a detailed page with images, descriptions, pricing, and agent details.",
      "Users can save properties they are interested in by clicking the 'Bookmark' or 'Save' button. Bookmarked properties are accessible in their profile for easy access later.",
      "Users can view the agent's contact information on the property page. They can send a direct message or request a call back from the agent.",
      "A non-agent user can apply to upgrade their account to an agent. Once approved, they gain access to property listing features.",
      "Agents can add new properties by providing details like price, location, and images. They can manage, edit, or remove their listings from their dashboard.",
    ],
  },
  // Estater
  {
    id: 6,
    bg_image: "/17.png",

    img1: "/estater/1.png",
    img2: "/estater/2.png",
    img3: "/estater/3.png",
    img4: "/estater/4.png",
    title: "Estater - Simplified Real Estate Platform",
    subtitle: "An easy to navigate real estate app",
    brief:
      "Estater is a straightforward real estate platform designed for seamless property searching",
    href: "/1",
    link: "https://estater.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This is a straightforward real estate platform designed for seamless property searching. Built using React js, Prisma ORM and mongoDB database, it allows users to explore properties based on their preferences, such as location, price, and property type. Unlike traditional platforms, only the website owner (admin) has the authority to add and manage property listings. This ensures verified and high-quality listings for users while maintaining a simple and efficient browsing experience.",
    slug: "estater-real-estate",
    withStripe: false,
    framework: "React js.",
    database: "MongoDB",
    ORM: "Prisma",
    styling: "Css, Sass",
    category: "Utility",
    type: "Productivity",
    pictures: [
      "/img/react.svg",
      "/img/js.svg",
      "/img/sass.svg",
      "/img/mgse.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Users land on the homepage and browse featured properties. They can use filters (location, price range, property type) to refine their search.",
      "Clicking on a property opens a detailed page with images, descriptions, and pricing. Contact details or an inquiry form may be available for further discussions.",
      "Users can save properties they are interested in for quick access later.",
      "Users can reach out via a contact form or provided details to inquire about a property.",
      "The website owner (admin) has exclusive access to add, edit, or remove property listings from a secure dashboard.",
    ],
  },
  // Trello
  {
    id: 7,
    bg_image: "/19.png",
    img1: "/trello/1.png",
    img2: "/trello/2.png",
    img3: "/trello/3.png",
    img4: "/trello/4.png",
    title: "TaskFlow - Trello-like Task Management Platform",
    subtitle: "Productivity and Task-management App Clone",
    brief:
      "A Trello-like productivity app that allows users to mange tasks, and projects.",
    href: "/1",
    link: "https://frilio.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "TaskFlow is a modern task management web application built with Next.js, Tailwind CSS, and Clerk for authentication. It provides an intuitive drag-and-drop interface for managing tasks efficiently. Users can create boards, add lists, and organize tasks with cards—similar to Trello. With a user-friendly design and seamless authentication, TaskFlow makes project collaboration and personal task management effortless.",
    slug: "trello-clone-project",
    withStripe: true,
    framework: "Next js, React js.",
    database: "Neon DB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Task Management",
    type: "Clone",
    others: "Stripe, Shadcn UI",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/neon.png",
    ],
    howtos: [
      "Users register using Clerk authentication (email/password, social login, etc.). Once logged in, they are redirected to their dashboard.",
      "Users can create boards to organize projects. Each board represents a workspace where tasks are managed.",
      "Within a board, users can create lists (e.g., 'To Do,' 'In Progress,' 'Done'). Lists help structure tasks in different stages of completion.",
      "Users can add task cards under lists, including titles, descriptions, due dates, and labels. Cards can be dragged and dropped between lists to update their status.",
      "Users can edit card details or delete them when no longer needed. Additional features like comments, attachments, and subtasks can be included.",
      "Users can invite others to collaborate on boards. Each member can add, edit, and move tasks based on permissions.",
    ],
  },
  // Simplify
  {
    id: 12,
    bg_image: "/20.png",
    img1: "/simplify/1.png",
    img2: "/simplify/2.png",
    img3: "/simplify/3.png",
    img4: "/simplify/4.png",
    title: "Simplify - Digital Skills eLearning Platform",
    subtitle: "A modern platform for learing digital skills",
    brief:
      "Simplfy is a modern eLearning platform designed for users to learn digital skills through interactive courses, video lessons, and quizzes.",
    href: "/1",
    link: "https://simplifyskill.vercel.app/",
    videoUrl: "/v.mp4",
    description:
      "This is an interactive eLearning platform focused on 1-on-1 sessions for learning digital skills. Built with Next.js, Tailwind CSS, and Framer Motion, it provides a seamless booking system for personalized coaching. Users can browse available mentors, schedule sessions, and receive direct guidance tailored to their learning needs.",
    slug: "simplify-website",
    withStripe: false,
    framework: "Next js, React js.",
    database: "MongoDB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Digital skills",
    type: "Startup",
    others: "Shadcn UI",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Users register and log in to access personalized learning.",
      "Users explore different digital skill courses.",
      "Clicking on a enroll button opens the Course Details modal, where users can enroll after making payment for paid courses.",
      "Users receive a calendar invite and meeting link for the live session.",
      "After finishing lessons and passing quizzes, users receive certificates.",
    ],
  },
  // Discord
  {
    id: 3,
    bg_image: "/14.jpg",
    img1: "/discord/1.png",
    img2: "/discord/2.png",
    img3: "/discord/3.png",
    img4: "/discord/4.png",
    title: "Discord Clone",
    subtitle: "Chat and VoIP App Clone",
    brief:
      "A Discord-inspired chat and VoIP application developed with Next.js 13, LiveKit, and Prisma, offering real-time communication in servers and private messages.",
    href: "/1",
    link: "https://ds-team.onrender.com",
    videoUrl: "/v.mp4",
    description:
      "This project is a clone of Discord, featuring text, voice, and video communication in a full-stack application built with Next.js 13. Utilizing LiveKit for real-time interaction and Prisma with MongoDB for data management, the app supports server creation, channel organization, and role management. Users can join servers, participate in channel discussions, and engage in private messaging. The app's integration with Next.js 13 enables dynamic routing and efficient rendering, enhancing user experience. With features like direct messaging, role assignments, and media sharing, this clone provides a robust platform for community building and communication.",
    slug: "discord-clone-project",
    framework: "Next, React.",
    database: "Mongo DB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Social media",
    type: "Clone",
    others: "Uploadthing, Livekit, Clerk",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/lk.svg",
      "/img/mgb.svg",
    ],
    howtos: [
      "Sign up for an account using your email address or a social media login. Customize your profile with a username and avatar. ",
      "Explore public servers related to your interests or join private ones via invitation. Servers are organized into channels for different topics and activities. ",
      "Communicate with others through text, voice, and video channels. Use direct messaging for private conversations with friends. ",
      "Assign roles to members within a server to manage permissions and access. Customize roles to fit the structure and needs of your community. ",
      "Upload files, share links, and use bots to enhance your server's functionality. Engage with your community through events, polls, and announcements.",
    ],
  },
];

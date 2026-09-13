import WovryImg from "../assets/WovryKnitPurl.png";
import PortfolioImg from "../assets/Portfolio.png";
import LandingPageImg from "../assets/LandingPage.png";
import NotesAppImg from "../assets/NotesApp.png";

export const projects = [
  {
    title: "Wovry - Knit & Purl E-Commerce Platform",

    description:
      "Wovry (Knit & Purl) -> Responsive Showcase & Shop, Firebase Spark-Plan Friendly Stripe Checkout, Interactive Admin Dashboard",

    image: WovryImg,

    technologies: [
      "HTML5",
      "Vanilla JavaScript",
      "TailwindCSS",
      "FontAwesome icons",
      "Google Cloud Firestore & Firebase Auth",
      "Node.js",
      "Express",
      "Stripe Payment",
    ],

    liveDemo: "https://shisank93.github.io/Wovry/Wovry/index.html",

    github: "https://github.com/Rachit0910d/Wovry.git",

    animationDelay: "0s",
  },
  {
    title: "Personal Portfolio Website",

    description:
      "A modern, fully responsive digital resume showcasing my skills, projects, and experience through creative design, smooth animations, and an interactive user experience.",

    image: PortfolioImg,

    technologies: ["ReactTS", "TailwindCSS"],

    liveDemo: "https://portfolio-rachitsaini.vercel.app/",

    github: "https://github.com/Rachit0910d/CODSOFT/tree/main/portfolio",

    animationDelay: "0.5s",
  },

  {
    title: "Landing Page",

    description:
      "This Landing Page was created to test my design thinking. I didn't use any Canva template; instead, I used my own knowledge to build the design.",

    image: LandingPageImg,

    technologies: ["HTML", "CSS"],

    liveDemo: "https://codsoft-4py1.vercel.app/",

    github: "https://github.com/Rachit0910d/CODSOFT/tree/main/Landing-Page",

    animationDelay: "1.0s",
  },
  {
    title: "Notes Application",

    description:
      "A simple notes interface built with React, Vite, and Tailwind CSS. The app lets users enter a note title and details, then view recently added notes in a clean split-screen layout.",

    image: NotesAppImg,

    technologies: ["ReactJS", "TailwindCSS", "Lucide-react icons"],

    liveDemo: "https://notesmaking-git-main-rachit0910ds-projects.vercel.app/",

    github: "https://github.com/Rachit0910d/Notes-Website.git",

    animationDelay: "1.5s",
  },
];

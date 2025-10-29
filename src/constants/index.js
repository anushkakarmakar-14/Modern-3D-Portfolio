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
  mongodb,
  git,
  figma,
  docker,
  threejs,
  python,
  cpp,
  mysql,
  postgresql,
  firebase,
  flask,
  django,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  Resumind,
  signalist,
  Realtor,
  // Camp,
  Robocar,
} from "../assets";

// Import social icons from the social folder
import github from "../assets/social/github.png";
import linkedin from "../assets/social/linkedin.png";
import leetcode from "../assets/social/leetcode.png";
import hackerrank from "../assets/social/hackerrank.png";
import codeforces from "../assets/social/codeforces.png";
import codechef from "../assets/social/codechef.png";
import twitter from "../assets/social/twitter.png";
import instagram from "../assets/social/instagram.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
   {
    id: "social",  // Add this new section
    title: "Social",
  },
];

const services = [
  {
    title: "Fullstack Development",
    icon: web,
  },
  {
    title: "Technical Problem Solving",
    icon: mobile,
  },
  {
    title: "Data VIsualization & Analytics",
    icon: backend,
  },
  {
    title: "AI & Machine Learning",
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
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
    name: "SQL",
    icon: mysql,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "C++",
    icon: cpp,
  },
   {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
 
  
  
  // {
  //   name: "PostgreSQL",
  //   icon: postgresql,
  // },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  // {
  //   name: "Flask",
  //   icon: flask,
  // },
  // {
  //   name: "Django",
  //   icon: django,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Resumind",
    description:
      "Resumind is an intelligent web application that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS) and modern hiring standards. Users can upload their resume and receive an instant, in-depth analysis powered by AI, including a score, keyword matching, skill gap identification, and actionable feedback on formatting, length, and impact.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Resumind,
    source_code_link: "https://github.com/anushkakarmakar-14/ai-resume--analyzer",
    live_preview_link: "https://ai-resume-analyzer-drab.vercel.app/", // Added live demo
    category: "web",
  },
  {
    name: "Signalist",
    description:
      "Signalist is a streamlined stock tracking application I designed and built from the ground up to solve a common problem: information overload for casual investors. Instead of presenting users with overwhelming raw data, Signalist processes real-time market news and sentiment to generate clear, visual buy/sell/hold signals directly on their watchlist.",
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
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: signalist,
    source_code_link: "https://github.com/anushkakarmakar-14/stock_tracker_app",
    live_preview_link: "https://stock-tracker-app-eight.vercel.app/",
    // No live_preview_link for this one (for demonstration)
    category: "web",
  },
  {
    name: "Realtor",
    description:
      "A full-stack real estate web application enabling users to browse, search, and filter property listings for rent or sale. I engineered the platform with a responsive React front-end and a robust Node.js/Express API, featuring secure user accounts for agents and buyers, showcasing my skills in building scalable and user-centric products.",
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
    image: Realtor,
    source_code_link: "https://github.com/anushkakarmakar-14/real_estate",
    live_preview_link: "https://real-estate-nine-bice.vercel.app/", // Added live demo
    category: "web",
  },

  //  {
  //   name: "Realtor",
  //   description:
  //     "A full-stack real estate web application enabling users to browse, search, and filter property listings for rent or sale. I engineered the platform with a responsive React front-end and a robust Node.js/Express API, featuring secure user accounts for agents and buyers, showcasing my skills in building scalable and user-centric products.",
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
  //   image: Camp,
  //   source_code_link: "https://github.com/anushkakarmakar-14/real_estate",
  //   live_preview_link: "https://real-estate-nine-bice.vercel.app/", // Added live demo
  //   category: "web",
  // },
  // Data Analytics Projects
  // {
  //   name: "Sales Analytics Dashboard",
  //   description:
  //     "Interactive dashboard for analyzing sales data, tracking performance metrics, and generating business insights with real-time data visualization.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "tableau",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "sql",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/",
  //   live_preview_link: "https://sales-dashboard-demo.herokuapp.com/", // Added live demo
  //   category: "data",
  // },
  // {
  //   name: "Customer Segmentation Analysis",
  //   description:
  //     "Data analysis project for customer segmentation using clustering algorithms to identify different customer groups for targeted marketing.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "pandas",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scikit-learn",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  //   // No live_preview_link for this one
  //   category: "data",
  // },
  // {
  //   name: "Financial Data Visualization",
  //   description:
  //     "Real-time financial data visualization tool for stock market analysis and investment insights with interactive charts and graphs.",
  //   tags: [
  //     {
  //       name: "javascript",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "d3.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "api",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  //   live_preview_link: "https://financial-viz-demo.netlify.app/", // Added live demo
  //   category: "data",
  // },
  // AI & ML Projects
  {
    name: "AutoMaze Navigator",
    description:
      "Implemented a Q-Learning reinforcement algorithm for autonomous maze navigation. The robot car starts with random exploration and gradually develops an optimal policy for reaching targets, featuring state-action value mapping, reward systems, and epsilon-greedy exploration strategies for efficient learning.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
      {
        name: "Q-learning",
        color: "pink-text-gradient",
      },
    ],
    image: Robocar,
    source_code_link: "https://github.com/anushkakarmakar-14/AutoMaze-Robot-Car-Q-Learning",
    // live_preview_link: "https://sentiment-analysis-demo.streamlit.app/", // Added live demo
    category: "aiml",
  },
  // {
  //   name: "Image Recognition System",
  //   description:
  //     "Deep learning model for image classification and object detection capable of identifying various objects in images with high precision.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "pytorch",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "opencv",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  //   // No live_preview_link for this one
  //   category: "aiml",
  // },
  // {
  //   name: "Predictive Analytics Model",
  //   description:
  //     "Advanced predictive model for forecasting trends and patterns in complex datasets using ensemble learning and time series analysis.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "xgboost",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "time-series",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  //   live_preview_link: "https://predictive-model-demo.herokuapp.com/", // Added live demo
  //   category: "aiml",
  // },
];

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/anushkakarmakar-14",
    icon: github,
    color: "hover:bg-gray-400/20 hover:border-gray-400",
    description: "Check out my projects and contributions"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/anushka-karmakar-581bb9253/",
    icon: linkedin,
    color: "hover:bg-blue-400/20 hover:border-blue-400",
    description: "Connect with me professionally"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/Anushkaa1400/",
    icon: leetcode,
    color: "hover:bg-yellow-500/20 hover:border-yellow-500",
    description: "See my coding problem solutions"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/anushkakarmakar3",
    icon: hackerrank,
    color: "hover:bg-green-500/20 hover:border-green-500",
    description: "View my coding challenges"
  },
  {
    name: "CodeForces",
    url: "https://codeforces.com/profile/Anushkaa1400",
    icon: codeforces,
    color: "hover:bg-red-500/20 hover:border-red-500",
    description: "Competitive programming profile"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/anushkaa_1400",
    icon: codechef,
    color: "hover:bg-orange-500/20 hover:border-orange-500",
    description: "Coding competitions and practice"
  },
  {
    name: "Twitter",
    url: "https://x.com/Anushka_1400",
    icon: twitter,
    color: "hover:bg-blue-400/20 hover:border-blue-400",
    description: "Follow my updates"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/anushka_1400/",
    icon: instagram,
    color: "hover:bg-pink-500/20 hover:border-pink-500",
    description: "Personal life and behind the scenes"
  }
];

export { 
  services, 
  technologies, 
  experiences, 
  testimonials, 
  projects, 
  socialLinks 
};
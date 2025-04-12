import Face from 'assets/portalIcons/face.svg?react';
import Github from 'assets/portalIcons/github.svg?react';
import Linkedin from 'assets/portalIcons/linkedin.svg?react';
import HtmlIcon from 'assets/techIcons/html-5.svg?react';
import JsIcon from 'assets/techIcons/js.svg?react';
import CssIcon from 'assets/techIcons/css.svg?react';
import TypescriptIcon from 'assets/techIcons/typescript.svg?react';
import SassIcon from 'assets/techIcons/sass.svg?react';
import ReactIcon from 'assets/techIcons/React.svg?react';
import AboutIcon from 'assets/navIcons/about.svg?react';
import ContactIcon from 'assets/navIcons/contact.svg?react';
import CVIcon from 'assets/navIcons/cv.svg?react';
import ProjectIcon from 'assets/navIcons/project.svg?react';
import SkillIcon from 'assets/navIcons/skill.svg?react';

import ItSpa from 'assets/projects/ItSpa.png';
import MemoryGame from 'assets/projects/MemoryGame.png';
import nativeMems from 'assets/projects/nativeMems.png';
import OrgenizerApp from 'assets/projects/OrganizerApp.png';
import Portfolio from 'assets/projects/Portfolio.png';
import ShopProject from 'assets/projects/ShopProject.png';
import WeatherApp from 'assets/projects/WeatherApp.png';
import Physiotherapist from 'assets/projects/fizjo.png';

// Content Data for Main Page template
export const developer = [
    'SALAM, I’m ALAE',
    'SOFTWARE ENGINEERING STUDENT',
    'Full Stack Developer · React & Spring Enthusiast'
];

export const cv = ['Download CV'];

export const phoneNumber = [
    'SALAM, I’m ALAE',
    '+212 7 02 08 45 35',
    'Software Engineering Student · Full Stack Developer'
];

// Navigation data
export const Navdata = [
    'ABOUT ME',
    'PROJECTS',
    'SKILLS',
    'CONTACT',
    'CV',
    'ARCHIVE'
];
export const Url = [
    '/about',
    '/projects',
    '/skills',
    '/contact',
    '/CV',
    '/completed'
];


export const NavIcons = [
    AboutIcon,
    ProjectIcon,
    SkillIcon,
    ContactIcon,
    CVIcon,
    ProjectIcon,
];
// Social Network data
export const SocialNetworkIcon = [Face, Github, Linkedin];

export const SocialNetworkUrl = [
    'https://www.facebook.com/mgrzejszczyk/', // to edit !!!!!
    'https://github.com/Alae-J',
    'https://www.linkedin.com/in/alae-j/'
];

// Main Page Template Data
export const specialText = `"Fall seven times, stand up eight."
— Japanese Proverb`;
export const mainContentDataFontWight = ['S', 'M', 'XS'];
export const mainContentDataFontSize = ['M', 'M', 'S'];

// About View Content Data
export const aboutContentData = [
    "I'm a software engineering student at INPT with a passion for building clean, purposeful, and scalable applications.",
    "I started exploring web and mobile development through personal projects, and quickly fell in love with full-stack development — especially React and Spring Boot.",
    "Beyond just writing code, I’m obsessed with creating systems that work, learning high-leverage tools, and refining the way I think. I'm also deeply drawn to Japanese culture, and I dream of working there one day.",
];


// Pseudo Code data
export const pseudoCodeMain = ['<toki-dev>', '</toki-dev>'];
export const pseudoCodeSection = ['<section class=', '</section>'];

// ------------------------- TO EDIT THIS ------------------------------

// Skills data
export const skillsCategories = [
    `'FRONTEND ESSENTIALS'>`,
    `'FRONTEND LIBRARIES'>`,
    `'MOBILE DEVELOPMENT'>`,
    `'BACKEND LANGUAGES'>`,
    `'BACKEND LIBRARIES'>`,
    `'CMS & DATABASE & external platforms'>`,
    `'TOOLS'>`,
    'CLOUD INFRASTRUCTURE',
];

export const frontendEssentialsSkills = [
    'HTML5',
    'CSS3',
    'JS',
    'TypeScript',
    'React',
    'Sass',
];

export const backendsSkills = ['NODE JS', 'C++'];

export const reactSkills = [
    'React Router',
    'React Redux',
    'React Hooks',
    'Jest & React testing library',
    'Redux',
    'Redux Toolkit',
    'Redux Thunk',
    'MobX',
    'Styled Components',
    'React Bootstrap',
    'Material UI',
    'GSAP',
    'Axios',
    'Apollo',
    'Rest',
    'GraphQL',
    'LocaStorage',
    'Json server',
    'Formik',
];

export const mobileDevelopment = [
    'React Native',
    'React Navigation',
    'React ReduxNative Debugger',
];

export const backendFrameworks = [
    'Express',
    'Bcrypt',
    'JWT',
    'Nodemon',
    'Mongoose',
];

export const platformsSkills = ['DatoCMS', 'MongoDB', 'Netlify'];

export const toolsSkills = [
    'Git&Github',
    'Npm',
    'Webpack&Babel',
    'VS Code',
    'Devtools',
    'AdobeXD',
    'Figma',
    'Slack',
];
export const cloudSkills = [
    'Azure Devops',
    'Azure Boards - Agile',
    'Azure Pipelines',
];

export const techIcons = [
    HtmlIcon,
    CssIcon,
    JsIcon,
    TypescriptIcon,
    ReactIcon,
    SassIcon,
];

export const skills = [
    frontendEssentialsSkills,
    reactSkills,
    mobileDevelopment,
    backendsSkills,
    backendFrameworks,
    platformsSkills,
    toolsSkills,
    cloudSkills,
];

// Projects Data

export const ProjectMiniatures = [
    Portfolio,
    Physiotherapist,
    nativeMems,
    OrgenizerApp,
    ShopProject,
    MemoryGame,
    ItSpa,
    WeatherApp,
];

export const ProjectsUrl = [
    'https://github.com/Mattdev92/MatDevPortfolio',
    'https://github.com/Mattdev92/PhysiotherapyPortfoliio',
    'https://github.com/Mattdev92/NativeMems',
    'https://github.com/Mattdev92/Fullstack_organizer_app',
    'https://github.com/Mattdev92/Shop-project',
    'https://github.com/Mattdev92/Memory_game',
    'https://github.com/Mattdev92/IT_SPA_PROJECT_1',
    'https://github.com/Mattdev92/Weather-app',
];
export const ProjectTitles = [
    'My Frontend Portfolio',
    'Physiotherapist webpage',
    'Funny MEMs - native',
    'Organizer Fullstack App',
    'Ecommerce shop',
    'Memory Game',
    'SPA',
    'Weather App',
];

export const ProjectDescription = [
    'My Developer Portfolio presenting skills, projects and a little about me. Tech stack: React, Typescript, React Router, React hooks, Context, Styled Components',
    'First commarcial Project created for proffessional Physiotherapist. Tech stack: React, Typescript, React Router, React hooks, Context, Styled Components',
    'Native app with funny Mems. Mems are downloaded form DatoCMS and present on mobile App. You can upvote or downvote each Mem to categorize them. Tech stack: React, React Native, Typescript, React Router, React hooks, Redux Toolkit, Styled Components, GraphQl, DatoCMS',
    'Fullstack organizer app to categorize your tasks. App is connected with Mongo database. You can create your own user and login any time to see what you have to do. Project is based on Express and React. Tech stack: React, Express, Typescript, React Router, React Bootstrap',
    'E-commerce website simulated real shop with all user funcionalities. You can add any of product to cart, change quantity and make an order. Tech stack: React with class components (without hooks), Redux, GSAP, React Router',
    'Game is based on tradition rule to match pair of identical cards. You can see if your memory is better than your friends. Yout time will be recorded and present in case of match all pairs. Tech stack: React, Redux, Bulma, SCSS',
    `It's my first diploma project which I' he prepared for my postgraduate studies "frontend with React". This project was prepared using vanilla js without any js framework. Tech stack: Vanilla js, SCSS, Json server, axios, uuid, prettier, eslint`,
    `Weather app witch real time weather forecast. Webpage is connected to OpenWeather api. You can find any city and forecast to next 7 days in real time. Tech stack: React, Typescript, Axios, Redux`,
];

import Github from 'assets/portalIcons/github.svg?react';
import Linkedin from 'assets/portalIcons/linkedin.svg?react';
import HtmlIcon from 'assets/techIcons/html-5.svg?react';
import JsIcon from 'assets/techIcons/js.svg?react';
import CssIcon from 'assets/techIcons/css.svg?react';
import TypescriptIcon from 'assets/techIcons/typescript.svg?react';
import TailwindIcon from 'assets/techIcons/tailwind.svg?react';
import StyledComponents from 'assets/techIcons/styledcomponents.svg?react';
import SpringIcon from 'assets/techIcons/springboot.svg?react';
import NodeIcon from 'assets/techIcons/nodejs.svg?react';
import ExpressIcon from 'assets/techIcons/expressjs.svg?react';
import RestApiIcon from 'assets/techIcons/restfulapis.svg?react';
import JwtIcon from 'assets/techIcons/jwt.svg?react';
import BcryptIcon from 'assets/techIcons/bcrypt.svg?react';
import NodemonIcon from 'assets/techIcons/nodemon.svg?react';
import PrismaIcon from 'assets/techIcons/prisma.svg?react';
import AboutIcon from 'assets/navIcons/about.svg?react';
import ContactIcon from 'assets/navIcons/contact.svg?react';
import CVIcon from 'assets/navIcons/cv.svg?react';
import ProjectIcon from 'assets/navIcons/project.svg?react';
import SkillIcon from 'assets/navIcons/skill.svg?react';

import nativeMems from 'assets/projects/nativeMems.png';
import OrgenizerApp from 'assets/projects/OrganizerApp.png';
import Portfolio from 'assets/projects/Portfolio.png';
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
    'CV'
];
export const Url = [
    '/about',
    '/projects',
    '/skills',
    '/contact',
    '/CV'
];


export const NavIcons = [
    AboutIcon,
    ProjectIcon,
    SkillIcon,
    ContactIcon,
    CVIcon
];
// Social Network data
export const SocialNetworkIcon = [Github, Linkedin];

export const SocialNetworkUrl = [
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
export const pseudoCodeSection = ['<Section>', '</Section>'];

// ------------------------- TO EDIT THIS ------------------------------

// Skills data
export const skillsCategories = [
    'FRONTEND ESSENTIALS',
    'REACT ECOSYSTEM',
    'MOBILE DEVELOPMENT',
    'BACKEND & SERVER',
    'DATABASES',
    'GAME DEVELOPMENT',
    'PROGRAMMING LANGUAGES',
    'TOOLS & DEV EXPERIENCE',
    'DEPLOYMENT & CLOUD'
];

export const techIconsMap: Record<string, Record<string, React.FC>> = {
    'FRONTEND ESSENTIALS': {
        'HTML5': HtmlIcon,
        'CSS3': CssIcon,
        'JavaScript (ES6+)': JsIcon,
        'TypeScript': TypescriptIcon,
        'Tailwind CSS': TailwindIcon,
        'Styled-Components': StyledComponents,
    },
    'BACKEND & SERVER': {
        'Spring Boot': SpringIcon,
        'Node.js': NodeIcon,
        'Express.js': ExpressIcon,
        'RESTful APIs': RestApiIcon,
        'JWT Authentication': JwtIcon,
        'Bcrypt': BcryptIcon,
        'Nodemon': NodemonIcon,
        'Prisma': PrismaIcon,
    },
};

export const frontendEssentialsSkills = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'Tailwind CSS',
    'Styled-Components'
];

export const reactEcosystemSkills = [
    'React',
    'React Router',
    'React Hooks',
    'LocalStorage',
    'Axios',
    'GSAP',
    'Formik'
];

export const mobileDevelopmentSkills = [
    'Flutter'
];

export const backendServerSkills = [
    'Spring Boot',
    'Node.js',
    'Express.js',
    'RESTful APIs',
    'JWT Authentication',
    'Bcrypt',
    'Nodemon',
    'Prisma'
];

export const databaseSkills = [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'H2',
    'Mongoose'
];

export const gameDevSkills = [
    'Unity',
    'C#'
];

export const programmingLanguages = [
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'C',
    'C#'
];

export const toolsSkills = [
    'Git & GitHub',
    'NPM',
    'VS Code',
    'Figma',
    'DaVinci Resolve',
    'Linux'
];

export const cloudSkills = [
    'Netlify',
    'PostgreSQL on Neon',
    'Render (Docker)'
];

export const skills = [
    frontendEssentialsSkills,
    reactEcosystemSkills,
    mobileDevelopmentSkills,
    backendServerSkills,
    databaseSkills,
    gameDevSkills,
    programmingLanguages,
    toolsSkills,
    cloudSkills
];


// Projects Data
export const ProjectMiniatures = [
    Portfolio,
    Physiotherapist,
    nativeMems,
    OrgenizerApp
];

export const ProjectsUrl = [
    'https://github.com/Alae-J/Toki',
    'https://github.com/Alae-J/portfolio',
    'https://github.com/Alae-J/Hassan-Tower-VR',
    'https://github.com/Alae-J/JavaFX-Student-Advisor'
];

export const ProjectTitles = [
    'Toki · Task Manager + Pomodoro',
    'My Developer Portfolio',
    'Hassan Tower VR · Unity Simulation',
    'Student Advisor · JavaFX Desktop App'
];

export const ProjectDescription = [
    `A productivity-focused task manager featuring a fully working Pomodoro system, session stats, real-time timers, progress tracking, and a clean modular interface. Built from scratch with React, TypeScript, and Spring Boot.`,
    `My custom-designed developer portfolio showcasing skills, projects, and personality. Crafted with React, styled-components, animations, and a mobile-responsive layout. Emphasis on clean structure and user-centric design.`,
    `A first-person Unity experience simulating the iconic Moroccan heritage site Hassan Tower. Includes atmospheric visuals, keyboard navigation, object interaction (pick/drop/read), and cultural storytelling.`,
    `A desktop application helping students choose the ideal academic path. Users input grades and preferences, and receive tailored institution/major suggestions. Built using JavaFX and MySQL.`
];

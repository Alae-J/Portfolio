import Github from 'assets/portalIcons/github.svg?react';
import Linkedin from 'assets/portalIcons/linkedin.svg?react';

// FRONTEND DEVELOPMENT
import HtmlIcon from 'assets/techIcons/html-5.svg?react';
import JsIcon from 'assets/techIcons/js.svg?react';
import CssIcon from 'assets/techIcons/css.svg?react';
import TypescriptIcon from 'assets/techIcons/typescript.svg?react';
import ReactIcon from 'assets/techIcons/react.svg?react';
import TailwindIcon from 'assets/techIcons/tailwind.svg?react';
import StyledComponents from 'assets/techIcons/styledcomponents.svg?react';
import GSAPIcon from 'assets/techIcons/gsap.svg?react';

// BACKEND DEVELOPMENT
import SpringIcon from 'assets/techIcons/springboot.svg?react';
import NodeIcon from 'assets/techIcons/nodejs.svg?react';
import ExpressIcon from 'assets/techIcons/expressjs.svg?react';
import JwtIcon from 'assets/techIcons/jwt.svg?react';
import PrismaIcon from 'assets/techIcons/prisma.svg?react';

// MOBILE DEVELOPMENT
import FlutterIcon from 'assets/techIcons/flutter.svg?react';

// DATABASE SYSTEMS
import MySQLIcon from 'assets/techIcons/mysql.svg?react';
import PostgreSQLIcon from 'assets/techIcons/postgresql.svg?react';
import MongoDBIcon from 'assets/techIcons/mongodb.svg?react';
import H2Icon from 'assets/techIcons/h2.svg?react';

// GAME DEVELOPMENT
import UnityIcon from 'assets/techIcons/unity.svg?react';

// PROGRAMMING LANGUAGES
import JavaIcon from 'assets/techIcons/java.svg?react';
import PythonIcon from 'assets/techIcons/python.svg?react';
import CIcon from 'assets/techIcons/c.svg?react';
import CSharpIcon from 'assets/techIcons/c--.svg?react';
import Dart from 'assets/techIcons/dart.svg?react';

// TOOLS & DEV EXPERIENCE
import GitIcon from 'assets/techIcons/git.svg?react';
import NPMIcon from 'assets/techIcons/npm.svg?react';
import VSCodeIcon from 'assets/techIcons/vscode.svg?react';
import FigmaIcon from 'assets/techIcons/figma.svg?react';
import LinuxIcon from 'assets/techIcons/linux.svg?react';
import DavinciIcon from 'assets/techIcons/davinci.svg?react';

// CLOUD & DEPLOYMENT
import NetliflyIcon from 'assets/techIcons/netfly.svg?react';
import NeonIcon from 'assets/techIcons/neon.svg?react';
import DockerIcon from 'assets/techIcons/docker.svg?react';


import AboutIcon from 'assets/navIcons/about.svg?react';
import ContactIcon from 'assets/navIcons/contact.svg?react';
import CVIcon from 'assets/navIcons/cv.svg?react';
import ProjectIcon from 'assets/navIcons/project.svg?react';
import SkillIcon from 'assets/navIcons/skill.svg?react';

import HassanSimul from 'assets/projects/HassanSimulation.png';
import Portfolio from 'assets/projects/Portfolio.png';
import Toki from 'assets/projects/Toki.png';


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
    "I'm a software engineering student at INPT, passionate about building smart, efficient, and elegant digital systems.",
    "From crafting full-stack apps to diving deep into frontend architecture, I love combining React, TypeScript, and Spring Boot to turn ideas into real, working software.",
    "I think in terms of systems, optimize for impact over effort, and constantly explore tools that unlock higher leverage. Long-term, my dream is to work in Japan — blending technology with cultural authenticity.",
];

// Pseudo Code data
export const pseudoCodeMain = ['<toki-dev>', '</toki-dev>'];
export const pseudoCodeSection = ['<Section>', '</Section>'];

// ------------------------- TO EDIT THIS ------------------------------

// Skills data
export const skillsCategories = [
    'FRONTEND DEVELOPMENT',
    'BACKEND DEVELOPMENT',
    'MOBILE DEVELOPMENT',
    'DATABASE SYSTEMS',
    'GAME DEVELOPMENT',
    'PROGRAMMING LANGUAGES',
    'TOOLS & DEV EXPERIENCE',
    'CLOUD & DEPLOYMENT'
];

export const techIconsMap: Record<string, Record<string, React.FC>> = {
    'FRONTEND DEVELOPMENT': {
        'HTML5': HtmlIcon,
        'CSS3': CssIcon,
        'JavaScript (ES6+)': JsIcon,
        'TypeScript': TypescriptIcon,
        'React': ReactIcon,
        'Tailwind CSS': TailwindIcon,
        'Styled-Components': StyledComponents,
        'GSAP': GSAPIcon
    },
    'BACKEND DEVELOPMENT': {
        'Spring Boot': SpringIcon,
        'Node.js': NodeIcon,
        'Express.js': ExpressIcon,
        'Prisma': PrismaIcon,
        'JWT': JwtIcon
    },
    'MOBILE DEVELOPMENT': {
        'Flutter': FlutterIcon
    },
    'DATABASE SYSTEMS': {
        'MySQL': MySQLIcon,
        'PostgreSQL': PostgreSQLIcon,
        'MongoDB': MongoDBIcon,
        'H2': H2Icon
    },
    'GAME DEVELOPMENT': {
        'Unity': UnityIcon
    },
    'PROGRAMMING LANGUAGES': {
        'Java': JavaIcon,
        'JavaScript': JsIcon,
        'TypeScript': TypescriptIcon,
        'Python': PythonIcon,
        'C': CIcon,
        'C#': CSharpIcon,
        'Dart': Dart
    },
    'TOOLS & DEV EXPERIENCE': {
        'Git & GitHub': GitIcon,
        'NPM': NPMIcon,
        'VS Code': VSCodeIcon,
        'Figma': FigmaIcon,
        'Linux': LinuxIcon,
        'DaVinci Resolve': DavinciIcon
    },
    'CLOUD & DEPLOYMENT': {
        'Netlify': NetliflyIcon,
        'Neon': NeonIcon,
        'Render (Docker)': DockerIcon
    },
};

export const frontendDevelopment = [
    'HTML5',
    'CSS3',
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'Styled-Components',
    'GSAP'
];

export const backendDevelopment = [
    'Spring Boot',
    'Node.js',
    'Express.js',
    'Prisma',
    'JWT'
];

export const mobileDevelopment = [
    'Flutter'
];

export const databaseSystems = [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'H2'
];

export const gameDevelopment = [
    'Unity'
];

export const programmingLanguages = [
    'Java',
    'JavaScript',
    'TypeScript',
    'Python',
    'C',
    'C#',
    'Dart'
];

export const toolsAndWorkflow = [
    'Git & GitHub',
    'NPM',
    'VS Code',
    'Figma',
    'Linux',
    'DaVinci Resolve'
];

export const cloudAndDeployment = [
    'Netlify',
    'Neon',
    'Render (Docker)'
];

export const skills = [
    frontendDevelopment,
    backendDevelopment,
    mobileDevelopment,
    databaseSystems,
    gameDevelopment,
    programmingLanguages,
    toolsAndWorkflow,
    cloudAndDeployment
];


// Projects Data
export const ProjectMiniatures = [
    Toki,
    Portfolio,
    HassanSimul
];

export const ProjectsUrl = [
    'https://github.com/Alae-J/Toki',
    'https://github.com/Alae-J/portfolio',
    'https://github.com/Alae-J/Hassan-Tower-VR'
];

export const ProjectTitles = [
    'Toki · Task Manager + Pomodoro',
    'My Developer Portfolio',
    'Hassan Tower VR · Unity Simulation'
];

export const ProjectDescription = [
    `A productivity-focused task manager featuring a fully working Pomodoro system, session stats, real-time timers, progress tracking, and a clean modular interface. Built from scratch with React, TypeScript, and Spring Boot.`,
    `My custom-designed developer portfolio showcasing skills, projects, and personality. Crafted with React, styled-components, animations, and a mobile-responsive layout. Emphasis on clean structure and user-centric design.`,
    `A third-person Unity 3D simulation of the Hassan Tower in Rabat - Morocco, created as part of a visual computing exam at INPT. Includes keyboard navigation, smooth camera controls, ambient lighting, desert-style visuals, and a culturally-inspired environment — blending tech with Moroccan heritage.`
];

import AnimeU from '../images/projects/AnimeU.png';
import Plant from '../images/projects/Plant.png';
import Crypto from '../images/projects/Crypto.png';
import Trillio from '../images/projects/Trillio.png';
import SDS from '../images/projects/SDS.png';

/////////////////////////////////////////////
///////////  Skill Data

export const skills = [
  {
    title: 'markup',
    skills: [
      { skillTitle: 'HTML5', percentage: '85%' },
      { skillTitle: 'JSX', percentage: '90%' },
    ],
  },

  {
    title: 'interactivity',
    skills: [
      { skillTitle: 'Javascript', percentage: '85%' },
      { skillTitle: 'Typescript', percentage: '30%' },
      { skillTitle: 'React', percentage: '85%' },
      { skillTitle: 'NextJS', percentage: '60%' },
    ],
  },
  {
    title: 'styling',
    skills: [
      { skillTitle: 'Vanilla CSS', percentage: '90%' },
      { skillTitle: 'Tailwind', percentage: '95%' },
      { skillTitle: 'Sass', percentage: '60%' },
    ],
  },
  {
    title: 'soft skills',
    skills: [
      { skillTitle: 'Web Desgin', percentage: '80%' },
      { skillTitle: 'Time Managment', percentage: '85%' },
      { skillTitle: 'Team Work', percentage: '85%' },
    ],
  },
];

// export const skills = [
//   {
//     title: 'frontend',
//     skills: [
//       { skillTitle: 'HTML5', percentage: '80%' },
//       { skillTitle: 'CSS3', percentage: '60%' },
//       { skillTitle: 'Javascript', percentage: '50%' },
//       { skillTitle: 'Tailwind', percentage: '85%' },
//     ],
//   },

//   {
//     title: 'backend',
//     skills: [
//       { skillTitle: 'Supabase', percentage: '50%' },
//       { skillTitle: 'NextJS', percentage: '10%' },
//     ],
//   },
//   {
//     title: 'tools',
//     skills: [{ skillTitle: 'Webpack', percentage: '30%' }],
//   },
//   {
//     title: 'soft skills',
//     skills: [
//       { skillTitle: 'Lol', percentage: '95%' },
//       { skillTitle: 'lolxd', percentage: '95%' },
//     ],
//   },
// ];

/////////////////////////////////////////////
///////////  Projects Data

export const projectsData = [
  {
    id: 0,
    title: 'AnimeU',
    imgUrl: AnimeU,
    demoLink: 'https://leou-98.github.io/AnimeU/',
    repoLink: 'https://github.com/LeoU-98/AnimeU',

    desc: {
      status: 'Interative + 3rd Party API',
      work: 'Desgin & Development',
      framework: 'React',
      styling: 'Vanllia CSS',
    },
  },
  {
    id: 1,
    title: 'Plant',
    imgUrl: Plant,
    demoLink: 'https://leou-98.github.io/LeoU-Plants/',
    repoLink: 'https://github.com/LeoU-98/LeoU-Plants',
    desc: {
      status: 'Interactive',
      work: 'Desgin & Development',
      framework: 'React',
      styling: 'Vanllia CSS',
    },
  },
  {
    id: 2,
    title: 'Crypto',
    imgUrl: Crypto,
    demoLink: 'https://leou-98.github.io/Crypto/',
    repoLink: 'https://github.com/LeoU-98/Crypto',
    desc: {
      status: 'Static',
      work: 'Development',
      framework: 'React',
      styling: 'Tailwind CSS',
    },
  },
  {
    id: 3,
    title: 'Trillio',
    imgUrl: Trillio,
    demoLink: 'https://leou-98.github.io/Crypto/',
    repoLink: 'https://github.com/LeoU-98/Crypto',
    desc: {
      status: 'Static',
      work: 'Development',
      framework: 'React',
      styling: 'Tailwind CSS',
    },
  },
  {
    id: 4,
    title: 'SDS App',
    imgUrl: SDS,
    demoLink: 'https://leou-98.github.io/SDS/',
    repoLink: 'https://github.com/LeoU-98/SDS-APP',
    desc: {
      status: 'Interactive',
      work: 'Desgin & Development',
      framework: 'React',
      styling: 'Tailwind CSS',
    },
  },
];

/////////////////////////////////////////////
///////////  Work Data

export const workData = [
  {
    title: 'Self Taught Front-End Web Developer',
    date: {
      start: 'July 2023',
      end: 'Dec 2024',
    },
    points: [
      'Developed responsive web applications using HTML, CSS, and JavaScript, improving user engagement by 30% across multiple platforms',
      'Implemented modern front-end frameworks such as React  streamlining the development process and reducing page load times by 15%.',
      'Collaborated with UX/UI designers to create intuitive interfaces, resulting in a 25% increase in user satisfaction ratings.',
    ],
  },
];

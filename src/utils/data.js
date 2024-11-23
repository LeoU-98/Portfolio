import AnimeU from '../images/projects/AnimeU.png';
import Plant from '../images/projects/Plant.png';

/////////////////////////////////////////////
///////////  Skill Data

export const skills = [
  {
    title: 'markup',
    skills: [{ skillTitle: 'HTML5', percentage: '85%' }],
  },

  {
    title: 'backend',
    skills: [
      { skillTitle: 'C#', percentage: '90%' },
      { skillTitle: 'SQL Server', percentage: '80%' },
      { skillTitle: 'ASP.Net Core', percentage: '85%' },
      { skillTitle: '.Net Framework', percentage: '80%' },
    ],
  },
  {
    title: 'styling',
    skills: [{ skillTitle: 'Vanilla CSS', percentage: '60%' }],
  },
  {
    title: 'soft skills',
    skills: [
      { skillTitle: 'Time Managment', percentage: '85%' },
      { skillTitle: 'Team Work', percentage: '85%' },
      { skillTitle: 'Communication Skills', percentage: '90%' },
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
];

/////////////////////////////////////////////
///////////  Work Data

export const workData = [
  {
    title: 'Software Engineer',
    date: {
      start: 'July 2022',
      end: 'Dec 2023',
    },
    points: [
      'Software Testing Engineer at Telecom Egypt ',
      'Software Testing Engineer at ITI Internship',
    ],
  },
];

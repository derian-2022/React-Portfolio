import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';
import Work7 from './assets/project-7.jpg';
import Work8 from './assets/project-8.jpg';
import Work9 from './assets/project-9.jpg';
import Work10 from './assets/project-10.jpg';
import Work11 from './assets/project-11.jpg';
import Work12 from './assets/project-12.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className="nav__icon" />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className="nav__icon" />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className="nav__icon" />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Derian Augusto',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Arias Ballesteros',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '43 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Colombian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Pereira',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+3102304860',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'derianaugustoarias@mail.com',
  },

  {
    id: 9,
    title: 'Skype : ',
    description: 'derian.arias',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Spanish, English B/2 reading, B/1 talk, Portuguese reading',
  },
];

export const stats = [
  {
    id: 1,
    no: '8+',
    title: 'Months of <br /> Experience',
  },

  {
    id: 2,
    no: '7+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '6+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '9+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - November',
    title: 'Web Developer <span> job </span>',
    desc: 'Creation of Ecommerce with the JavaScript language, fully responsive, with purchase buttons and add products to the cart, increase the number of purchase products and payment emulation made by the successful user.,',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2022 - 2023',
    title: 'UI/UX Designer <span> E-commerce </span>',
    desc: 'Construction of applications, injection of information (data) through apis, layout and styles in pure css, fully responsive, with pagination, animations in general of the applications',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'January - 2023',
    title: 'E-commerce <span> +Apps </span>',
    desc: 'Creation of applications with react, react-hooks, DOM manipulation, data extraction, with weather application, commits apis Comics.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2023',
    title: 'Aplicaciones nativas para IOS y Android <span> DevTalles </span>',
    desc: 'Currently learning the technologies in React Native and TypeScript: Native applications for IOS and Android',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022*2023',
    title: 'Web Developer Full Stack <span> Acedemlo BootCamp </span>',
    desc: 'Technology sciences: React, React-Hooks, Vanilla JavaScript, HTML, Node.js with Express, CSS Styles',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2019',
    title: 'Marketing Digital <span> Tactico MD </span>',
    desc: 'Title in digital advertising on the platforms of Facebook ads, Google ads, management of massive data, Marketing by emails, SMS.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '95',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '89',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'React-Native',
    percentage: '66',
  },

  {
    id: 5,
    title: 'Tailwind CSS',
    percentage: '95',
  },

  {
    id: 6,
    title: 'Next.js',
    percentage: '50',
  },

  {
    id: 7,
    title: 'Node.js',
    percentage: '65',
  },

  {
    id: 8,
    title: 'React',
    percentage: '75',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Weather App',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'WeatherApp in real time',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React/React-Hooks',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://climareack.netlify.app/',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript/CSS/HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://derianecommercejavascript.netlify.app/',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Speculoos',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'speculoos',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React/Express',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://derian-lustrous-speculoos.netlify.app/',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'E-commerce',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Start of ecommerce, with shopping cart',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React/Express/React-Hooks',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://ecommercederian.netlify.app/#/',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Pokedex Api',
    details: [
      {
        title: 'Project : ',
        desc: 'Pokemon Api',
      },
      {
        title: 'Client : ',
        desc: 'Private',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Express',
      },
      {
        title: 'Preview : ',
        desc: 'https://derian-entregable-5.netlify.app/#/',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Portfolio 2',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Portfolio JavaScript',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'For you',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript Vanilla',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://derian2023.netlify.app',
      },
    ],
  },

  {
    id: 7,
    img: Work7,
    title: 'LandingCars',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Clone TESLA Astro',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Astro Moder Website',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://landingcars.netlify.app/#',
      },
    ],
  },

  {
    id: 8,
    img: Work8,
    title: 'Backend E-commerce Meals',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Backend Meals',
      },
      {
        icon: <FiUser />,
        title: 'Trello: Tareas del Proyecto : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Node.js, Express, Postman, Nodemon, CORS, bcrypt ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://meals-bso7.onrender.com/api/v1/restaurants',
      },
    ],
  },

  {
    id: 9,
    img: Work9,
    title: 'Contries in DOM',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Contries',
      },
      {
        icon: <FiUser />,
        title: 'Craeted Contries in DOM : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, DOM, Apis ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://manejodom.netlify.app/',
      },
    ],
  },

  {
    id: 10,
    img: Work10,
    title: 'App Rick and Morty',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'App Comics',
      },
      {
        icon: <FiUser />,
        title: 'Rick and Morty : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, DOM, Apis ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://appderickandmortyderian.netlify.app/',
      },
    ],
  },

  {
    id: 11,
    img: Work11,
    title: 'Blog in Next.js',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Blog',
      },
      {
        icon: <FiUser />,
        title: 'Craeted Blog Vercel : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Next.js, TypeScript, Vercel ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://project-next-js-derian.vercel.app/blog',
      },
    ],
  },

  {
    id: 12,
    img: Work12,
    title: 'Pokemon Random',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Pokemon Api',
      },
      {
        icon: <FiUser />,
        title: 'Rndom Pokemons in DOM : ',
        desc: 'Private',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React, DOM, Apis ',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'https://pokemonreactdom.netlify.app/',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];

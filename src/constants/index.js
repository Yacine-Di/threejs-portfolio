export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review: 'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review: 'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review: 'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review: 'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Fisheye (Front-End) - Site pour photographes indépendants',
        desc: 'Fisheye est un site web pour photographes indepéndants. Il permet de trouver des photographes indépendants pour des projets de photographie.',
        subdesc:
            'Vous avez un besoin de photos professionnelles pour un projet ? Vous avez un évènement et vous voulez le sauvegarder ? Fisheye est fait pour vous !',
        href: 'https://github.com/Yacine-Di/Front-End-Fisheye.github.io',
        texture: '/textures/project/fisheye.mp4',
        logo: '/assets/fisheye-logo.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html5.svg',
            },
            {
                id: 2,
                name: 'CSS3',
                path: 'assets/css3.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.svg',
            },
            {
                id: 4,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
        ],
    },
    {
        title: 'Les petits plats (Front-End) - Site de recettes culinaires',
        desc: 'Les petits est un site permettant de trouver la prochaine recette que vous allez cuisiner. Avec ses options de recherche il est facile de trier les recettes disponibles en fonc de vos envies.',
        subdesc:
            "Avec les petits plats l'utilisateur fait l'expérience d'une recherche rapide avec le champ de principal qui permet de faire une recherche transversale dans le titre, la description et les ingrédients et la recette.",
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/petitsplats.mp4',
        logo: '/assets/petitsplats.svg',
        logoStyle: {
            backgroundColor: '#B0C4DE',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html5.svg',
            },
            {
                id: 2,
                name: 'CSS3',
                path: 'assets/css3.svg',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript.svg',
            },
            {
                id: 4,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
        ],
    },
    {
        title: 'Kasa (Front-End) - Location de logements',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/kasa.mp4',
        logo: '/assets/kasa.svg',
        logoStyle: {
            backgroundColor: '#FFF5E1',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'SCSS',
                path: 'assets/scss.svg',
            },
            {
                id: 3,
                name: 'Figma',
                path: '/assets/figma.svg',
            },
        ],
    },
    {
        title: 'SportSee (Front-End) - Sport Analaytics',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/sportsee.mp4',
        logo: '/assets/sportsee.svg',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Api REST',
                path: 'assets/api.svg',
            },
            {
                id: 3,
                name: 'Rechart',
                path: '/assets/rechart.svg',
            },
        ],
    },
    {
        title: 'ArgentBank (Front-End) - App Bancaire',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/argentbank.mp4',
        logo: '/assets/argentbank.svg',
        logoStyle: {
            backgroundColor: '#C9D8B6',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'Redux',
                path: '/assets/redux.svg',
            },
            {
                id: 2,
                name: 'CSS3',
                path: 'assets/css3.svg',
            },
            {
                id: 4,
                name: 'API REST',
                path: '/assets/api.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall
            ? [4, -5, 0]
            : isMobile
            ? [5, -5, 0]
            : isTablet
            ? [5, -5, 0]
            : [9, -5.5, 0],
        reactLogoPosition: isSmall
            ? [3, 4, 0]
            : isMobile
            ? [5, 4, 0]
            : isTablet
            ? [5, 4, 0]
            : [10, 3, 0],
        ringPosition: isSmall
            ? [-5, 7, 0]
            : isMobile
            ? [-10, 10, 0]
            : isTablet
            ? [-12, 10, 0]
            : [-24, 10, 0],
        targetPosition: isSmall
            ? [-5, -10, -10]
            : isMobile
            ? [-9, -10, -10]
            : isTablet
            ? [-11, -7, -10]
            : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: 'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: 'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: 'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];

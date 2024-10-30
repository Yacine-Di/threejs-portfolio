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
        title: 'Fisheye (Front-End) - Freelance Photographers Plateform',
        desc: 'Fisheye is a platform for freelance photographers, offering them a space to showcase their work and allowing users to easily find skilled photographers for their photo projects.',
        subdesc:
            "Built with Vanilla JavaScript, Fisheye is fully accessible via ARIA attributes. It features a modal that lets users view photographers' work, ensuring an inclusive browsing experience.",
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
        title: 'Les Petits Plats (Front-End) - Culinary recipes website',
        desc: "Les Petits Plats is a website that helps you find your next recipe to cook. With its search options, it's easy to sort available recipes based on your preferences.",
        subdesc:
            'Developed in Vanilla JavaScript, the search algorithm allows for quick access to updated recipe results, all based on the search field and tags.',
        href: 'https://github.com/Yacine-Di/Les-petits-plats.github.io',
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
        title: 'Kasa (Front-End) - Website for Housing Rental',
        desc: 'Kasa is a website that allows property owners to rent out their accommodations. Whether you are traveling or on a business trip, Kasa will offer you the best options for private rentals.',
        subdesc:
            'Developed with React, SCSS, and Figma mockups, it highlights the accommodations. Photos, descriptions, ratings—everything is provided to help you choose the right place for you.',
        href: 'https://github.com/Yacine-Di/kasa',
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
        title: 'SportSee (Front-End) - Sports Analaytics Dashboard',
        desc: 'SportSee is an analytics dashboard that allows users to track their physical progress through multiple data points. Easy to use, the data is displayed on graphs.',
        subdesc:
            'Developed with React, CSS3, and Recharts as the charting library, the site presents informations in a structured manner. Data is retrieved via API calls using the fetch method.',
        href: 'https://github.com/Yacine-Di/sportsee',
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
        title: 'ArgentBank (Front-End) - Banking Application',
        desc: 'ArgentBank is a banking app that allows users to view their bank accounts with a secure connection. This is achieved through a JWT (JSON Web Token).',
        subdesc:
            'Developed using React, Redux, and RTK Query for REST API calls, ArgentBank offers robust state management and efficient API interactions for a seamless user experience.',
        href: 'https://github.com/Yacine-Di/ArgentBank-Front',
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
        name: ' Notion',
        pos: 'Degree Program',
        duration: '2023 - 2024',
        title: 'Notion helps me organize my projects. I use it for project management, task tracking, and as a documentation hub, making everything from design notes to progress updates easily accessible.',
        icon: '/assets/notion.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Degree Program',
        duration: '2023 - 2024',
        title: 'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: '.NET',
        pos: 'Junior Web Developer',
        duration: '2017 - 2019',
        title: 'During two years of apprenticeship, I programmed in C# with the .NET framework, building skills in a typed language and solid documentation for maintainability.',
        icon: '/assets/dot-net.svg',
        animation: 'salute',
    },
];

export const home = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About Me',
    headLine: 'University of Waterloo - ECE student',
    subtitle: 'Candidate for Bachelor of Engineering - 2025, with a passion for data, coding, and photography',
    buttonLabel: 'Experiences',
    buttonPath: 'experience1',
    imgStart : false,
    img: require('../images/svg-1.svg').default,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
    ofset: -80
}

export const experienceOne = {
    id: 'experience',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Experience #1',
    headLine: 'Ruijie Networks',
    subtitle: 'Co-op Feb-Apr 2021, Fujian, Fuzhou',
    description: '5G Open UPF developer intern. Solution Implementation and Debugging of 5GC UPF redirect ' +
        'function with Cisco VPP engine. Writing of formal software design proposal with complete design ' +
        'evaluation procedure. And Solution functionality verification with python automation script.',
    buttonLabel: 'Next Highlight',
    buttonPath: 'experience2',
    imgStart : true,
    img: require('../images/svg-2.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
}

export const experienceTwo = {
    id: 'experience2',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Experience #2',
    headLine: 'Google Data Analytics Certificate',
    subtitle: 'Coursera',
    description: 'Completed a 6 month job-ready Google Career Certificate training in two month ' +
        'time. Demonstrated hands-on experience with data cleaning, manipulation, project management' +
        ', understanding and communicating the findings from data analytics. Capable of transforming ' +
        'complex data into clear, understandable, and feasible insights.',
    buttonLabel: 'Next Highlight',
    buttonPath: 'experience3',
    imgStart : false,
    img: require('../images/dataproc.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    ofset: -100
}

export const experienceThree = {
    id: 'experience3',
    lightBg: true,
    lightText: false,
    lightTextDesc: true,
    topLine: 'Experience #3',
    headLine: 'VEX 16818X',
    subtitle: 'Founder of Private Robotics Team',
    description: 'VEX Solution Design, Hardware and Software implementation. Lead and ' +
        'mentored team of 4, qualified for provincial tournament with a top 2 finish in qualifying. ' +
        'Was able to create a competitive robot with a tight budget compared to opponents. ' +
        'Founder and CTO of VEX Robotics Team 16818X, 2019-2020',
    buttonLabel: 'Projects',
    buttonPath: 'projects',
    imgStart : true,
    img: require('../images/robot.svg').default,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,
    ofset: 0
}
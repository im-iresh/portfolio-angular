import { Skill, Project } from "../models/common.model";

export const NAV_ITEMS = [
    { label: 'Home', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
];

export  const EXPERIENCE_LIST = [
    {
      title: 'Software Engineer',
      company: 'Samsung Research & Development Institute',
      date: 'July 2024 – Present',
      highlights: [
        'Designed Priority Desk portal with LLM-driven classification, reducing resolution time by 40% for 4,500+ cases/month',
        'Built automated data pipeline using Selenium & BeautifulSoup with LLM-powered semantic analysis, improving efficiency by 50%',
        'Created Smart Data Visualizer with interactive dashboards, cutting cross-team analysis time by 40%',
        'Developed scalable components in Angular (TypeScript) and backend services in Go & Python (Flask)'
      ],
      technologies: ['TypeScript', 'Angular', 'Go', 'Python', 'LLMs', 'MongoDB']
    }
];

export  const SKILLS_LIST: Skill[] = [
    {
      category: 'Languages',
      items: ['C/C++', 'TypeScript', 'Go', 'Python', 'SQL', 'Dart']
    },
    {
      category: 'Frameworks',
      items: ['Angular', 'Flutter', 'Flask']
    },
    {
      category: 'Databases',
      items: ['MongoDB', 'MySQL', 'Firebase']
    },
    {
      category: 'Tools & Concepts',
      items: ['Git', 'REST APIs', 'Selenium', 'BeautifulSoup', 'Data Pipelines', 'LLMs']
    }
  ];

  // Projects data
export const PROJECT_LIST: Project[] = [
    {
      icon: '📱',
      title: 'MWEP App',
      tech: 'Flutter • Firebase • JWT',
      description: 'Mobile application for Mess Worker Education Program to track and document educational progress. Features secure authentication and near real-time group communication using polling-based updates.',
      tags: ['Flutter', 'Firebase Auth', 'Real-time Updates']
    },
    {
      icon: '🏆',
      title: 'Leadership & Events',
      tech: 'Organization • Management',
      description: 'Organized major technical events including Plinth 2k23 (India\'s first web3 techno-fest), LNM Hacks 2023 (350+ participants), and managed large-scale cultural events at Vivacity 2023.',
      tags: ['Event Management', 'Team Leadership']
    },
    {
      icon: '💻',
      title: 'Competitive Programming',
      tech: 'Algorithms • Problem Solving',
      description: 'Active on LeetCode with contest ranking of 679 in Biweekly Contest 118. Ranked 9th in Zonal National Cyber Olympiad 2018. Strong foundation in algorithms and data structures.',
      tags: ['Algorithms', 'DSA', 'Problem Solving']
    }
  ];

  // Contact links
export const CONTACT_LINKS = [
    { icon: '🔗', label: 'LinkedIn', url: '#' },
    { icon: '💻', label: 'GitHub', url: '#' },
    { icon: '📊', label: 'LeetCode', url: '#' }
  ];

export const WEBSITE_TITLE = 'Iresh Agrawal - Portfolio';
export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  icon: string;
  title: string;
  tech: string;
  description: string;
  tags: string[];
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  highlights: string[];
  technologies: string[];
}
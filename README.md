# Portfolio Website - Angular Single Component Application

A modern, responsive portfolio website built with Angular 20 showcasing your skills, experience, and projects.

## Features

- ✅ Single component architecture
- ✅ Built with Angular 20
- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Modern dark theme with cyan accents
- ✅ Interactive hover effects
- ✅ TypeScript with strict typing
- ✅ Clean, maintainable code structure

## Project Structure

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── app.component.ts       # Main component logic
│   │   ├── app.component.html     # Template
│   │   ├── app.component.css      # Component styles
│   │   └── app.module.ts          # App module
│   ├── index.html                 # Main HTML file
│   ├── main.ts                    # Bootstrap file
│   └── styles.css                 # Global styles
├── angular.json                   # Angular CLI config
├── package.json                   # Dependencies
└── tsconfig.json                  # TypeScript config
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   # or
   ng serve
   ```
   Navigate to `http://localhost:4200/`

3. **Build for Production**
   ```bash
   npm run build
   # or
   ng build
   ```
   The build artifacts will be stored in the `dist/` directory.

## Customization Guide

### Update Personal Information

Edit the data in `app.component.ts`:

```typescript
// Experience
experience: Experience[] = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    date: 'Start - End Date',
    highlights: ['Achievement 1', 'Achievement 2'],
    technologies: ['Tech1', 'Tech2']
  }
];

// Projects
projects: Project[] = [
  {
    icon: '📱',
    title: 'Project Name',
    tech: 'Tech Stack',
    description: 'Project description',
    tags: ['Tag1', 'Tag2']
  }
];

// Contact Links
contactLinks = [
  { icon: '🔗', label: 'LinkedIn', url: 'your-linkedin-url' },
  { icon: '💻', label: 'GitHub', url: 'your-github-url' }
];
```

### Customize Styling

Colors are defined in `app.component.css` using CSS variables:

```css
:root {
  --bg-primary: #0a0e27;      /* Main background */
  --bg-secondary: #131729;     /* Card backgrounds */
  --accent: #00d9ff;          /* Primary accent color */
  --accent-soft: #4a9eff;     /* Secondary accent */
  --text-primary: #e8edf4;    /* Main text */
  --text-secondary: #9ba3b4;  /* Secondary text */
}
```

### Add New Sections

1. Add section data to the component class in `app.component.ts`
2. Add the section HTML to `app.component.html`
3. Add navigation item to `navItems` array
4. Style it in `app.component.css`

## Component Features

### TypeScript Interfaces

The component uses strongly-typed interfaces:

```typescript
interface Skill {
  category: string;
  items: string[];
}

interface Project {
  icon: string;
  title: string;
  tech: string;
  description: string;
  tags: string[];
}

interface Experience {
  title: string;
  company: string;
  date: string;
  highlights: string[];
  technologies: string[];
}
```

### Smooth Scrolling

Built-in smooth scroll functionality:

```typescript
scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
```

## Technologies Used

- **Angular 20** - Framework
- **TypeScript 5.7** - Language
- **CSS3** - Styling
- **DM Sans & JetBrains Mono** - Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this for your own portfolio!

## Contact

For questions or suggestions, reach out via the contact form on the website.

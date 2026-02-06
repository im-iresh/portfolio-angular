# Portfolio Setup & Customization Guide

## Quick Start

1. **Extract the portfolio-angular folder to your desired location**

2. **Install Node.js** (if not already installed)
   - Download from https://nodejs.org/
   - Recommended: LTS version (v20 or v22)
   - Verify installation:
     ```bash
     node --version
     npm --version
     ```

3. **Navigate to project folder**
   ```bash
   cd portfolio-angular
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Run the development server**
   ```bash
   npm start
   ```
   
6. **Open browser**
   - Navigate to: `http://localhost:4200/`
   - The app will automatically reload if you change any source files

## Customization Checklist

### Step 1: Update Personal Information

Open `src/app/app.component.ts` and update:

#### Hero Section
```typescript
// Line 1: Update title
title = 'Your Name - Portfolio';
```

#### Navigation (optional - already configured)
```typescript
navItems = [
  { label: 'Home', id: 'home' },
  { label: 'Experience', id: 'experience' },
  // Add more if needed
];
```

#### Experience Section
```typescript
experience: Experience[] = [
  {
    title: 'Your Job Title',
    company: 'Your Company',
    date: 'Month Year – Present',
    highlights: [
      'Your achievement 1 with metrics',
      'Your achievement 2 with impact',
      'Your achievement 3',
    ],
    technologies: ['Tech1', 'Tech2', 'Tech3']
  },
  // Add more experiences
];
```

#### Skills Section
```typescript
skills: Skill[] = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python']
  },
  {
    category: 'Frameworks',
    items: ['Angular', 'React', 'Node.js']
  },
  // Add more categories
];
```

#### Projects Section
```typescript
projects: Project[] = [
  {
    icon: '🚀', // Any emoji or text
    title: 'Project Name',
    tech: 'Tech Stack • Framework • Tools',
    description: 'Detailed description of what the project does and its impact.',
    tags: ['Tag1', 'Tag2', 'Tag3']
  },
  // Add more projects
];
```

#### Contact Links
```typescript
contactLinks = [
  { icon: '🔗', label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { icon: '💻', label: 'GitHub', url: 'https://github.com/yourusername' },
  { icon: '📊', label: 'LeetCode', url: 'https://leetcode.com/yourprofile' },
  // Add more links (Twitter, Portfolio site, etc.)
];
```

### Step 2: Update Text Content

Open `src/app/app.component.html` and update:

#### Hero Section (lines 9-15)
```html
<div class="hero-label">👋 Your Title/Role</div>
<h1>Your catchy <span class="gradient-text">headline here</span></h1>
<p>Your professional summary in 1-2 sentences. What you do and what makes you unique.</p>
```

#### Section Headers
Update the section descriptions to match your style:
- Line 27: Experience section description
- Line 56: Skills section description
- Line 73: Projects section description
- Line 96: Contact section intro

#### Footer (lines 104-105)
```html
<p>Designed & Built by Your Name • 2024</p>
<p>Made with Angular, TypeScript, and your personal touch</p>
```

### Step 3: Customize Colors & Theme

Open `src/app/app.component.css` and modify the CSS variables (lines 10-17):

```css
:root {
  --bg-primary: #0a0e27;      /* Main background - dark blue */
  --bg-secondary: #131729;     /* Card backgrounds - slightly lighter */
  --accent: #00d9ff;          /* Primary accent - cyan */
  --accent-soft: #4a9eff;     /* Secondary accent - soft blue */
  --text-primary: #e8edf4;    /* Main text - off-white */
  --text-secondary: #9ba3b4;  /* Secondary text - muted gray */
  --border: rgba(255, 255, 255, 0.1); /* Border color */
}
```

**Color Scheme Suggestions:**
- **Purple Theme**: `--accent: #a855f7;` `--accent-soft: #c084fc;`
- **Green Theme**: `--accent: #10b981;` `--accent-soft: #34d399;`
- **Orange Theme**: `--accent: #f59e0b;` `--accent-soft: #fbbf24;`
- **Pink Theme**: `--accent: #ec4899;` `--accent-soft: #f472b6;`

### Step 4: Change Fonts (Optional)

Current fonts:
- **Body**: DM Sans
- **Code/Accent**: JetBrains Mono

To change fonts, update line 1 in `app.component.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;700&display=swap');
```

Then update the font-family properties throughout the CSS.

### Step 5: Customize Logo

In `app.component.html` line 3, update the logo:

```html
<div class="logo">YourInitials</div>
<!-- or -->
<div class="logo">&lt;YN /&gt;</div>
```

### Step 6: Add Email Address

In `app.component.html` line 99:

```html
<a href="mailto:your.email@example.com" class="btn btn-primary">Email Me</a>
```

## Advanced Customization

### Add a New Section

1. **Add data to component** (app.component.ts):
```typescript
newSection = {
  title: 'New Section',
  content: 'Content here'
};
```

2. **Add HTML template** (app.component.html):
```html
<section id="newsection">
  <div class="section-header">
    <div class="section-label">// LABEL</div>
    <h2>{{ newSection.title }}</h2>
  </div>
  <!-- Your content -->
</section>
```

3. **Add navigation item** (app.component.ts):
```typescript
navItems = [
  // ... existing items
  { label: 'New Section', id: 'newsection' }
];
```

### Modify Animations

Speed up/slow down the pulsing background (app.component.css line 146):
```css
animation: pulse 8s ease-in-out infinite; /* Change 8s to your preference */
```

### Change Responsive Breakpoint

Modify the mobile breakpoint (app.component.css line 394):
```css
@media (max-width: 768px) {
  /* Change 768px to your preferred breakpoint */
}
```

## Building for Production

### Local Build
```bash
npm run build
```

Output will be in `dist/portfolio-angular/`

### Deploy to GitHub Pages

1. Install angular-cli-ghpages:
```bash
npm install -g angular-cli-ghpages
```

2. Build and deploy:
```bash
ng build --base-href "https://yourusername.github.io/repository-name/"
npx angular-cli-ghpages --dir=dist/portfolio-angular
```

### Deploy to Netlify/Vercel

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist/portfolio-angular`

## Troubleshooting

### Port 4200 already in use
```bash
ng serve --port 4300
```

### Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
Ensure you're using Node 20+ and Angular 20

### Styles not loading
Check that `styles.css` is included in `angular.json` under `build.options.styles`

## Performance Tips

1. **Optimize images**: Use WebP format, compress images
2. **Lazy load**: For future multi-component apps
3. **AOT compilation**: Already enabled in production builds
4. **Bundle analysis**: 
```bash
npm run build -- --stats-json
```

## Need Help?

- Angular Docs: https://angular.io/docs
- Stack Overflow: Tag your questions with `angular`
- This project uses Angular 17 with standalone components disabled (classic module approach)

## Next Steps

1. Replace placeholder links with real URLs
2. Add your actual projects with descriptions
3. Update achievements with metrics
4. Add more sections if needed (Education, Certifications, Blog, etc.)
5. Test on multiple devices
6. Deploy to production!

Happy coding! 🚀

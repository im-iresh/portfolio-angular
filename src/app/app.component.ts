import { Component } from '@angular/core';
import { Experience, Skill, Project } from './models/common.model';
import { CONTACT_LINKS, EMAIL_ID, EXPERIENCE_LIST, NAV_ITEMS, PROJECT_LIST, SKILLS_LIST, WEBSITE_TITLE } from './constants/common.constants';



@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = WEBSITE_TITLE;

  // Navigation items
  navItems = NAV_ITEMS;

  // Experience data
  experience: Experience[] = EXPERIENCE_LIST;

  // Skills data
  skills: Skill[] = SKILLS_LIST;

  // Projects data
  projects: Project[] = PROJECT_LIST;

  // Contact links
  contactLinks = CONTACT_LINKS;

  emailId = EMAIL_ID;

  // Smooth scroll to section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}



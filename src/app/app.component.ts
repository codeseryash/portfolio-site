import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkComponent } from './components/work/work.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import VanillaTilt from 'vanilla-tilt';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
      RouterOutlet,AboutComponent, HomeComponent, NavbarComponent, SkillsComponent, WorkComponent, ExperienceComponent, ContactComponent, EducationComponent,
      FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      //this.appendCursorAnimationCss();
    }

  }
  appendCursorAnimationCss(): void {
    // Add your logic here for appending cursor animation CSS
    const tiltElements = Array.from(document.querySelectorAll('.tilt')) as HTMLElement[];
      VanillaTilt.init(tiltElements, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.2
      });
  }

  title = 'Porfolio Site Yash Arora';
}

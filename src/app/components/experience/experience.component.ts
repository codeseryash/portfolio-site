import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience, Experiences } from '../../config/experience.config';
@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  myExperience: Experience[] = Experiences;

}

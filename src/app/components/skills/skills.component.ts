import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SKILLS } from '../../../app/config/skills.config';

interface Skill {
  name: string;
  icon: string;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: Skill[]=SKILLS


}

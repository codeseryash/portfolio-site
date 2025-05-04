import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, Projects } from '../../config/projects.config';


@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work.component.html',
  styleUrl: './work.component.scss'
})
export class WorkComponent {
  myProjects:Project[] = Projects;

}

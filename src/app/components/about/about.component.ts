import { Component } from '@angular/core';
import { User } from '../../../app/config/user.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  user:any = User;
}

import { Component } from '@angular/core';
import { User } from '../../config/user.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  user:any= User;
}

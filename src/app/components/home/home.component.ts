import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../../config/user.config';
// import Typed from 'typed.js';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  user: any = User;
  @ViewChild('typedElement') typedElement!: ElementRef;

  ngAfterViewInit(): void {const options = {
      strings: ['Software Engineer', '.net Technology ', 'Backend Developer ', 'Third Party Integration', 'Articles', 'Research papers', 'Writing', 'Leadership', 'Ideation'],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    };
    new Typed(this.typedElement.nativeElement, options);
  }
}

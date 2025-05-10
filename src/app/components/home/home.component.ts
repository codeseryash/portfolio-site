import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { User } from '../../config/user.config';
// import Typed from 'typed.js';
import Typed from 'typed.js';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

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

  ngOnInit() {
    if (typeof window !== 'undefined') {
      // Safe to use `document` here
      // Initialize the cursor animation
      this.appendCursorAnimationCss();
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

  ngAfterViewInit(): void {const options = {
      strings: ['.net Technology                                 '],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true
    };
    new Typed(this.typedElement.nativeElement, options);
  }
}

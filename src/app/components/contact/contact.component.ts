import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contact_message: string =''
  contact_phone: string =''
  contact_email: string =''
  contact_name: string =''

  async sendEmail():Promise<void> {
    console.log('Message:', this.contact_message);
    console.log('Phone:', this.contact_phone);
    console.log('Email sent!');
  }
}

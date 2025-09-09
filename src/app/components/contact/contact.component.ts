import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import {EmailConfigDetails, EmailServiceConfig} from '../../config/emailService.config';
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

  emailConfigDetails: EmailServiceConfig = EmailConfigDetails;
  @ViewChild('contactForm') contact_form: any;

  async sendEmail(form: any) {
    emailjs.init(this.emailConfigDetails.Api_key); // Your EmailJS public key (user ID)
    AppendTimeToMessage();
    emailjs.sendForm(this.emailConfigDetails.serviceId, this.emailConfigDetails.templateId, '#contact-form')
      .then((result: EmailJSResponseStatus) => {
        console.log('SUCCESS!', result.status, result.text);
        alert('Message sent successfully!');
        form.resetForm();
      }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  }
}
function AppendTimeToMessage(): void {
  debugger;
  // Format current date & time: DD-MM-YYYY hh-mm AM/PM
  const now = new Date();
  const pad = (n: number) => n.toString().padStart(2, '0');
  const hours = now.getHours();
  const formattedTime = `${pad(now.getDate())}-${pad(now.getMonth() + 1)}-${now.getFullYear()} ` +
                        `${pad((hours % 12) || 12)}-${pad(now.getMinutes())} ${hours >= 12 ? 'PM' : 'AM'}`;

  // Create and append hidden input
  const hiddenInput = document.createElement('input');
  hiddenInput.type = 'hidden';
  hiddenInput.name = 'time';  // Match this in your EmailJS template
  hiddenInput.value = formattedTime;

  const formElement = document.querySelector('#contact-form') as HTMLFormElement;
  formElement.appendChild(hiddenInput);
}


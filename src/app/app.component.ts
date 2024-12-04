import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vikramApp';
  resumePath: string = '.assets/resume.pdf';
  whatsappMessage: string = 'https://wa.me/917887589262?text=I want to hire you';
  socialLinks = {
    instagram: 'https://www.instagram.com/vikram_golait_96k?igsh=Z2ZwdDRyZWdvZjZx',
    whatsapp: 'https://wa.me/917887589262?text=I want to hire you',
    linkedin: 'https://www.linkedin.com/in/vikram-golait-584ba92b7',
  };
  downloadPdf() {
    const link = document.createElement('a');
    link.href = '../../../assets/resume.pdf';
    link.download = 'resume.pdf'; // Specify the file name
    link.click();
  }
}

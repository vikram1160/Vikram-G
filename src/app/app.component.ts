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

  showNavbar: boolean = false; // Initial state

  toggleNavbar() {
    this.showNavbar = !this.showNavbar; // Toggle the state
  }
  
}

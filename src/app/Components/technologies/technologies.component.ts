import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [ ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  skills = [
    { name: 'ANGULAR', percentage: 57 }
  ];

}

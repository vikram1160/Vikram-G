import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  projects = [
    {
      title: 'Youtube Clone',
      description: 'Created a YouTube clone to implement my knowledge in React.'
    },
    {
      title: 'Library Management System',
      description: 'Built a project to digitize library operations using modern technologies.'
    },
    {
      title: 'Resume Creator',
      description: 'Developed a tool to help users create professional resumes efficiently.'
    },
    {
      title: 'Apple Clone',
      description: 'Created an Apple website clone to showcase frontend skills.'
    }
  ];

  onReadMore(title: string): void {
    alert(`Read more about ${title}`);
  }

}

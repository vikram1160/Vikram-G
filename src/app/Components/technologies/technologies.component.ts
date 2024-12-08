import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [NgFor ],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  technicalSkills = [
    { name: 'HTML', percentage: '93%' },
    { name: 'CSS', percentage: '87%' },
    { name: 'JavaScript', percentage: '72%' },
    { name: 'Bootstrap', percentage: '81%' },
    { name: 'Angular', percentage: '57%' },
    { name: 'React', percentage: '78%' },
    { name: 'MySQL', percentage: '69%' },
    { name: 'Java', percentage: '40%' },
  ];

  personalSkills = [
    'Installation and configuration of various operating systems (Windows 7, 8.1, 10, 11).',
    'Support for MS Office 365, Outlook MS Office & Antivirus.',
    'Laptop Parts Exchange & Repair.',
    'Diagnose hardware issues and raise tickets for hardware replacement.',
    'Installation & troubleshooting of hardware and replacement of desktop/laptop parts.',
    'All laptop formatting services.',
  ];
skills: any;

}

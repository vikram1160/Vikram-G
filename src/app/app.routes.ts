import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { EducationComponent } from './Components/education/education.component';
import path from 'node:path';
import { TechnologiesComponent } from './Components/technologies/technologies.component';


export const routes: Routes = [
  
   { path: '', redirectTo: '/home', pathMatch: 'full' },

{
   path: 'home',
   component:HomeComponent
},
 {
   path:"education",
   component:EducationComponent

 },
 {
   path:"techno",
   component:TechnologiesComponent
 }

];

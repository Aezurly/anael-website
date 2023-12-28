import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainProjectsComponent} from './main-projects/main-projects.component';
import {MainHomeComponent} from './main-home/main-home.component';

export const routes = [
  { path: 'main-home-component', component: MainHomeComponent },
  { path: 'main-projects-component', component: MainProjectsComponent },
  { path: '',  component: MainHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

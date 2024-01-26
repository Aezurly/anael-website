import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainProjectsComponent} from './main-projects/main-projects.component';
import {GalleryComponent} from './gallery/gallery.component';
import {MainHomeComponent} from './main-home/main-home.component';
import {FreeStuffComponent} from './free-stuff/free-stuff.component';

export const routes = [
  { path: 'main-home-component', component: MainHomeComponent },
  { path: 'main-projects-component', component: MainProjectsComponent },
  { path: 'gallery-component', component: GalleryComponent },
  { path: 'free-stuff-component',  component: FreeStuffComponent },
  { path: '',  component: MainHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

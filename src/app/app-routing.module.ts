import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainProjectsComponent} from './main-projects/main-projects.component';
import {GalleryComponent} from './gallery/gallery.component';
import {MainHomeComponent} from './main-home/main-home.component';
import {FreeStuffComponent} from './free-stuff/free-stuff.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

export const routes = [
  { path: 'main-home-component', component: MainHomeComponent },
  { path: 'main-projects-component', component: MainProjectsComponent },
  { path: 'gallery-component', component: GalleryComponent },
  { path: 'free-stuff-component',  component: FreeStuffComponent },
  { path: 'about-me-component',  component: AboutMeComponent },
  { path: 'contact-component',  component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

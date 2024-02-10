import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VNavComponent } from './v-nav/v-nav.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainProjectsComponent } from './main-projects/main-projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FreeStuffComponent } from './free-stuff/free-stuff.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialMediasComponent } from './social-medias/social-medias.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    VNavComponent,
    MainHomeComponent,
    MainProjectsComponent,
    GalleryComponent,
    FreeStuffComponent,
    ProjectDialogComponent,
    SocialMediasComponent,
    ContactComponent
    //AboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //,entryComponents: [MainProjectsComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VNavComponent } from './v-nav/v-nav.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainProjectsComponent } from './main-projects/main-projects.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FreeStuffComponent } from './free-stuff/free-stuff.component';

@NgModule({
  declarations: [
    AppComponent,
    VNavComponent,
    MainHomeComponent,
    MainProjectsComponent,
    GalleryComponent,
    FreeStuffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VNavComponent } from './v-nav/v-nav.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainProjectsComponent } from './main-projects/main-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    VNavComponent,
    MainHomeComponent,
    MainProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

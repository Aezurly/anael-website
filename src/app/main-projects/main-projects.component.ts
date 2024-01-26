import { Component } from '@angular/core';
import projects from "./projects.json"

@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.scss']
})
export class MainProjectsComponent {
  title = 'json-file-read-angular';
  data: any = projects;
  public projectsList = projects;
}

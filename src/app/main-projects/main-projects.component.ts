import { Component } from '@angular/core';
import projects from "./projects.json"
import {ProjectDialogComponent} from "../project-dialog/project-dialog.component"

import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';


@Component({
  selector: 'app-main-projects',
  templateUrl: './main-projects.component.html',
  styleUrls: ['./main-projects.component.scss']
})

export class MainProjectsComponent {
  title = 'json-file-read-angular';
  data: any = projects;
  public projectsList = projects;
  
  constructor(public dialog: MatDialog) {}

  openDialog(project: any): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      p: project
  };
    this.dialog.open(ProjectDialogComponent, dialogConfig);
  }
}

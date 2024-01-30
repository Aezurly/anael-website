import { Component } from '@angular/core';
import images from "./gallery.json"
import {GalleryFullScreenComponent} from "../gallery-full-screen/gallery-full-screen.component"

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
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  title = 'json-file-read-angular';
  data: any = images;
  public imagesList = images;

  constructor(public dialog: MatDialog) {}

  openDialog(image: any): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = 'full_gallery';
    dialogConfig.hasBackdrop = true;
    dialogConfig.disableClose = false;
    dialogConfig.restoreFocus = false;

    dialogConfig.data = {
      p: image
  };
    this.dialog.open(GalleryFullScreenComponent, dialogConfig) 
  }
}

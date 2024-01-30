import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-gallery-full-screen',
  templateUrl: './gallery-full-screen.component.html',
  styleUrl: './gallery-full-screen.component.scss'
})
export class GalleryFullScreenComponent {
  img: any;

  constructor(
    private dialogRef: MatDialogRef<GalleryFullScreenComponent>,
        @Inject(MAT_DIALOG_DATA) data: any) {

        this.img = data.p;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}

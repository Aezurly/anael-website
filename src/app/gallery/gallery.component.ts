import { Component } from '@angular/core';
import images from "./gallery.json"

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  title = 'json-file-read-angular';
  data: any = images;
  public imagesList = images;
}

import { Component } from '@angular/core';
import sprites from "./sprites.json"
import musics from "./musics.json"

@Component({
  selector: 'app-free-stuff',
  templateUrl: './free-stuff.component.html',
  styleUrls: ['./free-stuff.component.scss']
})
export class FreeStuffComponent {
  title = 'json-file-read-angular';
  data: any = sprites;
  public sprites = sprites.sprites;
  public musics = musics.musics;
}

import { Component } from '@angular/core';
import { NasaService } from './nasa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  data: any[];
  planeteRandom: any[];
  

  constructor() {

  }


}

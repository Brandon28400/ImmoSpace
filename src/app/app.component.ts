import { Component } from '@angular/core';
import { NasaService } from './nasa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  data: any;

  constructor(private myService: NasaService) {

    this.data = [];
    this.myService.getPlanets().subscribe(
      (param_data: string[]) => {
        this.data = param_data;
        console.log(this.data)

      }
    )


  }

}

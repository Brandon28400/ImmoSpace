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
  

  constructor(private myService: NasaService) {
    this.planeteRandom=[];

    this.data = [];
    this.myService.getPlanets().subscribe(
      (param_data: string[]) => {
        this.data = param_data;
        this.planeteRandom.push(this.data[Math.floor((Math.random()*this.data.length))]);
        
        console.log(this.planeteRandom);
        

      }
      
    )
    
  }


}

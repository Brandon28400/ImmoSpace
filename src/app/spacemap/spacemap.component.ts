import { Component, OnInit } from '@angular/core';
import { PlaneteComponent } from '../planete/planete.component';
import { PlaneteService } from '../planete/planete.service';

@Component({
  selector: 'app-spacemap',
  templateUrl: './spacemap.component.html',
  styleUrls: ['./spacemap.component.css']
})
export class SpacemapComponent implements OnInit {

  constructor(private planServ: PlaneteService) {

   }

  ngOnInit() {
    
    

  }
  

  

}

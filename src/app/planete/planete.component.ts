import { PlaneteService } from './planete.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planete',
  templateUrl: './planete.component.html',
  styleUrls: ['./planete.component.css']
})
export class PlaneteComponent implements OnInit {
  private canEleId = 'renderCanvas';

  constructor(private planServ: PlaneteService) { }

  ngOnInit() {
    this.planServ.createScene(this.canEleId);
    this.planServ.animate();

  }

}

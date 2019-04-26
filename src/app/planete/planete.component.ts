import { PlaneteService } from './planete.service';
import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-planete',
  templateUrl: './planete.component.html',
  styleUrls: ['./planete.component.css']
})
export class PlaneteComponent implements OnInit {
  private canEleId = 'renderCanvas';
  public texture = "";

  data: any[];
  planeteRandom: any[];


  constructor(private planServ: PlaneteService, private myService: NasaService, private _activated: ActivatedRoute) {
    this.planeteRandom = [];

    this.data = [];
    this.myService.getPlanets().subscribe(
      (param_data: string[]) => {
        this.data = param_data;
      }
    )
  }

  public nextPlanete() {
    let current = null;

    this.planeteRandom.push(this.data[Math.floor((Math.random() * this.data.length))]);
    for (let i = 0; i < this.planeteRandom.length; i++) {
      if (i > 0) {
        this.planeteRandom.splice(i - 1, 1);
      }
      console.log(this.planeteRandom);
    }
  }


  ngOnInit() {

    this._activated.params.subscribe(
      (params: any) => {
        let tex: string = "";

        switch (params.planetname) {
          case "earth":
            tex = "assets/earthmap1k.jpg";
            break;

          case "mars":
            tex = "assets/mars_1k_color.jpg";
            break;

          case "sun":
            tex = "assets/8k_sun.jpg";
            break;

          case "mercure":
            tex = "assets/mercurymap.jpg";
            break;

          case "moon":
            tex = "assets/2k_moon.jpg";
            break;

          case "venus":
            tex = "assets/2k_neptune.jpg";
            break;

          default:
            tex = "assets/sunmap.jpg";
        }

        this.planServ.createEarth(this.canEleId, tex);
        this.planServ.animate();

      }


    )

  }

}

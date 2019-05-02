import { PlaneteService } from './planete.service';
import { Component, OnInit, Input } from '@angular/core';
import { NasaService } from '../nasa.service'
import { ActivatedRoute } from '@angular/router';
import { newrobotList } from '../planet';

@Component({
  selector: 'app-planete',
  templateUrl: './planete.component.html',
  styleUrls: ['./planete.component.css']
})

export class PlaneteComponent implements OnInit {
  private canEleId = 'renderCanvas';
  public texture = "";
  public title = "";
  public newtab = [];

  public data: any[];
  public planeteRandom: any[];
  public newrobotList = newrobotList;


  constructor(private planServ: PlaneteService, private myService: NasaService, private _activated: ActivatedRoute) {
    this.planeteRandom = [];

    this.data = [];
    this.myService.getPlanets().subscribe(
      (param_data: string[]) => {
        this.data = param_data;
        console.log(this.data)
      }
    )
  }

  ngOnInit() {


    this._activated.params.subscribe(
      (params: any) => {
        let tex: string = "";


        switch (params.planetname) {
          case "earth":
            tex = "assets/earthmap1k.jpg";
            this.title = "EARTH";
            this.newtab.push("EARTH");
            this.myService.identifiant = "EARTH";
            break;

          case "mars":
            tex = "assets/mars_1k_color.jpg";
            this.title = "MARS";
            this.newtab.push("MARS");
            this.myService.identifiant = "MARS";
            break;

          case "sun":
            tex = "assets/8k_sun.jpg";
            this.title = "SUN";
            this.newtab.push("SUN");
            this.myService.identifiant = "SUN";
            break;

          case "mercure":
            tex = "assets/mercurymap.jpg";
            this.title = "MERCURY";
            this.newtab.push("MERCURY");
            this.myService.identifiant = "MERCURY";
            break;

          case "moon":
            tex = "assets/2k_moon.jpg";
            this.title = "MOON";
            this.newtab.push("MOON")
            this.myService.identifiant = "MOON";
            break;

          case "venus":
            tex = "assets/2k_neptune.jpg";
            this.title = "VENUS";
            this.newtab.push("VENUS");
            this.myService.identifiant = "MERCURY";
            break;

          default:
            tex = "assets/sunmap.jpg";
            this.title = "SUN";
        }


        this.planServ.createEarth(this.canEleId, tex, this.title);
        console.log(this.myService.identifiant)
        this.planServ.animate();

      }


    )

  }

}

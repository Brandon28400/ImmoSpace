import { Component, OnInit } from '@angular/core';
import { PlaneteComponent } from '../planete/planete.component';
import { PlaneteService } from '../planete/planete.service';
import { NasaService } from '../nasa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spacemap',
  templateUrl: './spacemap.component.html',
  styleUrls: ['./spacemap.component.css']
})
export class SpacemapComponent implements OnInit {
  public tableau: string[]
  constructor(private planServ: PlaneteService, private theServ: NasaService, private _activated: ActivatedRoute) {
    this.theServ.getPlanets().subscribe(
      (param: string[]) => {
        this.tableau = param;
        console.log(this.tableau)
      }
    )
  }

  ngOnInit() { }




}

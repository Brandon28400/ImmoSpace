import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import {newtab} from './planete/planete.component';



@Injectable({
  providedIn: 'root'
})
export class NasaService {

 public tableau:any=["Lupus", "Proxima", "DENIS","Kapteyn","UKIRT","MASCARA"];
 public identifiant:any=null;
 public title=null;
 
 

  constructor(private myService:HttpClient) { }

public getPlanets():Observable<any[]>{
  return this.myService.get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_orbper,pl_bmassj,ra,dec&order=dec&format=json").pipe(
    map(
      (param_data:any)=>{
        
        let results:any[]=[];
        let currentData=null;
        for (let i=0; i<300; i++){
          currentData = param_data[i];
          results.push(currentData);
        }

        if(this.identifiant=="MOON"){
          this.title=this.tableau[0];
        }else if(this.identifiant=="SUN"){
          this.title=this.tableau[1];
        }else if(this.identifiant=="MERCURY"){
          this.title=this.tableau[2];
        }else if(this.identifiant=="MARS"){
          this.title=this.tableau[3];
        }else if(this.identifiant=="VENUS"){
          this.title=this.tableau[4];
        }else{
          this.title=this.tableau[0];
        }




        let newresults=results.filter(
          (currentData)=>currentData.pl_name.includes(this.title)
        );
        results=newresults;
        console.log(results)
        return results;
      }
    )  
  )
}

}
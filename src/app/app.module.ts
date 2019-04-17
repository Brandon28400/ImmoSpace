import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SpacemapComponent } from './spacemap/spacemap.component';
import { HomeComponent } from './home/home.component';
import { RobotComponent } from './robot/robot.component';
import { MenuComponent } from './menu/menu.component';
import { PlaneteComponent } from './planete/planete.component';

@NgModule({
  declarations: [
    AppComponent,
    SpacemapComponent,
    HomeComponent,
    RobotComponent,
    MenuComponent,
    PlaneteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

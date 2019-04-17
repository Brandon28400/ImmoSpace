import { Routes } from '@angular/router';
import { SpacemapComponent } from './spacemap/spacemap.component';
import { HomeComponent } from './home/home.component';
import { RobotComponent } from './robot/robot.component';
import { PlaneteComponent } from './planete/planete.component'

const ROUTES: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Robot', component: RobotComponent },
  { path: 'Spacemap', component: SpacemapComponent },
  { path: 'Planete', component: PlaneteComponent },
];

export { ROUTES };
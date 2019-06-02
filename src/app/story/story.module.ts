import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PcsComponent } from './pcs/pcs.component';
import { NpcsComponent } from './npcs/npcs.component';
import { Routes, RouterModule } from '@angular/router';
import { LocationsComponent } from './locations/locations.component';

const legendsRoutes: Routes = [
  {path: "characters", component: PcsComponent},
  {path: "world", component: LocationsComponent},
  {path: "npcs", component: NpcsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(legendsRoutes)
  ],
  declarations: [PcsComponent, NpcsComponent, LocationsComponent]
})
export class StoryModule { }

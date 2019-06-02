import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayersListComponent } from './players-list.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerService } from './player.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path:'hosts', component: PlayersListComponent }
    ]),
    SharedModule
  ],
  declarations: [
    PlayersListComponent
  ]
})
export class PlayersModule { }

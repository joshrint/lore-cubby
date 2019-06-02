import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EpisodeListComponent } from './episode-list.component';
import { EpisodeService } from './episode.service';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  imports: [
    SharedModule,
    NgbModule,
    RouterModule.forChild([
      { path:'episodes', component: EpisodeListComponent },
      { path:'episodes/:id', component: ShowsComponent}
    ]),
    SharedModule
  ],
  providers: [
    EpisodeService
  ],
  declarations: [
    EpisodeListComponent,
    ShowsComponent
  ]
})
export class EpisodesModule { }

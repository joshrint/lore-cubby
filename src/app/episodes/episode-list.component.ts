import { Component, OnInit } from '@angular/core';
import { IEpisode } from './episode';
import { EpisodeService } from './episode.service';


@Component({
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  pageTitle: string = "Episodes";
  errorMessage: string;
  page: number = 1;
  pageSize: number = 9;


  filteredEpisodes : IEpisode[];
  episodes: IEpisode[] = [];
  constructor(private _episodeService: EpisodeService) {
   }


  ngOnInit(): void {
    this._episodeService.getEpisodes()
      .subscribe(episodes => {this.episodes = episodes
        this.filteredEpisodes = this.episodes},
        error => this.errorMessage = <any>error);
  }

}

import { Component, OnInit } from '@angular/core';
import { IEpisode } from '../episode';
import { EpisodeService } from '../episode.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

  pageTitle: string = "Episodes";
  errorMessage: string;

  filteredEpisodes : IEpisode[];
  episodes: IEpisode[] = [];
  constructor(private _episodeService: EpisodeService, private _route: ActivatedRoute,
              private _router: Router) { }


  ngOnInit(): void {
    const param = this._route.snapshot.paramMap.get('id');
    if (param){
      const id = +param
      this._episodeService.getShow(id)
        .subscribe(episodes => {this.episodes = episodes
          this.filteredEpisodes = this.episodes},
          error => this.errorMessage = <any>error);
    }
  }

}

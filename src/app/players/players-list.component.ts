import { Component, OnInit } from '@angular/core';
import { IPlayer } from './player';
import { PlayerService } from './player.service';

@Component({
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  pageTitle: string="Hosts";
  imageWidth: number=60;
  imageMargin: number=2;
  errorMessage: string;

  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value : string) {
    this._listFilter = value;
    this.filteredPlayers = this.listFilter ? this.performFilter(this.listFilter) : this.players;
  }

  filteredPlayers : IPlayer[];
  players: IPlayer[] = [];
  constructor(private _playerService: PlayerService) {
    this.listFilter = '';
   }

   performFilter(filterBy : string): IPlayer[] {
    filterBy = filterBy = filterBy.toLocaleLowerCase();
    return this.players.filter((player: IPlayer) =>
      player.playername.toLocaleLowerCase().indexOf(filterBy) !== -1);
   }

  ngOnInit(): void {
    this._playerService.getPlayers()
      .subscribe(players => {this.players = players
        this.filteredPlayers = this.players},
        error => this.errorMessage = <any>error);
  }

}

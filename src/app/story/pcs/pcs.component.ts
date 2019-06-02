import { Component, OnInit } from '@angular/core';
import { IPlayerCharacter } from './pc';
import { StoryService } from '../story.service';

@Component({
  templateUrl: './pcs.component.html',
  styleUrls: ['./pcs.component.css']
})
export class PcsComponent implements OnInit {

  pageTitle: string="Player Characters";
   _listFilter: string;
   errorMessage: string;

   get listFilter(): string{
    return this._listFilter;
   }
   set listFilter(value: string){
     this._listFilter = value;
     this.filteredPCs = this.listFilter ? this.performFilter(this.listFilter) : this.pcs;
   }

   filteredPCs : IPlayerCharacter[];
   pcs : IPlayerCharacter[] = [];

  constructor(private _pcService: StoryService) { 
    this.listFilter = '';
  }

  performFilter(filterBy : string): IPlayerCharacter[] {
    filterBy = filterBy = filterBy.toLocaleLowerCase();
    return this.pcs.filter((pc: IPlayerCharacter) =>
      pc.pcName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  ngOnInit(): void {
    this._pcService.getPCs()
      .subscribe(pcs => {this.pcs = pcs
        this.filteredPCs = this.pcs},
        error => this.errorMessage = <any>error)
  }

}

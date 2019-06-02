import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { ISyndicates } from './syndicates';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  syndicates : ISyndicates[];
  errorMessage : string;
  
  constructor(private _syndicateService: StoryService) { }

  ngOnInit(): void {
    this._syndicateService.getSyndicates()
      .subscribe(syndicates => {this.syndicates = syndicates},
        error => this.errorMessage = <any>error)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { IPlayerCharacter } from './pcs/pc';
import { ISyndicates } from './locations/syndicates';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private _http: HttpClient) { }
  private _pcURL = 'http://127.0.0.1:5002/pcs';
  private _syndicateURL  = 'http://127.0.0.1:5002/syndicates';
  
  getPCs(): Observable<IPlayerCharacter[]>{
    return this._http.get<IPlayerCharacter[]>(this._pcURL)
    .catch(this.handleError);
  }

  getSyndicates(): Observable<ISyndicates[]>{
    return this._http.get<ISyndicates[]>(this._syndicateURL)
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}

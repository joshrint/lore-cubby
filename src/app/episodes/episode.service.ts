import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEpisode } from './episode';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class EpisodeService {

  constructor(private _http: HttpClient) { }
  private _episodeUrl = 'http://127.0.0.1:5002/episodes';
  private _showUrl = 'http://127.0.0.1:5002/episodes/';
  private showUrl;
  getEpisodes(): Observable<IEpisode[]>{
    return this._http.get<IEpisode[]>(this._episodeUrl)
    .do(data => console.log('All:' + JSON.stringify(data)))
    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
}

getShow(showID): Observable<IEpisode[]>{
  return this._http.get<IEpisode[]>(this._showUrl+(showID))
  .do(data => console.log('All:' + JSON.stringify(data)))
  .catch(this.handleError);
}
}

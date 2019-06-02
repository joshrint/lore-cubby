import { Injectable } from "@angular/core";
import { IPlayer } from "./player";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PlayerService {
    constructor(private _http: HttpClient) {}
    private _playerUrl = 'http://127.0.0.1:5002/players';
    getPlayers(): Observable<IPlayer[]>{
        return this._http.get<IPlayer[]>(this._playerUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private _imageUrl = 'http://127.0.0.1:5002/home'
  constructor(private _http: HttpClient) { }

  getAllBlog():Observable<IBlog[]>{
    return this._http.get<IBlog[]>(this._imageUrl)
    .do(data => console.log('All: ' +JSON.stringify(data)))
    .catch(this.handleError);
  }
  getBlog(searchCriteria : string):Observable<IBlog[]>{
    return this._http.get<IBlog[]>(this._imageUrl +"/" + searchCriteria)
    .do(data => console.log('All: ' +JSON.stringify(data)))
    .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
  }
}

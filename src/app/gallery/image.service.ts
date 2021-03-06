import { Injectable } from '@angular/core';
import { IImage } from "./image";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap, catchError} from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class ImageService {
    constructor(private _http: HttpClient){}
    
    private _imageUrl = 'http://127.0.0.1:5002/gallery';
    
    getAllArt(): Observable<IImage[]>{
        return this._http.get<IImage[]>(this._imageUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    getArt(id: string): Observable<IImage[]>{
        return this._http.get<IImage[]>(this._imageUrl+'/'+ id)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }
    getImage(id: number): Observable<IImage>{
        return this.getAllArt().pipe(
            map((images: IImage[]) => images.find(p => p.pictureid === id))
        );

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


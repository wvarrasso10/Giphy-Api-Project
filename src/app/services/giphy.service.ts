import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {GiphModel} from '../Models/giph-model';
import {ResponseModel} from '../Models/response-model';

const myApiKey = 'tGj5Mg9spjc20bTBdyxzHa9NT16fGqNi&';
@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  getPairings(giph: string): Observable<any> {
    return this.http.get('https://api.giphy.com/v1/gifs/search?api_key=' + myApiKey + 'q=' + giph + '&limit=25&offset=0&rating=r&lang=en')
      .pipe(tap((recievedData: ResponseModel) => console.log(recievedData)));
  }
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesApiService {
  apiUrl = 'https://www.omdbapi.com/';
  apiKey = '563e52c9';

  constructor(private http: HttpClient, private httpModule: HttpClientModule) { }

  searchMovies(keyword: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?apikey=${this.apiKey}&s=${keyword}`);
  }
  

   getDetailMovie(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}?i=${id}&plot=full&apikey=${this.apiKey}`);
}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { setQueries } from 'src/app/Utilities/helpers';

const { giphyApiKey, giphyApiUrl } = environment;

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private searchSubject = new BehaviorSubject<[]>([]);
  searchResult = this.searchSubject.asObservable();

  constructor(private http: HttpClient) {}

  getGiphy(param: object, searchQuery?: any): Observable<object> {
    const requestParameter = setQueries(param, searchQuery);
    return this.http.get(`${giphyApiUrl}/${requestParameter}api_key=${giphyApiKey}`);
  }

  updateSearch(result) {
    this.searchSubject.next(result);
  }
}

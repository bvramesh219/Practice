import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DbService } from './db.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _httpClient: HttpClient,
    private _db: DbService
  ) { }

  get<T>(endpoint: string): Observable<T> {
    //return this._httpClient.get<T>(endpoint);
   return this._db.get<T>(endpoint);
  }

  post<T>(endpoint: string, body: any): Observable<T> {
    // return this._httpClient.post<T>(endpoint, body);
    return this._db.post<T>(endpoint, body);
  }
}

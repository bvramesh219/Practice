import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StringUtility } from '../utilities/string.utility';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected apiService: ApiService;
  baseUrl: string;

  constructor(
    apiService: ApiService,
    baseUrl: string
  ) {
    this.apiService = apiService;
    this.baseUrl = StringUtility.trimSlashes(baseUrl);
  }

  protected endPoint(path: string) {
    if (path.length > 0) {
      return `${this.baseUrl}/${StringUtility.trimSlashes(path)}`;
    }
    else {
      return this.baseUrl;
    }
  }

  protected get<T>(endpoint: string): Observable<T> {
    return this.apiService.get<T>(this.endPoint(endpoint));
  }

  protected post<T>(endpoint: string, body: any): Observable<T> {
    return this.apiService.post<T>(this.endPoint(endpoint), body);
  }
}

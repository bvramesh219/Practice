import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ApiOptions {
  dropAuthToken?: boolean;
}

export enum ApiOptionHeaders {
  DropAuthToken = 'family-health-zero-token'
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  private loadApiOptionHeaders(apiOptions: ApiOptions) {
    const headerKey = 'headers';
    //by default surpessLoader
    const options = {[headerKey]: {}};
    if (apiOptions) {
      if (apiOptions.dropAuthToken) {
        options[headerKey][ApiOptionHeaders.DropAuthToken] = 'true';
      }
    }

    return options;
  }

  post<T>(endpoint: string, body: any, apiOptions: ApiOptions): Observable<T> {
    const options = this.loadApiOptionHeaders(apiOptions);

    return this._httpClient.post<T>(endpoint, body, options);
  }
}

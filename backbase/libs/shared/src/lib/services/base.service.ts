import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StringUtility } from '../utilities/string.utility';

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
}

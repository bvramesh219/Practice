import { ApiService, ApiOptions } from './api.service';
import { StringUtility } from '../utility/string-utility';
import { Observable } from 'rxjs';

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

  protected post<T>(endpoint: string, body: any, options: ApiOptions = {}): Observable<T> {
    return this.apiService.post<T>(this.endPoint(endpoint), body, options);
  }
}

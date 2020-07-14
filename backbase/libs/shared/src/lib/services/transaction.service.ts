import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseService } from './base.service';
import { ApiService } from './api.service';
import { Transaction, TransactionRequest } from '@backbase/models';

@Injectable({
  providedIn: 'root'
})
export class TransactionService extends BaseService{

  constructor(
    apiService: ApiService
  ) {
    super(apiService, 'transaction');
  }

  getTransactions(): Observable<Transaction[]> {
    return this.get<Transaction[]>(`/transactions`);
  }

  postTransaction(transReq: TransactionRequest): Observable<boolean> {
    return this.post<boolean>(``, transReq);
  }
}

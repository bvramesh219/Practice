import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

import { Transaction } from '@backbase/models';

@Component({
  selector: 'bb-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {
  @Input() transactions: Transaction[] = [];

  displayedColumns: string[]= ["categoryCode","transactionDate","merchantLogo", "beneficiary", "amount"];
  dataSource: MatTableDataSource<Transaction>;
  sortVaue: string;
  isAsc: boolean;
  filterStr ="";

  constructor(private _datePipe : DatePipe) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void { 
    if(!!changes.transactions) {
      this._setDatasource(new MatTableDataSource(this.transactions));
      this.clearFilter();
      this.filterStr="";
      this.sortVaue = "";
    }
  }

  clearFilter(): void {
    this.filterStr="";
    this.dataSource.filter = this.filterStr.trim().toLowerCase();
  }

  sortChange(change: MatButtonToggleChange) {
    const data = this.transactions.slice();
    this.isAsc = (change.value === this.sortVaue) ? !this.isAsc : this.isAsc;
    this.sortVaue = change.value;
    this.transactions = data.sort((a , b)=> {
      switch(change.value) {
        case "transactionDate": {
          return this._compare(a.transactionDate, b.transactionDate, this.isAsc);
        }
        case "beneficiary": {
          return this._compare(a.merchant, b.merchant, this.isAsc);
        }
        case "amount": {
          return this._compare(a.amount, b.amount, this.isAsc);
        }
      }
    });
    this._setDatasource(new MatTableDataSource(this.transactions));
    this.dataSource.filter = this.filterStr.trim().toLowerCase();
  }

  filterChange(event) {
    this.filterStr = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterStr.trim().toLowerCase();
  }

  private _setDatasource(source: MatTableDataSource<Transaction>) {
    this.dataSource = source;
    this.dataSource.filterPredicate = this._filterPredicate;
  }

  private _compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  private _filterPredicate = (data, filter: string): boolean => {
    const transactionDate = this._datePipe.transform(data.transactionDate, "MMM dd");
    return data.amount.toLowerCase().includes(filter) ||
           data.merchant.toLowerCase().includes(filter) ||
           data.transactionType.toLowerCase().includes(filter) ||
           transactionDate.toLowerCase().includes(filter);
  }
}

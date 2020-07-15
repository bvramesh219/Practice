import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Transaction } from '@backbase/models';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

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

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void { 
    if(!!changes.transactions) {
      this.dataSource = new MatTableDataSource(this.transactions)
    }
  }

  sortChange(change: MatButtonToggleChange) {
    const data = this.transactions.slice();
    this.isAsc = (change.value === this.sortVaue) ? !this.isAsc : true;
    this.sortVaue = change.value;

    if(change.value==="transactionDate") {
      this.transactions = data.slice().sort((a , b)=> {
        return (a[change.value] < b[change.value] ? -1 : 1) * (this.isAsc ? 1 : -1);
      });
      this.dataSource = new MatTableDataSource(this.transactions);
    }
    
  }
}

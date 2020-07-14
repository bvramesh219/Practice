import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Transaction } from '@backbase/models';

@Component({
  selector: 'bb-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {
  @Input() transactions: Transaction[] = [];

  displayedColumns: string[]= ["categoryCode"];
  dataSource: MatTableDataSource<Transaction>;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void { 
    if(!!changes.transactions) {
      this.dataSource = new MatTableDataSource(this.transactions)
    }
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TransactionRequest } from '@backbase/models';

@Component({
  selector: 'bb-review-dialog',
  templateUrl: './review-dialog.component.html',
  styleUrls: ['./review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: TransactionData) { 
  }

  ngOnInit(): void {
  }

  

}

export interface TransactionData {
  fromAccount: string;
  beneficiary: string;
  request: TransactionRequest;
}

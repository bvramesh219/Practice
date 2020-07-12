import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bb-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {

  constructor() { }

  transferForm = new FormGroup({
    fromAccount: new FormControl('', [Validators.required]),
    toAccount: new FormControl('', [Validators.required]),
    ammount: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
  }

}

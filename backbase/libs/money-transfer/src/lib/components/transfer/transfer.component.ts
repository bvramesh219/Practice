import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'bb-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transferForm = new FormGroup({
    fromAccount: new FormControl('', [Validators.required]),
    toAccount: new FormControl('', [Validators.required]),
    ammount: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

}

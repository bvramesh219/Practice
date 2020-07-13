import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { user, AccountType, account } from '@backbase/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit, OnChanges {

  @Input() sender: user = null;
  @Input() recipents$: Observable<account[]> = null;

  transferForm = new FormGroup({
    fromAccount: new FormControl('', [Validators.required]),
    toAccount: new FormControl('', [Validators.required]),
    ammount: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.sender) {
      const fromAcct= this.sender.account;
      let acctNo = fromAcct.accountNumber;
      acctNo = acctNo.substring(acctNo.length-4);
      const fromAcctVal = `${fromAcct.accountType}(${acctNo}) - $${fromAcct.balance}`
      
      this.transferForm.get('fromAccount').setValue(fromAcctVal);
      this.transferForm.get('fromAccount').disable();
    }

    if(changes.recipents$) {
     // debugger;
    }
  }

  displayAccountName(recipent: account): string {
    return recipent && recipent.accountOwner ? recipent.accountOwner : '';
  }

}

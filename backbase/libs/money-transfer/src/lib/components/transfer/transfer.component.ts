import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User, Account, TransactionRequest } from '@backbase/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'bb-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit, OnChanges {

  @Input() sender: User = null;
  @Input() recipents$: Observable<Account[]> = null;

  @Output() transactionFormSubmit = new EventEmitter<TransactionRequest>();

  transferForm = new FormGroup({
    fromAccount: new FormControl('', [Validators.required]),
    toAccount: new FormControl('', [Validators.required]),
    ammount: new FormControl('', [Validators.required, Validators.min(0)])
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
  }

  displayAccountName(recipent: Account): string {
    return recipent && recipent.accountOwner ? recipent.accountOwner : '';
  }

  private _isFormValid() {
    return this.transferForm.valid && this.sender.account.balance > -500;
  }

  transferFormSubmit() {
    if (!this._isFormValid()){
      this.transferForm.get('toAccount').markAsTouched();
      this.transferForm.get('ammount').markAsTouched();

      return;
    }
    const recipent: Account = this.transferForm.get('toAccount').value;
    this.transactionFormSubmit.emit({
      fromAccountNumber: this.sender.account.accountNumber,
      toAccountNumber: recipent.accountNumber,
      balance: this.transferForm.get('ammount').value
    } as TransactionRequest);
    //this._resetTransferForm();
  }

  private _resetTransferForm() {
    this.transferForm.get('toAccount').setValue('');
    this.transferForm.get('ammount').setValue('');
    this.transferForm.get('toAccount').markAsPristine();
    this.transferForm.get('toAccount').markAsUntouched();
    this.transferForm.markAsUntouched();
    this.transferForm.markAsPristine();
    this.transferForm.reset();
  }

}


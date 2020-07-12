export enum AccountType {
    Checking,
    Saving,
    CreditCard
}
export interface account {
    accountType: AccountType;
    accountNumber: string;
    balance: number;
}
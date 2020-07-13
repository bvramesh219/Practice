export enum AccountType {
    FreeChecking = "Free Checking",
    Saving = "saving",
    CreditCard= "credit card"
}
export interface Account {
    accountType: AccountType;
    accountNumber: string;
    balance: number;
    accountOwner: string;
}
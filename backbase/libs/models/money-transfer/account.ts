export enum AccountType {
    FreeChecking = "Free Checking",
    Saving = "saving",
    CreditCard= "credit card"
}
export interface account {
    accountType: AccountType;
    accountNumber: string;
    balance: number;
    accountOwner: string;
}
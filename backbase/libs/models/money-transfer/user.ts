import { Account } from './account';

export interface User {
    userId: number;
    userName: string;
    account: Account;
}
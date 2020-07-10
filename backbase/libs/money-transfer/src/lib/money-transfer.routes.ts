import { RouteInfo } from '@backbase/shared';

export class Routes {
    static readonly MoneyTransfer: RouteInfo = { path: 'money-transfer' };
    static readonly Transfer: RouteInfo = { path: 'transfer', relativePath: Routes.MoneyTransfer };
}
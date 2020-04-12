import { RouteInfo } from '@family-health/shared'

export class Routes {
    static readonly Auth: RouteInfo = { path: 'auth' };
    static readonly Login: RouteInfo = { path: 'login', relativePath: Routes.Auth };
}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GlobalNavComponent } from './global-nav/global-nav.component';
import { AuthenticationGuard } from './gaurds/authentication.guard';

const routes: Routes = [
{ path: 'login', component: LoginComponent },
{ path: 'globalNav', component: GlobalNavComponent, canActivate: [AuthenticationGuard] },
{ path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

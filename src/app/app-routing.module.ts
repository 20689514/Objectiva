import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginRegisterComponent } from './login-register/login-register/login-register.component';

const routes: Routes = [
  {path: '',redirectTo: 'login-register',pathMatch: 'full'},
  {path: 'login-register', component: LoginRegisterComponent},
  {path: '',loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)},
  {path: '**',redirectTo: 'login-register'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

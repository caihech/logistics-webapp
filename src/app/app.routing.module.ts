import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutModule } from './layout/layout.module';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: LayoutModule,
    children: [
      { path: 'home', loadChildren: './home/home.module#HomeModule' }
      // { path: 'users', loadChildren: './users/users.module#UsersModule' }
    ]
  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

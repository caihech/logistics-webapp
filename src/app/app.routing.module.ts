import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ConsignmentNoteComponent } from './consignment-note/consignment-note.component';
import { Code404Component } from './code404/code404.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  }
  ,
  {
    path: 'home',
    component: HomeComponent, children: [
      { path: 'users', component: UsersComponent },
      { path: 'consignmentNote', component: ConsignmentNoteComponent }
    ]
  }
  ,
  {
    path: '404',
    component: Code404Component
  }


  // {
  //   path: 'admin',
  //   component: LayoutModule,
  //   children: [
  //     { path: 'home', loadChildren: './home/home.module#HomeModule' }
  //     // { path: 'users', loadChildren: './users/users.module#UsersModule' }
  //   ]
  // },
  , { path: '**', redirectTo: '404', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

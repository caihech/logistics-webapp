import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from './error-page/error-page.component';


const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    {path: 'error-page', component: ErrorPageComponent},
    {path: '**', redirectTo: 'error-page', pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


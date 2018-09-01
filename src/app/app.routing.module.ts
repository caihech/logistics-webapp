import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from './error-page/error-page.component';


// todo 移动代码
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './admin/home/home.component';


const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    // {path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
    {
        path: 'admin',
        component: AdminComponent, children: [
        {path: '', component: HomeComponent},
    ]
    },
    {path: 'error-page', component: ErrorPageComponent},
    {path: '**', redirectTo: 'error-page', pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


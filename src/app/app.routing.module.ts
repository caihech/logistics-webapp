import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {ErrorPageComponent} from './error-page/error-page.component';

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
        path: '',
        component: AdminComponent
        , children: [
        {path: 'home', component: HomeComponent}
    ]
    }
    ,
    {
        path: 'error-page',
        component: ErrorPageComponent
    }
    , {path: '**', redirectTo: 'error-page', pathMatch: 'full'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}


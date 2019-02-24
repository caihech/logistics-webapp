import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {ErrorPageComponent} from './error-page/error-page.component';


// todo 移动代码
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './admin/home/home.component';


import {UsersComponent} from './admin/users/users.component';
import {UserAddComponent} from './admin/users/user-add/user-add.component';
import {UserDetailComponent} from './admin/users/user-detail/user-detail.component';

import {ConsignmentNotesComponent} from './admin/consignment-notes/consignment-notes.component';
import {ConsignmentNoteAddComponent} from './admin/consignment-notes/consignment-note-add/consignment-note-add.component';
import {ConsignmentNoteDetailComponent} from './admin/consignment-notes/consignment-note-detail/consignment-note-detail.component';

import {VehiclesComponent} from './admin/vehicles/vehicles.component';
import {VehicleAddComponent} from './admin/vehicles/vehicle-add/vehicle-add.component';
import {VehicleDetailComponent} from './admin/vehicles/vehicle-detail/vehicle-detail.component';


const routes: Routes = [

    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {
        path: 'admin',
        component: AdminComponent, children: [
        {path: '', component: HomeComponent},

        {path: 'users', component: UsersComponent},
        {path: 'user/add', component: UserAddComponent},
        {path: 'user/detail/:id', component: UserDetailComponent},

        {path: 'consignmentnotes', component: ConsignmentNotesComponent},
        {path: 'consignmentnote/add', component: ConsignmentNoteAddComponent},
        {path: 'consignmentnote/detail/:id', component: ConsignmentNoteDetailComponent},

        {path: 'vehicles', component: VehiclesComponent},
        {path: 'vehicle/add', component: VehicleAddComponent},
        {path: 'vehicle/detail', component: VehicleDetailComponent}
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


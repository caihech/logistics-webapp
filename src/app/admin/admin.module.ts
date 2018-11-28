import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


import {AdminComponent} from './admin.component';

import {HomeComponent} from './home/home.component';

import {UsersComponent} from './users/users.component';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';

import {ConsignmentNotesComponent} from './consignment-notes/consignment-notes.component';
import {ConsignmentNoteAddComponent} from './consignment-notes/consignment-note-add/consignment-note-add.component';
import {ConsignmentNoteDetailComponent} from './consignment-notes/consignment-note-detail/consignment-note-detail.component';

import {VehiclesComponent} from './vehicles/vehicles.component';
import {VehicleAddComponent} from './vehicles/vehicle-add/vehicle-add.component';
import {VehicleDetailComponent} from './vehicles/vehicle-detail/vehicle-detail.component';
import {PasswordDialogComponent} from './users/password-dialog/password-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';
import {JsogService} from 'jsog-typescript';


@NgModule({
    imports: [
        RouterModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        AdminComponent,
        HomeComponent,
        UsersComponent,
        UserAddComponent,
        UserDetailComponent,
        ConsignmentNotesComponent,
        ConsignmentNoteAddComponent,
        ConsignmentNoteDetailComponent,
        VehiclesComponent,
        VehicleAddComponent,
        VehicleDetailComponent,
        PasswordDialogComponent
    ],
    entryComponents: [PasswordDialogComponent],
    providers: [JsogService],
    exports: []
})

export class AdminModule {

}

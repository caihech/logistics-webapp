import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';

@NgModule({
    imports: [SharedModule, UsersRoutingModule],
    declarations: [
        UsersComponent
    ],
    providers: []
})
export class UsersModule { }


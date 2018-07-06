import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

import {UsersRoutingModule} from './users.routing.module';


import {UsersComponent} from './users.component';
import {DetailComponent} from './detail/detail.component';

@NgModule({
    imports: [SharedModule, UsersRoutingModule],
    declarations: [
        UsersComponent,
        DetailComponent
    ],
    providers: []
})
export class UsersModule {
}


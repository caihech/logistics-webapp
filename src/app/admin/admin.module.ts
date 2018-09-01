import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';


import {AdminComponent} from './admin.component';
import {HeaderComponent} from './header/header.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';

import {HomeComponent} from './home/home.component';

import {UsersComponent} from './users/users.component';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserDetailComponent} from './users/user-detail/user-detail.component';

@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        AdminComponent,
        HeaderComponent,
        NavigationComponent,
        FooterComponent,
        HomeComponent,
        UsersComponent,
        UserAddComponent,
        UserDetailComponent,
    ],
    providers: [],
    exports: []
})

export class AdminModule {

}

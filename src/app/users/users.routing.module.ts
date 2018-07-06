import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {DetailComponent} from './detail/detail.component';

const routes: Routes = [
    {path: '', component: UsersComponent}
    ,
    {path: 'detail', component: DetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}


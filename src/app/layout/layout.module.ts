import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


import { LayoutComponent } from './layout.component';
@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        LayoutComponent
    ],
    providers: [],
    exports: []
})
export class LayoutModule {
}

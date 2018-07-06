import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {SharedModule} from './shared/shared.module';


import {LoginComponent} from './login/login.component';
import {AdminModule} from './admin/admin.module';
import {ErrorPageComponent} from './error-page/error-page.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ErrorPageComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        AdminModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

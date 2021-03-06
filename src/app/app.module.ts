import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {SharedModule} from './shared/shared.module';


import {LoginComponent} from './login/login.component';
import {AdminModule} from './admin/admin.module';
import {ErrorPageComponent} from './error-page/error-page.component';

import {SharedService} from './shared/shared.service';
import {LoginService} from './login/login.service';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        ErrorPageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        AppRoutingModule,
        AdminModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [SharedService, LoginService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

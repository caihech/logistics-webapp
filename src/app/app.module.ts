import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';


import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, AppMaterialModule, AppRoutingModule
  ], declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    MessageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

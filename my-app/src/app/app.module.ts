import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientModule } from "./client/client.module";
import { AdminModule } from './admin/admin.module';
import { Error404Component } from './error404/error404.component';

@NgModule({
    declarations: [	
        AppComponent, LoginComponent,
      Error404Component
   ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule, AppRoutingModule, FormsModule,
        ClientModule, AdminModule]
})
export class AppModule { }
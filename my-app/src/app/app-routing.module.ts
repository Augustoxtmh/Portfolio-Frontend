import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin-module/admin.component';
import { ClientComponent } from './client-module/client.component';
import { ContactarComponent } from './contactar/contactar.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path: '', redirectTo: '/Home', pathMatch: 'full'},
{path: 'Home', component: ClientComponent}, 
{path: "Login", component: LoginComponent},
{path: "Edit", component: AdminComponent},
{path: "Contactar", component: ContactarComponent},
{path: '**', component: Error404Component}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

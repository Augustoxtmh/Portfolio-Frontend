import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { Error404Component } from './error404/error404.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path: '', redirectTo: '/inicio', pathMatch: 'full'},
{path: 'inicio', component: ClientComponent}, 
{path: "login", component: LoginComponent},
{path: "edit", component: AdminComponent},
{path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

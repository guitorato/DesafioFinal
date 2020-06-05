import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';

import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';

import { CasaCrudComponent } from './views/casa-crud/casa-crud.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "user",
  component: ClienteCrudComponent
},
{
  path: "user/user-create",
  component: ClienteCreateComponent
},
{
  path: "user/user-update/:id",
  component: ClienteUpdateComponent
},
{
  path: "user/user-delete/:id",
  component: ClienteDeleteComponent
},
{
  path: "casa",
  component: CasaCrudComponent
},
{
  path: "casa/casa-create",
  component: CasaCreateComponent
},
{
  path: "casa/casa-update/:id",
  component: CasaUpdateComponent
},
{
  path: "casa/casa-delete/:id",
  component: CasaDeleteComponent
},
{
  path: "evento",
  component: EventoCrudComponent
},
{
  path: "evento/evento-create",
  component: EventoCreateComponent
},
{
  path: "evento/evento-update/:id",
  component: EventoUpdateComponent
},
{
  path: "evento/evento-delete/:id",
  component: EventoDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

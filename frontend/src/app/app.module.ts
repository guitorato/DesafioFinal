import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from'@angular/material/list';
import { MatSelectModule } from'@angular/material/select';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ForDirective } from './directives/for.directive';

import { HomeComponent } from './views/home/home.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { CasaCrudComponent } from './views/casa-crud/casa-crud.component';
import { EventoCrudComponent } from './views/evento-crud/evento-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { EventoCreateComponent } from './components/evento/evento-create/evento-create.component';
import { CasaCreateComponent } from './components/casa/casa-create/casa-create.component';

import { HttpClientModule } from '@angular/common/http';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { EventoReadComponent } from './components/evento/evento-read/evento-read.component';
import { CasaReadComponent } from './components/casa/casa-read/casa-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort'

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { EventoUpdateComponent } from './components/evento/evento-update/evento-update.component';
import { CasaUpdateComponent } from './components/casa/casa-update/casa-update.component';
import { CasaDeleteComponent } from './components/casa/casa-delete/casa-delete.component';
import { EventoDeleteComponent } from './components/evento/evento-delete/evento-delete.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClienteCrudComponent,
    ForDirective,
    CasaCrudComponent,
    EventoCrudComponent,
    ClienteCreateComponent,
    CasaCreateComponent,
    EventoCreateComponent,
    ClienteReadComponent,
    EventoReadComponent,
    CasaReadComponent,
    ClienteUpdateComponent,
    EventoUpdateComponent,
    CasaUpdateComponent,
    CasaDeleteComponent,
    EventoDeleteComponent,
    ClienteDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

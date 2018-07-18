//servicio
import{EquipoService} from './equipo.service'



import { RouterModule, Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { FooterComponent } from './footer/footer.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TablasComponent } from './tablas/tablas.component';
import { EquipoComponent } from './equipo/equipo.component';


const rutasxd: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'tablas', component: TablasComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    FooterComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    TablasComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
     RouterModule.forRoot(rutasxd),
  ],
  providers: [EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

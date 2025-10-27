import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './views/custom-layout/custom-layout.module';
import { ClienteComponent } from './views/pages/cliente/cliente/cliente.component';
import { MedicoComponent } from './views/pages/medico/medico/medico.component';
import { ModalCadastrarClienteComponent } from './core/lib/components/modal-cadastrar-cliente/modal-cadastrar-cliente/modal-cadastrar-cliente.component';
import { ModalCadastrarMedicoComponent } from './core/lib/components/modal-cadastrar-medico/modal-cadastrar-medico/modal-cadastrar-medico.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, ClienteComponent, MedicoComponent, ModalCadastrarClienteComponent, ModalCadastrarMedicoComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    IconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatInputModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

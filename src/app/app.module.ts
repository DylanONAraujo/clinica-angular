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
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconModule } from '@visurel/iconify-angular';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ModalConfirmarExcluirComponent } from './core/lib/components/modal-cadastrar-cliente/modal-cadastrar-cliente/modal-confirmar-excluir/modal-confirmar-excluir.component';
import { CpfPipe } from './pipes/cpf.pipe';
import { TelefonePipe } from './pipes/telefone.pipe';
import { CepPipe } from './pipes/cep.pipe';


let globalFormFieldOptions: MatFormFieldDefaultOptions = {
  appearance: "standard",
};


@NgModule({
  declarations: [AppComponent, ClienteComponent, MedicoComponent, ModalCadastrarClienteComponent, ModalConfirmarExcluirComponent, CpfPipe, TelefonePipe, CepPipe],
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
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(),

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: globalFormFieldOptions,
    },
    {
      provide: MAT_DATE_LOCALE, useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

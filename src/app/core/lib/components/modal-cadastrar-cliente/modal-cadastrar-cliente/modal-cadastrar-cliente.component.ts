import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { stagger60ms } from '../../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../../@vex/animations/fade-in-up.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'vex-modal-cadastrar-cliente',
  templateUrl: './modal-cadastrar-cliente.component.html',
  styleUrls: ['./modal-cadastrar-cliente.component.scss']
})
export class ModalCadastrarClienteComponent implements OnInit {

  form: FormGroup;

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      sexo: [''],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

}

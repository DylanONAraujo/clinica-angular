import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { stagger60ms } from '../../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../../@vex/animations/fade-in-up.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../../../service/cliente/cliente.service';

@Component({
  selector: 'vex-modal-cadastrar-medico',
  templateUrl: './modal-cadastrar-medico.component.html',
  styleUrls: ['./modal-cadastrar-medico.component.scss']
})
export class ModalCadastrarMedicoComponent implements OnInit {

  form: FormGroup;

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder, private readonly dialogRef: MatDialogRef<ModalCadastrarMedicoComponent>, private clienteService: ClienteService) { 
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      sexo: [''],
      telefone: ['', Validators.required],
      cep: [''],
      estado: ['', Validators.required],
      cidade: ['', Validators.required],
      bairro: ['', Validators.required],
      complemento: [''],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  buscarCep(cep: string) {
    this.clienteService.buscarCep(cep).subscribe(response =>{
      console.log("Tudo certo!");
      console.log(response);
    }, (error)=> {
      console.log(error);
    });
  }

  cadastrar(){
    this.dialogRef.close(this.form?.value);
  }

}

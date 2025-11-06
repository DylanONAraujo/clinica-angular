import { ChangeDetectorRef, Component, Inject, OnInit, Optional } from '@angular/core';
import { stagger60ms } from '../../../../../../@vex/animations/stagger.animation';
import { fadeInUp400ms } from '../../../../../../@vex/animations/fade-in-up.animation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClienteService } from '../../../../service/cliente/cliente.service';
import { Cliente } from '../../../../model/cliente';


@Component({
  selector: 'vex-modal-cadastrar-cliente',
  templateUrl: './modal-cadastrar-cliente.component.html',
  styleUrls: ['./modal-cadastrar-cliente.component.scss']
})
export class ModalCadastrarClienteComponent implements OnInit {

  form: FormGroup;
  visualizar: boolean = false;
  modo: 'visualizar' | 'novo' | 'editar' = 'novo';

  constructor(private cd: ChangeDetectorRef,
    private fb: FormBuilder,
    private readonly dialogRef: MatDialogRef<ModalCadastrarClienteComponent>,
    private clienteService: ClienteService, 
    @Optional() @Inject(MAT_DIALOG_DATA) public data: { cliente: Cliente, visualizar: boolean }
) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      sexo: [''],
      telefone: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: [''],
      numero: ['', Validators.required],
      complemento: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
    });
   }

  ngOnInit() {
    if(this.data?.cliente){
      this.dadosPreenchidos(this.data.cliente);
    
    if (this.data?.visualizar) {
    this.modo = 'visualizar';
    this.visualizar = true;
    this.form.disable();
  }else {
        this.modo = 'editar';
      }
    } else {
      this.modo = 'novo';
    }

  }


  buscarCep() {
    let cep = this.form?.get("cep")?.value
    if(cep.length!=8){
      return;
    }
    this.clienteService.buscarCep(cep).subscribe(response =>{
      this.form.patchValue({
          cep: response.cep,
          logradouro: response.logradouro,
          bairro: response.bairro,
          cidade: response.localidade,
          estado: response.estado, 
      })
    }, (error)=> {
      console.log(error);
    });
  }

  cadastrar(){
    this.dialogRef.close(this.form?.value)
  }

  dadosPreenchidos(cliente: Cliente) {
  this.form = this.fb.group({
      nome: [cliente.nome, Validators.required],
      cpf: [cliente.cpf, Validators.required],
      dtNascimento: [cliente.dtNascimento, Validators.required],
      sexo: [cliente.sexo],
      telefone: [cliente.telefone, Validators.required],
      cep: [cliente.endereco.cep, Validators.required],
      logradouro: [cliente.endereco.logradouro],
      numero: [cliente.endereco.numero, Validators.required],
      complemento: [cliente.endereco.complemento],
      bairro: [cliente.endereco.bairro],
      cidade: [cliente.endereco.cidade],
      estado: [cliente.endereco.estado],
  })
}
}

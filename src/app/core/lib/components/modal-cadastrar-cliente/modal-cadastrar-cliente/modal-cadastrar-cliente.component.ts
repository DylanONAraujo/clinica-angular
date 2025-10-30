import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
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

  constructor(private cd: ChangeDetectorRef,private fb: FormBuilder, private readonly dialogRef: MatDialogRef<ModalCadastrarClienteComponent>, private clienteService: ClienteService, @Inject(MAT_DIALOG_DATA) public data: Cliente
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
  }

  salvar(): void {
  const clienteEditado: Cliente = this.form.value;
  clienteEditado.id = this.data?.id || 0; // mantém o ID original
  this.dialogRef.close(clienteEditado);
}


  buscarCep() {
    let cep = this.form?.get("cep")?.value
    if(cep.length!=8){
      // this.resetaForm(form?);
      return;
    }

    this.clienteService.buscarCep(cep).subscribe(response =>{
      // console.log(response)
      // console.log('formulario: ' , this.form),
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

  // resetaForm(form){
  //   this.form.patchValue({
  //         logradouro: null,
  //         cep: null,
  //         bairro: null,
  //         cidade: null,
  //         estado: null,
  //       })
        
  // }
  cadastrar(){
    this.dialogRef.close(this.form?.value)
  }

}

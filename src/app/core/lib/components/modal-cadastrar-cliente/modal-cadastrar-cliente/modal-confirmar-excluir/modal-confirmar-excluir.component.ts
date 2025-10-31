import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'vex-modal-confirmar-excluir',
  templateUrl: './modal-confirmar-excluir.component.html',
  styleUrls: ['./modal-confirmar-excluir.component.scss']
})
export class ModalConfirmarExcluirComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<ModalConfirmarExcluirComponent>) { 

  }

  ngOnInit(): void {
  }

  confirmar(){
    this.dialogRef.close(true); 
  }

  cancelar() {
    this.dialogRef.close(); 
  }

}

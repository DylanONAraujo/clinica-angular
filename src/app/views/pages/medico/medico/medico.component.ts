import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastrarMedicoComponent } from '../../../../core/lib/components/modal-cadastrar-medico/modal-cadastrar-medico/modal-cadastrar-medico.component';

@Component({
  selector: 'vex-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(){
      const dialogRef = this.dialog.open(ModalCadastrarMedicoComponent, {width: '600px'})
    }

}

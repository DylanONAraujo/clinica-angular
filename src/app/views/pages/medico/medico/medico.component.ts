import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCadastrarMedicoComponent } from '../../../../core/lib/components/modal-cadastrar-medico/modal-cadastrar-medico/modal-cadastrar-medico.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from '../../../../core/model/medico';
import { MedicoService } from '../../../../core/service/medico/medico.service';

@Component({
  selector: 'vex-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'especialidade', 'disponibilidade', 'telefone', 'hrTrabalho', 'actions'];
    dataSource!: MatTableDataSource<Medico>;
    medicos: Medico[] = []; // alterar para receber do backend - Medico


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog, private MedicoService: MedicoService) {

    this.form = this.fb.group({
      filtro: [''],
      categoria: [''],
      status: ['']
    });


  }

  ngOnInit() {
    this.medicos = [
      { id: 1, nome: 'Dra. Ana Beatriz Lima', especialidade: 'Pediatria', disponibilidade: 'Seg–Sex, 8h–16h', telefone:'(34) 99876-1234', hrTrabalho: 'Sim'},

      { id: 2, nome: 'Dr. Carlos Mendes', especialidade: 'Ortopedia', disponibilidade: 'Ter–Qui, 13h–18h', telefone:'(34) 99123-4567', hrTrabalho: 'Não'},

      { id: 3, nome: 'Dra. Fernanda Souza', especialidade: 'Dermatologia', disponibilidade: 'Seg–Sex, 9h–17h', telefone:'(34) 99654-7890', hrTrabalho: 'Sim'},

      { id: 4, nome: 'Dr. João Vitor Rocha', especialidade: 'Cardiologia', disponibilidade: 'Seg–Qua, 10h–15h', telefone:'(34) 99234-5678', hrTrabalho: 'Sim'},

      { id: 5, nome: 'Dra. Luana Martins', especialidade: 'Ginecologia', disponibilidade: 'Qua–Sex, 14h–20h', telefone:'(34) 99543-2109', hrTrabalho: 'Não'},
    ];
    this.dataSource = new MatTableDataSource(this.medicos);
    console.log(this.medicos);
    
    this.form = this.fb.group({
    filtro: ['']
  });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  limparFiltro(){
    this.form.get('filtro')?.setValue('');
    this.dataSource.filter = ''; 
  }

  limparDados(medico: Medico){
    let indiceRemover = this.medicos.indexOf(medico);
    if (indiceRemover > -1){
          this.medicos.splice(indiceRemover, 1);
          this.dataSource = new MatTableDataSource(this.medicos);
    } 
  }

  openDialog(){
      const dialogRef = this.dialog.open(ModalCadastrarMedicoComponent, {width: '600px'})
    }

}

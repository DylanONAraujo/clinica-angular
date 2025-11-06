import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Medico } from '../../../../core/model/medico';

@Component({
  selector: 'vex-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'especialidade', 'disponibilidade', 'telefone', 'hrTrabalho'];
    dataSource!: MatTableDataSource<Medico>;
    medicos: Medico[] = []; // alterar para receber do backend - Medico


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {

    this.form = this.fb.group({
      filtro: [''],
      categoria: [''],
      status: ['']
    });


  }

  ngOnInit() {
    this.medicos = [
      { id: 1, nome: 'Dra. Ana Beatriz Lima', especialidade: 'Pediatria', hrTrabalho: 'Seg–Sex, 8h–16h', telefone:'(34) 99876-1234', disponibilidade:  'Sim'},

      { id: 2, nome: 'Dr. Carlos Mendes', especialidade: 'Ortopedia', hrTrabalho: 'Ter–Qui, 13h–18h', telefone:'(34) 99123-4567', disponibilidade: 'Não'},

      { id: 3, nome: 'Dra. Fernanda Souza', especialidade: 'Dermatologia', hrTrabalho: 'Seg–Sex, 9h–17h', telefone:'(34) 99654-7890', disponibilidade: 'Sim'},

      { id: 4, nome: 'Dr. João Vitor Rocha', especialidade: 'Cardiologia', hrTrabalho: 'Seg–Qua, 10h–15h', telefone:'(34) 99234-5678', disponibilidade: 'Sim'},

      { id: 5, nome: 'Dra. Luana Martins', especialidade: 'Ginecologia', hrTrabalho: 'Qua–Sex, 14h–20h', telefone:'(34) 99543-2109', disponibilidade: 'Não'},

      { id: 6, nome: 'Dra. Ana Beatriz Lima', especialidade: 'Pediatria', hrTrabalho: 'Seg–Sex, 8h–16h', telefone:'(34) 99876-1234', disponibilidade:  'Sim'},

      { id: 7, nome: 'Dr. Marcos Tavares', especialidade: 'Ortopedia', hrTrabalho: 'Seg–Sáb, 13h–19h', telefone:'(21) 99876-5432', disponibilidade: 'Sim'},

      { id: 8, nome: 'Dra. Carla Mendes', especialidade: 'Pediatria', hrTrabalho: 'Seg–Sex, 9h–17h', telefone:'(31) 98765-4321', disponibilidade: 'Sim'},

      { id: 9, nome: 'Dr. João Pedro Souza', especialidade: 'Dermatologia', hrTrabalho: 'Ter–Sáb, 10h–18h', telefone:'(41) 97654-3210', disponibilidade: 'Sim'},

      { id: 10, nome: 'Dr. Rafael Almeida', especialidade: 'Urologia', hrTrabalho: 'Ter–Sáb, 12h–18h', telefone:'(81) 93210-9876', disponibilidade: 'Não'},
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


}

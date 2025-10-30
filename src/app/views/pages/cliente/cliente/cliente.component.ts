import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCadastrarClienteComponent } from '../../../../core/lib/components/modal-cadastrar-cliente/modal-cadastrar-cliente/modal-cadastrar-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../../../core/model/cliente';
import { ClienteService } from '../../../../core/service/cliente/cliente.service';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'cpf', 'dtNascimento', 'telefone', 'cep', 'actions'];
  dataSource!: MatTableDataSource<Cliente>;
  clientes: Cliente[] = []; // alterar para receber do backend - Reserva

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

 form: FormGroup;
 

  constructor(private fb: FormBuilder, private dialog: MatDialog, private ClienteService: ClienteService) {

    // Assign the data to the data source for the table to render

    this.form = this.fb.group({
      filtro: [''],
      categoria: [''],
      status: ['']
    });

  }

  ngOnInit() {
    this.clientes = [
      { id: 1, nome: 'João Silva', cpf: '123.456.789-10', dtNascimento: new Date('01-10-2023'), telefone:'(10) 98765-4321', cep: '12345-678'},
      { id: 2, nome: 'Jorel Santos', cpf: '109.876.543-21', dtNascimento: new Date('25-12-2025'), telefone:'(12)93456-7891', cep: '87654-321'},
    ];
    this.dataSource = new MatTableDataSource(this.clientes);
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


  openDialog(){
    const dialogRef = this.dialog.open(ModalCadastrarClienteComponent, {width: '600px'})
  }

  


}



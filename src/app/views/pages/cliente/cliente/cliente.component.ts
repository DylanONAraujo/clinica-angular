import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ModalCadastrarClienteComponent } from '../../../../core/lib/components/modal-cadastrar-cliente/modal-cadastrar-cliente/modal-cadastrar-cliente.component';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from '../../../../core/model/cliente';
import { ClienteService } from '../../../../core/service/cliente/cliente.service';
import { ModalConfirmarExcluirComponent } from '../../../../core/lib/components/modal-cadastrar-cliente/modal-cadastrar-cliente/modal-confirmar-excluir/modal-confirmar-excluir.component';
import { Endereco } from '../../../../core/model/endereco';

@Component({
  selector: 'vex-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nome', 'cpf', 'dtNascimento', 'telefone', 'cep', 'actions'];
  dataSource!: MatTableDataSource<Cliente>;
  clientes: Cliente[] = []; // alterar para receber do backend - Cliente
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  form: FormGroup;



  constructor(private fb: FormBuilder, private dialog: MatDialog, private ClienteService: ClienteService) {

    this.form = this.fb.group({
      filtro: ['']
    });

  }

  ngOnInit() {
    this.clientes = [
      { id: 1, nome: 'João Silva', cpf: '123.456.789-10', dtNascimento: new Date('01-10-2023'), telefone: '(10) 98765-4321', endereco: { cep: '35702-111' , logradouro: 'Rua Bom Despacho', numero: '15', complemento: 'Casa', bairro: 'Padre Teodoro', cidade:'Sete Lagoas', estado: 'Minas Gerais'}, sexo: 'Masculino' },
      { id: 2, nome: 'João Marcos Thomaz Frotté', cpf: '300.629.539-07', dtNascimento: new Date('03/05/1953'), telefone: '(83)9 2483-2341', endereco: { cep: '17021-760' , logradouro: 'Rua Sebastião Theodoro de Freitas', numero: '145', complemento: 'Casa', bairro: 'Vila Garcia', cidade:'Bauru', estado: 'São Paulo'}, sexo: 'Masculino'},
      { id: 3, nome: 'Brunna Felix Grilo', cpf: '197.816.748-22', dtNascimento: new Date('12/10/1958'), telefone: '(28)9 8574-3838', endereco: { cep: '13070-174', logradouro: 'Rua Reinaldo Laubenstein- até 531/532', numero: '20', complemento: 'Edificio', bairro: 'Jardim Chapadão', cidade:'Campinas', estado: 'São Paulo'}, sexo: 'Feminino' },
      { id: 4, nome: 'Rosani de Carvalho Ascar', cpf: '024.517.432-04', dtNascimento: new Date('12/05/1974'), telefone: '(89)9 6968-9188', endereco: { cep: '08031-130', logradouro: 'Rua Biguá', numero: '159', complemento: 'Casa', bairro: 'Vila Nova Curuçá', cidade:'São Paulo', estado: 'São Paulo'}, sexo: 'Feminino'},
      { id: 5, nome: 'Dayvid Chaves Souza', cpf: '667.554.440-30', dtNascimento: new Date('09/03/2019'), telefone: '(95)9 8854-4959', endereco: { cep: '12042-020', logradouro: 'Rua Bernardus Aperloo', numero: '56', complemento: 'Edificio', bairro: 'Distrito Industrial Willy Conrado Bohlen', cidade:'Taubaté', estado: 'São Paulo'}, sexo: 'Masculino' },
      { id: 6, nome: 'Aderbal Lopez Luques', cpf: '248.630.361-83', dtNascimento: new Date('05/17/1968'), telefone: '(42)9 7155-5281', endereco: { cep: '12906-290', logradouro: 'Rua Sargento Antônio Esteves', numero: '42', complemento: 'casa', bairro: 'Parque Brasil', cidade:'São Paulo', estado: 'São Paulo'}, sexo: 'Masculino' },
    ];
    this.dataSource = new MatTableDataSource(this.clientes);
    console.log(this.clientes);

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

  limparFiltro() {
    this.form.get('filtro')?.setValue('');
    this.dataSource.filter = '';
  }


  confirmarExclusao(cliente: Cliente) {
    let dialogRef = this.dialog.open(ModalConfirmarExcluirComponent, { width: '600px' })
    dialogRef.afterClosed().subscribe((result: boolean | undefined) => {
      if (result) {
        this.limparDados(cliente);
      }
    });
  }


  private limparDados(cliente: Cliente) {
    let indiceRemover = this.clientes.indexOf(cliente);
    if (indiceRemover > -1) {
      this.clientes.splice(indiceRemover, 1);
      this.dataSource = new MatTableDataSource(this.clientes);
      this.dataSource.paginator = this.paginator; 
      this.dataSource.sort = this.sort;
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalCadastrarClienteComponent, { width: '600px', 
      
     })
    dialogRef.afterClosed().subscribe((novoCliente: Cliente) => {
      if (novoCliente) {
        this.modificacaoCliente(novoCliente);
        this.clientes.push(novoCliente);
        this.dataSource = new MatTableDataSource(this.clientes);
        this.dataSource.paginator = this.paginator; 
        this.dataSource.sort = this.sort;
        this.limparFiltro();
      }
    });
  }

  visualizar(cliente : Cliente){
    let dialogRef = this.dialog.open(ModalCadastrarClienteComponent, 
      { width: '600px',
        data: {cliente: cliente, visualizar: true}
       });
       dialogRef.afterClosed().subscribe(()=>{

       });
  }



  editar(cliente: Cliente) {
    const dialogRef = this.dialog.open(ModalCadastrarClienteComponent, {
      width: '600px',
      data: { cliente: cliente, visualizar: false }
    });

    dialogRef.afterClosed().subscribe((clienteEditado: Cliente) => {
      if (clienteEditado) {
        let indEditado = this.clientes.indexOf(cliente);
        if (indEditado > -1) {
          this.modificacaoCliente(clienteEditado);
          this.clientes[indEditado] = clienteEditado;
          this.dataSource = new MatTableDataSource(this.clientes);
          this.dataSource.paginator = this.paginator; 
          this.dataSource.sort = this.sort;
        }
      }
    });
  }

  modificacaoCliente(cliente: any) {
    let endereco = new Endereco();
    endereco.cep = cliente.cep;
    endereco.logradouro = cliente.logradouro;
    endereco.numero = cliente.numero;
    endereco.complemento = cliente.complemento;
    endereco.bairro = cliente.bairro;
    endereco.cidade = cliente.cidade;
    endereco.estado = cliente.estado;
    cliente.endereco = endereco;
  }
}



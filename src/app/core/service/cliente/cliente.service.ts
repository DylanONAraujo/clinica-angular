import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

   urlApi= environment.viacepURL;

  constructor(private http: HttpClient) { }

  buscarCep(cep: string ): Observable<any>{
    return this.http.get(this.urlApi + cep + '/json');
  }

  // deletarDado() {
  //   return this.http.delete<Cliente[]>('/api/clientes');
  // }

  // listarTodos() {
  //   return this.http.get<Cliente[]>('/api/clientes');
  // }

  // cadastrar(cliente: Cliente) {
  //   return this.http.post('/api/clientes', cliente);
  // }

}

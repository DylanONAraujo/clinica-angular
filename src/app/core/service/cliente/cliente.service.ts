import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

   urlApi= environment.viacepURL;

  constructor(private http: HttpClient) { }

  buscarCep(cep: string ): Observable<any>{
    return this.http.get(this.urlApi + cep + '/json');
  }
}

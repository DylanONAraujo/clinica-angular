import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../../model/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor() { }
}

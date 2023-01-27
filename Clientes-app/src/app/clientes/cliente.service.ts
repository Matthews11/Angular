import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class ClienteService {

  getClientes(): Observable <Cliente[]> {
    return of(CLIENTES);
  } 
 

  
}

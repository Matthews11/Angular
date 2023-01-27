import { Component } from '@angular/core';
import { Cliente } from './cliente'; 
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {

  clientes: Cliente[];  

  constructor(private clientesService: ClienteService){
    this.clientesService.getClientes().subscribe(
      clientes => this.clientes=clientes
    );
  }


}

import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes: any;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(){

    this.buscarListaCliente();
  }

  buscarListaCliente() {
    this.clienteService.buscarListaCliente().snapshotChanges().pipe(
      map(changes => 
        changes.map(c => 
          ({ key: c.payload.doc['id'], ...c.payload.doc.data()})
          )
        )
    ) .subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  deletarCliente() {
    this.clienteService.deletarTodos();
  }

}

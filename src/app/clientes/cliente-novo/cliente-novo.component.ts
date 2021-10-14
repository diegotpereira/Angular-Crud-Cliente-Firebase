import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-novo',
  templateUrl: './cliente-novo.component.html',
  styleUrls: ['./cliente-novo.component.css']
})
export class ClienteNovoComponent implements OnInit {

  cliente: Cliente = new Cliente();
  enviar = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  novoCliente(): void {
    this.enviar = false;
    this.cliente = new Cliente();
  }

  salvar() {
    this.clienteService.criarCliente(this.cliente);
    this.cliente = new Cliente();
  }

  enviarDados() {
    this.enviar = true;
    this.salvar();
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-detalhes',
  templateUrl: './cliente-detalhes.component.html',
  styleUrls: ['./cliente-detalhes.component.css']
})
export class ClienteDetalhesComponent implements OnInit {

  @Input() cliente: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  atualizarAtivo(eAtivo: boolean) {
    this.clienteService.atualizarCliente(this.cliente.key, { ativo: eAtivo})
        .catch(err => console.log(err));
  }

  deletarCliente() {
    this.clienteService.deletarCliente(this.cliente.key)
        .catch(err => console.log(err));
  }
}

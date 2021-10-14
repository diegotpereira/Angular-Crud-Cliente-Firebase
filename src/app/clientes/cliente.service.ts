import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private dbPath = '/clientes';

  clientesRef: AngularFirestoreCollection<Cliente>;

  constructor(private dados: AngularFirestore) {

    this.clientesRef = dados.collection(this.dbPath);

   }

   criarCliente(cliente: Cliente): void {
     this.clientesRef.add({ ...cliente });
   }

   atualizarCliente(key: string, value: any): Promise<void> {
     return this.clientesRef.doc(key).update(value);
   }

   deletarCliente(key: string): Promise<void> {
    return this.clientesRef.doc(key).delete();
  }

  buscarListaCliente(): AngularFirestoreCollection<Cliente> {
    return this.clientesRef;
  }

  deletarTodos() {
    this.clientesRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },

      error => {
        console.log('Error:', error);
      }
    );
  }
}

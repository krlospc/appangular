import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ClientesService]
})
export class ListComponent {
  clientes: any[] = [];
  constructor(private router: Router, private _clientesService: ClientesService) {
    this.getClientes();
  }

  getClientes() {
    this._clientesService.getListClientes().subscribe(
      (response) => {
        this.clientes = response;
        console.log(response);
      },
      (error) => {
        console.log('error', error);
      }
    );
  }

  showInfoCliente(id: string) {
    this.router.navigate(['cliente/detalle/' + id], { queryParams: { edit: false } });
  }

  editClient(id: string) {
    this.router.navigate(['cliente/detalle/' + id], { queryParams: { edit: true } });
  }
  eliminarCliente(id: string, nombre: string) {
    if (confirm("¿Está realmente seguro de eliminar el cliente " + nombre + "?")) {
      this._clientesService.deleteCliente(parseInt(id)).subscribe(
        (response) => {
          alert('cliente eliminado exitosamente.');
          this.getClientes();
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }
  }

  newCliente() {
    this.router.navigate(['cliente/detalle/0'], { queryParams: { new: true } });
  }

  ventaCliente(id: string) {
    this.router.navigate(['cliente/detalle/' + id], { queryParams: { edit: false } });
  }

}

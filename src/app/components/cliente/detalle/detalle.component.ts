import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { Cliente } from 'src/app/models/cliente';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [ClientesService]
})
export class DetalleComponent {
  cliente: Cliente = new Cliente();
  clienteId:string = '0'; 
  edit:any;
  btnText:string = 'Guardar cambios';

  constructor(private router:Router, private activatedRoute:ActivatedRoute,  private _clientesService: ClientesService) {
    let pid =this.activatedRoute.snapshot.paramMap.get('id');
    if(pid != null){
      if(pid !='0' ){
        this.clienteId = pid;
        this.getClienteById(parseInt(this.clienteId));
      }else{
        this.btnText='Crear Cliente';
      }
    }
    //this.getClienteById(2);

  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.edit = params['edit'] || 'true';
      }
    );
  }
  getClienteById(id: number) {
    this._clientesService.getListCliente(id).subscribe(
      (response) => {
        this.cliente = response;
        console.log(response)
      },
      (error) => {
        console.log('error', error);
      }
    )
  }

  guardar() {
    if (this.cliente.id == 0) {
      this._clientesService.postCliente(this.cliente).subscribe(
        (response) => {
          alert('Producto creado exitosamente.');
        },
        (error) => {
          console.log('Error', error);
        }
      );
    } else {
      this._clientesService.putCliente(this.cliente.id, this.cliente).subscribe(
        (response) => {
          alert('Producto modificado exitosamente.');
          this.getClienteById(this.cliente.id);
        },
        (error) => {
          console.log('Error', error);
        }
      );
    }

  }  
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private baseUrl=environment.apiEndPoint;

  constructor(private http: HttpClient) { }

  private header(){
    var headers = new HttpHeaders ({
      'Content-Type':'application/json',
      'Accept':'application/json',
      'token':''
    });
    return headers;
  }

  getListClientes():Observable<any>{
    return this.http.get(this.baseUrl + 'clientes',{headers:this.header()});
  }

  getListCliente(id:number):Observable<any>{
    return this.http.get(this.baseUrl + 'clientes/'+id, {headers:this.header()});
  }

  postCliente(data: any): Observable<any> {
    let body = JSON.stringify(data);
    return this.http.post(this.baseUrl + 'clientes', body, { headers: this.header() });
  }

  putCliente(id: number, data: any): Observable<any> {
    let body = JSON.stringify(data);
    return this.http.put(this.baseUrl + 'clientes/' + id, body, { headers: this.header() });
  }

  deleteCliente(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + 'clientes/' + id, { headers: this.header() });
  }

  getListClienteventas(id:number):Observable<any>{
    return this.http.get(this.baseUrl + 'ventas/cliente/'+id, {headers:this.header()});
  }

}

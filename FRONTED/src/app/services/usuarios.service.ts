import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { Usuario } from './../model/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public sServer: string = 'http://localhost:8080'
  private _header: HttpHeaders | any;


   /** Header sin parametro */
   get header() {
    this._header = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this._header;
  }

  constructor(private http: HttpClient,) { }


  /*Funcion que trea los usuario de DB */
  public fnGetUser(): Observable<any> {
    return this.http.get(this.sServer + '/user/getUser');
  }

  // Envio de datos para guardar informacion
  public fnSaveUser(data: Usuario) {
    const body = data;
    return this.http.post(this.sServer + '/create', body, { headers: this.header });
  }

}

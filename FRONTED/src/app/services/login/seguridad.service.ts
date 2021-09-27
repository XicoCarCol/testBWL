import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { mModelJWT, Usuario } from '../../model/usuarios/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  private sServer: string = environment.apiUrl+'/seguridad';

  constructor(
    private httpClient: HttpClient
  ) { }

  public fnRegistrarUser(usuario: Usuario) {
    return this.httpClient.post<any>(this.sServer + '/registrar', usuario);
  }

  public fnIngresar(usuario: Usuario){
    return this.httpClient.post<mModelJWT>(this.sServer + '/ingresar', usuario);
  }
}

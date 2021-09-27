import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { mModelJWT, Usuario } from '../../model/usuarios/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public sServerT: string = environment.apiUrl + '/tarea';
  public sServerU: string = environment.apiUrl + '/usuario';


  constructor(private http: HttpClient) { }


  /* FUncion que trae las tareas por idUsuario */
  public fnGetTareaByUser(idUsuario: number) {
    return this.http.get<Usuario[]>(this.sServerT + `/mostrarId/${idUsuario}`);
  }

  /* Funcion que trae los usuarui por correo */
  public fnGetUsuario(correo: string) {
    return this.http.get<Usuario>(this.sServerU + `/mostrarPorCorreo/${correo}`);
  }

  /* Funcion que trae todos los usuarios */
  public fnGetAllUser() {
    return this.http.get<Usuario>(this.sServerU + '/mostrarTodos');

  }


}

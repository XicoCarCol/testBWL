import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from '../services/usuarios/usuarios.service';
import { TokenService } from './../services/token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public title: any;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokeService: TokenService,
    private sUsuarioService: UsuariosService,
    ) {

  }


  ngOnInit(): void {
    this.fnGetUserName();
  }

  /* Funcion que te dirige al dashboard de climas*/
  public onViewDash() {
    this.router.navigate(['/navbar/dashboard'], { relativeTo: this.activatedRoute })
  }

  /* Funcion que te dirige al paginador de usuarios */
  public onViewPage() {
    this.router.navigate(['/navbar/pageUsuario'], { relativeTo: this.activatedRoute })
  }

  /* Funcion que trae el username del session storage para setearlo al boton de salir */
  public fnGetUserName() {
    const userName = sessionStorage.getItem('AuthUsername');
    this.fnGetUsuario(userName);
  }

  /* Funcion que trae los usuarios por correo */
  public fnGetUsuario(correo: any) {
    this.sUsuarioService.fnGetUsuario(correo).subscribe(usuario => {
    this.title = usuario.nombre;

    })
  }

  /* Funcion que sale del sistema */
  public fnSalir() {
    this.tokeService.logout();
  }

}

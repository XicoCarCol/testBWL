import { Component, OnInit } from '@angular/core';
import { ClimaService } from './../services/clima/clima.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { respModelClima } from '../model/clima/clima.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from '../services/usuarios/usuarios.service';
import { TokenService } from './../services/token/token.service';
import { modelTarea, Usuario } from './../model/usuarios/usuario.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public formPaisDisp!: FormGroup;
  public lsPaises: any = ['id', 'pais', 'clave', 'img'];
  public nombrePais!: string;
  public bandera!: string;
  public grados!: string;
  public textoClima!: any;
  public iconoClima!: any;
  public localTime!: any;
  public sZonaUno!: any;
  public sZonaDos!: any;
  public sZonaTres!: any;
  public rutaUno!: any;
  public rutaDos!: any;
  public rutaTres!: any;
  public tPendientes!: modelTarea[];
  public tTerminadas!: modelTarea[];


  constructor(
    private climaService: ClimaService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private sUsuarioService: UsuariosService,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.fnForm();
    this.fnClimas();
    this.fnObtCorreo();

  }

  /* Funcion de la forma para el campo autocomplete */
  public fnForm() {
    this.formPaisDisp = this.fb.group({
      paisDisp: ['']
    });
  }

  /* Funcion que llena el autocomplete de los 3 paises solicitados */
  public fnClimas() {
    const pais = [
      { 'id': '0', 'pais': 'México', 'clave': 'mexico', 'img': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Bandera_de_Mexico_uso_civil.svg/1200px-Bandera_de_Mexico_uso_civil.svg.png' },
      { 'id': '1', 'pais': 'Brasil', 'clave': 'brasil', 'img': 'https://www.flagsonline.it/uploads/2016-6-6/1200-0/brazil.jpg' },
      { 'id': '2', 'pais': 'Canada', 'clave': 'canada', 'img': 'http://res.publicdomainfiles.com/pdf_view/62/13544705419872.png' }
    ]
    this.lsPaises = pais;

  }

  /* Funcion que recibe el valor seleccionado del autocomplete */
  public fnValSelect(evento: any) {
    if (evento !== undefined && evento !== null) {
      const pais = this.lsPaises.find((p: any) => p.id === evento);
      this.nombrePais = pais.pais;
      this.bandera = pais.img;
      this.fnGetPaises(pais.clave);
    } else {
      this.bandera = '';
      this.nombrePais = '';
    }
  }

  /* Funcion que trae los paises y setea valores en los cards */
  public fnGetPaises(pais: string) {
    this.climaService.fnGetClimas(pais).subscribe(clima => {
      if (clima !== undefined && clima !== null) {
        const climas: respModelClima = clima;
        this.grados = climas.current?.temp_c + ' °C'
        this.iconoClima = climas.current?.condition.icon;
        this.textoClima = climas.current?.condition.text;
        this.localTime = climas.location?.localtime;

        switch (pais) {
          case 'mexico':
            this.sZonaUno = 'Mexico City';
            this.sZonaDos = 'Guadalajara';
            this.sZonaTres = 'Tijuana';
            this.rutaUno = 'https://www.zeitverschiebung.net/es/city/3530597';
            this.rutaDos = 'https://www.zeitverschiebung.net/es/city/4005539';
            this.rutaTres = 'https://www.zeitverschiebung.net/es/city/3981609';
            break;
          case 'brasil':
            this.sZonaUno = 'Rio de Janeiro';
            this.sZonaDos = 'São Paulo';
            this.sZonaTres = 'Salvador';
            this.rutaUno = 'https://www.zeitverschiebung.net/es/city/3451190';
            this.rutaDos = 'https://www.zeitverschiebung.net/es/city/3448439';
            this.rutaTres = 'https://www.zeitverschiebung.net/es/city/3450554';
            break;
          case 'canada':
            this.sZonaUno = 'Vancouver';
            this.sZonaDos = 'Toronto';
            this.sZonaTres = 'Ottawa';
            this.rutaUno = 'https://www.zeitverschiebung.net/es/city/6173331';
            this.rutaDos = 'https://www.zeitverschiebung.net/es/city/6167865';
            this.rutaTres = 'https://www.zeitverschiebung.net/es/city/6094817';
            break;
          default:
            this.snackBar.open('Lo lamentamos, por el momento no disponemos de ' + pais + '.')
        }

      }
    });
  }

  /* Funcion que obtiene el correo del usuario logeado */
  public fnObtCorreo() {
    const username = this.tokenService.getUsername();
    if (username !== undefined && username !== null) {
      this.fnGetUsuario(username);
    }
  }

  /* Funcion que trae los usuarios por correo */
  public fnGetUsuario(correo: string) {
    this.sUsuarioService.fnGetUsuario(correo).subscribe(usuario => {
      if (usuario !== undefined && usuario !== null) {
        this.fnGetTareas(usuario.id);

      }

    })
  }

  /* Funcion que trae las tareas por usuario */
  public fnGetTareas(idUsuario: any) {
    this.sUsuarioService.fnGetTareaByUser(idUsuario).subscribe(data => {
      this.tPendientes = data.slice(0, 3);
      this.tTerminadas = data.slice(3, 6);
    });

  }

}

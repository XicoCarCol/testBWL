import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SeguridadService } from './../services/login/seguridad.service';
import { TokenService } from './../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sSeguridad: SeguridadService,
    private tokenService: TokenService,
    private snackBar: MatSnackBar,
  ) { }

  public hide: boolean = true;


  ngOnInit() {
    this.fnFormLogin();
  }

  /* Forma para poder ingresar */
  public fnFormLogin() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }


  /* Funcion que permite ingresar al sistema */
  public fnLogin() {
    this.sSeguridad.fnIngresar(this.loginForm.value).subscribe(data => {
      this.tokenService.setValue('AuthToken', data.token!);
      this.tokenService.setValue('AuthUsername', data.email!);
      this.tokenService.setAuthorities(data.authorities);
      this.router.navigate(['navbar']);
    }, error => {
      this.fnValuesIncorrectos();
    });
  }

  /* Funcion que emite un mensaje si los valores son incorrectos */
  public fnValuesIncorrectos() {
    this.snackBar.open('Usuario o contraseña incorrectos', '', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  /* Funcion que reedirecciona al registro de nuevo usuario */
  public registro() {
    this.router.navigate(['registroUser']);
  }

}

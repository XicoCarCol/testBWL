import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SeguridadService } from './../services/login/seguridad.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public hide: boolean = true;
  public hideTwo: boolean = true;
  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private sSeguridad: SeguridadService,
    private snackBar: MatSnackBar
  ) { }
  ngOnInit() {
    this.fnForm();
  }

  public fnForm() {

    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required]],
      passwordDos: ['', [Validators.required]]
    })
  }

  public fnSaveUser() {
    this.sSeguridad.fnRegistrarUser(this.formGroup.value).subscribe(data => {
      this.fnCancelar();
      this.snackBar.open(data.mensaje, 'x', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    }, error => {
      this.snackBar.open(error.error.mensaje, 'x', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    });
  }

  public fnCancelar() {
    this.router.navigate(['login'])
  }

}

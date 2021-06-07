import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from '../model/usuario.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public formUsuario = new FormArray([]); //Arreglo para las filas de la tabla de lenguas
  public hide: boolean = true;
  public hideTwo: boolean = true;

  constructor(
    private fb: FormBuilder,
    private svUser: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
  }


  loginForm: FormGroup = this.fb.group({

    id: [''],
    correo: ['', [Validators.required, Validators.email]],
    passUno: ['', [Validators.required, Validators.minLength(6)]],
    passDos: ['', [Validators.required, Validators.minLength(6)]],
    nombre: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
    ultimo_login: Date,
    fecha_reg: Date
  })


  get isFormValid(): boolean {
    return this.loginForm.valid;
  }

  public fnSaveUser() {
    this.router.navigate(['/navbar'], { relativeTo: this.activatedRoute })
    const moUser: Usuario[] = [];
    const lUsuarios = this.formUsuario.controls.filter((obj) => obj.dirty || obj.value.bDirty)
    if (lUsuarios.length > 0) {
      lUsuarios.forEach((oElement) => {
        const mUsuario: Usuario = this.formUsuario.getRawValue().find((o) => o.id === oElement.get("id")?.value);
        moUser.push(mUsuario);
      });
      if (moUser.length > 0) {
        /* Llamada al servicio post  */
        /* this.svUser.fnSaveUser(moUser).subscribe(data => {

        }) */
      }
    }
  }


}

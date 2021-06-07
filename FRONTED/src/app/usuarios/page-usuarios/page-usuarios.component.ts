import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from './../../model/usuario.model';

@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.css']
})
export class PageUsuariosComponent implements OnInit {

  @ViewChild(MatTable) vcMtLenguas: MatTable<any> | undefined;

  // public dataSource!: MatTableDataSource<any>; // Datos para la tabla
 // Datos para la tabla
  public columns = ['nombre', 'correo', 'fechaR', 'login'];
  dataSource = [];

  public lsUsuario: Usuario[] | any; //se le asigna la data


  constructor(
    private svUser: UsuariosService
  ) { }

  ngOnInit(): void {
    this.lsUsuario =[]
    this.prueba();
  }

  public prueba(){
    this.svUser.fnGetUser().subscribe((data) => {
      this.lsUsuario = data;
      this.dataSource = data;
      console.log("DATOS DE LA API", this.lsUsuario);
    });
  }

}

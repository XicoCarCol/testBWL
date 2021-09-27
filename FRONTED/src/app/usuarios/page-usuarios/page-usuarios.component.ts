import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from 'src/app/services/usuarios/usuarios.service';
import { Usuario } from '../../model/usuarios/usuario.model';

@Component({
  selector: 'app-page-usuarios',
  templateUrl: './page-usuarios.component.html',
  styleUrls: ['./page-usuarios.component.css']
})
export class PageUsuariosComponent implements OnInit {

  public dataSource!: MatTableDataSource<Usuario>;
  public columns = ['nombre', 'correo', 'fechaR', 'login'];
  public lsUsuario: Usuario[] | any; //se le asigna la data
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private svUser: UsuariosService
  ) { }

  ngOnInit(): void {
    this.lsUsuario = []
    this.prueba();
  }

  public prueba() {
    this.svUser.fnGetAllUser().subscribe((data) => {
      this.lsUsuario = data;
      this.dataSource = new MatTableDataSource(this.lsUsuario);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

}

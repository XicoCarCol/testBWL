import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

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
  dataSource = ELEMENT_DATA;




  constructor() { }

  ngOnInit(): void {

  }



}

export interface Elementos {
  nombre: string;
  correo: string;
  fechaR: string;
  login: string;
}

const ELEMENT_DATA: Elementos[] = [
  {nombre: 'Alejandro', correo: 'Hydrogen', fechaR: 'FECHAS', login: 'H'},
  {nombre: 'Alejandro', correo: 'Helium', fechaR: 'FECHAS', login: 'He'},
  {nombre: 'Alejandro', correo: 'Lithium', fechaR: 'FECHAS', login: 'Li'},
  {nombre: 'Alejandro', correo: 'Beryllium', fechaR: 'FECHAS', login: 'Be'},
  {nombre: 'Alejandro', correo: 'Boron', fechaR: 'FECHAS', login: 'B'},
  {nombre: 'Alejandro', correo: 'Carbon', fechaR: 'FECHAS', login: 'C'}
];

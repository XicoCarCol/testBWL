import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  public apiClima = environment.apiClima +'1bf43c09682f4e158a8173943212609' //consumo de api weather api para la parte de los dashboard

  constructor(
    private httpClient: HttpClient
  ) { }

  /* Funcion para mandar a llamar el clima que se le pase por parametro en p */
  public fnGetClimas(p:string) {
    return this.httpClient.get(this.apiClima+'&q='+p+'&aqi=yes&lang=es');

  }
}

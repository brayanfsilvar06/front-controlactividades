import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponseActividades } from '../Interfaces/Response/response-actividades';
import { ResponseGenerico } from '../Interfaces/Response/response-generico';
import { Actividad } from '../Interfaces/actividad';

@Injectable({
  providedIn: 'root'
})
export class RestActividadService {
  private apiURL = environment.URL_SERVICE + "/Actividad";
  public headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  constructor(private httpClient: HttpClient) { }

  listadoEstadoActividades(sAuthToken: any) {
    let fullURL = this.apiURL + "/listarEstadoActividades";
    this.headers = this.headers.set('Authorization', sAuthToken);
    return this.httpClient.get<ResponseActividades>(fullURL, { headers: this.headers });
  }

  listadoActividades(sAuthToken: any) {
    let fullURL = this.apiURL + "/obtenerListadoActividades";
    this.headers = this.headers.set('Authorization', sAuthToken);
    return this.httpClient.post<Actividad[]>(fullURL, null, { headers: this.headers });
  }

  crearActividad(sAuthToken: any, ctrlActividad: Actividad) {
    let fullURL = this.apiURL + "/crearActividad";
    this.headers = this.headers.set('Authorization', sAuthToken);
    return this.httpClient.post<ResponseGenerico>(fullURL, ctrlActividad, { headers: this.headers });
  }

  actualizarActividad(sAuthToken: any, ctrlActividad: Actividad) {
    let fullURL = this.apiURL + "/actualizarActividad";
    this.headers = this.headers.set('Authorization', sAuthToken);
    return this.httpClient.post<ResponseGenerico>(fullURL, ctrlActividad, { headers: this.headers });
  }

  eliminarActividad(sAuthToken: any, ctrlActividad: Actividad) {
    let fullURL = this.apiURL + "/eliminarActividad";
    this.headers = this.headers.set('Authorization', sAuthToken);
    return this.httpClient.post<ResponseGenerico>(fullURL, ctrlActividad, { headers: this.headers });
  }
}

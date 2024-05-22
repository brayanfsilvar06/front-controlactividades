import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ResponsePersona } from '../Interfaces/Response/response-persona';

@Injectable({
  providedIn: 'root'
})
export class RestPersonaService {

  private apiURL = environment.URL_SERVICE + "/Persona";
  public headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

  constructor(private httpClient: HttpClient) { }

  listadoEmpleados(sAuthToken: any) {
    let fullURL = this.apiURL + "/listarEmpleados";
    this.headers = this.headers.set('Authorization', sAuthToken);
    return this.httpClient.get<ResponsePersona>(fullURL, { headers: this.headers });
  }
}

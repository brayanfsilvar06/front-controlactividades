import { ResponseAuthApi } from './../Interfaces/Response/response-auth-api';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RequestAuth } from '../Interfaces/Request/request-auth';

@Injectable({
  providedIn: 'root'
})
export class RestAuthapiService {

  private apiURL = environment.URL_SERVICE + "/AuthAPI";
  public headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  constructor(private httpClient: HttpClient) { }

  authAPI() {
    let fullURL = this.apiURL;
    let requestAuthAPI: RequestAuth;
    requestAuthAPI = {
      sUser: 'CTRL_ACTIVIDADES_2022',
      sPass: 'ZWUxMzRkMzAtZjE3My00YWRiLWJkNmMtYTdlY2ZmZDNmY2M4'
    }
    return this.httpClient.post<ResponseAuthApi>(fullURL, requestAuthAPI, { headers: this.headers });
  }
}

import { Injectable } from '@angular/core';
import { ResponseAuthApi } from '../Interfaces/Response/response-auth-api';

@Injectable({
  providedIn: 'root'
})
export class GestionAuthService {

  constructor() { }

  gestionarSesionUsuarioApp(rtaInicioSesion: ResponseAuthApi) {
    if (rtaInicioSesion !== null && rtaInicioSesion !== undefined && rtaInicioSesion.bRta) {
      this.procesarTokenUsuario(rtaInicioSesion.sToken);
    }
  }

  procesarTokenUsuario(token: string | null | undefined) {
    if (token !== null && token !== undefined) {
      sessionStorage.clear();
      sessionStorage.setItem('sToken', 'Bearer' + token);
    }
  }

  obtenerToken() {
    let tokenUsuarioSesion = undefined;
    if (typeof (Storage) !== 'undefined' && sessionStorage !== null && sessionStorage !== undefined) {
      if (sessionStorage.getItem('sToken') !== '' && sessionStorage.getItem('sToken') !== null && sessionStorage.getItem('sToken') !== undefined) {
        tokenUsuarioSesion = sessionStorage.getItem('sToken');
      }
    }
    return tokenUsuarioSesion;
  }

  limpiarInfoSesionUsuarioApp() {
    if (typeof (Storage) !== 'undefined' && sessionStorage !== null && sessionStorage !== undefined) {
      if (sessionStorage.getItem('sToken') !== '' && sessionStorage.getItem('sToken') !== null && sessionStorage.getItem('sToken') !== undefined) {
        sessionStorage.removeItem('sToken');
        sessionStorage.clear();
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

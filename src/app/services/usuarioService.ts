import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { Login } from '../models/login';
import { ValidarToken } from '../models/validarToken';
import { DataUsuario, Usuario } from '../models/usuario';

const base_url = environment.api_url;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   validToken : ValidarToken = new ValidarToken('');

  constructor( private http: HttpClient,private router: Router,) {}

  validarToken(): Observable<boolean> {

    
    this.validToken.refresh_token = localStorage.getItem('refresh_token') || '';
    
    return this.http.post(`${ base_url }/auth/refresh`, this.validToken )
     .pipe(
      tap( (resp: any) => {
        console.log('Token res',resp);
        localStorage.setItem('token', resp.data.payload.token );
        
      }),
      map( resp => true),
      catchError( error => of(false) )
    );

  }

  login( formData: Login ) {
    
    return this.http.post(`${ base_url }/auth/login`, formData )
                .pipe(
                  tap( (resp: any) => {
                    localStorage.setItem('token', resp.data.payload.token )
                    localStorage.setItem('refresh_token', resp.data.payload.refresh_token );
                  })
                );

  }

  getUser(): Observable<DataUsuario>{

    return this.http.get<DataUsuario>(`${ base_url }/user/me`, {
     headers : {'Authorization': `Bearer ${localStorage.getItem('token')}`}
 })
 
 }


}

import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
import { RespPopulares } from '../models/respPopulares';
import { RespActores } from '../models/respActores';

const base_url = environment.api_url;


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor( private http: HttpClient,private router: Router,) {}


  moviesNowPlaying(): Observable<RespPopulares>{

    return this.http.get<RespPopulares>(`${ base_url }/movies/now_playing`, {
        headers : {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    })

  }

  popularMovies(): Observable<RespPopulares>{

    return this.http.get<RespPopulares>(`${ base_url }/movies/popular`, {
        headers : {'Authorization': `Bearer ${localStorage.getItem('token')}`}
    })
      
}

actorsByMovie(idPelicula : string): Observable<RespActores>{

   return this.http.get<RespActores>(`${ base_url }/movies/${idPelicula}/actors`, {
    headers : {'Authorization': `Bearer ${localStorage.getItem('token')}`}
})

}



}

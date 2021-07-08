import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuarioService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  usuario : Usuario | undefined;

  constructor(private usuarioService : UsuarioService , private router : Router) { }

  ngOnInit(): void {

    this.usuarioService.getUser().subscribe( res => {
       this.usuario = res.data;
    })

  }


  logout() {

    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    this.router.navigateByUrl('/login');
 
  }

}

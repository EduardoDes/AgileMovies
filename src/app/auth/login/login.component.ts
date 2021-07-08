import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuarioService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent {

  public loginForm = this.fb.group({

    username : ['', Validators.required],
    password : ['', Validators.required]
  })


  constructor( private fb : FormBuilder , private usuarioService : UsuarioService , private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    
    this.usuarioService.login(this.loginForm.value).subscribe( res => {
      console.log(res);
      this.router.navigateByUrl('/');
    }, (err) => {
      Swal.fire('Error', err.error.message, 'error' );
    })

  }

}

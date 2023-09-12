import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  constructor(public router: Router){}


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Campo requerido';
    }
    if (this.password.hasError('required')) {
      return 'Campo requerido';
    }
    return this.email.hasError('email') ? 'Email no valido' : '';
  }
  getRegistrar(){
    this.router.navigate(['registro']);
  }
  getQuienSoy(){
    this.router.navigate(['quiensoy']);
  }
}

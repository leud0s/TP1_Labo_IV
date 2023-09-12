import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
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
  getLogin(){
    this.router.navigate(['login']);
  }
}

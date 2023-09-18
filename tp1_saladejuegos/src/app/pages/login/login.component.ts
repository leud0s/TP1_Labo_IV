import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SpinnerComponent } from 'src/app/components/spinner/spinner.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {
  hide = true;
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  constructor(public router: Router,
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService,
    ){}


    getErrorMessageEmail(){
      let message = "";
      if (this.form.controls.email.hasError('required')) {
        message = 'Campo requerido';
      }
      if(this.form.controls.email.hasError('email')){
        message='Email no valido';
      }
    return message;
    }
    getErrorMessagePassword(){
      let message = "Debe tener al menos 6 caracteres";
      if (this.form.controls.password.hasError('required')) {
        message = 'Campo requerido';
      }
      return message;
    }
  submit() {
    if (this.form.valid) {
      //console.log(this.form.value);
  
      this.firebaseSvc.login(this.form.value as User).then(async res =>{
        let user: User={
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
        }
        this.utilsSvc.setElementInLocalstorage('user',user)
        this.utilsSvc.routerLink('home'),
        this.router.navigate(['home'], { queryParams: user });
        
        })

        this.form.reset();
      }error =>{
        console.log(error.message);
        this.utilsSvc.routerLink('registro');
    }
  }
  getRegistrar(){
    this.router.navigate(['registro']);
  }
  getQuienSoy(){
    this.router.navigate(['quiensoy']);
  }
}

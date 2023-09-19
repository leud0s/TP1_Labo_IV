import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  hide = true;
  loading = false;
  alert: string = '';
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
  constructor(public router: Router,
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService,
    private snackBar: MatSnackBar
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
      this.loading = true;
      const date = new Date();
      const fullDate = date.toLocaleDateString() + '-' + date.toLocaleTimeString();
      this.firebaseSvc.login(this.form.value as User).then(async res =>{
        let user: User={
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email
        }
        this.firebaseSvc.addLogAuto({date: fullDate,user: res.user.email});
        
        this.utilsSvc.setElementInLocalstorage('user',user)
        this.utilsSvc.routerLink('home'),
        this.router.navigate(['home'], { queryParams: user });
        

        this.form.reset();
      }, error =>{
        this.loading = false;
        if(error.message === "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."){
          this.alert = "Contraseña incorrecta vuelva a intentar";
        }
        if(error.message ==="Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."){
          this.alert = "Usuario incorrecto vuelva a intentar";
        }
        let sb = this.snackBar.open(this.alert, 'cerrar', {
          duration: 3000,
        });
        sb.onAction().subscribe(() => {
          sb.dismiss();
        });
      })
    }
  }
 

       
  getRegistrar(){
    this.router.navigate(['registro']);
  }
  getQuienSoy(){
    this.router.navigate(['quiensoy']);
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { SpinnerComponent } from '../spinner/spinner.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  hide = true;
  public nombre = "";
  loading = false;
  alert: string = '';
  constructor(public router: Router, private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService, private formBuilder: FormBuilder,private snackBar: MatSnackBar){}
    form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

  getErrorMessageName() {
    let message = "Debe tener al menos 3 caracteres";
    if (this.form.controls.name.hasError('required')) {
      message = 'Campo requerido';
    }
    return message;
  }
  getErrorMessageEmail(){
    let message = "";
    if (this.form.controls.email.hasError('required')) {
      message = 'Campo requerido';
    }
    if(this.form.controls.email.hasError('email')){
      message='Email no valido';
    }
    console.log(this.form.controls.name.hasError);
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
      const aux = this.nombre;

      this.loading = true;
      
      this.firebaseSvc.signinUp(this.form.value as User).then(async res =>{
        await this.firebaseSvc.updateUser({displayName:aux})
        let user: User={
          uid: res.user.uid,
          name: res.user.displayName,
          email: res.user.email,
        }
        
        this.utilsSvc.setElementInLocalstorage('user',user)
        this.utilsSvc.routerLink('home'),
        this.router.navigate(['home'], { queryParams: user });
        

        this.form.reset();
      }, error =>{
        this.loading = false;
        if(error.message === "Firebase: The email address is already in use by another account. (auth/email-already-in-use)."){
          this.alert = "Usuario ya registrado.";
        }
        if(error.message ==="Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."){
          this.alert = "Usuario incorrecto vuelva a intentar";
        }
        let sb = this.snackBar.open(this.alert, 'cerrar', {
          duration: 3000,
          panelClass: ["custom-style"]
        });
        sb.onAction().subscribe(() => {
          sb.dismiss();
        });
      })
    }
  }
  getLogin(){
    this.utilsSvc.routerLink('login');
  }
  getQuienSoy(){
    this.utilsSvc.routerLink('quiensoy');
  }
}

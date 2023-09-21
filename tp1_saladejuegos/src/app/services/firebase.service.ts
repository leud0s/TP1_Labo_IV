import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import {getAuth, updateProfile} from "firebase/auth"; 


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore
  ) { }

  login(user: User){
    return this.auth.signInWithEmailAndPassword(user.email,user.password)
  }

  signinUp(user: User){
    return this.auth.createUserWithEmailAndPassword(user.email,user.password)
  }

  updateUser(user: any){
    const auth = getAuth();
    return updateProfile(auth.currentUser, user)
  }
  logout(){
    return this.auth.signOut();
  }
 saveLog(email : string){
    let date = new Date();
    const fullDate = date.toLocaleDateString() + '-' + date.toLocaleTimeString();
   
    let logs = this.db.collection('users');
    logs.doc().set({
      email: email,
      fecha_ingreso: fullDate
    })

  }
  getUserLogged() {
    return this.auth.authState;
  }
}

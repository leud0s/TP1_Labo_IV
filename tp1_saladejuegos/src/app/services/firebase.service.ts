import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import {getAuth, updateProfile} from "firebase/auth"; 
import { collection, Firestore, addDoc } from 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  usersRef = collection(this.firestore,'users');
  logsRef = collection(this.firestore,'logs');
  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    private firestore: Firestore
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
  addUserAuto(user: User){
    return addDoc(this.usersRef, user);
  }
  addLogAuto(log: any){
    return addDoc(this.usersRef, log);
  }
}

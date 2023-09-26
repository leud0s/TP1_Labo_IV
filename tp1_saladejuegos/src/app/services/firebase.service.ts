import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import {getAuth, updateProfile} from "firebase/auth"; 
import {Message} from '../models/message.model';
import { Observable, map } from 'rxjs';
import { QuerySnapshot } from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private itemsCollections: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
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
  saveMessages(message:Message){
    let logs = this.db.collection('messages');
    logs.doc().set({
      uid: message.uid,
      user: message.user,
      text: message.text,
      date: message.date,
    })
  }
  loadMessages(){
    this.itemsCollections = this.db.collection<Message>('messages', ref => ref.orderBy('date', 'desc').limit(25));
    //this.itemsCollections = this.db.collection<any>('messages',ref => ref.orderBy('date','desc').limit(25)).get();
    return this.itemsCollections.valueChanges().pipe(map((messages: Message[])=>{
      this.chats = [];

      for(let message of messages){
        this.chats.unshift(message);
      }
      return this.chats;
    }))
  }
  getUserLogged() {
    return this.auth.authState;
  }
}

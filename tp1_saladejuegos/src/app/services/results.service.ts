import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Results } from '../models/results.model';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  itemsCollection !: AngularFirestoreCollection<Results>;
  allScores !: Observable<Results[]>;  

  constructor(private firestore:AngularFirestore,private ruteo : Router) { }

  saveResults(nuevaResultado:Results){
    this.firestore.collection('scores').add(nuevaResultado);
    setTimeout(() => {
      this.ruteo.navigateByUrl('/home')      
    }, 1000);
  }

  getAllResults(){
    this.itemsCollection = this.firestore.collection<Results>('scores');
    return this.allScores = this.itemsCollection.valueChanges();
  } 

}
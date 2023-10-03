import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ResultsService } from 'src/app/services/results.service';
import { Results } from 'src/app/models/results.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-higher-or-lower',
  templateUrl: './higher-or-lower.component.html',
  styleUrls: ['./higher-or-lower.component.scss']
})
export class HigherOrLowerComponent {
  cardImage: string;
  currentCardValue: number;
  nextCardValue: number;
  currentWord: string;
  resultGame !: Results;
  points : number = 0;
  times : number = 0;
  user: any;
  loading:boolean =false;
  
  constructor(private resServ : ResultsService, private auth: FirebaseService) {
    this.cardImage = '';
    this.currentCardValue = this.getRandomCardValue();
    this.nextCardValue = this.getRandomCardValue();
    this.currentWord = this.getRandomWord();
    this.updateCardImage(this.currentCardValue, this.currentWord);
    this.auth.getUserLogged().subscribe(
      user=>{
        console.log(user);
        this.user = user;
      }
    )
  }

  getRandomCardValue(): number {
    return Math.floor(Math.random() * 13) + 1;
  }

  getRandomWord(): string {
    const palabras = ['Pica', 'Diamante', 'Trebol', 'Corazon'];
    return palabras[Math.floor(Math.random() * palabras.length)];
  }

  updateCardImage(value: number, word: string): void {
    const paddedValue = value < 10 ? '0' + value : value.toString();
    this.cardImage = `../../../assets/Naipes/${paddedValue}-${word}.png`;
  }

  compareCards(choice: string): void {
    if ((choice === 'higher' && this.nextCardValue > this.currentCardValue) ||
        (choice === 'lower' && this.nextCardValue < this.currentCardValue)) {
          this.points +=5;
          Swal.fire({
            title: '¡Correcto! La siguiente carta es ' + (choice === 'higher' ? 'mayor' : 'menor')+'.\n<hr>',
            text: 'Querés seguir jugando?',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Si',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            cancelButtonText: 'No',
            background: '#7c1ca4',
            color: '#fff'
          }).then((result) => {
            if (!result.isConfirmed) {
              this.saveResults();
            }
          });
    } else {
      this.points -=2;
      Swal.fire({
        title: '¡Incorrecto! La siguiente carta es ' + (choice === 'higher' ? 'menor' : 'mayor')+'\n<hr>',
        text: 'Querés seguir jugando?',
        icon: 'error',
        /*imageUrl: 'https://i.gifer.com/7efs.gif',
        imageWidth: 100,
        imageHeight: 100, */
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si',
        cancelButtonColor: '#d33',
        showCancelButton: true,
        cancelButtonText: 'No',
        background: '#7c1ca4',
        color: '#fff'
      }).then((result) => {
        if (!result.isConfirmed) {
          this.saveResults();
        }
      });
    }

    this.currentCardValue = this.nextCardValue;
    this.nextCardValue = this.getRandomCardValue();
    this.currentWord = this.getRandomWord();

    this.updateCardImage(this.currentCardValue, this.currentWord);
  }
  saveResults(){
    let date = new Date();
    let dateString = date.toString();
    this.resultGame = {
      uid: this.user.uid,
      mail: this.user.email,
      date: dateString,
      game: 'MayorMenor',
      points: this.points,
      rounds: this.times
    }
    this.resServ.saveResults(this.resultGame);
  }
}

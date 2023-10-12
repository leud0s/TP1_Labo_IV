import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ResultsService } from 'src/app/services/results.service';
import { Results } from 'src/app/models/results.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-higher-or-lower',
  templateUrl: './higher-or-lower.component.html',
  styleUrls: ['./higher-or-lower.component.scss']
})
export class HigherOrLowerComponent implements OnInit {
  cardImage: string;
  cardImageAfter: string = '../../../assets/Naipes/card-back.png';
  currentCardValue: number;
  nextCardValue: number;
  nextCardImame: string;
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
    this.nextCardImame = this.getRandomWord();
    this.currentWord = this.getRandomWord();
    this.updateCardImage(this.currentCardValue, this.currentWord);
   
  }
  ngOnInit(): void {
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
    const isHigher = choice === 'higher';
    const isSameValue = this.currentCardValue === this.nextCardValue;

    if (isSameValue) {
        // Si las cartas tienen el mismo valor, puedes manejarlo de acuerdo a tus necesidades.
        // Por ejemplo, mostrar un mensaje y no actualizar las cartas.
        Swal.fire({
            title: '¡Las cartas tienen el mismo valor!',
            text: 'Es un empate',
            icon: 'warning',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            background: '#7c1ca4',
            color: '#fff'
        });
        this.currentCardValue = this.nextCardValue;
    this.nextCardValue = this.getRandomCardValue();
    this.currentWord = this.getRandomWord();

    const auxiliarCard = this.cardImage;
    setTimeout(() => {
      this.cardImageAfter = auxiliarCard;
      setTimeout(() => {
        this.cardImageAfter = '../../../assets/Naipes/card-back.png';
      }, 2000);
    }, 10);
    this.updateCardImage(this.currentCardValue, this.currentWord);
        return;  // Sal del método sin actualizar las cartas
    }

    const isCorrect = (isHigher && this.nextCardValue > this.currentCardValue) ||
                      (!isHigher && this.nextCardValue < this.currentCardValue);

    this.points += isCorrect ? 5 : -2;
    if(this.points < 0) this.points = 0;
    const title = isCorrect ? '¡Correcto!' : '¡Incorrecto!';
    const cardComparison = isHigher ? 'mayor' : 'menor';

    Swal.fire({
        title: `${title} La siguiente carta es ${cardComparison}\n<hr>`,
        text: '¿Quieres seguir jugando?',
        icon: isCorrect ? 'success' : 'error',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Sí',
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

    this.currentCardValue = this.nextCardValue;
    this.nextCardValue = this.getRandomCardValue();
    this.currentWord = this.getRandomWord();

    const auxiliarCard = this.cardImage;
    setTimeout(() => {
      this.cardImageAfter = auxiliarCard;
      setTimeout(() => {
        this.cardImageAfter = '../../../assets/Naipes/card-back.png';
      }, 2000);
    }, 10);
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

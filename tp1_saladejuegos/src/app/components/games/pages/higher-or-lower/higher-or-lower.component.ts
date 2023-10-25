import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ResultsService } from 'src/app/services/results.service';
import { Results } from 'src/app/models/results.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { CardApiService } from 'src/app/services/card-api.service';
@Component({
  selector: 'app-higher-or-lower',
  templateUrl: './higher-or-lower.component.html',
  styleUrls: ['./higher-or-lower.component.scss']
})
export class HigherOrLowerComponent implements OnInit {
  deckId: string;
  currentCard: any;
  nextCard: any = {'image': '../../../assets/Naipes/card-back.png'};
  count: number = 0;
  result: string = "";
  constructor(private cardApiService: CardApiService) {}

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame() {
    this.cardApiService.createDeck().subscribe((data) => {
      this.deckId = data.deck_id;
      this.drawCard();
    });
  }

  drawCard() {
    this.cardApiService.drawCard(this.deckId).subscribe((data) => {
      this.currentCard = data.cards[0];
    });
  }

  saveResults() {}

  checkGuess(isHigher: boolean) {
    this.nextCard = null;

    this.cardApiService.drawCard(this.deckId).subscribe((data) => {
      this.nextCard = data.cards[0];

      console.log(this.nextCard.value);
      console.log(this.currentCard.value);

      const isSameValue = this.currentCard.value === this.nextCard.value;

      if (isSameValue) {

          Swal.fire({
              title: '¡Las cartas tienen el mismo valor!',
              text: 'Es un empate',
              icon: 'warning',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK',
              background: '#7c1ca4',
              color: '#fff'
          });
        }

      const isCorrect =
        (isHigher && this.nextCard.value > this.currentCard.value) ||
        (!isHigher && this.nextCard.value < this.currentCard.value);

      const title = isCorrect ? '¡Correcto!' : '¡Incorrecto!';
      const cardComparison = isHigher ? 'mayor' : 'menor';
      this.result = `${title} La siguiente carta es ${cardComparison}\n`;
      if(this.count === 3 || title === '¡Incorrecto!'){
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
          color: '#fff',
        }).then((result) => {
          if (!result.isConfirmed) {
            
          } });
      }
      

        this.count += 1;
        setTimeout(()=>{
          this.currentCard = this.nextCard;
          this.nextCard = {'image': '../../../assets/Naipes/card-back.png'};
        },1500)
        
     
    });
  }
}
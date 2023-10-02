import { Component } from '@angular/core';

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

  constructor() {
    this.cardImage = '';
    this.currentCardValue = this.getRandomCardValue();
    this.nextCardValue = this.getRandomCardValue();
    this.currentWord = this.getRandomWord();
    this.updateCardImage(this.currentCardValue, this.currentWord);
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
      alert('¡Correcto! La siguiente carta es ' + (choice === 'higher' ? 'mayor' : 'menor'));
    } else {
      alert('¡Incorrecto! La siguiente carta es ' + (choice === 'higher' ? 'menor' : 'mayor'));
    }

    this.currentCardValue = this.nextCardValue;
    this.nextCardValue = this.getRandomCardValue();
    this.currentWord = this.getRandomWord();

    this.updateCardImage(this.currentCardValue, this.currentWord);
  }
}

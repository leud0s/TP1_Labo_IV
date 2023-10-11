import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private cardValues: number[] = Array.from({ length: 13 }, (_, index) => index + 1);

  getRandomCardValue(): number {
    const randomIndex = Math.floor(Math.random() * this.cardValues.length);
    return this.cardValues.splice(randomIndex, 1)[0];
  }
  getRandomWord(): string {
    const palabras = ['Pica', 'Diamante', 'Trebol', 'Corazon'];
    return palabras[Math.floor(Math.random() * palabras.length)];
  }
}

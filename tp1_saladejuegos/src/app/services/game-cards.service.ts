import { Injectable } from '@angular/core';
import { cards } from 'src/app/models/cards.model';
@Injectable({
  providedIn: 'root'
})
export class GameCardsService {
  public listCards = cards;
  constructor() { }

  public dealCards(numCards: number) {
    const dealCards = [];
    let idCounter = 1;
    let lista = this.getCards();
    let currentIndex = 0;

    while (numCards > 0) {
        const randomIndex = Math.floor(Math.random() * lista.length);
        const card = lista[randomIndex];

        if (card !== undefined && card !== null) {
            lista.splice(randomIndex, 1);
            const cardWithId = { ...card, id: idCounter++ };
            dealCards.push(cardWithId);
            numCards--;
            this.setCards(cardWithId);
        }

        currentIndex = (randomIndex + 1) % lista.length;
        if (currentIndex === randomIndex) {
            break;
        }
    }

    return dealCards;
  }
  private setCards(card: { id: number; name: string; damage: number; detail: string; img: string; type: string; }){
    return this.listCards.push(card);
  }
  private getCards(){
    return this.listCards;
  }

}

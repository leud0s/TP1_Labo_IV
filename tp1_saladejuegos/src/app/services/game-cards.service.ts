import { Injectable } from '@angular/core';
import { cards } from 'src/app/models/cards.model';
@Injectable({
  providedIn: 'root'
})
export class GameCardsService {
  public listCards = cards;
  constructor() { }

  public dealCards(numCards: number){
    const dealCards = [];
    let idCounter = 1;
    let lista = this.listCards;
    for(let i = 0; i < numCards; i++){
        const randomIndex = Math.floor(Math.random() * this.listCards.length);
        const card = { ...lista.splice(randomIndex, 1)[0], id: idCounter++ };
        dealCards.push(card);
        this.getCards(card);
    }
    return dealCards;
  }
  private getCards(card){
    return this.listCards.push(card);
  }

}

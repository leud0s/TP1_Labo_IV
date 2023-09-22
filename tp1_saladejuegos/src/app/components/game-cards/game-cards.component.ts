import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cards } from 'src/app/models/cards.model';
import { Player } from 'src/app/models/player.model';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.scss']
})
export class GameCardsComponent implements OnInit{
  @Input() title: string;
  listCards = cards;
  selectedCardIndex: number;
  result = "Esperando selección...";
  playerHP = 100;
  cpuHP = 100;
  playerOne = new Player(100, this.dealCards(5), "");
  playerCpu = new Player(100, this.dealCards(5), "");
  points = 0;
  isGameOver: boolean = false;
  isOnClickInProgress: boolean = false;
  computerCardIndex: number;
  condition = false;

  constructor(public dialog: MatDialog,public router: Router){
   
  }
  ngOnInit(): void {
    
  }
  private dealCards(numCards: number){
    const dealCards = [];
    let idCounter = 1;
    for(let i = 0; i < numCards; i++){
        const randomIndex = Math.floor(Math.random() * this.listCards.length);
        //dealCards.push(this.listCards[randomIndex]);
        const card = { ...this.listCards.splice(randomIndex, 1)[0], id: idCounter++ };
        dealCards.push(card);
    }
    return dealCards;
  }
  public onClick(playerCardIndex: number) {
    if (this.isOnClickInProgress) {
      return;
  }
  this.isOnClickInProgress = true;
  this.isGameOver = false;
    const computerCardIndex = Math.floor(Math.random() * this.playerCpu.cards.length);

    const playerCard = this.playerOne.cards[playerCardIndex];
    const computerCard = this.playerCpu.cards[computerCardIndex];

    let playerDamage = playerCard.damage;
    let computerDamage = computerCard.damage;
    switch(playerCard.type){
      case "Cura":
        this.playerOne.hp += playerDamage;
        if(this.playerOne.hp >= 100)
          { this.playerOne.hp = 100;}
        playerDamage = 0;
        break;
      case "Roba vida":
        this.playerOne.hp += playerDamage;
        break;
      case "Defesa":
        if(playerCard.type !== "Defensa"){
          computerDamage -= playerDamage;
          playerDamage = 0;
        }
        break;
      case "Devolución":
          computerDamage = playerDamage;
          playerDamage = 0;
        break;
    }
    switch(computerCard.type){
      case "Cura":
        this.playerCpu.hp += computerDamage;
        if(this.playerCpu.hp >= 100) this.playerCpu.hp = 100;
        computerDamage = 0;
        break;
      case "Roba vida":
        this.playerCpu.hp += computerDamage;
        break;
      case "Defesa":
          if(playerCard.type !== "Defensa"){
            playerDamage -= computerDamage;
            computerDamage = 0;
          }
        break;
      case "Devolución":
          computerDamage = playerDamage;
          playerDamage = 0;
        break;
    }
    this.playerCpu.hp -= playerDamage;
    this.playerOne.hp -= computerDamage;

    this.playerOne.hp = this.playerOne.hp < 0 ? 0 : this.playerOne.hp;
    this.playerCpu.hp = this.playerCpu.hp < 0 ? 0 : this.playerCpu.hp;
   
    if (playerDamage > computerDamage) {
      this.result = "¡Has ganado la ronda!";
    } else if (computerDamage > playerDamage) {
      this.result = "La máquina ha ganado la ronda.";
    } else {
      this.result = "La ronda terminó en empate.";
    }
    
    setTimeout(() => {

      this.playerOne.cards.splice(playerCardIndex, 1);
        this.playerCpu.cards.splice(computerCardIndex, 1);
        this.updateCardIds();
    }, 1700); // Espera 1 segundo para que termine la animación

    this.isOnClickInProgress = false;
    
    if (this.playerOne.cards.length === 1 || this.playerCpu.cards.length === 1 || this.playerOne.hp <= 0 || this.playerCpu.hp <= 0) {
        this.endGame();
      }
}
private endGame() {
  this.isGameOver = true;
  if (this.playerOne.hp > this.playerCpu.hp) {
    this.result = "¡Has ganado el juego!";
    this.points += 5;
  } else if (this.playerOne.hp === this.playerCpu.hp) {
    this.result = "La ronda terminó en empate.";
    this.points += 3;
  } else {
    this.result = "La máquina ha ganado el juego.";
    this.points -= 2;
    if(this.points < 0) this.points = 0;
  }
  this.restartGame();
}
private updateCardIds() {
  for (let i = 0; i < this.playerOne.cards.length; i++) {
    this.playerOne.cards[i].id = i + 1;
  }

  for (let i = 0; i < this.playerCpu.cards.length; i++) {
    this.playerCpu.cards[i].id = i + 1;
  }
}
restartGame() {
  // Reiniciar el juego
  this.playerOne = new Player(100, this.dealCards(5), "");
  this.playerCpu = new Player(100, this.dealCards(5), "");
  this.result = "Esperando selección...";
}
isIndexSelected(index: number): boolean {
    return index === this.computerCardIndex;
}

}

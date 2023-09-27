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
  damage = "";
  damageCpu = "";
  lostCards=[];
  cardCpu:any;

  constructor(public dialog: MatDialog,public router: Router){
   
  }
  ngOnInit(): void {
   
  }
  private dealCards(numCards: number) {
    const dealCards = [];
    let idCounter = 0;
    const lista = this.listCards.slice();
  
    for (let i = 1; i <= numCards; i++) {
      if (lista.length === 0) {
        console.error('No hay suficientes cartas para repartir.');
        break;
      }
      const randomIndex = Math.floor(Math.random() * lista.length);
      const card = { ...lista.splice(randomIndex, 1)[0], id: idCounter++ };
      this.getCards(card);
      dealCards.push(card);
    }
    return dealCards;
  }
  private getCards(card){
    return this.listCards.push(card);
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

  restartGame() {
    // Reiniciar el juego
    this.listCards = cards;
    this.playerOne = new Player(100, this.dealCards(5), "");
    this.playerCpu = new Player(100, this.dealCards(5), "");
    setTimeout(()=>{
      this.lostCards=[];
      this.result = "Esperando selección...";
    },2500);
  }

  public onClick(playerCardIndex: number) {
    if (this.isOnClickInProgress) {
      return;
    }
    setTimeout(()=>{
      this.lostCards=[];
    },500);
    this.isOnClickInProgress = true;
    this.isGameOver = false;

    const computerCardIndex = this.getRandomCardIndex(this.playerCpu.cards);
    this.cardCpu = computerCardIndex;
    const playerCard = this.playerOne.cards[playerCardIndex];
    const computerCard = this.playerCpu.cards[computerCardIndex];
    console.log(this.playerCpu);
    const { playerDamage, computerDamage } = this.calculateDamage(playerCard, computerCard);

    this.updatePlayerHealth(playerDamage, computerDamage);

    this.determineRoundResult(playerDamage, computerDamage);

    this.handleEndOfRound(playerCardIndex, computerCardIndex);

    this.isOnClickInProgress = false;
    if (this.isGameOverCondition()) {
      this.endGame();
    }
  }

  private getRandomCardIndex(cards: any[]): number {
    return Math.floor(Math.random() * cards.length);
  }

  private calculateDamage(playerCard: any, computerCard: any): { playerDamage: number, computerDamage: number } {
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
    case "Defensa":
      if(computerCard.type === "Defensa"){
        playerDamage = 0;
      }else{
        computerDamage -= playerDamage;
        playerDamage = 0;
      }
      break;
    case "Devolución":
      if(computerCard.type !== "Defensa"){
        playerDamage = computerDamage;
        computerDamage = 0;
      }
      break;
    case "Colateral":
      this.playerOne.hp -= 10;
      break;
  }

  switch(computerCard.type){
    case "Cura":
      this.playerCpu.hp += computerDamage;
        if(this.playerCpu.hp >= 100)
          { this.playerCpu.hp = 100;}
      computerDamage = 0;
      break;
    case "Roba vida":
      this.playerCpu.hp += computerDamage;
      break;
    case "Defensa":
      if(playerCard.type === "Defensa"){
        computerDamage = 0;
      }else{
        playerDamage -= computerDamage;
        computerDamage = 0;
      }
      break;
    case "Devolución":
      if(playerCard.type !== "Defensa"){
        computerDamage = playerDamage;
        playerDamage = 0;
      }
      break;
    case "Colateral":
      this.playerCpu.hp -= 10;
      break;
  }

  return { playerDamage, computerDamage };
}

private updatePlayerHealth(playerDamage: number, computerDamage: number) {
  this.playerCpu.hp -= playerDamage;
  this.playerOne.hp -= computerDamage;
  this.damage = computerDamage.toString();
  this.damageCpu = playerDamage.toString();
  this.playerOne.hp = this.playerOne.hp < 0 ? 0 : this.playerOne.hp;
  this.playerCpu.hp = this.playerCpu.hp < 0 ? 0 : this.playerCpu.hp;
}

private determineRoundResult(playerDamage: number, computerDamage: number) {
  if (playerDamage > computerDamage) {
    this.result = "¡Has ganado la ronda!";
  } else if (computerDamage > playerDamage) {
    this.result = "La máquina ha ganado la ronda.";
  } else {
    this.result = "La ronda terminó en empate.";
  }
}

private handleEndOfRound(playerCardIndex: number, computerCardIndex: number) {
  setTimeout(() => {

       this.lostCards.push(this.playerOne.cards[playerCardIndex]);
       this.lostCards.push(this.playerCpu.cards[computerCardIndex]);
       
       this.playerOne.cards.splice(playerCardIndex, 1);
       this.playerCpu.cards.splice(computerCardIndex, 1);
       if (this.isGameOverCondition()) {
         this.endGame();
       }
   
     }, 1700); 
}

private isGameOverCondition(): boolean {
  // Verifica si el jugador uno o la CPU tienen menos de 1 punto de vida
  const playerOneHasLowHealth = this.playerOne.hp < 1;
  const playerCpuHasLowHealth = this.playerCpu.hp < 1;

  // Verifica si solo queda una carta en la mano de alguno de los jugadores
  const playerOneHasOneCardLeft = this.playerOne.cards.length === 0;
  const playerCpuHasOneCardLeft = this.playerCpu.cards.length === 0;

  // El juego termina si uno de los jugadores tiene menos de 1 punto de vida o tiene solo una carta
  return playerOneHasLowHealth || playerCpuHasLowHealth || playerOneHasOneCardLeft || playerCpuHasOneCardLeft;
}
public deletedCard(index: number){
  console.log(this.lostCards[1]);
  return this.lostCards[1].i === index;
}
}

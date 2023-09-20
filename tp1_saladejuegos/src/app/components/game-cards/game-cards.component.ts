import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cards } from 'src/app/models/cards.model';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.scss']
})
export class GameCardsComponent implements OnInit{
  @Input() title: string;
  public listCards = cards;
  public selectedCardIndex:number;
  result: string = "Esperando selección...";
  playerHP: number = 100;
  cpuHP: number = 100;
  public playerOne = new Player(100, this.dealCards(5), "");
  public playerCpu = new Player(100, this.dealCards(5), "");
  points: number = 0;  // Inicializar el contador de puntos
  isGameOver: boolean = false;
  constructor(){
   
  }
  ngOnInit(): void {
    
  }
  private dealCards(numCards: number){
    const dealCards = [];
    let idCounter = 1;
    for(let i = 0; i < numCards; i++){
        const randomIndex = Math.floor(Math.random() * this.listCards.length);
        const card = { ...this.listCards.splice(randomIndex, 1)[0], id: idCounter++ };
        dealCards.push(card);
    }
    return dealCards;
  }
  public onClick(playerCardIndex: number) {
   
    const computerCardIndex = Math.floor(Math.random() * this.playerCpu.cards.length);

    const playerCard = this.playerOne.cards[playerCardIndex];
    const computerCard = this.playerCpu.cards[computerCardIndex];
    
    let playerDamage = playerCard.damage;
    let computerDamage = computerCard.damage;
    switch(playerCard.type){
      case "Cura":
        this.playerOne.hp += playerDamage;
        if(this.playerOne.hp <= 100) this.playerOne.hp = 100;
        playerDamage = 0;
        break;
      case "Roba vida":
        this.playerOne.hp += playerDamage;
        break;
      case "Defesa":
        break;
      case "Devolución":
        break;
    }
    this.playerCpu.hp -= playerCard.damage;
    this.playerOne.hp -= computerCard.damage;
    if(this.playerOne.hp < 0){
      this.playerOne.hp = 0;
    }
    if(this.playerCpu.hp < 0){
      this.playerCpu.hp = 0;
    }
   
    if (playerDamage > computerDamage) {
      this.result = "¡Has ganado la ronda!";
    } else if (computerDamage > playerDamage) {
      this.result = "La máquina ha ganado la ronda.";
    } else {
      this.result = "La ronda terminó en empate.";
    }
    
    setTimeout(() => {
      console.log(this.playerCpu.cards);
      this.playerOne.cards.splice(playerCardIndex, 1);
        this.playerCpu.cards.splice(computerCardIndex, 1);
        this.updateCardIds();
    }, 1700); // Espera 1 segundo para que termine la animación
    
        console.log(this.playerCpu.cards);
        // Comprueba el resultado final
        if (this.playerOne.cards.length === 0 || this.playerCpu.cards.length === 0 || this.playerOne.hp <= 0 || this.playerCpu.hp <= 0) {
            this.endGame();
        }
}
private endGame() {
  this.isGameOver = true;
  if (this.playerOne.hp > this.playerCpu.hp) {
    this.result = "¡Has ganado el juego!";
    this.points += 5;
  } else if (this.playerOne.hp == this.playerCpu.hp) {
    this.result = "La ronda terminó en empate.";
    this.points += 3;
  } else {
    this.result = "La máquina ha ganado el juego.";
  }
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
  this.isGameOver = false;
}

}

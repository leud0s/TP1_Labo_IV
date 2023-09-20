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
        
    this.playerCpu.hp -= playerCard.damage;
    this.playerOne.hp -= computerCard.damage;

    this.selectedCardIndex = this.playerOne.cards[playerCardIndex].id;
    console.log(this.selectedCardIndex);
    if (playerDamage > computerDamage) {
        this.result = "¡Has ganado la ronda!";
    } else if (computerDamage > playerDamage) {
        this.result = "La máquina ha ganado la ronda.";
    } else {
        this.result = "La ronda terminó en empate.";
    }

    // Aplica la clase "move-center" para animar las cartas al centro
   // playerCardContainer.querySelectorAll('.card')[playerCardIndex].classList.add("move-center","move-center-player");
    //computerCardContainer.querySelectorAll('.card')[computerCardIndex].classList.add("move-center","move-center-cpu");

    // Elimina las cartas jugadas después de la animación
    //this.animation = "move-center move-center-player";
    setTimeout(() => {
        this.playerOne.cards.splice(playerCardIndex, 1);
        this.playerCpu.cards.splice(computerCardIndex, 1);
        this.updateCardIds();

        // Comprueba el resultado final
        if (this.playerOne.cards.length === 0 || this.playerCpu.cards.length === 0 || this.playerOne.hp <= 0 || this.playerCpu.hp <= 0) {
            this.endGame();
        }
    }, 1500); // Espera 1 segundo para que termine la animación
}
private endGame() {
  if (this.playerOne.hp > this.playerCpu.hp) {
    this.result = "¡Has ganado el juego!";
  }else if(this.playerOne.hp == this.playerCpu.hp) {
    this.result = "La ronda terminó en empate.";
  } 
  else {
    this.result = "La máquina ha ganado el juego.";
  }
}
public updateCardIds() {
  for (let i = 0; i < this.playerOne.cards.length; i++) {
    this.playerOne.cards[i].id = i + 1;
  }

  for (let i = 0; i < this.playerCpu.cards.length; i++) {
    this.playerCpu.cards[i].id = i + 1;
  }
}

  
}

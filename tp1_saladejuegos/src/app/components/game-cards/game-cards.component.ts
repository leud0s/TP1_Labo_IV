import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { cards } from 'src/app/models/cards.model';
import { HomeModule } from '../home/home.module';
@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.scss']
})
export class GameCardsComponent implements OnInit{
  list = cards;
  @Output() eventName = new EventEmitter<any>();

  @Input() title: string;
  result: string = "Esperando selección...";
  playerHP: number = 100;
  cpuHP: number = 100;

  constructor(){
    console.log(this.list);
  }
  ngOnInit(): void {
   
  }
  
  
}

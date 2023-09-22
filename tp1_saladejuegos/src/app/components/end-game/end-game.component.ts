import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent {
  @Input () result:string;
  @Input () points:number;
  @Input () close: void;
  @Input () restart: void;

  closeGame(){
    this.close;
  }
  restartGame(){
    this.restart;
  }
}

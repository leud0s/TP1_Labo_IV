import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-end-game',
  templateUrl: './end-game.component.html',
  styleUrls: ['./end-game.component.scss']
})
export class EndGameComponent {
  @Input () result:string;
  @Input () points:number;
  
  @Input () restart: any;
  public router: Router;
  closeGame(){
    this.router.navigate(['home']);
  }
  restartGame(){
    this.restart;
  }
}

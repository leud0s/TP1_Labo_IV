import { Component } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

const MAX_ERRORS = 6; 
@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss']
})

export class HangmanComponent {
  palabraMostrada: string;
  intentosRestantes: number;
  gameOver: boolean = false;
  abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


  constructor(public ahorcadoService: HangmanService) {
    this.resetGame();
  }

  resetGame(): void {
    this.palabraMostrada = this.ahorcadoService.obtenerPalabraMostrada();
    this.intentosRestantes = this.ahorcadoService.obtenerIntentosRestantes();
    //this.gameOver = false;
  }

  adivinarLetra(letra: string): void {
    this.gameOver = false;
    this.ahorcadoService.adivinarLetra(letra);
    this.palabraMostrada = this.ahorcadoService.obtenerPalabraMostrada();
    this.intentosRestantes = this.ahorcadoService.obtenerIntentosRestantes();

    // Verifica si se ha ganado o perdido
    if (this.intentosRestantes === 0) {
      this.resetGame();
      this.gameOver = true;
    } else if (!this.palabraMostrada.includes('_')) {
      this.resetGame();
      this.gameOver = true;
    }
  }
}

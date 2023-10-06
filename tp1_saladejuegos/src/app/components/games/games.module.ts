import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardsComponent } from './pages/game-cards/game-cards.component';
import { HangmanComponent } from './pages/hangman/hangman.component';
import { GamesRoutingModule } from './games-routing.module';
import { CardComponent } from './pages/card/card.component';
import { GamesComponent } from './pages/games.component';
import { FormsModule } from '@angular/forms';
import { HigherOrLowerComponent } from './pages/higher-or-lower/higher-or-lower.component';
import { TriviaComponent } from './pages/trivia/trivia.component';
@NgModule({
  declarations: [CardComponent, HangmanComponent, GameCardsComponent, GamesComponent, HigherOrLowerComponent, TriviaComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    FormsModule
    
  ]
})
export class GamesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { GameCardsComponent } from '../game-cards/game-cards.component'; // Importa el componente del juego
import { ChatComponent } from '../chat/chat.component';
import { HangmanComponent } from '../hangman/hangman.component';
import { HigherOrLowerComponent } from '../higher-or-lower/higher-or-lower.component';
import { TriviaComponent } from '../trivia/trivia.component';


const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'game', component: GameCardsComponent },  // Ruta para el componente de juego
  { path: 'chat', component: ChatComponent },
  { path: 'hangman', component: HangmanComponent },
  { path: 'higher', component: HigherOrLowerComponent },
  { path: 'trivia', component: TriviaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],  // Utiliza forChild() para las rutas de módulos secundarios
  exports: [RouterModule]
})
export class HomeRoutingModule { }

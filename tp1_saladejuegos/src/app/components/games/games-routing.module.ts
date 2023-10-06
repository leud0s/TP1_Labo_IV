import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from './pages/games.component';
import { GameCardsComponent } from './pages/game-cards/game-cards.component';
import { HangmanComponent } from './pages/hangman/hangman.component';
import { HigherOrLowerComponent } from './pages/higher-or-lower/higher-or-lower.component';
import { TriviaComponent } from './pages/trivia/trivia.component';

const routes: Routes = [
  {path:'',component:GamesComponent,
    children:[
      {path: 'game', component:GameCardsComponent},
      {path: 'hangman', component: HangmanComponent},
      {path: 'higher', component: HigherOrLowerComponent},
      {path: 'trivia', component: TriviaComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }

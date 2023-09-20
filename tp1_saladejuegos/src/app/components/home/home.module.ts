import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'; // Importa el módulo de enrutamiento
import { GameCardsComponent } from '../game-cards/game-cards.component';
import { CardComponent } from '../card/card.component';
@NgModule({
  declarations: [
    HomeComponent,
    GameCardsComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,  // Agrega el módulo de enrutamiento a los imports
  ]
})
export class HomeModule { }

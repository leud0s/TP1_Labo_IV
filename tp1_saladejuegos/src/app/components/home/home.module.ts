import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'; // Importa el módulo de enrutamiento

@NgModule({
  declarations: [
    HomeComponent,
    // Otros componentes de la sección "home" si los hay
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,  // Agrega el módulo de enrutamiento a los imports
  ]
})
export class HomeModule { }

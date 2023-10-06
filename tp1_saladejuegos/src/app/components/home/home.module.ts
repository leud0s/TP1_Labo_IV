import { NgModule } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatComponent } from '../chat/chat.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ChatComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule, 
    MatIconModule,
    MatDialogModule,
    FormsModule,
    
      // Agrega el módulo de enrutamiento a los imports
  ]
})
export class HomeModule { }

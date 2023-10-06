import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ChatComponent } from '../chat/chat.component';



const homeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chat', component: ChatComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],  // Utiliza forChild() para las rutas de módulos secundarios
  exports: [RouterModule]
})
export class HomeRoutingModule { }

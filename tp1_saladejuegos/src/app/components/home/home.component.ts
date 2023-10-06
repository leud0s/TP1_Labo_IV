import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from 'src/app/services/auth.service';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() title: string;
  nameTitle: any;
  constructor( private router: ActivatedRoute, 
    private firebaseSvc: FirebaseService,
    private utilsSvc: UtilsService,
    public navigate: Router,
    
    
    ){}

  ngOnInit() {
    this.firebaseSvc.getUserLogged().subscribe(
      user=>{
        this.nameTitle = user.displayName;
      }
    )
  }
  async logout(){
    await this.firebaseSvc.logout();
    this.utilsSvc.routerLink("login");
  }
  getGameCards(){
    this.navigate.navigate(['/games/game']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss'],
  standalone: true
})
export class QuienSoyComponent {
  constructor(public router: Router){}

  getRegistrar(){
    this.router.navigate(['registro']);
  }
  getLogin(){
    this.router.navigate(['login']);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input () index: number;
  @Input () type: string;
  @Input () img: string;
  @Input () name: string;
  @Input () detail: string;
  @Input () damage: number;
  isClicked = false;

  ngOnInit() {}
  onClick() {
    this.isClicked = !this.isClicked;
  }
}

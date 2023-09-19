import { Component, OnInit, Inject, EventEmitter, Output, Input } from "@angular/core";
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from "@angular/material/snack-bar";

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  @Output() hideAlertEvent = new EventEmitter<boolean>();
  @Input () hidden = false;
  constructor(
    public sbRef: MatSnackBarRef<SnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
  ngOnInit() {}
  onClick(){
    this.hideAlertEvent.emit(false);
  }
}


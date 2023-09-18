import { Input } from '@angular/core';
import {Component} from '@angular/core';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  @Input() durationInSeconds!: number;
  @Input() message!: string;
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar() {
    this._snackBar.open(this.message);
  }
}


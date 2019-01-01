import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CarsComponent} from '../cars.component';
import {Car} from '../../car';

export interface DialogData {
  car: Car;
}

@Component({
  selector: 'app-delete-are-you-sure-dialog',
  templateUrl: './delete-are-you-sure-dialog.component.html',
  styleUrls: ['./delete-are-you-sure-dialog.component.css']
})
export class DeleteAreYouSureDialogComponent {
  car: Car;

  constructor(
    public dialogRef: MatDialogRef<CarsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}

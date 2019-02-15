import {Component, Inject, OnInit} from '@angular/core';
import {Car, Transmission} from '../../../../models/car';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../delete-are-you-sure-dialog/delete-are-you-sure-dialog.component';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {
  car: Car;
  transmissions = Transmission;

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }
}

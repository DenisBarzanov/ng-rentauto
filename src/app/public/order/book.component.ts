import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.unavailabilityForm = this.formBuilder.group({
      'startDate': [''],
      'endDate': ['']
    }, {validator: this.checkDates});

    this.unavailabilityForm.setValue({
      startDate: this.startDate,
      endDate: this.endDate
    });
  }

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  startDate = new Date().toISOString();
  endDate = this.addDays(new Date(), 4);

  unavailabilityForm: FormGroup;

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  checkDates(group: FormGroup) {
    if (group.controls.endDate.value < group.controls.startDate.value) {
      return { notValid: true };
    }
    return null;
  }

  addDays(date: Date, days: number): Date {
    date.setDate(date.getDate() + days);
    return date;
  }
}

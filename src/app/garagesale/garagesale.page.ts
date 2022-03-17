import { Component, OnInit } from '@angular/core';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-garagesale',
  templateUrl: './garagesale.page.html',
  styleUrls: ['./garagesale.page.scss'],
})
export class GaragesalePage implements OnInit {

  showStartDate = false;
  showEndDate = false;
  startDataValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  endDateValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedStartDate = '';
  formattedEndDate = '';

  constructor() {
    this.setToday();
  }

  setToday() {
    this.formattedStartDate = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm, MMM d, yyyy');
    this.formattedEndDate = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm , MMM d, yyyy');
  }

  startDateChanged(value) {
    this.startDataValue = value;
    this.formattedStartDate = format(parseISO(value), 'MMM d, yyyy');
    this.showStartDate = false;
  }

  endDateChanged(value) {
    this.endDateValue = value;
    this.formattedEndDate = format(parseISO(value), 'MMM d, yyyy');
    this.showEndDate = false;
  }

  ngOnInit() {
  }

}

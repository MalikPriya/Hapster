import { Component, OnInit } from '@angular/core';
//import { format } from 'path';
import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  showDate = false;
  showTime = false;
  dataValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  timeValue = format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z';
  formattedDate = '';
  formattedTime = '';

  constructor() {
    this.setToday();
  }

  setToday() {
    this.formattedDate = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'MMM d, yyyy');
    this.formattedTime = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'HH:mm');
  }

  dateChanged(value) {
    this.dataValue = value;
    this.formattedDate = format(parseISO(value), 'MMM d, yyyy');
    this.showDate = false;
  }

  timeChanged(value) {
    this.timeValue = value;
    this.formattedTime = format(parseISO(value), 'HH:mm');
    this.showTime = false;
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garagedetails',
  templateUrl: './garagedetails.page.html',
  styleUrls: ['./garagedetails.page.scss'],
})
export class GaragedetailsPage implements OnInit {

  showBargain = false;
  showBuyNow = false;

  constructor() { }

  ngOnInit() {
  }

}

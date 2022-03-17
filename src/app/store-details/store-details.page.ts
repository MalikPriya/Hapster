import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.page.html',
  styleUrls: ['./store-details.page.scss'],
})
export class StoreDetailsPage implements OnInit {

  type: string;
  
  constructor() { }

  ngOnInit() {
    this.type = 'products';
  }

  slideOpts = {
    slidesPerView: 1.3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    initialSlide: 1,
    centeredSlides: true,
    loop: true,
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  private currentNumber = 0;

	private increment() {
  		this.currentNumber++;
	}

	private decrement() {
  		this.currentNumber--;
	}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {

  // view: any;
  // constructor() {
  //   this.view = 'map';
  // }

  // ngOnInit() {
  // }

  slideOpts = {
    slidesPerView: 1.3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    initialSlide: 1,
    centeredSlides: true,
    loop: true,
  }

  type: string;
  constructor() { }

  ngOnInit() {
    this.type = 'products';
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
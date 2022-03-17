import { Component } from '@angular/core';
import {AllapiService} from '../app/commonService/allapi.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Address', url: '/address', icon: 'navigate' },
    { title: 'Order History', url: '/order', icon: 'document-text' },
    { title: 'Your Favorites', url: '/favorites', icon: 'heart' },
    { title: 'My Orders', url: '/order', icon: 'storefront' },
    { title: 'Manage Order', url: '/store-order', icon: 'storefront' },
    { title: 'Manage Garage Sale', url: '/garagelisting', icon: 'pricetag' },
    { title: 'Chat', url: '/chatlist', icon: 'chatbubble' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(private _api:AllapiService) {}

  ngOnInit(): void {
  }

  // logoutAdmin(){
  //   this._api.logoutUser();
  // }
}

import { Component, OnInit } from '@angular/core';
import {AllapiService} from '../commonService/allapi.service'
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public notificationdetails:any={};

  constructor(private _api:AllapiService) { }

  ngOnInit():void {
   this.notificationList();

  }



  notificationList(){

    this._api.customernotification().subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.notificationdetails= res.data[0];
           
          console.log(this.notificationdetails);
        }else{
          this.notificationdetails={};
        }

      },err =>{

      }
    )
  }
}

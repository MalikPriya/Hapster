import { Component, OnInit } from '@angular/core';
import {AllapiService} from '../commonService/allapi.service'
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  orderdetails=[];
  public list:any=[];
  constructor(private _api:AllapiService) {
    this.list=JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit() {
    this.orderList('621791f11758ba73807467d8');
  }


  orderList(id:any){

    this._api.Orderlist().subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.orderdetails= res.data;
        }else{
          this.orderdetails=[];
        }

      },err =>{

      }
    )
  }

}

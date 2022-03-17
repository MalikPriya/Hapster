import { Component, OnInit } from '@angular/core';
import {AllapiService} from '../commonService/allapi.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public list:any={};
  cartdetails : any =[]
  constructor(private _api:AllapiService) { }

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem('userInfo'));

    this.cartList(this.list._id);
  }

  	private currentNumber = 0;

	private increment() {
  		this.currentNumber++;
	}

	private decrement() {
  		this.currentNumber--;
	}


  cartList(id:any){

    this._api.Cartlist(id).subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.cartdetails= res.data;
        }else{
          this.cartdetails={};
        }

      },err =>{

      }
    )
  }


}

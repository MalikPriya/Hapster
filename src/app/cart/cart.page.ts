import { Component, OnInit } from '@angular/core';
import {AllapiService} from '../commonService/allapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  public list:any={};
  cartdetails : any =[]
  public cartDetails:any={};
  constructor(private _api:AllapiService,private route: ActivatedRoute,
    private router: Router,private _loader : NgxUiLoaderService,private _activate : ActivatedRoute ) { }

  ngOnInit() {
    this.list = JSON.parse(localStorage.getItem('userInfo'));

    this.cartList();
  //  this.customercartlist(this.list.id);

    let customerId = this._activate.snapshot.paramMap.get('customerId') || '';
    //  this.storelist(this.id);
     if(customerId) {
        this._loader.startLoader('loader');
        this._api.Cartlistcustomerwise(customerId).subscribe(
          res => {
            console.log("cart detail", res);
            if(res.error==false){
              this.cartDetails= res.data;
             // console.log(this.storeData);
            //  this.storedetails= this.cartDetails.store;
            //  this.cartDetails=this.cartDetails.products;
              console.log(this.cartDetails);
              //console.log(this.productdetails);
            }else{
              this.cartDetails={};
            }

        },err =>{
  ``
        }

        )
       }
  }

  	private currentNumber = 0;

	private increment() {
  		this.currentNumber++;
	}

	private decrement() {
  		this.currentNumber--;
	}


  cartList(){

    this._api.Cartlist().subscribe(
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
  customercartlist(id:any){
    this._api.Cartlistcustomerwise(id).subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.cartDetails.data;
          console.log(this.cartDetails);
        }else{
          this.cartDetails={};
        }

      },err =>{

      }
    )
  }
  }







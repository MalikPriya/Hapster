import { Component, OnInit } from '@angular/core';
import {AllapiService} from '../commonService/allapi.service';
import { Router, ActivatedRoute } from "@angular/router";
import { NgxUiLoaderService } from "ngx-ui-loader";
@Component({
  selector: 'app-store-service',
  templateUrl: './store-service.page.html',
  styleUrls: ['./store-service.page.scss'],
})
export class StoreServicePage implements OnInit {
  storeData : any =[];
  storedetails : any ='';
  productdetails:any='';
  type: string;
  public list:any=[];
  public categoryId : any = '';
  public id : any = '';
  isAddMode : boolean;
  constructor(private _api:AllapiService,private route: ActivatedRoute,
    private router: Router,private _loader : NgxUiLoaderService,private _activate : ActivatedRoute ) { }

  ngOnInit() :void{
    this.type = 'products';

    let id = this._activate.snapshot.paramMap.get('id') || '';
  //  this.storelist(this.id);
   if(id) {
      this._loader.startLoader('loader');
      this._api.getStoreById(id).subscribe(
        res => {
          console.log("store detail", res);
          if(res.error==false){
            this.storeData= res;
           // console.log(this.storeData);
            this.storedetails= this.storeData.store;
            this.productdetails=this.storeData.products;
            console.log(this.storedetails);
            console.log(this.productdetails);
          }else{
            this.storedetails={};
          }

      },err =>{
``
      }

      )
     }


     if(id) {
      this._loader.startLoader('loader');
      this._api.getReviewBystoreId(id).subscribe(
        res => {
          console.log("review detail", res);
          if(res.error==false){
            this.storeData= res;
           // console.log(this.storeData);
            this.storedetails= this.storeData.store;

            console.log(this.storedetails);
          }else{
            this.storedetails={};
          }

      },err =>{
``
      }

      )
     }
    // this.storeReview(this.id);
  }






  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  storeReview(storeId:any){

    this._api.getReviewBystoreId(storeId).subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.storeData= res.data;
        }else{
          this.storeData={};
        }

      },err =>{

      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import {AllapiService} from '../commonService/allapi.service';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public list:any={};
  public notificationdetails:any={};
  categorydetails : any =[]
  storedetails :any=[]
  garagedetails :any=[]
  public categoryId : any = '';
  isAddMode : boolean;
  constructor(private _api:AllapiService,private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {
    let user = JSON.parse(localStorage.getItem('userInfo'));
    console.log('user',user);
    this.categorylist();
    this.storelist();
    this.garagelist();

    }
    //localStorage.getItem('accessToken');


  offerslideOpts = {
  	slidesPerView: 5,
    spaceBetween: 10,
  }

  storeOption = {
    slidesPerView: 2.6,
    spaceBetween: 10,
  }

  bannerslideOpts = {
  	slidesPerView: 1,
    spaceBetween: 10,
  }


  categorylist(){

    this._api.category().subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.categorydetails= res.data;
        }else{
          this.categorydetails={};
        }

      },err =>{

      }
    )
  }


  storelist(){

    this._api.store().subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.storedetails= res.data;
        }else{
          this.storedetails={};
        }

      },err =>{

      }
    )
  }


  garagelist(){
    this._api.garagesell().subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.garagedetails= res.data;
        }else{
          this.garagedetails={};
        }

      },err =>{

      }
    )
  }

  cancel(id:any){
    this.router.navigate(['store-service/'+id]);
  }
  notification(id:any){
    this.router.navigate(['notification/'+id]);
  }

  notificationList(){

    this._api.customernotification().subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.notificationdetails= res.data[1];

          console.log(this.notificationdetails);
        }else{
          this.notificationdetails={};
        }

      },err =>{

      }
    )
  }

  }




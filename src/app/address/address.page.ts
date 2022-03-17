import { Component, OnInit } from '@angular/core';
import { AllapiService } from '../commonService/allapi.service';
@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  public list:any=[];
  addressDetails : any =[]
  constructor(private _api:AllapiService) {
    this.list=JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit(): void {
    console.log('enter');

    this.addresslist(this.list._id);
  }



  addresslist(id:any){

    this._api.customerAddress(id).subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.addressDetails= res.data;
          console.log(this.addressDetails);
        }else{
          this.addressDetails={};
        }

      },err =>{

      }
    )
  }
}

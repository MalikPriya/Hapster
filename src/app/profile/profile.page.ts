import { Component, OnInit } from '@angular/core';
import { AllapiService } from '../commonService/allapi.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public list:any={};
  profileDetails : any ={}
  productdetails :any=[]
  constructor(private _api:AllapiService) {
    this.list=JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit(): void {
    console.log('enter');
    this.profilelist(this.list._id);
    this.product();
  }

  profilelist(id:any){

    this._api.prfileUser(id).subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.profileDetails= res.data;
        }else{
          this.profileDetails={};
        }

      },err =>{

      }
    )
  }
  product(){
    this._api.productlist().subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.productdetails= res.data;
        }else{
          this.productdetails={};
        }

      },err =>{

      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { AllapiService } from '../commonService/allapi.service';
@Component({
  selector: 'app-storeorder',
  templateUrl: './storeorder.page.html',
  styleUrls: ['./storeorder.page.scss'],
})
export class StoreorderPage implements OnInit {
  public list:any={};
  profileDetails : any ={}
  constructor(private _api:AllapiService) {
    this.list=JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit() {
    this.profilelist(this.list._id);
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
}

import { Component, OnInit } from '@angular/core';
import { AllapiService } from '../commonService/allapi.service';
@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.page.html',
  styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {
  public list:any={};
  chatdetails:[];
  constructor(private _api:AllapiService) {
    this.list=JSON.parse(localStorage.getItem('userInfo'));
   }

  ngOnInit() {
    this. chatList(this.list._id);
  }



  chatList(id:any){

    this._api.Chatlist(id).subscribe(
      res =>{
        console.log(123,res);
        if(res.error==false){
          this.chatdetails= res.data;
        }else{
          this.chatdetails=[];
        }

      },err =>{

      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { AllapiService } from '../commonService/allapi.service';
@Component({
  selector: 'app-store-order',
  templateUrl: './store-order.page.html',
  styleUrls: ['./store-order.page.scss'],
})
export class StoreOrderPage implements OnInit {
  public list:any={};
  profileDetails : any ={}
  type: string;
  constructor(private _api:AllapiService) {
    this.list=JSON.parse(localStorage.getItem('userInfo'));
  }

  ngOnInit() {
    this.type = 'new';
    this.profilelist(this.list._id);
  }

  slideOpts = {
    slidesPerView: 1.3,
    spaceBetween: 10,
    watchSlidesProgress: true,
    initialSlide: 1,
    centeredSlides: true,
    loop: true,
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }
  private currentNumber = 0;

	private increment() {
  		this.currentNumber++;
	}

	private decrement() {
  		this.currentNumber--;
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

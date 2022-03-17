import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AllapiService } from '../commonService/allapi.service';
import { HelperService } from '../commonService/helper.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  phone=''
  constructor( private helper : HelperService, private _api : AllapiService , private navCtrl : NavController) { }

  ngOnInit() {
    this.phone=localStorage.getItem('number');
  }

  onOtpChange(event){
    console.log(event);
    console.log(event.length);
    if (event.length==4) {
      this.loginMobile(event)
    }
    
  }
  loginMobile(event){
    this.helper.presentLoading();
    let mobiledata={
        "mobile":this.phone,
        "otp": event
    }
    this._api.logInviaPh(mobiledata).subscribe(res=>{
      console.log(res);
      if (res) {
        this.helper.dismissLoader();
        localStorage.removeItem('number')
        this.navCtrl.navigateForward(["/home"]);
      }
      else{
        this.helper.dismissLoader();
      }        
    })
  }
  retryOtp(){
    this.helper.presentLoading();
    this._api.getotp(this.phone).subscribe(res=>{
      console.log(res);
      if (res.error==false) {
        this.helper.dismissLoader();
      }
      else{
        this.helper.dismissLoader();
        this.helper.presentToast('Please enter valid mobile number')
      }        
    })
  }

}
    


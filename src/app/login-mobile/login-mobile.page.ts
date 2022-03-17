import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AllapiService } from '../commonService/allapi.service';
import { HelperService } from '../commonService/helper.service';

@Component({
  selector: 'app-login-mobile',
  templateUrl: './login-mobile.page.html',
  styleUrls: ['./login-mobile.page.scss'],
})
export class LoginMobilePage implements OnInit {
  phone=''
  constructor( private helper : HelperService, private _api : AllapiService , private navCtrl : NavController) { }

  ngOnInit() {
  }

  loginViaMobile(){
    if (this.phone='') {
      this.helper.presentToast('Please enter your contact number');
    } else {
      this.helper.presentLoading();
      this._api.getotp(this.phone).subscribe(res=>{
        console.log(res);
        if (res.error==false) {
          this.helper.dismissLoader();
          localStorage.setItem('number',this.phone)
          this.navCtrl.navigateForward(["/otp"]);
        }
        else{
          this.helper.dismissLoader();
          this.helper.presentToast('Please enter valid mobile number')
        }        
      })
    }
  }

}

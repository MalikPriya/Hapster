import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AllapiService } from '../commonService/allapi.service';
import { HelperService } from '../commonService/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email='';
  password='';
  showPsw = false ;
  passwordType='password';

  constructor( private helper : HelperService, private _api : AllapiService, private navCtrl : NavController) { }

  ngOnInit() {
  }

  showPassword(){
    this.showPsw = !this.showPsw
    if (this.showPsw==false) {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }

  loginUser(){
    this.navCtrl.navigateForward(["/home"]);
    if (this.email=='') {
      this.helper.presentToast('Please enter your email');
    }else if (this.password=='') {
      this.helper.presentToast('Please enter password');
    }else{
      this.helper.presentLoading();
      let data={
        "email":this.email,
        "password":this.password
      }
      this._api.logInUser(data).subscribe(
        res => {
          this.helper.dismissLoader();
          console.log('dataaa',res);
          if (res?.error== true && res?.message == 'It seems you are already registered on wevouch, please login to continue'){
            this.helper.showError(res?.message) ;
          } else{
            console.log(res.data[0])
            localStorage.setItem('userInfo',JSON.stringify(res.data[0]));
            // localStorage.setItem('accessToken',res.data[1].accessToken);
            this.navCtrl.navigateForward(["/home"]);
            this.helper.dismissLoader();
          }
        },err=>{
          this.helper.dismissLoader();
          console.log('dataaa',err);
          if (err.error.error==true) {
            this.helper.showError(err.error.message);
          }
        }
      )
    }
  }
}

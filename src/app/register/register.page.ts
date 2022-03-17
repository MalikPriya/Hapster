import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { AllapiService } from '../commonService/allapi.service';
import { HelperService } from '../commonService/helper.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userName='';
  email='';
  mobile='';
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

  signUp(){
    if (this.userName=='') {
      this.helper.presentToast('Please enter your name');
    } else if (this.email=='') {
      this.helper.presentToast('Please enter your email');
    }else if (this.mobile=='') {
      this.helper.presentToast('Please enter phone number');
    }else if (this.password=='') {
      this.helper.presentToast('Please enter password');
    }else{
      let data={
        "name": this.userName,
        "email": this.email,
        "phone": this.mobile,
        "password": this.password
      }
      this._api.registerUser(data).subscribe(
        res => {
          console.log('dataaa',res);
          if (res?.error== true && res?.message == 'It seems you are already registered on wevouch, please login to continue'){
            this.helper.showError(res?.message) ;
          } else{
            // this._api.userType(data).subscribe(
            //   res => {
            this.navCtrl.navigateForward(["/login"]);
            this.helper.dismissLoader();
          }
        }
      )
    }  
  }
}

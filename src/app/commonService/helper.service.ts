import { Injectable } from '@angular/core';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  loading: any;

  constructor( private toastCtrl : ToastController, private loadingController : LoadingController ) { }

  showError(code) {
    console.log('code', code);
    let msg = code;
    if (code === 'auth/user-not-found') {
        msg = 'User not found';
    } else if (code === 'auth/wrong-password') {
        msg = 'Incorrect Password';
    } else if (code === 'auth/invalid-email') {
        msg = 'Invalid email';
    } else if (code === 'auth/network-request-failed') {
        msg = 'No internet connection';
    } else if (code === 'storage/retry-limit-exceeded') {
        msg = 'No internet connection';
    } else if (code === 'wrong password!') {
        msg = 'wrong password!';
    }
    this.presentToast(msg);
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
        message: msg,
        duration: 2000,
        position: 'middle'
    });
    toast.present();
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
        message: 'Loading...',
        duration: 3000
    });
    await this.loading.present();
  }

  async dismissLoader() {
    if (this.loading) {
        await this.loading.dismiss();
    }
  } 

}
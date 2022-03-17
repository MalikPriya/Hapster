import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

var _apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AllapiService {
  private header : HttpHeaders

  constructor( private _http : HttpClient, private _router : Router ) {
    this.header = new HttpHeaders()
    // this.header.append('Access-Control-Allow-Origin' , '*');
    // this.header.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

  }
   // Storing the User Info Locally
   storeUserLocally(data : any){
    console.log('Service data', data);

    let routeIntended = localStorage.getItem('routeIntended');
    localStorage.clear();
    // localStorage.setItem('accessToken', 'accessToken1234567890adminWeVouch');
    localStorage.setItem('userInfo',JSON.stringify(data));

  }

  updateUserLocally(data : any){
    localStorage.removeItem('userInfo');
    localStorage.setItem('userInfo',JSON.stringify(data));
  }



  // Checking the Authentication for User
  isAuthenticated(){
    return !!localStorage.getItem('userInfo');
  }

  /*      *************** Register Sec Start ************** */
  registerUser(formData : any){
    return this._http.post<any>(_apiUrl + 'customer/create',formData);
  }
  //user type
  // userType(){
  //   return this._http.post<any>(_apiUrl + 'customer/set-type/'+
  // }

  /*      *************** Login Sec Start ************** */
  logInUser(formData : any){
    return this._http.post<any>(_apiUrl + 'customer/login',formData);
  }

  /*      *************** Login Via Mobile ************** */
  getotp(ph:any){
    return this._http.post<any>(_apiUrl + 'customer/get-otp',{ "mobile": ph});
  }
  logInviaPh(formData : any){
    return this._http.post<any>(_apiUrl + 'customer/login-with-otp',formData);
  }

  /*     *************** Profile Details ************** */
  prfileUser(userId : any){
    return this._http.get<any>(_apiUrl + 'customer/detail/'+userId);
  }

  /*     *************** Profile Update ************** */
  prfileUpdate(formData: any){
    return this._http.post<any>(_apiUrl + 'user/update',formData);
  }


  category(){
    return this._http.get<any>(_apiUrl + 'category/list');
  }


  store(){
    return this._http.get<any>(_apiUrl + 'store/list/all');
  }
  garagesell(){
    return this._http.get<any>(_apiUrl + 'garage-sale/list');
  }


  productlist(){
    return this._http.get<any>(_apiUrl + 'product/list/all');
  }

  updateProfile(postData : any) {
    return this._http.post<any>(_apiUrl + '/address/create', postData, {headers: this.header});
  }

  customerAddress(customerId : any){
    return this._http.get<any>(_apiUrl + 'address/list/'+customerId);
  }

  Chatlist(customerId :any){
    return this._http.get<any>(_apiUrl + 'chat-initiation/list/all');
  }


  Orderlist()
  {
    return this._http.get<any>(_apiUrl + 'order/list/all');
    }


    Cartlist(){
      return this._http.get<any>(_apiUrl + 'cart/list/');
    }

    Cartlistcustomerwise(customerId:any){
      return this._http.get<any>(_apiUrl + 'cart/list/'+customerId);
    }
    getStoreById(id : any){
      return this._http.get<any>(_apiUrl + 'store/detail/'+id);
    }

    getReviewBystoreId(storeId:any){
      return this._http.get<any>(_apiUrl + 'review/details/' + storeId);
    }


    customernotification(){
      return this._http.get<any>(_apiUrl + 'notification/list');
    }

    // Logging Out the Current User
  // logoutUser():void{
  //  // localStorage.clear();
  //   window.location.href = environment.projectPath;
  //   location.reload();
  // }


}




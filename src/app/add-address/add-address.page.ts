import { Component, OnInit,Input } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { AllapiService } from '../commonService/allapi.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {
  public profileForm : FormGroup;
  public list:any={};
  profileDetails : any ={}
  addressDetails :any ={};
  @Input() viewMode = false;
  customer = {

     pincode: '',
     state: '',
     city  :'',
     street:'',
     customerId: ''

   };
   submitted = false;
   public id : any = '';
   message = '';

  constructor(private _api:AllapiService,private fbuilder : FormBuilder) {
    this.list=JSON.parse(localStorage.getItem('userInfo'));
    console.log(this.list);
    this.profileForm = this.fbuilder.group({
      street : ['',[Validators.required]],
      city : ['',[ Validators.required,]],
      state: ['', [Validators.required ]],
      pincode:['',[Validators.required]],


    })
   }

  ngOnInit() :void {
    console.log('enter');
    this.editAddress();
  }

  editAddress(): void {
    console.log('enter Address');

    //console.log('enter edit'+this.customer.pincode);
    const data = {
      customerId:this.list._id,
      pincode: this.customer.pincode,
      city: this.customer.city,
      state: this.customer.state,
      street: this.customer.street
    };
    console.log(data);

    this._api.updateProfile(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}

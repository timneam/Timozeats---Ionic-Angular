import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { OrderService } from '../services/order.service';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { TrackerService } from '../services/tracker.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.page.html',
  styleUrls: ['./order-info.page.scss'],
})
export class OrderInfoPage implements OnInit {

  updateCustomerOrderForm: FormGroup;
  orderDetails: any = [];
  id:String
  addTrackerForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private OrderService: OrderService,
    private NavController:NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private TrackerService:TrackerService
  ) {
    this.updateCustomerOrderForm  =  this.formBuilder.group({
      'id':'',
      'cartId':'',
      'trackingNumber': '',
      'status':'',
      'customerName': '',
      'customerPhoneNumber': '',
      'customerAddress': ''
  });

  this.addTrackerForm = this.formBuilder.group({
    'trackingNumber':'',
    'status':'',
    'location':''
  })
  }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(id)
    // Retrieve the user information through userService
    this.OrderService.retriveOrderById(id).subscribe(result => {
    this.orderDetails = result;
    console.log(this.orderDetails)
    this.orderDetails.id = id;
    this.updateCustomerOrderForm.patchValue(result);
    console.log(result)
    })
  }

  public onUpdateOrder(){
    console.log(this.updateCustomerOrderForm.value)
    this.OrderService.updateOrderById(this.updateCustomerOrderForm.value).subscribe(res => {
    console.log('Order Updated');
    this.router.navigate(['/orders']);
  });

  this.addTrackerForm.patchValue(this.updateCustomerOrderForm.value);
  this.TrackerService.addNewTracker(this.addTrackerForm.value).subscribe(res => {
    console.log("Tracker Added");
  });
}

}

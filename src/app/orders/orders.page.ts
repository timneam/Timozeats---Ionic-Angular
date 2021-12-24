import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { TrackerService } from '../services/tracker.service';
import { CartService } from '../services/cart.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  ordersList: any = []; // all orders
  userOrders: any = []; // user orders only
  cartItems: any = [];  // products in cart
  tomAdmin = false;
  updateCustomerOrderForm:FormGroup;

  constructor(
    private orderService:OrderService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    public AlertController: AlertController,
  ) { 
    this.orderService.retrieveAllOrders().subscribe((data: any) => this.ordersList = data);
  }

  ngOnInit() {

    var userRole = localStorage.getItem('Role')
    if (userRole == 'admin') {
      this.tomAdmin = true;
    }
    this.orderService.retrieveAllOrders().subscribe(result => {

      this.ordersList = result; //all carts in orderList
      this.userOrders = result; //all the users order

      console.log(this.ordersList);
      console.log(this.userOrders)
      
      if (userRole != "admin") { //if role is not admin,
        this.userOrders = this.ordersList.filter(obj => { 
          return obj.customerId === Number(localStorage.getItem("Id")); //filter by user id
        });
        console.log(this.userOrders);
      }
    });
  }

  public getItems(order) {
    console.log(order)
    let cartList:any = [];
    this.cartItems=[];
    this.cartService.retrieveAllCarts().subscribe(result => { //get all carts
      cartList = result;
      console.log(cartList)
      this.cartItems = cartList.filter(obj => { //filter cart items by matching cart number
          return obj.cartId === Number(order.cartId)  
      });
      console.log(this.cartItems);
    });
  }

}

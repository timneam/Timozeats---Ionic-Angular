import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeServiceService } from '../services/home-service.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OrderService } from '../services/order.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cartList: any = [];
  userCart: any = [];
  id:string
  foodItemForm: FormGroup;
  addOrderForm: FormGroup;

  constructor(
    private cartService:CartService,
    public activatedRoute:ActivatedRoute,
    private HomeService: HomeServiceService,
    private FormBuilder:FormBuilder,
    private OrderService:OrderService,
    private navCtrl: NavController
  ) {
    this.cartService.retrieveAllCarts().subscribe((data: any) => this.cartList = data);

    this.foodItemForm = FormBuilder.group({
      'id':'',
      'cartId':'',
      'customerId':'',
      'foodNumber':'',
      'foodName':'',
      'foodQuantity':'',
      'foodPrice':''
    });

    this.addOrderForm = FormBuilder.group({
      'cartId': localStorage.getItem("cartNum"),
      'customerId': localStorage.getItem("Id"),
      'customerName':'',
      'customerAddress':'',
      'customerPhoneNumber':'',
      'trackingNumber':'',
      'status':'Waiting'
    });

   }

  ngOnInit() {
    // Get current cart count and user's cart number
    var cartCount = localStorage.getItem("cartCount");
    var cartNum = localStorage.getItem("cartNum");
    console.log("Cart Counter: " + cartCount + " Cart Number: " + cartNum )

    // If cart counter doesn't exist and user doesn't have a cart, start new count and give user a cart number
    if ((cartNum == null) && (cartCount == null)) {
      var count = 1;
      localStorage.setItem("cartCount", count.toString());
      localStorage.setItem("cartNum", count.toString());

    } else if (cartNum == null) { // If user doesn't have a cart but counter exists, give user the latest cart number + 1
      
      var newCart = Number(cartCount) + 1
      console.log(newCart)
      localStorage.setItem("cartCount", newCart.toString());
      localStorage.setItem("cartNum", newCart.toString());
    }

    // If user has a cart already then use the user's cart number to get items in the cart

    this.cartService.retrieveAllCarts().subscribe(result => {
      this.cartList = result;
      console.log(this.cartList)

      this.userCart = this.cartList.filter(obj => {
        return obj.cartId === Number(cartNum)
      });

      console.log(this.userCart);
      this.calculateTotal();
    });
  }

  public calculateTotal() {
    var totalPrice = 0;
    for (let cart of this.userCart) {
      var foodPriceInNumber = Number(cart.foodPrice); 
      totalPrice = totalPrice + (foodPriceInNumber * cart.foodQuantity); 
    
      console.log(foodPriceInNumber);
      
      document.getElementById("totalPrice").innerHTML = totalPrice.toString();
    }
  }

  public addQuantity(cart) {
    this.foodItemForm.patchValue(cart);
    // console.log(this.productInfoForm.value)
    // console.log(this.productInfoForm.value.quantity)
    let newQuantity = Number(this.foodItemForm.value.foodQuantity) + 1
    // console.log(newQuantity);
    this.foodItemForm.patchValue({"foodQuantity": newQuantity})
    // console.log(this.productInfoForm.value)
    this.cartService.updateFoodItemInCart(this.foodItemForm.value).subscribe(result => {
      console.log('Quantity increased to ' + newQuantity)
      location.reload();
    });
  }

  public downQuantity(cart) {
    if (cart.foodQuantity > 1) {
    this.foodItemForm.patchValue(cart);
    // console.log(this.productInfoForm.value)
    // console.log(this.productInfoForm.value.quantity)
    let newQuantity = Number(this.foodItemForm.value.foodQuantity) - 1
    // console.log(newQuantity);
    this.foodItemForm.patchValue({"foodQuantity": newQuantity})
    // console.log(this.productInfoForm.value)
    this.cartService.updateFoodItemInCart(this.foodItemForm.value).subscribe(result => {
      console.log('Quantity decreased to ' + newQuantity)
      location.reload();
    });
    } 
  }

  public onDelete(cart){
    this.foodItemForm.patchValue(cart);
    this.cartService.deleteFoodItemFromCart(this.foodItemForm.value).subscribe(res => {
      console.log('Food Item Removed');
      location.reload();
    })
  }

  public addOrder(){
    console.log(this.addOrderForm.value);
    this.OrderService.addNewOrder(this.addOrderForm.value).subscribe(res => {
      alert("Your order has been placed!")
      localStorage.removeItem("cartNum");
      this.navCtrl.navigateForward('/trackers').then( () => {location.reload();});
    })
  }

}

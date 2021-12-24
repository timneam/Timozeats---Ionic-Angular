import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 //declare and initiate the accessPointUrl 
 private headers: HttpHeaders;
 //this URL should be amend to indicate port number and API URI accordingly
 private accessPointUrl: string = 'https://localhost:44342/gateway/carts';

  constructor(private http:HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public retrieveAllCarts() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public retriveCartByUserId(Id, cartId,){
    let payload = {"customerId": Id, 'cartId': cartId}
    return this.http.get(this.accessPointUrl + '/' + payload, 
    {headers: this.headers});
  }

  public addFoodItemToCart(Id, cartId, foodNumber, foodName, qty, price){
    let payload = {"customerId": Id, 'cartId': cartId,"foodNumber":foodNumber, "foodName": foodName, "foodQuantity":qty, "foodPrice": price}
    console.log(payload)
    return this.http.post(this.accessPointUrl, payload,
    {headers: this.headers});
  }

  public deleteFoodItemFromCart(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.id, 
    {headers: this.headers});
  }

  public updateFoodItemInCart(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.id, payload,
    {headers: this.headers});
  }

}
